import styled from "styled-components"

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 700px;
    gap: 15px;

    input:focus{
        transform: scale(1.07);
    }
    input:focus::-webkit-input-placeholder {
        color: transparent;
    }
    
    @media screen and (max-width: 700px){
        width: 90%;
    }
`
export const InputStyled = styled.input`
    width: 60%;
    height: 45px;

    border: solid 1px rgba(212, 212, 212, 1);
    border-radius: 5px;
    outline: 0;

    box-sizing: border-box;
    padding: 10px;
    font-size: 18px;
    font-weight: 400;
    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;

export const ButtonStyled = styled.button`
    width: 60%;
    height: 45px;
    border-radius: 5px;
    border: none;
    font-weight: 700;

    /* background-color: ${({amount})=>amount ? "#808080" : "#000000"}; */
    color: #ffffff;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;