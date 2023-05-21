export default function Links({ index, name, linksCount, visitCount }) {
    const visit = visitCount.toLocaleString('pt-BR');
    const links = linksCount.toLocaleString('pt-BR');
    return (
        <span>
            <h3>{`${index}. ${name}  -  `}</h3>
            <h4>{`${links} links - ${visit} visualizações`}</h4>
        </span>
    );
}