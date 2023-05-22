import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header/Header";
import useAuth from "../../hooks/useAuth";
import { InputStyled, ButtonStyled } from "../../components/Sign/FormSign";
import { ContainerHome, FormUrl, CopyLink, CheckCopy } from "./HomeStyle";
import { LoadingThreeDots } from "../../components/Loading/Loading";
import ShortedLinks from "./ShortedLinks";

export default function HomePage() {
    const [userData, setUserData] = useState();
    const [link, setLink] = useState('');
    const [request, setRequest] = useState(false);

    const { auth, login } = useAuth();
    const navigate = useNavigate();
    const config = auth && { headers: { Authorization: `Bearer ${auth.token}` } };

    const [reload, setReload] = useState(false);
    const [copy, setCopy] = useState(false);

    useEffect(() => {
        if (!auth) return navigate('/');

        const url = process.env.REACT_APP_GET_USER_URLS;
        axios.get(url, config).then((sucess) => {
            setUserData(sucess.data);
            const persistedAuth = JSON.parse(localStorage.getItem("auth"));
            login({ token: persistedAuth.token, name: sucess.data.name });
        }).catch((error) => {
        });
    }, [reload]);

    function shortenUrl(e) {
        setRequest(true);
        setReload(true);

        e.preventDefault();

        const url = process.env.REACT_APP_SHORTEN_URL;
        axios.post(url, { url: link }, config)
            .then(sucess => {
                setRequest(false);
                setReload(false);
                setLink(`${process.env.REACT_APP_OPEN_URL}${sucess.data.shortUrl}`);
            })
            .catch(error => {
                setRequest(false);
                setReload(false);
            })
    }

    function copyURL() {
        if(!link) return;
        setCopy(true);
        let input = document.createElement("input");
        input.value = link;
        document.body.appendChild(input);

        input.select();
        input.setSelectionRange(0, input.value.length);

        document.execCommand("copy");
        document.body.removeChild(input);
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
                    {copy ? <CheckCopy/> : <CopyLink onClick={copyURL} title="Clique para copiar a URL"/>}
                    <ButtonStyled disabled={request}>
                        {request ? <LoadingThreeDots /> : "Encurtar link"}
                    </ButtonStyled>
                </FormUrl>
                <ShortedLinks config={config} userData={userData} setReload={setReload} />
            </ContainerHome>
        </>
    );
}