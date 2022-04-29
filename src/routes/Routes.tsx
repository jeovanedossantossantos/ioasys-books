import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import { BrowserRouter, Routes as RoutesWrapper, Route, Navigate,  } from 'react-router-dom'
import { Sigin } from '../views/Sigin'
import { api } from '../service/api';
import { Home } from '../views/Home';
import { Auth } from '../hooks/auth';



function Rotas() {

    const isLoggedIn: string | null = localStorage.getItem("@ioasysToken")
    const auth=Auth()
    const [isSectionActive, setIsSectionActive] = useState(auth)
    // const push = useNavigate()

    useEffect(() => {
        setIsSectionActive(auth)

    },[auth])

    // const isSectionActive: any = async () => {
    //     if (isLoggedIn === null) {
    //         // console.log(isLoggedIn)
    //         return false 
    //     } else {
    //         const onlYTokem: any = JSON.parse(isLoggedIn)
    //         // const tokenPayload: any = jwt_decode(onlYTokem.refreshToken)
    //         console.log(auth)
    //         // try{
    //         //     const res = await api.post("https://books.ioasys.com.br/api/v1/auth/refresh-token",{refreshToken:onlYTokem.refreshToken}) 
    //         //     // console.log(res.status)
    //         //     if(res.status===204){
    //         //         return true;
    //         //     }else{
                   
    //         //         return false;
    //         //     }
    //         // }catch(e){

    //         // }
    //         // const expSeconds = tokenPayload.exp
    //         // const timeNow = Date.now() / 1000;
    //         // return timeNow > expSeconds ? false : true;
    //     }
    // }

    // useEffect(()=>{
    //     isSectionActive()
    // },[])
    return (
        <>
        {/* <button onClick={() =>isSectionActive()}>clique</button> */}
        <BrowserRouter >
            <RoutesWrapper >
            
                <Route path="/" element={<Sigin/>}/>
                {/* <Route path="/" element={<Home />}></Route> */}
               
                
                {isSectionActive ? 
                <Route path="/home" element={<Home />}></Route>:
                 <Route path="/" element={<Navigate to="/"/>}/>
                 }
                {/* {!isSectionActive() &&
                   <>
                    <Route path="/formulario" element={
                    <Formulario />} />
                    <Route path="/lista" element={<Lista />}/>
                   </>
                } */}
               
                

                {/* {!isSectionActive() ? 
                <Route path="/formulario" element={<Navigate to="/"/>}/>: 
                <Route path="/formulario" element={<Formulario/>}/>} */}

                {/* <PrivateRoute path="/formulariio" component={<Formulario/>}></PrivateRoute> */}
            </RoutesWrapper>

        </BrowserRouter>
        </>
    )

}

export default Rotas