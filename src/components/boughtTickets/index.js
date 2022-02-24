import React, { useState, useEffect } from 'react'
import { Container } from './styles'

import firebase from '../../services/firebase'
import { useHistory } from 'react-router-dom'

export default function BoughtTickets({ data }) {
    const [event, setEvent] = useState([])
    
    useEffect(() => {
        async function getEvent(){
           const event_data =  await firebase.firestore().collection('events').doc(data.id_event).get()

           setEvent(event_data.data())
           console.log(event_data.data())
        }

        console.log(event)

        getEvent()
    }, [])

    let history = useHistory()

    function goToUrl(){
      history.push(`purchased/${data.id_ticket}`)
    }
    
  return (
    <Container onClick={goToUrl}>
        <img src={event.logo}/>

        <div className='info_product'>
            <h1 className='date'>{event.date}</h1>
            <h1 className='title'>{event.title}</h1>
            <h1 className='local'>{event.local}</h1>
        </div>
    </Container>
  )
}
