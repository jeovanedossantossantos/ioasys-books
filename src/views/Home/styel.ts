import styled from "styled-components";
import BgHome from "../../assets/img/backgroundHome.svg";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    
`
export const Background = styled.div`
position: absolute;
    background-image: url(${BgHome});
    
    background-blend-mode: darken;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    transform: matrix(1, 0, 0, -1, 0, 0);
    
    
    background-position: fixed;
    overflow: hidden;
`
export const ContainerCard = styled.div`
    margin: 20px;
    top: 150px;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
`

export const CurrentPage = styled.div`
    background-image: url(${BgHome});
    background-blend-mode: darken;
    background-size: cover;
    background-position: fixed;
    
    /* margin: 10px; */
    padding: 10px;
    width:100%;
    height:50px;
    justify-content: center;
    align-items: center;
    
    display:flex;
    font-family: 'Heebo';
    font-style: normal;
    font-size:12px;
    button{
        background: #FFFFFF;
        margin: 10px;
        width: 50px;
        height: 50px;
        border-radius: 100px;
        cursor: pointer;
        font-family: 'Heebo';
        font-style: normal;
        font-size:18px;
        border: 1px solid rgba(51, 51, 51, 0.2);
        box-sizing: border-box;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }
    button:hover{
        transition: 0.5s;
        background: #ccc;
    }
   
    
    
`