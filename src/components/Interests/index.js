import React, { useContext, useState } from 'react';
import { Container } from './styles';

import Music from '../../assets/musica.png';
import Arts from '../../assets/artes.png';
import Sports from '../../assets/esportes.png';
import Food from '../../assets/comida.png';
import Party from '../../assets/festas.png';

import Arrow from '../../assets/button.png';

import firebase from '../../services/firebase';

import { AuthContext } from '../../contexts/auth';

export default function Interests() {
    const { user, setUser, storageUser } = useContext(AuthContext)

    const [value, setValue] = useState('#C6C6C6')
    const [value1, setValue1] = useState('#C6C6C6')
    const [value2, setValue2] = useState('#C6C6C6')
    const [value3, setValue3] = useState('#C6C6C6')
    const [value4, setValue4] = useState('#C6C6C6')
    const [value5, setValue5] = useState('#C6C6C6')

    const [selectedValue, setSelectedValue] = useState(false)
    const [selectedValue1, setSelectedValue1] = useState(false)
    const [selectedValue2, setSelectedValue2] = useState(false)
    const [selectedValue3, setSelectedValue3] = useState(false)
    const [selectedValue4, setSelectedValue4] = useState(false)
    const [selectedValue5, setSelectedValue5] = useState(false)

    const [interests, setInterests] = useState([]);


    function reload(){
        window.location.reload()
    }

    function SelectInt(val, sel){
        if(sel == false){
            if(val == 0){
                setValue('#5669FF')
                setSelectedValue(true)
                interests.push('Musica')
                console.log(interests)
            }else if(val == 1){
                setValue1('#5669FF')
                setSelectedValue1(true)
                interests.push('Artes')
                console.log(interests)
            }else if(val == 2){
                setValue2('#5669FF')
                setSelectedValue2(true)
                interests.push('Esportes')
                console.log(interests)
            }else if(val == 3){
                setValue3('#5669FF')
                setSelectedValue3(true)
                interests.push('Gastronomia')
                console.log(interests)
            }else if(val == 4){
                setValue4('#5669FF')
                setSelectedValue4(true)
                interests.push('Festas')
                console.log(interests)
            }else if(val == 5){
                setValue5('#5669FF')
                setSelectedValue5(true)
                interests.push('Outros')
                console.log(interests)
            }
        }else if(sel == true){
            if(val == 0){
                setValue('#C6C6C6')
                setSelectedValue(false)
            }else if(val == 1){
                setValue1('#C6C6C6')
                setSelectedValue1(false)
            }else if(val == 2){
                setValue2('#C6C6C6')
                setSelectedValue2(false)
            }else if(val == 3){
                setValue3('#C6C6C6')
                setSelectedValue3(false)
            }else if(val == 4){
                setValue4('#C6C6C6')
                setSelectedValue4(false)
            }else if(val == 5){
                setValue5('#C6C6C6')
                setSelectedValue5(false)
            }
        }
    }

    async function saveInt(){
        await firebase.firestore().collection('users').doc(user.uid).set({
            ...user,
            interest: true,
            type_interests: interests,
        }).then(() => {
            setUser({
                ...user,
                interest: true,
                type_interests: interests,
            })
            storageUser({
                ...user,
                interest: true,
                type_interests: interests,
            })
        })
    }

    return (
        <Container>
            <h1>Selecione seus interesses</h1>

            <div className='options-area'>

                <div className='option' onClick={() => SelectInt(0, selectedValue)}>  
                    <div className='image-area' style={{ borderColor: value }}>
                        <img src={Music}/>
                    </div>
                    <h2>Música</h2>
                </div>

                <div className='option' onClick={() => SelectInt(1, selectedValue1)}>  
                    <div className='image-area' style={{ borderColor: value1 }}>
                        <img src={Arts}/>
                    </div>
                    <h2>Artes</h2>
                </div>

                <div className='option' onClick={() => SelectInt(2, selectedValue2)}>  
                    <div className='image-area' style={{ borderColor: value2 }}>
                        <img src={Sports}/>
                    </div>
                    <h2>Esportes</h2>
                </div>

                <div className='option' onClick={() => SelectInt(3, selectedValue3)}>  
                    <div className='image-area' style={{ borderColor: value3 }}>
                        <img src={Food}/>
                    </div>
                    <h2>Gastronomia</h2>
                </div>

                <div className='option' onClick={() => SelectInt(4, selectedValue4)}>  
                    <div className='image-area' style={{ borderColor: value4 }}>
                        <img src={Party}/>
                    </div>
                    <h2>Festas</h2>
                </div>

                <div className='option' onClick={() => SelectInt(5, selectedValue5)}>  
                    <div className='image-area' style={{ borderColor: value5 }}>
                        <img src={Arts}/>
                    </div>
                    <h2>Outros</h2>
                </div>
                

            </div>

            <button  onClick={saveInt}>
                Seguir
                <img src={Arrow}/>
            </button>

        </Container>
    )
}
