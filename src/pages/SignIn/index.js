import React, { useState, useContext } from 'react'

import { Link } from 'react-router-dom';

import { Container } from './styles'

import Logo from '../../assets/logo-nome.png'
import Arrow from '../../assets/button.png'

import { AuthContext } from '../../contexts/auth';

import { IoMailOutline, IoLockClosedOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignIn() {
    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [hidePassword, setHidePassword] = useState('password');

    function TypePassword(){
        if(hidePassword == 'password'){
            setHidePassword('text')
        }else{
            setHidePassword('password')
        }
    }

    async function handleSubmit(ev){
        ev.preventDefault();

        await signIn(email, password);

        toast.success('Conectando...', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    
    return (
        <Container>
            <img src={Logo}/>

            <form onSubmit={handleSubmit}>

                <div className='input-form'>
                    <IoMailOutline color={'#807A7A'} size={22} style={{marginLeft: '1rem'}}/>
                    <input 
                    value={email}
                    onChange={(text) => setEmail(text.target.value)}
                    placeholder='abc@email.com'
                    />
                </div>

                <div className='input-form'>
                    <IoLockClosedOutline color={'#807A7A'} size={25} style={{marginLeft: '.8rem'}}/>
                    <input type={hidePassword} 
                    placeholder='Sua senha'
                    value={password}
                    onChange={(text) => setPassword(text.target.value)}
                    />
                    {
                        hidePassword == 'password' ? (
                            <IoEyeOutline onClick={TypePassword} color={'#807A7A'} size={25} style={{marginLeft: '.8rem'}}/>
                        ) : (
                            <IoEyeOffOutline onClick={TypePassword} color={'#807A7A'} size={25} style={{marginLeft: '.8rem'}}/>
                        )
                    }
                </div>

                <Link to="/redefinir">
                    <h3>
                        Esqueci minha senha
                    </h3>
                </Link>

                <button onClick={handleSubmit}>
                    Entrar
                    <img src={Arrow}/>
                </button>

                <Link to="/cadastro">Ainda não tem conta? crie a sua</Link>
            </form>
        </Container>
    )
}
