import { ContainerHeader } from "./HeaderStyle";
import { StyledLink } from "../styledLink";
import useAuth from "../../hooks/useAuth";
import { LoadingThreeDots } from "../Loading/Loading";

export default function Header({ activePage }) {
    const { auth } = useAuth();

    return (
        <>
            <ContainerHeader auth={auth}>
                <header>
                    {auth && <p>{`Seja bem-vindo(a), ${auth.name}`}</p>}
                    <div>
                        {auth ? <LoggedInUser active={activePage} /> : <Standard active={activePage} />}
                    </div>
                </header>
                <span>
                    <h1>Shortly</h1>
                </span>
            </ContainerHeader>
        </>
    );
}

function LoggedInUser({ active }) {
    function logout() {
        localStorage.removeItem("auth");
        window.location.reload();
    }

    return (
        <>
            <StyledLink to={'/home-user'} active={active} page={1}>
                <p>Home</p>
            </StyledLink>
            <StyledLink to={'/'} active={active} page={2}>
                <p>Ranking</p>
            </StyledLink>
            <StyledLink to={'/'} active={1} page={-2}>
                <p onClick={logout}>Sair</p>
            </StyledLink>
        </>
    );
}

function Standard({ active }) {
    return (
        <>
            <StyledLink to={'/sign-in'} active={active} page={1}>
                <p>Entrar</p>
            </StyledLink>
            <StyledLink to={'/sign-up'} active={active} page={2}>
                <p>Cadastrar-se</p>
            </StyledLink>
        </>
    );
}
