export default function Links({ index, name, linksCount, visitCount }) {
    const visit = visitCount.toLocaleString('pt-BR');
    const links = linksCount.toLocaleString('pt-BR');
    return (
        <span>
            <h3>{`${index}. ${name}  -  `}</h3>
            <h4>{`${links} links - 2.151.659 visualizações`}</h4>
        </span>
    );
}