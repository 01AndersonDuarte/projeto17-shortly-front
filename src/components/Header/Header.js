import { ContainerHeader } from "./HeaderStyle";
import { StyledLink } from "../styledLink";

export default function Header({activePage}) {
    return (
        <>
            <ContainerHeader>
                <header>
                    <div>
                        <StyledLink to={'/sign-in'} active={activePage} page={1}>
                            <p>Entrar</p>
                        </StyledLink>
                        <StyledLink to={'/sign-up'} active={activePage} page={2}>
                            <p>Cadastrar-se</p>
                        </StyledLink>
                    </div>
                </header>
                <span>
                    <h1>Shortly</h1>
                </span>
            </ContainerHeader>
        </>
    );
}