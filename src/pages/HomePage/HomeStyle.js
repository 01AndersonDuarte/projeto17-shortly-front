import styled from "styled-components";

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