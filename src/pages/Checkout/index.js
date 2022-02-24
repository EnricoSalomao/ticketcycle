import React, { useState, useEffect } from 'react';
import { Container, ModalContainer } from './styles';

import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';

import firebase from '../../services/firebase';

import Arrow from '../../assets/button.png';

import Payment from '../../components/Payment';

import Modal from 'react-modal';

export default function Checkout() {
    let { id } = useParams();

    const [event, setEvent] = useState('');

    const [valueQty, setValueQty] = useState(1);

    const [modalStatus, setModalStatus] = useState(false);

    useEffect(() => {
        async function loadEdit() {
            const Personal = await firebase.firestore().collection('events').doc(`${id}`).get()

            if(Personal.exists){
                let data = Personal.data();

                setEvent(data);
            }
        }

        loadEdit()
    }, [])

    let finalValue = valueQty * event.value

    function AddQty(){
        setValueQty(valueQty + 1)
    }

    function RemoveQty(){
        if(valueQty == 1){
            setValueQty(valueQty)
        }else{
            setValueQty(valueQty - 1)
        }
    }

    function closeModal() {
        setModalStatus(false);
    }

    function openModal(){
        setModalStatus(true);
    }

    return (  
        <Container>
            <div className='header'>
                <Link to="/login">
                    <IoArrowBackOutline color={'#000'} size={22}/>
                </Link>
                <h1>Ticket</h1>
            </div>

            <div className='body'>

                <div className='first-info'>
                    <h1>Tipo</h1>
                    <div className='area-btn'>
                        <button>
                            Comum
                        </button>
                    </div>
                </div>

                <div className='second-info'>
                    <h1>Quantidade</h1>
                    <div className='area-btn'>
                        <div className='qty-area'>

                            <div className='qty-less' onClick={RemoveQty}>
                                <h1>
                                    -
                                </h1>
                            </div>

                            <div className='qty'>
                                <h1>
                                    {valueQty}
                                </h1>
                            </div>

                            <div className='qty-more' onClick={AddQty}>
                                <h1>
                                    +
                                </h1>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='footer'>
                <h1>Total: R${finalValue}</h1>
                <button onClick={openModal}>
                    Continuar
                    <img src={Arrow}/>
                </button>
            </div>

                <Modal 
                    isOpen={modalStatus} 
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                >
                    <ModalContainer>
                        <div className='header'>
                            <Link to="/login">
                                <IoArrowBackOutline color={'#000'} size={22}/>
                            </Link>
                            <h1>Pagamento</h1>
                        </div>
                        <Payment amount={finalValue} quantity={valueQty} id={id} seller={event.creator} event={event}/>
                    </ModalContainer>
                </Modal>
        </Container>
    )
}
