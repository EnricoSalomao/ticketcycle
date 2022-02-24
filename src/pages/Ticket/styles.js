import styled from 'styled-components'

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

    .body{
        display: flex;

        width: 100%;

        align-items: center;
        justify-content: center;

        .ticket{
            width: 327px;
            height: 641px;

            background: #FFFFFF;
            border: 1px solid #EEEEEE;
            box-shadow: 0px 16px 30px rgba(83, 89, 144, 0.06);
            border-radius: 18px;

            display: flex;
            align-items: center;

            flex-direction: column;

            img{
                width: 90%;
                margin-top: 1.5rem;
                border-radius: 1rem;
            }

            h1{
                font-weight: normal;
                font-size: 30px;
                width: 90%;
                margin-top: 1.5rem;
            }

            .ticket-info{
                display: flex;

                align-items: flex-start;
                justify-content: flex-start;

                width: 90%;

                flex-direction: column;

                h1{
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 21px;
                    /* identical to box height */

                    letter-spacing: 0.5px;
                    text-transform: uppercase;

                    color: #898989;
                }

                h2{
                    font-weight: 500;
                    font-size: 18px;
                }
            }

            .ticket_id{
                display: flex;

                align-items: flex-start;
                justify-content: flex-start;

                width: 90%;

                flex-direction: column;

                border-top: 2px dashed #DDDDDD;

                margin-top: 1.5rem;

                h1{
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 21px;
                    /* identical to box height */

                    letter-spacing: 0.5px;
                    text-transform: uppercase;

                    color: #898989;
                }

                .id_area{
                    display: flex;

                    justify-content: center;
                    align-items: center;

                    h2{
                        font-weight: 500;
                        font-size: 18px;
                    }
                }
            }
        }
    }
`;