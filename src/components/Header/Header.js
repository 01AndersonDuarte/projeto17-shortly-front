import { ContainerHeader } from "./HeaderStyle";
import { StyledLink } from "../styledLink";

export default function Header() {
    return (
        <ContainerHeader>
            <header>
                <div>
                    <StyledLink to={'/sign-in'}><p>Entrar</p></StyledLink>
                    <StyledLink to={'/sign-up'}><p>Cadastrar-se</p></StyledLink>
                </div>
            </header>
        </ContainerHeader>
    );
}