import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LogoIoasys } from "../FormSigin/style";
import Logo from "../../assets/img/Logo2.png"
import { Nav } from "./style";
import { FaSignOutAlt} from "react-icons/fa";
import { AuthContext } from "../../hooks/auth";
export const Header: React.FC = () => {
    const {sigin,setSigin} = useContext(AuthContext)
    const logOut = ()=>{
        localStorage.removeItem("@ioasysToke")
        localStorage.removeItem("@ioasysAuth")
        localStorage.removeItem("@ioasysUser")
        setSigin(false)

    }
    return (
        <Nav>
            <LogoIoasys>
                <img src={Logo} alt="IOASYS" />
                <h3>Books</h3>
            </LogoIoasys>
            <Link to="/" onClick={()=>logOut()}><FaSignOutAlt/></Link>
        </Nav>
    )
}