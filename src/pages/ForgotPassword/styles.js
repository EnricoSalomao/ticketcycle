import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    

    img{
        width: 25%;
        margin-top: 3rem;
    }

    @media screen and (max-width: 600px){
        img{
            width: 80%;
        }    
        
        form{
            a{
                margin-left: 3.5rem;  
            }
        }
    }

    .header{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        width: 317px;

        svg{
            margin-top: 1.5rem;
        }

        h2{
            font-weight: 500;
            margin-top: 1rem;
        }

        h4{
            font-weight: 300;
            margin-top: 1rem;
        }
    }

    form{

        margin-top: 0rem;

        .input-form{
            background: #FFFFFF;
            border: 1px solid #E4DFDF;
            box-sizing: border-box;
            border-radius: 12px;
            display: flex;
            align-items: center;
            height: 56px;
            width: 317px;

            flex-direction: row;

            margin: 1.5rem 0;

            svg{
                margin-right: 1rem;
            }

            input{
                border: 0px;
                width: 90%;
                font-family: Poppins;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                color: #747688;
            }


        }   

        button{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #5669FF;
            box-shadow: 0px 10px 35px rgba(111, 126, 201, 0.25);
            border-radius: 15px;
            border: 0;
            height: 56px;
            width: 317px;
            font-weight: 500;
            font-size: 16px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #FFFFFF;

            margin-top: 3rem;
            margin-bottom: 1rem;

            img{
                width: 10%;
                margin-top: 0;
                margin-left: 25%;
                margin-right: -32%;
            }
        }

        a{
            margin-left: 3rem;
            color: #120D26;
            font-weight: normal;
        }
    }
`;