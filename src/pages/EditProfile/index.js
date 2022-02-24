import React, { useState, useContext } from 'react'
import { Container } from './styles';

import { Link, useHistory } from 'react-router-dom';

import { IoArrowBackOutline } from "react-icons/io5";

import firebase from '../../services/firebase';

import { AuthContext } from '../../contexts/auth';

import Person from '../../assets/person.png';
import Arrow from '../../assets/button.png';

export default function EditProfile() {
    const { user, setUser, storageUser } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const [showMessage, setShowMessage] = useState(false)

    const [logo, setLogo] = useState(user.logo);
    const [name, setName] = useState(user.name);
    const [birthDate, setBirthDate] = useState(user.birthDate);
    const [local, setLocal] = useState(user.local);
    const [about, setAbout] = useState(user.about);

    const handleFile = async(ev) => {
        const image = ev.target.files[0];

        setLoading(false);

         await firebase.storage()
          .ref(`images`)
          .child(`photo-${user.uid}`)
          .put(image)
          .then( async() => {
            await firebase.storage()
            .ref(`images`)
            .child(`photo-${user.uid}`)
            .getDownloadURL()
            .then( async(url) => {
              setLogo(url)
              setLoading(false);
            })
        })
    };

    let history = useHistory();

    async function handleSubmit(){
        await firebase.firestore().collection('users').doc(user.uid).update({
            logo,
            name,
            birthDate,
            local,
            about,
        })

        let data = {
            logo,
            name,
            birthDate,
            local,
            about,
        }

        setUser(data)
        storageUser(data)
        setShowMessage(true)

    }

    return (
        <Container>

            <div className='header'>
                <Link to="/profile">
                    <IoArrowBackOutline color={'#000'} size={22}/>
                </Link>
                    <h1>Editar perfil</h1>
            </div>

            {
                showMessage == true ? (
                    <div className='message'>
                        <h1>Seus dados foram salvos com sucesso :)</h1>
                    </div>
                ) : (
                    <>
                    </>
                )
            }

            <div className='body'>

            {
                logo == undefined ? (
                    <div className='perfil-photo'>
                        <img src={Person}/>
                        <label className="file-exists">
                            <input type="file" onChange={handleFile}/>
                            <h1>Editar foto</h1>
                        </label>
                    </div>
                ) : (
                    <div className='perfil-photo'>
                        <img src={logo}/>
                        <label className="file-exists">
                            <input type="file" onChange={handleFile}/>
                            <h1>Editar foto</h1>
                        </label>
                    </div>
                )
            }

                <form onSubmit={handleSubmit}>
                    <div className='input-form'>
                        <h1>Nome Completo</h1>
                        <input
                        value={name}
                        onChange={(text) => setName(text.target.value)}
                        />
                    </div>

                    <div className='input-form'>
                        <h1>Data de nascimento</h1>
                        <input 
                        value={birthDate}
                        onChange={(text) => setBirthDate(text.target.value)}
                        />
                    </div>

                    <div className='input-form'>
                        <h1>Localização</h1>
                        <input 
                        value={local}
                        onChange={(text) => setLocal(text.target.value)}
                        />
                    </div>

                    <div className='input-form'>
                        <h1>Sobre mim</h1>
                        <input 
                        value={about}
                        onChange={(text) => setAbout(text.target.value)}
                        />
                    </div>

                    <button onClick={handleSubmit}>
                        Salvar
                        <img src={Arrow}/>
                    </button>
                </form>

            </div>

        </Container>
    )
}
