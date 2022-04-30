
import { useContext } from 'react';
import { BrowserRouter, Routes as RoutesWrapper, Route, Navigate, useNavigate, } from 'react-router-dom'
import { AuthContext } from '../hooks/auth';
import { Home } from '../views/Home';
import { Sigin } from '../views/Sigin'




function Rotas() {
    const {sigin,setSigin} = useContext(AuthContext)

    return (
        <>
            {!sigin ?
                <BrowserRouter >
                    <RoutesWrapper >

                        <Route path="/" element={<Sigin />} />
                        <Route
                            path="*"
                            element={<Navigate to="/" replace />}
                        />

                    </RoutesWrapper>

                </BrowserRouter>
                :
                <BrowserRouter >
                    <RoutesWrapper >


                        <Route path="/" element={<Sigin />} />

                        <Route path="/home" element={<Home />}></Route>
                    </RoutesWrapper>

                </BrowserRouter>

            }


        </>
    )

}

export default Rotas