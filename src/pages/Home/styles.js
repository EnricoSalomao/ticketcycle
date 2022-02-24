import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;


    .header{
        position: fixed;
        width: 100%;
        height: 145px;
        left: 0px;
        top: 0px;

        background: #4A43EC;
        border-radius: 0px 0px 33px 33px;
        
        display: flex;
        align-items: center;

        flex-direction: column;

        .initial{
            display: flex;
            justify-content: space-between;
            width: 90%;

            margin-top: 1.5rem;

            h1{
                color: #fff;
                font-weight: 500;
                font-size: 22px;

            }

            img{
                width: 40px;
                height: 40px;
            }
        }

        .search{
            display: flex;
            align-items: center;
            width: 90%;

            margin-top: 1rem;

            svg{
                margin-right: 1rem
            }

            input{
                border: 0;
                border-left: 2px solid #7974E7;
                background-color: transparent;
                font-size: 24px;

                padding-left: 1rem;

                color: #fff;
            }
        }
    }

    .body{
        display: flex;
        flex-direction: column;
        margin-top: 145px;

        .card-list{
            display: flex;
            flex-direction: row;

            overflow: auto;

           padding-left: 0rem;

           ::-webkit-scrollbar {
                display: none;
        }

            .card{
                width: 240px;

                background: #FFFFFF;
                box-shadow: 0px 8px 30px rgba(80, 85, 136, 0.06);
                border-radius: 18px;

                margin-left: 1rem;

                padding: .5rem;

                cursor: pointer; 

                img{
                   width: 90%;
                   border-radius: 18px;
                   margin: 1rem;

                   margin-bottom: -.5rem;
                }

                .local{
                    display: flex;
                    align-items: center;
                    margin-left: .5rem;

                    width: 90%;

                    overflow: hidden;

                    .svg{
                        margin: 0;
                    }

                    h1{
                        width: 70%;
                        margin: 0;
                        font-size: 16px;
                        color: #2B2849;
                        white-space: nowrap;
                        text-overflow: ellipsis !important;
                        margin-left: .5rem;
                    }
                }
            }
        }

        h1{
            font-family: Poppins;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 34px;
            /* identical to box height, or 189% */

            display: flex;
            align-items: center;

            /* Color/ Typography/ Title */

            color: #120D26;
            margin-top: 1rem;

            margin-left: 1rem;
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