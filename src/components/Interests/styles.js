import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;

    h1{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #120D26;
        margin-top: 1.5rem;
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

            margin-left: -1rem;

            margin-top: 1rem;
            margin-bottom: 1rem;

            img{
                width: 10%;
                margin-top: 0;
                margin-left: 25%;
                margin-right: -32%;
            }
        }

    .options-area{
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;

        .option{
            display: flex;

            cursor: pointer;

            justify-content: center;
            align-items: center;

            flex-direction: column;

            margin-right: 2rem;

            margin-top: 1rem;
            margin-bottom: 2rem;


            .image-area{
                width: 134px;
                height: 134px;
                border: 2px solid #c6c6c6;
                box-sizing: border-box;
                border-radius: 50%;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            h2{
                font-family: Poppins;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                color: #000000;

                margin-top: 1rem;
            }
        }
    }
`