import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;

        .header{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            margin-left: 1rem;

            svg{
                margin-top: 1.5rem;
            }

            .title{
                display: flex;
                flex-direction: row;

                align-items: center;
                

                h2{
                    font-weight: 500;
                    margin-top: 1rem;
                }

                button{
                    width: 95px;
                    height: 35px;

                    margin-left: 1.5rem;

                    background: #D6D7DB;
                    border-radius: 10%;

                    margin-top: 1rem;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 0;

                    color: #fff;
                }

                .finish{
                    width: 95px;
                    height: 35px;

                    margin-left: 1.5rem;

                    background: #5669FF;
                    border-radius: 10%;

                    margin-top: 1rem;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 0;

                    color: #fff;
                    }
            }
    }


    form{

        display: flex;

        margin-left: 1rem;

        flex-direction: column;

        input{
            border: 0;
            border-left: 2px solid #A4B4CB;

            margin-top: 1.5rem;
            padding-left: 1.5rem;

            height: 36px;

            background-color: transparent;

            font-size: 28px;
            
        }

        .input-form{
            display: flex;
            align-items: center;

            margin-top: 1rem;

            .file-exists{
                width: 200px;
                height: 200px;
                border: 10px solid #d6d7db;
                border-radius: 6px;
                margin-left: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: ease-in-out .4s;
                img{
                    width: 200px;
                    height: 200px;
                    margin-top: -1%;
                }
            }

            .file-exists:hover{
                opacity: 0.5;
            }

            .custom-file{
            width: 250px;
            height: 250px;
            background: #D6D7Db;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 3rem;
            cursor: pointer;
            transition: ease-in-out .4s;
                svg{
                    stroke-width: 1px;
                }
            }
        
            .custom-file:hover{
                opacity: 0.8;
            }

            h2{
                color: #fff;
            }

            input[type="file"]{
                display: none;
            }

            img{
                height: 41px;
                margin-top: 1.5rem;
            }

            input{
                font-size: 20px;

                border: 0;
            }
        }

    }
`;

export const ContainerConfirm = styled.div`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;

        .header{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            margin-left: 1rem;

            svg{
                margin-top: 1.5rem;
            }

            .title{
                display: flex;
                flex-direction: row;

                align-items: center;

                h2{
                    font-weight: 500;
                    margin-top: 1rem;
                }

                button{
                    width: 95px;
                    height: 35px;

                    margin-left: 1.5rem;

                    background: #D6D7DB;
                    border-radius: 10%;

                    margin-top: 1rem;

                    border: 0;

                    color: #fff;
                }

                .finish{
                    width: 95px;
                    height: 35px;

                    margin-left: 1.5rem;

                    background: #5669FF;
                    border-radius: 10%;

                    margin-top: 1rem;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 0;

                    color: #fff;
                    }
            }
    }

    .body{
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 2rem;

        flex-direction: column;

        .edit{
            width: 90%;
            height: 45px;
            background: #5669FF;

            border-radius: 1rem;
            
            display: flex;
            justify-content: center;
            align-items: center;

            margin-top: 1rem;

            h3{
                font-weight: 600;
                font-size: 16px;

                margin-top: .2rem;

                margin-left: .5rem;

                /* Color/ Typography/ Paragraph */

                color: #fff;

            }
        }

        img{
            width: 90%;
            border-radius: 1rem;
        }

        h1{
            font-weight: normal;
            font-size: 35px;
            color: #120D26;

            display: flex;

            width: 90%;

            margin-top: 1rem;
        }

        h2{
            font-weight: normal;
            font-size: 16px;
            line-height: 25px;
            /* or 156% */

            display: flex;
            align-items: center;

            /* Color/ Typography/ Paragraph */

            color: #3C3E56;

            width: 90%;

            margin-top: 1rem;
        }
    }

    .info-event{
            display: flex;
            flex-direction: row;

            width: 90%;

            margin: 1rem;

            img{
                width: 41px;
            }

            h2{
                font-weight: normal;
                font-size: 16px;
                line-height: 25px;
                /* or 156% */

                display: flex;
                align-items: center;

                /* Color/ Typography/ Paragraph */

                color: #3C3E56;

                width: 90%;

                margin-left: 1rem;
            }
    }
`;

export const ModalContainer = styled.div`
        width: 350px;
        height: 300px;
        
        background: #FFFFFF;
        box-shadow: 0px 0px 35px rgba(87, 92, 138, 0.12);
        border-radius: 16px;

        display: flex;
        flex-direction: column;

        align-items: center;

        h1{
            margin-top: 1.5rem;
            font-size: 14px;
        }

        .check{
            width: 90px;
            height: 90px;
            background: #5669FF;

            border-radius: 50%;

            display: flex;
            justify-content: center;
            align-items: center;

            margin-top: 3rem;
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

            margin-top: 4rem;

            img{
                width: 10%;
                margin-top: 0;
                margin-left: 25%;
                margin-right: -32%;
            }
        }
`;