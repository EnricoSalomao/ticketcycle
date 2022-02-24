import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    .header{
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-left: 1rem;

            h1{
                font-size: 24px;
                font-weight: 500;
                margin-left: 1rem;
                margin-top: -.5rem;
            }
    }

    .message{
        display: flex;
        justify-content: center;
        align-items: center;

        h1{
            font-weight: 500;
            font-size: 12px;
            color: #5669FF;
            margin-bottom: 1rem;
        }
    }

    .body{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img{
            width: 96px;
            height: 96px;
            border-radius: 50%;
        }

        form{
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;

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

            margin-top: 2rem;
            margin-bottom: 1rem;

            img{
                height: 30px;
                width: 30px;
                margin: 0;
                margin-top: 0;
                margin-left: 25%;
                margin-right: -32%;
            }
        }

        .input-form{
            width: 80%;
            max-width: 400px;

            margin:0;

            margin-left: -1rem;

            h1{
                font-weight: normal;
                font-size: 14px;
                color: #747688;
                margin-bottom: .5rem;
                margin-top: .7rem;
            }

            input{
                width: 100%;
                height: 50px;
                border-radius: 12px;
                border: 1px solid #E4DFDF;
                font-weight: normal;
                font-size: 16px;
                padding-left: 1rem;
            }
        }
        }

        .perfil-photo{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            h1{
                font-weight: 500;
                font-size: 14px;
                color: #5669FF;
                margin: 1rem 0rem;
            }

            .file-exists{
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: ease-in-out .4s;

                input[type="file"]{
                    display: none;
                }
            }
        }
    }
`;