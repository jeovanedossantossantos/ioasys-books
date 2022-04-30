import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Logo.png"
import { AuthContext } from "../../hooks/auth";
import { api } from "../../service/api";
import { Container, Input, LogoIoasys } from "./style";

interface UserSiginIn {
    email: string;
    password: string;
}
interface UserSigin {
    name: string;
    email: string;
    gender: string;
    birthdate: string;

}

interface AuthUserSigin {
    authorization: string;
    
}
interface RefreshToken {
    refreshToken: string;
}


export const FormSigin: React.FC = () => {

    const [dataSiginIn, setSiginIn] = useState<UserSiginIn>({} as UserSiginIn)
    const [dataUser, setDataUser] = useState<UserSigin>({} as UserSigin)
    const [dataAuth, setDataAuth] = useState<AuthUserSigin>({} as AuthUserSigin)
    const [dataToken, setDataToken] = useState<RefreshToken>({} as RefreshToken)
    const {sigin,setSigin} = useContext(AuthContext)
    const push = useNavigate()
    const hadleSumbmit = async (event: any) => {
        event.preventDefault();
        try {
            const res = await api.post('/auth/sign-in', dataSiginIn)

            setDataUser(res.data)
            // console.log(res.headers)
            setDataAuth({ ...dataAuth, authorization: res.headers.authorization })
            setDataToken({ ...dataToken, refreshToken: res.headers["refresh-token"] })
            setSigin(true)
            
           

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
       
        const sessionAuth = JSON.stringify(dataAuth)
        const sessionUser = JSON.stringify(dataUser)
        const sessionToken = JSON.stringify(dataToken)
        localStorage.setItem("@ioasysAuth", sessionAuth);
        localStorage.setItem("@ioasysUser", sessionUser);
        localStorage.setItem("@ioasysToke", sessionToken);
        if(sigin)push("/home")
        // console.log(dataAuth.refreshToken)
        
    }, [dataUser,dataAuth]);

   
    return (
        <Container>

            <LogoIoasys>
                <img src={Logo} alt="IOASYS" />
                <h3>Books</h3>
            </LogoIoasys>

            <form >
                <Input >
                    <label>E-mail</label>
                    <input type="email" placeholder="Digite seu email!" onChange={(e) => { setSiginIn({ ...dataSiginIn, email: e.target.value }) }} />
                </Input >

                <Input >
                    <label>Senha</label>
                    <div>
                        <input type="password" placeholder="Digite sua senha!" onChange={(e) => { setSiginIn({ ...dataSiginIn, password: e.target.value }) }} />
                        <button onClick={(e) => hadleSumbmit(e)}>Entrar</button>
                    </div>
                </Input >
            </form>
        </Container>
    )
}