import React, { useState, useContext, useEffect } from 'react';
import { Container } from './styles';

import { useParams, Link } from 'react-router-dom';

import { IoArrowBackOutline } from "react-icons/io5";

import firebase from '../../services/firebase';

export default function Ticket() {
    let { id } = useParams();

    const [purchase, setPurchase] = useState([]);
    const [event, setEvent] = useState([]);

    useEffect(() => {
        async function PurchaseData(){
           const Purchased = await firebase.firestore().collection('purchases').doc(`${id}`).get()

           let data = {
            ...Purchased.data()
          }

          setPurchase(data);
        }

        PurchaseData();
    }, [])

    useEffect(() => {
        async function EventData(){
           const SearchEvent = await firebase.firestore().collection('events').doc(`${purchase.id_event}`).get()

           let data = {
            ...SearchEvent.data()
          }

          setEvent(data);
        }

        EventData();
    }, [purchase])

    console.log(event)

    return (
        <Container>
            <div className='header'>
                <Link to="/login">
                    <IoArrowBackOutline color={'#000'} size={22}/>
                </Link>
                    <h1>Ticket</h1>
            </div>

            <div className='body'>
                <div className='ticket'>
                    <img src={event.logo}/>

                    <h1>{event.title}</h1>

                    <div className='ticket-info'>
                        <h1>Nome</h1>
                        <h2>{purchase.buyer}</h2>
                    </div>

                    <div className='ticket-info'>
                        <h1>Data e horário</h1>
                        <h2>{event.date}</h2>
                    </div>

                    <div className='ticket-info'>
                        <h1>local</h1>
                        <h2>{event.local}</h2>
                    </div>

                    <div className='ticket_id'>
                        <h1>id</h1>
                        <div className='id_area'>
                            <h2>{purchase.id_ticket}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
