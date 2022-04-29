import { useEffect, useState } from "react"
import { api } from "../service/api"

export const Auth = () =>{
    const [response, setResponse] = useState(false)

    const isLoggedIn: string | null = localStorage.getItem("@ioasysToken")
    // const push = useNavigate()

    

    const isSectionActive: any = async () => {
        if (isLoggedIn === null) {
            // console.log(isLoggedIn)
            return false 
        } else {
            const onlYTokem: any = JSON.parse(isLoggedIn)
            // const tokenPayload: any = jwt_decode(onlYTokem.refreshToken)
            // console.log(onlYTokem.refreshToken)
            try{
                const res = await api.post("https://books.ioasys.com.br/api/v1/auth/refresh-token",{refreshToken:onlYTokem.refreshToken}) 
                // console.log(res.status)
                if(res.status===204){
                    setResponse(true)
                    // console.log("false")
                    return true
                }
                if(res.status === 400){
                    setResponse(false)
                    // console.log("false")
                    return false
                }
                else{
                   
                    setResponse(false)
                    // console.log("false")
                    return false
                }
            }catch(e){
                return false
            }
            
        }
    }

    isSectionActive()
    return  response
}