import React, {useState, useContext} from 'react'

import { Link, useHistory } from 'react-router-dom';

import { Container, ContainerConfirm, ModalContainer } from './styles';

import { IoArrowBackOutline, IoPencil, IoCameraOutline, IoCheckmarkSharp } from "react-icons/io5";

import Desc from '../../assets/desc.png';
import Image from '../../assets/Image.png';
import Location from '../../assets/Location.png';
import Date from '../../assets/Date.png';
import Money from '../../assets/Money.png';

import InputMask from "react-input-mask";

import CurrencyInput from 'react-currency-input-field';

import firebase from '../../services/firebase';

import { AuthContext } from '../../contexts/auth';

import Modal from 'react-modal';

import Arrow from '../../assets/button.png';

export default function CreateEvent() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [logo, setLogo] = useState('');
    const [date, setDate] = useState('')
    const [local, setLocal] = useState('');
    const [money, setMoney] = useState();

    const [formsConfirmations, setFormsConfirmation] = useState(false);
    const [forms, setForms] = useState({});

    const [modalStatus, setModalStatus] = useState(false);

    const { user } = useContext(AuthContext);

    const id = Math.floor(Math.random() * 65536);

    const handleFile = async(ev) => {
        const image = ev.target.files[0];

         await firebase.storage()
          .ref(`images`)
          .child(`${id}`)
          .put(image)
          .then( async() => {
            await firebase.storage()
            .ref(`images`)
            .child(`${id}`)
            .getDownloadURL()
            .then( async(url) => {
              setLogo(url)
            })
          })
    };

    function edit(){
        setFormsConfirmation(false)
    }

    function submitForm(){
        const startvalue = money.substr(2)
        const value = parseFloat(startvalue)

        setForms({
            title,
            description,
            logo,
            date,
            local,
            value,
            creator: user.uid
        })

        setFormsConfirmation(true)
    }

    async function HandleSubmit() {
        const startvalue = money.substr(2)
        const value = parseFloat(startvalue)

        await firebase.firestore().collection('events').doc(`${id}`).set({
            title,
            search_title: title.toLocaleLowerCase(),
            description,
            logo,
            date,
            local,
            value,
            creator: user.uid
        }).then(() => {
            setModalStatus(true);
        })
    }

    let history = useHistory();

    function Comeback(){
        history.push('/home')
    }
    
    function closeModal() {
        setModalStatus(false);
    }

    if(formsConfirmations === false){
        return (
            <Container>
    
                <div className='header'>
                    <Link to="/home">
                        <IoArrowBackOutline color={'#000'} size={22}/>
                    </Link>
    
                    <div className='title'>
                        <h2>Criar um novo evento</h2>
    
                        <button onClick={submitForm}>
                            Seguir
                        </button>
                    </div>
                </div>
    
                <form onSubmit={submitForm}>
    
                    <input
                    placeholder='Adicionar título'
                    value={title}
                    onChange={(text) => setTitle(text.target.value)}
                    />
    
                    <div className='input-form'>
                        <img src={Desc}/>
                        <input 
                        placeholder='Adicionar descrição'
                        value={description}
                        onChange={(text) => setDescription(text.target.value)}
                        />
                    </div>
    
                    {
                        logo === '' ? (
                            <div className='input-form'>
                                <img src={Image}/>
                                <label className="custom-file" onChange={handleFile}>
                                        <input type="file"/>
                                        <h2>Adicionar Capa</h2>    
                                </label>
                            </div>
                        ) : (
                            <div className='input-form'>
                                <img src={Image}/>
                                <label className="file-exists">
                                        <input type="file" onChange={handleFile}/>
                                        <img src={logo}/> 
                                </label>
                            </div>
                        )
                    }
                    
                    <div className='input-form'>
                        <img src={Date}/>
                        <InputMask
                        mask="99/99/9999 - 99:99"
                        placeholder='Data e horário'
                        value={date}
                        onChange={(text) => setDate(text.target.value)}
                        />
                    </div>
    
                    <div className='input-form'>
                        <img src={Location}/>
                        <input 
                        placeholder='Adicionar Local'
                        value={local}
                        onChange={(text) => setLocal(text.target.value)}
                        />
                    </div>
    
                    <div className='input-form'>
                        <img src={Money}/>
                        <CurrencyInput
                        prefix='R$'
                        placeholder='Adicionar Valor'
                        onChange={(text) => setMoney(text.target.value)}
                        />
                    </div>
    
                </form>
    
            </Container>
        )
    }else{
        return(
            <ContainerConfirm>

                <div className='header'>
                    <Link to="/home">
                        <IoArrowBackOutline color={'#000'} size={22}/>
                    </Link>
    
                    <div className='title'>
                        <h2>Criar um novo evento</h2>
    
                        <button className="finish" onClick={HandleSubmit}>
                           Postar
                        </button>
                    </div>
                </div>

                <div className='body'>
                    <img src={forms.logo}/>

                    <div className='edit' onClick={edit}>
                        <IoCameraOutline size={24} color={'#fff'}/>
                        <h3>Selecionar outra capa</h3>
                    </div>

                    <h1>{forms.title}</h1>
                    <h2>{forms.description}</h2>

                </div>

                <div className='info-event'>
                        <img src={Date}/>
                        <h2>{forms.date}</h2>
                        <IoPencil size={32} color={"#5669FF"} onClick={edit}/>
                </div>

                <div className='info-event'>
                        <img src={Location}/>
                        <h2>{forms.local}</h2>
                        <IoPencil size={32} color={"#5669FF"} onClick={edit}/>
                </div>

                <div className='info-event'>
                        <img src={Money}/>
                        <h2>R${forms.value}</h2>
                        <IoPencil size={32} color={"#5669FF"} onClick={edit}/>
                </div>

                <Modal 
                    isOpen={modalStatus} 
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                >
                    <ModalContainer>
                        <h1>Seu evento foi cadastrado com sucesso!</h1>

                        <div className='check'>
                            <IoCheckmarkSharp size={45} color={'#fff'}/>
                        </div>

                        <button onClick={Comeback}>
                            Entrar
                            <img src={Arrow}/>
                        </button>
                    </ModalContainer>
                </Modal>



            </ContainerConfirm>
        )
    }
}
