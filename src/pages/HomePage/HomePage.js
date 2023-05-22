import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header/Header";
import useAuth from "../../hooks/useAuth";
import { InputStyled, ButtonStyled } from "../../components/Sign/FormSign";
import { ContainerHome, FormUrl } from "./HomeStyle";
import { LoadingCircle, LoadingThreeDots } from "../../components/Loading/Loading";
import styled from "styled-components";

export default function HomePage() {
    const [userData, setUserData] = useState();
    const [link, setLink] = useState('');
    const [request, setRequest] = useState(false);

    const { auth, login } = useAuth();
    const navigate = useNavigate();
    let config = null;

    useEffect(() => {
        if (!auth) return navigate('/');

        config = { headers: { Authorization: `Bearer ${auth.token}` } };
        const url = process.env.REACT_APP_GET_USER_URLS;
        axios.get(url, config).then((sucess) => {
            setUserData(sucess.data);
            console.log(sucess.data)
            const persistedAuth = JSON.parse(localStorage.getItem("auth"));
            login({ token: persistedAuth.token, name: sucess.data.name })
        }).catch((error) => {
        });
    }, []);

    function shortenUrl(e) {
        setRequest(true);
        e.preventDefault();

        const url = process.env.REACT_APP_SHORTEN_URL;
        axios.post(url, { url: link }, config)
            .then(sucess => {
                setRequest(false);
                setLink(`${process.env.REACT_APP_OPEN_URL}${sucess.data.shortUrl}`);
            })
            .catch(error => {
                setRequest(false);
            })
    }

    return (
        <>
            <Header activePage={1} />
            <ContainerHome>
                <FormUrl onSubmit={shortenUrl}>
                    <InputStyled
                        placeholder="Link"
                        type="url"
                        required
                        value={link}
                        onChange={(e) => {
                            e.target.setCustomValidity('')
                            setLink(e.target.value)
                        }}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, insira um link válido.')}
                    />
                    <ButtonStyled>
                        {request ? <LoadingThreeDots /> : "Encurtar link"}
                    </ButtonStyled>
                </FormUrl>
                <ShortedLinks>
                    {userData ?
                        userData.shortenedUrls.map((d) => 
                            <div>
                                {d.url.slice(0, 40)}{d.url.length > 40 && '...'}
                                {d.shortUrl}
                                {`Quantidade de visitantes: ${d.visitCount}`}
                            </div>
                        )
                        :
                        <LoadingCircle />}
                </ShortedLinks>
            </ContainerHome>
        </>
    );
}

const ShortedLinks = styled.div`
    width: 70%;
    div{
        height: 35px;
        padding: 1%;
        border-radius: 10px;
        margin-bottom: 3%;
        background-color: #90ee90;

        display: flex;
        align-items: center;

    }
`;