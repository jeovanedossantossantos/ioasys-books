import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { Header } from "../../components/Header";
import ModalBooks from "../../components/Modal"
import { api } from "../../service/api";
import { Background, Container, ContainerCard, CurrentPage } from "./styel";
import { DataBooksProps } from "../../interfeice/BooksIntefeces"
import ChevronShape from "../../assets/img/chevronshape.png"
import ChevronShape2 from "../../assets/img/chevronshape2.png"
import { AuthContext } from "../../hooks/auth";

export const Home: React.FC = () => {
    const [page, setPage] = useState(1)
    const [dataBooks, setDataBooks] = useState<DataBooksProps[]>([])
    const [open, setOpen] = useState(false)
    const [id, setId] = useState<string>("")
    const {sigin,setSigin} = useContext(AuthContext)
    const push = useNavigate()
    
    const authToke: string | null = localStorage.getItem("@ioasysAuth")


    const booksList = async () => {
        if ((authToke !== null)) {
            const authorization: any = JSON.parse(authToke)

            try {
                const res = await api.get(`/books?page=${page}&amount=12`, {
                    headers: {

                        authorization: "Bearer " + authorization.authorization
                    }
                })

                setDataBooks(res.data.data)


            } catch (err) {
                // console.log(err)
            }
        } else {
            push("/")
        }


    }

    useEffect(() => {

        
        booksList()
       


    }, [page]);

    const booksId = (id: string) => {
        setId(id)
        setOpen(true)
    }

    
   
    

    return (
        <>
            <Container>
                <Header />
                <ModalBooks
                    open={open}
                    onClose={() => setOpen(false)}
                    id={id}
                />
                <Background />
                
                <div style={{
                    display: 'flex', flexWrap: "wrap", justifyContent: 'center',
                    alignItems: 'center', margin: "auto", position: "relative"
                }}>
                    {
                        dataBooks.map(e => {
                            return (
                                <ContainerCard key={e.id}
                                    onClick={() => { booksId(e.id) }}
                                >
                                    <Card
                                        authors={e.authors}
                                        category={e.category}
                                        description={e.description}
                                        id={e.id}
                                        imageUrl={e.imageUrl}
                                        isbn10={e.isbn10}
                                        isbn13={e.isbn13}
                                        language={e.language}
                                        pageCount={e.pageCount}
                                        published={e.published}
                                        publisher={e.publisher}
                                        title={e.title}

                                    />
                                </ContainerCard>
                            )
                        })
                    }
                    <CurrentPage>
                        <button type="button" onClick={() => { setPage(page === 1 ? 1 : page - 1); }} ><img src={ChevronShape2} alt="Back"/></button>
                        <h2>Página {page} de 100</h2>
                        <button type="button" onClick={() => { setPage(page === 100 ? 100 : page + 1); }}><img src={ChevronShape2} style={{transform: 'rotate(180deg)'}}  alt="Next"/></button>
                    </CurrentPage>
                </div>





            </Container>

        </>

    )
}