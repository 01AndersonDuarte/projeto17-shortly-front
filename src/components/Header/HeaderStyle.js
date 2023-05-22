import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-family: 'Raleway';
        font-size: 16px;
        font-weight: 400;
        /* color: #565656; */
        margin-right: 10px;
    }

    header{
        width: 100%;
        padding: 2% 10%;
        background-color: rgba(255, 255, 255, 0.96);

        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.09);
        position: fixed;
        top: 0;
        z-index: 1;  

        display: flex;
        justify-content: ${({auth}) => auth ? 'space-between' : 'flex-end'};

        div{
            display: flex;
            justify-content: space-between;
        }
    }
    span{
        margin-top: 10%;
        h1{
            font-family: 'Saira Stencil One';
            color: #000;
            font-weight: 400;
            font-size: 48px;
            margin-bottom: 3%;
        }
    }
`;