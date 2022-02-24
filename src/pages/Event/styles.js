import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    img{
        width: 100%;
        max-height: 300px;
    }

    .header{
        display: flex;
        flex-direction: row;
        align-items: center;

        top: 1rem;
        left: 1rem;

        position: absolute;

        h1{
            font-size: 24px;
            font-weight: 500;
            margin-left: 1rem;
            padding-top: -.5rem;
        }
    }

        .area-btn{
            display: flex;
            justify-content: center;

            position: fixed;

            width: 100%;

            bottom: 1rem;

            button{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #5669FF;
            box-shadow: 0px 10px 35px rgba(111, 126, 201, 0.25);
            border-radius: 15px;
            border: 0;
            height: 56px;
            width: 92%;
            font-weight: 500;
            font-size: 16px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #FFFFFF;

            img{
                width: 40px;
                margin-top: 0;
                margin-left: 10%;
                margin-right: -10%;
            }
        }
        }

    .body{
        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;

        width: 100%;

        .about{
            display: flex;
            flex-direction: column;

            margin-top: 0;

            margin: 1.5rem;

            margin-bottom: 8rem;

            h1{
                font-weight: 500;
                font-size: 18px;
                margin: 0;
            }

            h2{
                font-weight: normal;
                font-size: 16px;
            }
        }

        h1{
            font-weight: normal;
            font-size: 28px;

            margin: 1rem 1rem;
        }

        .info-event{
            display: flex;
            flex-direction: row;

            width: 90%;

            margin: 1rem;

            img{
                width: 40px;
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
    }
`;