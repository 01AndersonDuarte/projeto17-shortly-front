import axios from "axios";
import { useEffect, useState } from "react";

import Links from "./Links";
import ranking from "../../assets/ranking.png";
import { LoadingCircle } from "../../components/Loading/Loading";
import { ContainerHome, FrameRanking } from "./HomeStyle";
import Header from "../../components/Header/Header";

export default function HomePage() {
    const [linksRanking, setLinksRanking] = useState(null);

    useEffect(() => {
        const url = process.env.REACT_APP_GET_RANKING;
        axios.get(url).then((response) => {
            setLinksRanking(response.data)
        }).catch((response) => {
            console.log(response)
        });
    }, []);

    return (
        <ContainerHome>
            <Header />
            <main>
                <div>
                    <img src={ranking} alt="" />
                    <h2>Ranking</h2>
                </div>
                <FrameRanking>
                    {!linksRanking ? <LoadingCircle /> : linksRanking.map((l, i) =>
                    (<Links
                        key={l.id}
                        index={i + 1}
                        name={l.name}
                        linksCount={l.linksCount}
                        visitCount={l.visitCount}
                    />))}
                </FrameRanking>
            </main>
        </ContainerHome>
    );
}