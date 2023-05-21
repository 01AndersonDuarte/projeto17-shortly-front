import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ active, page }) => active === page ? `#006600` : `#565656;`};

    &:hover {
        color: #006600;
    }
`
