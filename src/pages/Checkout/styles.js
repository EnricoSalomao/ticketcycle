import styled from "styled-components";

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
        margin-left: 1rem;

        h1{
            font-size: 24px;
            font-weight: 500;
            margin-left: 1rem;
            margin-top: -.5rem;
        }
    }

    .body{
        display: flex;
        flex-direction: column;

        .first-info{
            display: flex;
            flex-direction: column;

            h1{
                font-weight: 500;
                font-size: 18px;

                margin-left: 1.5rem;
                margin-top: 2rem;
            }

            .area-btn{
                width: 100%;
                display: flex;

                justify-content: center;
                align-items: center;

                button{
                    width: 150px;
                    height: 60px;
                    background: #5669FF;
                    border-radius: 15px;

                    border: 0;

                    color: #fff;
                }
            }
        }

        .second-info{
            display: flex;
            flex-direction: column;

            h1{
                font-weight: 500;
                font-size: 18px;

                margin-left: 1.5rem;
                margin-top: 2rem;
            }

            .area-btn{
                width: 100%;
                display: flex;

                justify-content: center;
                align-items: center;

                margin-top: 1rem;

                .qty-area{
                    width: 327px;
                    height: 60px;

                    background: #FCFCFC;
                    border: 1px solid #E5E5E5;
                    box-sizing: border-box;
                    border-radius: 15px;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    .qty{
                        h1{
                            margin: 0;
                        }
                    }

                    .qty-less{
                        display: flex;
                        justify-content: center !important;
                        align-items: center !important;
                        margin: .5rem;
                        width: 52px;
                        height: 50px;

                        background: #F0F0F0;
                        border-radius: 12px;

                        h1{
                            margin: 0
                        }
                    }

                    .qty-more{
                        display: flex;
                        justify-content: center !important;
                        align-items: center !important;
                        margin: .5rem;
                        width: 52px;
                        height: 50px;

                        background: #F0F0F0;
                        border-radius: 12px;

                        h1{
                            margin: 0
                        }
                    }
                }
            }
        }
    }

    .footer{
        display: flex;
        justify-content: center;
        align-items: center;
        
        position: absolute;

        width: 100%;
        
        bottom: 0;

        flex-direction: column;

        h1{
            font-weight: 500;
            font-size: 22px;
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

            margin-top: 1rem;
            margin-bottom: 1rem;

            img{
                width: 10%;
                margin-top: 0;
                margin-left: 15%;
                margin-right: -30%;
            }
        }
    }
`;

export const ModalContainer = styled.div`
        width: 100vh;
        height: 100vh;
        
        background: #FFFFFF;
        box-shadow: 0px 0px 35px rgba(87, 92, 138, 0.12);
        border-radius: 16px;

        display: flex;
        flex-direction: column;

        align-items: center;

        .header{
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-left: -12rem;

            h1{
                font-size: 24px;
                font-weight: 500;
                margin-left: 1rem;
                margin-top: -.5rem;
            }
        }

        .body{
            width: 90%;
        }
`;