import React, {useContext, useEffect, useState} from 'react'

import { Container } from './styles'

import Ring from '../../assets/ring.png'

import { AuthContext } from '../../contexts/auth';
import Interests from '../../components/Interests';

import { IoSearch, IoPinSharp, IoCalendarClearSharp } from "react-icons/io5";

import { FaCompass, FaPlus, FaUserAlt } from "react-icons/fa";
import { Link, useHistory } from 'react-router-dom';

import firebase from '../../services/firebase';

export default function Home() {
    const { user } = useContext(AuthContext);

    const [events, setEvents] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        async function dataStore() {
            await firebase.firestore().collection(`events`)
            .onSnapshot( snapshot => {
                const list = []

                snapshot.forEach(doc => {
                    list.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })

                setEvents(list)
                setLoading(false)
            })
        }

        dataStore()
    }, [])

    console.log(events)

    let history = useHistory();

    function GoToEvent(id){
        history.push(`/event/${id}`)
    }

    if(user.interest == false){
        return(
            <Interests/>
        )
    }else{
        return(
            <Container>
                
                <div className='header'>
                    
                    <div className='initial'>
                        <h1>TicketCycle</h1>
                        <img src={Ring}/>
                    </div>

                    <div className='search'>
                        <IoSearch size={28} color={'#fff'}/>
                        <input 
                        placeholder='Search'
                        />
                    </div>

                </div>


                <div className='body'>
                    <h1>
                    Próximos eventos
                    </h1>

                    <div className='card-list'>
                        {events.map(event => (
                            <div className='card' key={event.id} onClick={() => GoToEvent(event.id)}>
                                <img src={event.logo}/>
                                <h1>{event.title}</h1>
                                
                                <div className='local'>
                                    <IoPinSharp size={20} color={'#5669FF'}/>
                                    <h1>{event.local}</h1>
                                </div>

                                <div className='local'>
                                    <IoCalendarClearSharp size={20} color={'#5669FF'}/>
                                    <h1>{event.date}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

               

                <div className='bottom-tab'>

                        <div className='option-tab'>
                            <FaCompass size={23} color={'#5669FF'}/>
                            <h2>Explore</h2>
                        </div>


                        <Link to='/create-event'>
                            <div className='add'>
                                <FaPlus size={30} color={'#fff'}/>
                            </div>
                        </Link>

                        <Link to="/profile">
                            <div className='option-tab-non'>
                                <FaUserAlt size={23} color={'#D5D7DC'}/>
                                <h2>Profile</h2>
                            </div>
                        </Link>

                </div>

            </Container>
        )
    }
}
