import styled from 'styled-components';
import Bg from '../../assets/img/background-image.png'
export const Background = styled.div`

    background-image: url(${Bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
          

    @media (max-width: 768px){
        background-position: center;
    }
    

`