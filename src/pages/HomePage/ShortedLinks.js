import { useState } from "react";
import axios from "axios";

import { ShortedLinksContainer, LinkItem, DeleteIcon,  } from "./HomeStyle";
import { LoadingCircle, LoadingThreeDots } from "../../components/Loading/Loading";

export default function ShortedLinks({config, userData, setReload}) {
    const [deleteRequest, setDeleteRequest] = useState(false);

    function deleteItem(id) {
        setDeleteRequest(true);
        setReload(true);

        const url = `${process.env.REACT_APP_DELETE_URL}${id}`

        axios.delete(url, config)
            .then((sucess) => {
                setDeleteRequest(false);
                setReload(false);
            }).catch((error) => {
                setDeleteRequest(false);
                setReload(false);
            });
    }

    return (
        <ShortedLinksContainer>
            {userData ?
                (userData.shortenedUrls[0].id!==null ? userData.shortenedUrls.map((d) =>
                    <LinkItem key={d.id}>
                        <div>
                            <p>{d.url.slice(0, 35)}{d.url.length > 35 && '...'}</p>
                            <p>{d.shortUrl}</p>
                            <p>{`Quantidade de visitantes: ${d.visitCount}`}</p>
                        </div>
                        <span>
                            {deleteRequest ? <LoadingThreeDots/> : <DeleteIcon onClick={() => deleteItem(d.id)} disabled={deleteRequest} />}
                        </span>
                    </LinkItem>)
                : '')
                :
                <LoadingCircle />}
        </ShortedLinksContainer>
    );
}