import styled, {css} from "styled-components";

const sharedStyles = css`
    & > div {
    width: 100%;
    height: 100%;  
    }
`

export const Root = styled.div `
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 
        "header header" 50px
        "sidebar content" 1fr
        "footer footer" 50px / 100px 1fr;
`

export const HeaderLayout = styled.div `
    grid-area: header; 
    ${sharedStyles}
`

export const SidebarLayout = styled.div `
    grid-area: sidebar; 
    ${sharedStyles}
`

export const ContentLayout = styled.div `
    grid-area: content; 
    ${sharedStyles}
`

export const FooterLayout = styled.div `
    grid-area: footer;
    ${sharedStyles}
`