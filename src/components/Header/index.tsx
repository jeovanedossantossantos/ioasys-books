import React from "react";
import { Link } from "react-router-dom";
import { LogoIoasys } from "../FormSigin/style";
import Logo from "../../assets/img/Logo2.png"
import { Nav } from "./style";
import { FaSignOutAlt} from "react-icons/fa";
export const Header: React.FC = () => {
    const logOut = ()=>{
        localStorage.removeItem("@ioasysToken")
        localStorage.removeItem("@ioasysUser")

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