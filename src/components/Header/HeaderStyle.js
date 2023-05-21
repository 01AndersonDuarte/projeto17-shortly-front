import styled from "styled-components";

export const ContainerHeader = styled.div`
    header{
        width: 100%;
        padding: 2% 10%;
        background-color: rgba(255, 255, 255, 0.96);

        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.09);
        position: fixed;
        top: 0;
        z-index: 1;  

        display: flex;
        justify-content: flex-end;

        div{
            display: flex;
            justify-content: space-between;
            p{
                font-family: 'Raleway';
                font-size: 16px;
                font-weight: 700;
                color: #565656;
                margin-right: 10px;
            }
        }
    }
`;