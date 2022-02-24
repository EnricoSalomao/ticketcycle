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
        justify-content: space-between;
        margin: 2rem;

        h1{
            font-weight: 500;
            font-size: 24px;
        }

        h2{
            font-weight: 500;
            font-size: 14px;
            color: #5669FF;
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

        h1{
            font-weight: 500;
            font-size: 22px;
            margin-top: 1rem;
        }

        .button-edit{
            width: 154px;
            height: 50px;
            border: 1.5px solid #5669FF;
            border-radius: 10px;

            display: flex;
            justify-content: center;
            align-items: center;

            margin-top: 1.5rem;

            cursor: pointer;

            h1{
                font-weight: normal;
                font-size: 16px;
                color: #5669FF;
                margin: 0;
                margin-left: 1rem;
            }

            svg{
                margin-top: -6px;
            }
        }

        .about{
            width: 95%;
            margin-top: 1.5rem;
            padding-left: 2rem;

            h1{
               font-weight: 500;
               font-size: 18px;
            }

            h2{
               font-weight: normal;
               font-size: 16px;
            }

            .card-area{
                display: flex;
                flex-wrap: wrap;

                .Musica{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    padding-left: 1rem;
                    padding-right: 1rem;
                    height: 34px;

                    background: #5669FF;

                    margin: .5rem;

                    border-radius: 16px;

                    h1{
                        margin: 0;
                        color: #fff;
                        font-weight: 500;
                        font-size: 13px;
                    }
                }

                .Artes{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    padding-left: 1rem;
                    padding-right: 1rem;
                    height: 34px;

                    background: #EE544A;

                    margin: .5rem;

                    border-radius: 16px;

                    h1{
                        margin: 0;
                        color: #fff;
                        font-weight: 500;
                        font-size: 13px;
                    }
                }

                .Esportes{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    padding-left: 1rem;
                    padding-right: 1rem;
                    height: 34px;

                    background: #FF8D5D;

                    margin: .5rem;

                    border-radius: 16px;

                    h1{
                        margin: 0;
                        color: #fff;
                        font-weight: 500;
                        font-size: 13px;
                    }
                }

                .Gastronomia{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    padding-left: 1rem;
                    padding-right: 1rem;
                    height: 34px;

                    background: #29D697;

                    margin: .5rem;

                    border-radius: 16px;

                    h1{
                        margin: 0;
                        color: #fff;
                        font-weight: 500;
                        font-size: 13px;
                    }
                }

                .Festas{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    padding-left: 1rem;
                    padding-right: 1rem;
                    height: 34px;

                    background: #7D67EE;;

                    margin: .5rem;

                    border-radius: 16px;

                    h1{
                        margin: 0;
                        color: #fff;
                        font-weight: 500;
                        font-size: 13px;
                    }
                }

                .Outros{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    padding-left: 1rem;
                    padding-right: 1rem;
                    height: 34px;

                    background: #000;;

                    margin: .5rem;

                    border-radius: 16px;

                    h1{
                        margin: 0;
                        color: #fff;
                        font-weight: 500;
                        font-size: 13px;
                    }
                }

            }
        }
    }

    .bottom-tab{
        position: fixed;
        bottom: 0;

        height: 88px;

        background: #FFFFFF;
        box-shadow: 0px -3px 8px rgba(157, 178, 214, 0.13);

        width: 100%;

        display: flex;
        align-items: center;

        justify-content: space-between;

            .option-tab{
                display: flex;
                flex-direction: column;

                align-items: center;

                margin: 4rem;

                h2{
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 18px;
                    /* identical to box height */

                    display: flex;
                    align-items: center;
                    text-align: center;

                    /* Color/ Primary/ Blue */

                    color: #5669FF;
                }
            }

            .option-tab-non{
                display: flex;
                flex-direction: column;

                align-items: center;

                margin: 4rem;

                h2{
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 18px;
                    /* identical to box height */

                    display: flex;
                    align-items: center;
                    text-align: center;

                    /* Color/ Primary/ Blue */

                    color: #D5D7DC;
                }
            }

            .add{
                width: 70px;
                height: 70px;

                background: #5669FF;
                box-shadow: 0px 8px 20px rgba(74, 67, 236, 0.25);

                border-radius: 50%;

                display: flex;

                justify-content: center;
                align-items: center;

                margin-top: -5rem;
            }
    }
`;