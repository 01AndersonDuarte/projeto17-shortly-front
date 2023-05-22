import axios from "axios";
import { useEffect, useState } from "react";

import Links from "./Links";
import ranking from "../../assets/ranking.png";
import { LoadingCircle } from "../../components/Loading/Loading";
import { ContainerRanking, FrameRanking, StyledLink2 } from "./RankingStyle";
import Header from "../../components/Header/Header";
import useAuth from "../../hooks/useAuth";

export default function RankingPage() {
    const [linksRanking, setLinksRanking] = useState(null);
    const { auth } = useAuth();

    useEffect(() => {
        const url = process.env.REACT_APP_GET_RANKING;
        axios.get(url).then((response) => {
            setLinksRanking(response.data);
        }).catch((response) => {
            console.log(response);
        });
    }, []);

    return (
        <ContainerRanking>
            <Header activePage={auth && 2} />
            <main>
                <div>
                    <img src={ranking} alt="" />
                    <h2>Ranking</h2>
                </div>
                <FrameRanking>
                    {!linksRanking ? <LoadingCircle /> : linksRanking.map((l, i) =>
                    {return i <= 4 ? (<Links
                        key={l.id}
                        index={i + 1}
                        name={l.name}
                        linksCount={l.linksCount}
                        visitCount={l.visitCount}
                    />) : null})}
                </FrameRanking>
                <StyledLink2 to={'/sign-up'}>{!auth && 'Crie sua conta para usar nosso serviço!'}</StyledLink2>
            </main>
        </ContainerRanking>
    );
}