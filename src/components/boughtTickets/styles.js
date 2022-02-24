import styled from "styled-components";

export const Container = styled.div`
            width: 327px;
            height: 106px;
            background: #FFFFFF;
            box-shadow: 0px 8px 25px rgba(83, 89, 144, 0.07);
            border-radius: 16px;

            margin: 20px;

            display: flex;
            flex-direction: row;

            img{
                height: 90px;
                width: 95px;
                padding: .5rem;
                padding-top: .5rem; 
                border-radius: 1rem;
            }

            .info_product{
                display: flex;

                margin-top: .5rem;

                flex-direction: column;

                margin-left: .5rem;

                .date{
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 13px;
                    line-height: 19px;
                    /* identical to box height */

                    display: flex;
                    align-items: center;

                    /* Color/ Primary/ Blue */

                    color: #5669FF;
                }

                .title{
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 22px;

                    /* Color/ Typography/ Title */

                    color: #120D26;

                    margin-top: .5rem;
                }

                .local{
                    font-size: 13px;
                    line-height: 19px;
                    /* identical to box height */


                    /* Color/ Typography/ Sub-Color */

                    color: #747688;
                    margin-top: .2rem;
                }
            }
`;