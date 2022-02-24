import React, {useState, useContext} from 'react';
import { Container } from './styles';

import { FaCompass, FaPlus, FaUserAlt, FaRegEdit } from "react-icons/fa";

import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';

import Person from '../../assets/person.png'

export default function Profile() {
    const { user } = useContext(AuthContext);

    let history = useHistory();

    function Edit(){
        history.push('/edit-profile')
    }

    function Tickets(){
        history.push('/mytickets')
    }   

    return (
        <Container>

            <div className='header'>
                <h1>Perfil</h1>
                <h2 onClick={Tickets}>Meus Tickets</h2>
            </div>

            <div className='body'>
                {
                    user.logo == undefined ? (
                        <img src={Person}/>
                    ) : (
                        <img src={user.logo}/>
                    )
                }
                <h1>{user.name}</h1>

                <div className='button-edit' onClick={Edit}>
                    <FaRegEdit size={22} color={'#5669FF'}/>
                    <h1>Editar perfil</h1>
                </div>

                {   
                    user.description == undefined 
                    ? (
                        <>
                        </>
                    ) : (
                        <div className='about'>
                            <h1>Sobre mim</h1>
                            <h2>{user.description}</h2>
                        </div>
                    )
                }

                        <div className='about'>
                            <h1>Interesses</h1>
                            <div className='card-area'>
                                {
                                    user.type_interests.map(int => (
                                        <div className={int} key={int}>
                                            <h1>{int}</h1>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
            </div>

            <div className='bottom-tab'>

                <Link to="/home">
                    <div className='option-tab-non'>
                        <FaCompass size={23} color={'#D5D7DC'}/>
                        <h2>Explore</h2>
                    </div>
                </Link>


                <Link to='/create-event'>
                    <div className='add'>
                        <FaPlus size={30} color={'#fff'}/>
                    </div>
                </Link>

                    <div className='option-tab'>
                        <FaUserAlt size={23} color={'#5669FF'}/>
                        <h2>Profile</h2>
                    </div>
                

            </div>

        </Container>
    )
}
