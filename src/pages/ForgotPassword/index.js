import React, { useState, useContext } from 'react'

import { Link } from 'react-router-dom';

import { Container } from './styles'

import Arrow from '../../assets/button.png'

import { AuthContext } from '../../contexts/auth';

import { IoMailOutline, IoLockClosedOutline, IoEyeOutline, IoEyeOffOutline, IoArrowBackOutline, IoPersonOutline } from "react-icons/io5";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
    const { Reset, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');

    async function handleSubmit(ev){
        ev.preventDefault();

        Reset(email)
    }

    return (
        <Container>

            <div className='header'>
            <Link to="/login">
                <IoArrowBackOutline color={'#000'} size={22}/>
            </Link>

                <h2>Esqueceu a senha</h2>
                <h4>Coloque seu endereço de e-mail para uma nova senha.</h4>
            </div>

            <form onSubmit={handleSubmit}>

                <div className='input-form'>
                    <IoMailOutline color={'#807A7A'} size={22} style={{marginLeft: '1rem'}}/>
                    <input 
                    value={email}
                    onChange={(text) => setEmail(text.target.value)}
                    placeholder='abc@email.com'/>
                </div>

                <button onClick={handleSubmit}>
                    Enviar
                    <img src={Arrow}/>
                </button>
            </form>
        </Container>
    )
}
