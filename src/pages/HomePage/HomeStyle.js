import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";
import { BsCheckAll } from "react-icons/bs";

export const ContainerHome = styled.div`
    width: 100%;
    margin-top: 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
export const FormUrl = styled.form`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 3%;

    button{
        width: 20%;
        height: 45px;
    }

    input:focus{
        transform: scale(1.07);
    }
    input:focus::-webkit-input-placeholder {
        color: transparent;
    }
`;

export const ShortedLinksContainer = styled.div`
    width: 80%;
    height: 70%;
    padding: 0 5% 0 5%;
    max-height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;


    ::-webkit-scrollbar {
        width: 2px; /* Largura da barra de rolagem */
        background-color: transparent; /* Cor de fundo da barra de rolagem */
    }

    /* Estilizando o indicador da barra de rolagem */
    ::-webkit-scrollbar-thumb {
        background-color: #90ee90; /* Cor do indicador da barra de rolagem */
        border-radius: 1px; /* Raio de borda do indicador */
    }

   

`;

export const LinkItem = styled.div`
    width: 100%;
    height: 55px;

    border-radius: 10px;
    border: solid 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 3%;
    overflow: hidden;

    display: flex;
    justify-content: space-between;

    div{
        width: 90%;
        padding: 1%;

        background-color: #90ee90;
        font-family: 'Raleway';
        font-weight: 600;
        color: #fff;

        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    span{
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;


        background-color: #fff;
    }

`;

export const DeleteIcon = styled(FaTrashAlt)`
    font-size: 150%;
    color: #cc0000;
    cursor: pointer;
`;

export const CopyLink = styled(IoMdCopy)`
    font-size: 150%;
    color: #cc0000;
    cursor: pointer;
`;

export const CheckCopy = styled(BsCheckAll)`
    font-size: 150%;
    color: #cc0000;
`;