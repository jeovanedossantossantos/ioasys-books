import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../hooks/auth";
import { api } from "../../service/api";

export const Home: React.FC = () => {
    const [page, setPage] = useState(1)
    const push = useNavigate()
    const auth = Auth()
    const authToke: string | null = localStorage.getItem("@ioasysToken")
   

    const booksList = async ()=>{
        if((authToke !== null) && (auth===true)){
            const authorization: any = JSON.parse(authToke)
            try{ 
                const res = await api.post(`https://books.ioasys.com.br/api/v1/books?page=${page}&amount=25`,{
                    headers: {
                        Authorization: authorization.authorization
                    }
                })
                console.log(res.data)
    
            }catch(err){
    
            }
        }else{
            push("/")
        }
        
        
    }
    useEffect(() => {
        booksList()

    },[auth]);
    return(
        <div>
            
        </div>
    )
}