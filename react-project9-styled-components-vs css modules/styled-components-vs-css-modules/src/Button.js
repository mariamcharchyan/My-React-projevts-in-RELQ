import styled, {css} from 'styled-components'

const Button = styled.button`
    color: ${props => props.color || 'red'};
    background: black;
    margin: 10px;
    ${props => props.background && css`
        background: pink;
    `}
`

export default Button;