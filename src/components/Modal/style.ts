import styled from "styled-components";

export const ContainerModal = styled.div`

   width: 100%;
   justify-content: center;
    align-items: center;    

`

export const Template = styled.div`
    margin: 10px;
    
    width: 100%;
    /* height: 608px; */
    max-width: 1314px;

    min-width:200px;
    justify-content: center;
    align-items: center;
    

    @media (max-width: 769px){
        height: 100vh;

    }

    
    
`


export const CloseButton = styled.div`
    
    margin: 10px;
    margin-top: -10px;
    margin-bottom:20px;
    width: 95%;
    display:flex;
  
    justify-content: flex-end;
    cursor: pointer;
  
   

`

export const Container = styled.div`

    width: 100%;
    max-width: 900px;
    
    height: 100%;
    max-height:570px;
    min-height: 288px;
    /* overflow-y: scroll; */
    /* left: 298px; */
    /* top: -80px; */

    background: #FFFFFF;
    box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
    border-radius: 4px; 
    margin: auto;
    margin-bottom: 10px;
    margin-top:-20px;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;

   

    scrollbar-width: thin;
    scrollbar-color: #ccc #fff;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
    background: #ccc ;
    }

    ::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 20px;
    border: 3px solid #fff;
    }
    @media (max-width: 769px){
        justify-content: center;
        margin-top:-20px;

       
         

    }

    
`

export const BooksImg = styled.div`
    width: 100%;
    max-width:350px;
    min-width:200px;
    margin: auto;
    margin-top: 40px;
    img{
            width: 100%;
            max-width:350px;
            
            height: 100%;
            max-height: 480px;
            min-height: 351px;
        }

    @media (max-width:446px){
        margin-left:10px;
        margin-right: 1px;
        width:200px;
    }

`
export const InformationBooks = styled.div`
    width: 100%;
    max-width:400px;
    min-width:250px;
    margin-top: 28px;
   
   h1{
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    /* or 143% */
    padding: 5px;


    color: #333333;
   }
   h2{
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */


    color: #AB2680;
    padding: 5px;
   }
   div table{
    margin: 5px;
   }
   div table tbody tr, div table tbody th{
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
    /* or 238% */

    text-transform: uppercase;

    color: #333333;

   }
   div table tbody th{
      
       text-align:justify;
   }
   div table tbody td{
       width:180px;
   }
   div table tbody .justify-left{
    font-weight: 400;

    line-height: 20px;
    /* or 167% */

    text-align: right;

    color: #999999;
   }
   div p{
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    /* or 167% */

    text-transform: uppercase;

    color: #333333;
    padding: 5px;
    margin: 10px;
    height: 250px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #ccc #fff;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
    background: #ccc ;
    }

    ::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 20px;
    border: 3px solid #fff;
    }
    
    
   }
`