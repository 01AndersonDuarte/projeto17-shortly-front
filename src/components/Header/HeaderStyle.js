import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    header{
        width: 100%;
        padding: 2% 10%;
        background-color: rgba(255, 255, 255, 0.96);

        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.09);
        position: fixed;
        top: 0;
        z-index: 1;  

        display: flex;
        align-items: center;
        justify-content: ${({auth}) => auth ? 'space-between' : 'flex-end'};

        p{
            font-family: 'Raleway';
            font-size: 16px;
            font-weight: 400;
            margin-right: 10px;
        }

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
    @media(max-width: 450px) {
        header{
            height: 35px;
            padding: 0 5%;
            box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.09);
            p{
                font-size: 11px;
            }
        }
        span{
            margin-top: 20%;
            h1{
                font-size: 38px;
                margin-bottom: 3%;
            }
        }
    } 
`;