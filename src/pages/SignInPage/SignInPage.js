import { useState } from "react";
import axios from "axios";

import { ContainerSign } from "../../components/Sign/SignStyle";
import { FormStyled, InputStyled, ButtonStyled, Error } from "../../components/Sign/FormSign";
import { LoadingThreeDots } from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";

export default function SignInPage() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [request, setRequest] = useState(false);
    const [error, setError] = useState(false);

    function singIn(e) {
        setRequest(true);
        setError(false);
        e.preventDefault();

        const url = process.env.REACT_APP_SIGN_IN_URL;

        axios.post(url, loginData)
            .then(sucess => {
                setRequest(false);
                console.log(sucess.data);
                // login(sucess.data);
                // navigate("/");
            })
            .catch(fail => {
                setRequest(false);
                setError(true);
            });
    }

    function insertLoginData(event) {
        event.target.setCustomValidity('');

        const value = event.target.value;
        const attribute = event.target.name;

        setLoginData({ ...loginData, [attribute]: value });
    }
    return (
        <>
            <Header activePage={1}/>
            <ContainerSign>
                <FormStyled onSubmit={singIn}>
                    <InputStyled
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        required
                        onChange={insertLoginData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, insira um e-mail válido.')}
                    />
                    <InputStyled
                        placeholder="Senha"
                        type="password"
                        name="password"
                        required
                        onChange={insertLoginData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                    />
                    <ButtonStyled type="submit">
                        {request ? <LoadingThreeDots /> : "Entrar"}
                    </ButtonStyled>
                    {error && <Error>E-mail ou senha incorretos.</Error>}
                </FormStyled>
            </ContainerSign>
        </>
    );
}