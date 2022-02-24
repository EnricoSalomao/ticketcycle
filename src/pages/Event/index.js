import React, { useState, useEffect } from 'react'

import { useHistory, useParams } from 'react-router-dom';

import firebase from '../../services/firebase'
import { Container } from './styles';

import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

import User from '../../assets/user.png';
import Location from '../../assets/Location.png';
import Date from '../../assets/Date.png';
import Money from '../../assets/Money.png';

import Arrow from '../../assets/button.png';

export default function Event() {
    let { id } = useParams();

    const [event, setEvent] = useState('');

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

    let history = useHistory();

    function GoToPay(){
        history.push(`/checkout/${id}`)
    }

    return (
        <Container>
            <div className='header'>
                <Link to="/login">
                    <IoArrowBackOutline color={'#000'} size={22}/>
                </Link>
                <h1>Detalhes do evento</h1>
            </div>

            <img src={event.logo}/>

            <div className='body'>

                <h1>{event.title}</h1>

                <div className='info-event'>
                        <img src={Date}/>
                        <h2>{event.date}</h2>
                </div>

                <div className='info-event'>
                        <img src={Location}/>
                        <h2>{event.local}</h2>
                </div>

                <div className='info-event'>
                        <img src={Money}/>
                        <h2>R${event.value}</h2>
                </div>

                <div className='info-event'>
                        <img src={User}/>
                        <h2>Organizer: {event.creator_name}</h2>
                </div>


                <div className='about'>
                    <h1>Sobre o evento</h1>  
                    <h2>{event.description}</h2>
                </div>
                

            </div>

            <div className='area-btn'>
                <button onClick={GoToPay}>
                    Ingressos á R${event.value}
                    <img src={Arrow}/>
                </button>
            </div>
        </Container>
    )
}
