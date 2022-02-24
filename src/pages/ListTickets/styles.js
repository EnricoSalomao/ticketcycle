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
        margin-left: 1rem;

        h1{
            font-size: 24px;
            font-weight: 500;
            margin-left: 1rem;
            margin-top: -.5rem;
        }
    }

    .tickets{
        width: 100%;
        display: flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;

        .card{
            width: 327px;
            height: 106px;
            background: #FFFFFF;
            box-shadow: 0px 8px 25px rgba(83, 89, 144, 0.07);
            border-radius: 16px;

            margin: 20px;
        }
    }
`;