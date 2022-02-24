import React, { useState, useContext } from 'react'

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Arrow from '../../assets/button.png';

import { AuthContext } from '../../contexts/auth';

import { IoMailOutline, IoLockClosedOutline, IoEyeOutline, IoEyeOffOutline, IoArrowBackOutline, IoPersonOutline } from "react-icons/io5";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
    const { signUp, loadingAuth } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const [hidePassword, setHidePassword] = useState('password');

    function TypePassword(){
        if(hidePassword == 'password'){
            setHidePassword('text')
        }else{
            setHidePassword('password')
        }
    }

    async function handleSubmit(ev){
        if(password === repassword){
            ev.preventDefault();

            await signUp(email, password, name);
    
            toast.success('Conectando...', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            ev.preventDefault();

            toast.error('As senhas não coincidem', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    
    return (
        <Container>

            <div className='header'>
            <Link to="/login">
                <IoArrowBackOutline color={'#000'} size={22}/>
            </Link>

                <h2>Cadastro</h2>
            </div>

            <form onSubmit={handleSubmit}>

                <div className='input-form'>
                    <IoPersonOutline color={'#807A7A'} size={22} style={{marginLeft: '1rem'}}/>
                    <input 
                    value={name}
                    onChange={(text) => setName(text.target.value)}
                    placeholder='Nome completo'/>
                </div>

                <div className='input-form'>
                    <IoMailOutline color={'#807A7A'} size={22} style={{marginLeft: '1rem'}}/>
                    <input 
                    value={email}
                    onChange={(text) => setEmail(text.target.value)}
                    placeholder='abc@email.com'/>
                </div>

                <div className='input-form'>
                    <IoLockClosedOutline color={'#807A7A'} size={25} style={{marginLeft: '.8rem'}}/>
                    <input 
                    type={hidePassword} 
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

                <div className='input-form'>
                    <IoLockClosedOutline color={'#807A7A'} size={25} style={{marginLeft: '.8rem'}}/>
                    <input type={hidePassword} 
                    placeholder='Confirmar Senha'
                    value={repassword}
                    onChange={(text) => setRepassword(text.target.value)}
                    />
                    {
                        hidePassword == 'password' ? (
                            <IoEyeOutline onClick={TypePassword} color={'#807A7A'} size={25} style={{marginLeft: '.8rem'}}/>
                        ) : (
                            <IoEyeOffOutline onClick={TypePassword} color={'#807A7A'} size={25} style={{marginLeft: '.8rem'}}/>
                        )
                    }
                </div>

                <button onClick={handleSubmit}>
                    Entrar
                    <img src={Arrow}/>
                </button>

                <Link to="/login">Já tem conta? Entre aqui</Link>
            </form>
        </Container>
    )
}
