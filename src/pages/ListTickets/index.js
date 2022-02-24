import React, { useState, useEffect, useContext } from 'react';
import { Container } from './styles';

import { Link } from 'react-router-dom';

import { IoArrowBackOutline } from "react-icons/io5";

import firebase from '../../services/firebase';

import { AuthContext } from '../../contexts/auth';

import BoughtTickets from '../../components/boughtTickets';

export default function Mytickets() {
    const [tickets, setTickets] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function ticketdata(){
           await firebase.firestore().collection('purchases')
           .where('id_buyer', '==', user.uid)
           .onSnapshot( snapshot => {
            const list = []

            snapshot.forEach(doc => {
                list.push({
                    ...doc.data()
                })
            })

            setTickets(list)
            
        })

        }
        
        ticketdata()
    }, []);

    console.log(tickets)
    
  return(
      <Container>
            <div className='header'>
                <Link to="/login">
                    <IoArrowBackOutline color={'#000'} size={22}/>
                </Link>
                <h1>Meus Tickets</h1>
            </div>

            <div className='tickets'>
                {tickets.map(ticket => (
                        <BoughtTickets data={ticket} key={ticket.name}/>
                ))}
            </div>
      </Container>
  )
}
