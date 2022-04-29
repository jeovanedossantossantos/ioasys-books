import React, { useState } from "react";
import Logo from "../../assets/Logo.png"
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
    refreshToken: string;
}


export const FormSigin: React.FC = () => {

    const [dataSiginIn, setSiginIn] = useState<UserSiginIn>({} as UserSiginIn)
    const [dataUser, setDataUser] = useState<UserSigin>({} as UserSigin)
    const [dataAuth, setDataAuth] = useState<AuthUserSigin>({} as AuthUserSigin)

    const hadleSumbmit = async (event: any) => {
        event.preventDefault();
        try {
            const res = await api.post('/auth/sign-in', dataSiginIn)
            setDataUser(res.data)
            setDataAuth({ ...dataAuth, authorization: res.headers.authorization })
            setDataAuth({ ...dataAuth, refreshToken: res.headers["refresh-token"] })
            const sessionToken = JSON.stringify(dataAuth)
            const sessionUser = JSON.stringify(dataUser)
            localStorage.setItem("@ioasysToken", sessionToken);
            localStorage.setItem("@ioasysUser", sessionUser);
            // console.log(sessionToken)
           
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <Container>

            <LogoIoasys>
                <img src={Logo} alt="IOASYS" />
                <h3>Books</h3>
            </LogoIoasys>

            <form onSubmit={hadleSumbmit}>
                <Input >
                    <label>E-mail</label>
                    <input type="email" placeholder="Digite seu email!" onChange={(e) => { setSiginIn({ ...dataSiginIn, email: e.target.value }) }} />
                </Input >

                <Input >
                    <label>Senha</label>
                    <div>
                        <input type="password" placeholder="Digite sua senha!" onChange={(e) => { setSiginIn({ ...dataSiginIn, password: e.target.value }) }} />
                        <button type="submit">Entrar</button>
                    </div>
                </Input >
            </form>
        </Container>
    )
}