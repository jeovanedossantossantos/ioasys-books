import styled from "styled-components"
import BgHeader from "../../assets/img/backgroundHome.svg"
export const Nav = styled.nav`
   
   background-image: url(${BgHeader});
    background-blend-mode: darken;
    background-size: cover;
    background-position: fixed;
    height:120px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;

    a{
        display: flex;
        font-size: 28px;
        margin-bottom: 50px;
        padding: 10px;
        /* margin-right: 30px; */
        background-color:transparent;
    }
`