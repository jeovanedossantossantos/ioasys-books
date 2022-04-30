import styled from "styled-components";

export const Container = styled.div`

    margin-left: 10%;
    color: #FFFFFF;
   
    width: 100%;
    max-width: 410px;
    min-width: 100px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    
    
    h3{
        font-family: 'Heebo' sans-serif;
        font-style: normal;
    }
    @media (max-width: 470px) {
        margin-left: 0;
        margin: auto;
        width: 100%;
        max-width: 350px;
        min-width: 100px;
    }
    

`
export const LogoIoasys = styled.div`

    display: flex;
    font-size: 28px;
    margin-bottom: 50px;
    padding: 10px;
    h3{
        margin-left: 16.6px;
        font-family: 'Heebo';
    }
`
export const Input = styled.div`
    display: block;
    background: rgba(0, 0, 0, 0.32);
    width: 100%;
    min-width:100px;
    max-width: 368px;
    height: 60px;
    margin: 10px;
    padding: 10px;
    border-radius: 4px;

    div{
        
        input{
            width: 100%;
            min-width: 100px;
            max-width:200px;
        }
    }
    
    label{ 
        display: block;
        opacity: 0.5;
    }
    input{
        border: none;
        background: transparent;
        color: #FFFFFF;
        width: 100%;
    }
    input:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
   
    } 
    input::placeholder{
        color: #FFFFFF;
    }
    button{
        width: 85px;
        height: 36px;
        /* left: 386px;
        top: 448px; */
        float: right;
        background: #FFFFFF;
        border-radius: 44px;
        color: #B22E6F;
    }
    button:hover{
        cursor: pointer
    }

    @media (max-width: 470px) {
        width: 100%;
    min-width:100px;
    max-width: 288px;
    
     
    }
`