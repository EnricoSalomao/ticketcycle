import React, { createContext, useEffect, useState } from 'react';

import firebase from '../services/firebase'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);
  const [ loadingAuth, setLoadingAuth ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const loadStorage = () => {
      const storageUser = localStorage.getItem('SistemaUser');

      if(storageUser) {
        setUser(JSON.parse(storageUser));
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  const storageUser = async(data) => {
    localStorage.setItem('SistemaUser', JSON.stringify(data));
  }

  const Reset = async(email) => {
    await firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      toast.sucess('Verifique sua caixa de e-mail.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  })
  }

  const signIn = async(email, password) => {
    setLoadingAuth(true);
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then( async(value) => {
      let uid = value.user.uid;

      const userProfile = await firebase.firestore().collection('users')
      .doc(uid).get()

      let data = {
        uid: uid,
        ...userProfile.data()
      }

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
    })
    .catch((error) => {
      if(error.code === 'auth/wrong-password');
        toast.error('E-mail e/ou senha estão incorretos! :(', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setLoadingAuth(false)
    });

  }

  async function signUp(email, password, name,){
    setLoadingAuth(true)
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(async (value)=>{
        let uid = value.user.uid;
        await firebase.firestore().collection('users').doc(uid).set({
          uid,
          email,
          name,
          interest: false
        })

        .then(()=>{

          let data = {
            uid,
            email,
            name,
            interest: false
          };

            setUser(data);
            storageUser(data);
            setLoadingAuth(false)
        })
        .catch((error) => {
            alert(error.code);
            if (error.code === 'auth/email-already-exists'){
                toast.error('E-mail já cadastrado :(', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                
                setLoadingAuth(false)
            }
            if (error.code === 'auth/internal-error'){
                toast.error('Um erro ocorreu no servidor, digite email e senha novamente, se o erro persistir, entre em contato conosco.', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                
                setLoadingAuth(false)
            }
            if (error.code === 'auth/invalid-argument'){
                toast.error('Um argumento inválido foi fornecido', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                
                setLoadingAuth(false)
            }
            if (error.code === 'auth/session-cookie-expired'){
                toast.error('O cookie da sessão expirou. Digite novamente o email.', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                
                setLoadingAuth(false)
            }
        });
    })
}

  const signOut = async() => {
    await firebase.auth().signOut();
    localStorage.removeItem('SistemaUser');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{
      signed: Boolean(user),
      user,
      setUser,
      storageUser,
      loading,
      loadingAuth,
      signOut,
      signIn,
      signUp,
      Reset
    }}>
      { children }
    </AuthContext.Provider>
  );
}