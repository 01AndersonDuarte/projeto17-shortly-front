import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerRanking = styled.div`
    main{
        width: 100%;
        margin-top: 5%;

        display: flex;
        flex-direction: column;
        align-items: center;
        div{
            display: flex;
            align-items: center;
            
            img{
                width: 50px;
                height: 50px;
                object-fit: cover;
            }
            h2{
                font-family: 'Raleway';
                font-size: 25px;
                font-weight: 700;
                color: #000;
            }
        }
    }
`;

export const FrameRanking = styled.div`
    width: 80%;
    padding: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
    height: 200px;
    border: solid 0.5px rgba(0, 0, 0, 0.09);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    span{
        width: 100%;
        display: flex;
        align-items: center;

        width: 100%;
        font-family: 'Raleway';
        font-weight: 700;
        line-height: 200%;

        h3{
            font-size: 18px;
            color: #000;
        }
        h4{
            font-size: 16px;
            color: #003a37;
        }
    }
`;

export const StyledLink2 = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    font-family: 'Raleway';
    font-weight: 400;
    color: #000;

    &:hover {
        color: #006600;
    }
`;