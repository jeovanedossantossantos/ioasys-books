import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { TiDelete } from 'react-icons/ti';
import { DataBooksProps } from "../../interfeice/BooksIntefeces"
import { api } from '../../service/api';
import { BooksImg, CloseButton, Container, ContainerModal, InformationBooks, Template } from './style';
import Loader from '../Loade'

interface ModalBooksProps {
    open: boolean;
    onClose: Function;
    id: string;

}

export const ModalBooks: React.FC<ModalBooksProps> = ({ open, onClose, id }) => {

    const [dataBook, setDataBook] = useState<DataBooksProps>({} as DataBooksProps)
    const [amount, setAmount] = useState<number>(0)
    const [load, setLoad] = useState(false)
    const booksId = async () => {
        const authToke: string | null = localStorage.getItem("@ioasysAuth")

        if ((authToke !== null)) {
            const authorization: any = JSON.parse(authToke)
            try {

                const res = await api.get("/books/" + id, {
                    headers: {

                        authorization: "Bearer " + authorization.authorization
                    }
                })
                setDataBook(res.data)


                setAmount(res.data.authors.length)
                
                setLoad(false)

            } catch (err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
        setDataBook({} as DataBooksProps)
       
        booksId()
        setLoad(true)
       



    }, [id])
    if (load) {
        return(
           <ContainerModal>
               <Modal
                style={{ margin: "0", marginRight: 20 }}
                open={open}
                onClose={() => onClose()}


            >
                 <Loader/>
            </Modal>
              
           </ContainerModal>
            
        )
    }
    return (
        <ContainerModal>
            <Modal
                style={{ margin: "0", marginRight: 20 }}
                open={open}
                onClose={() => onClose()}


            >
                <Template>
                    <CloseButton>
                        <div>
                            <TiDelete color="#fff" size={40} onClick={() => onClose()} />
                        </div>
                    </CloseButton>
                    <Container >

                        <BooksImg>
                            <img src={dataBook.imageUrl} alt="" />
                        </BooksImg>
                        <InformationBooks>
                            <h1>{dataBook.title}</h1>
                            <h2 >{dataBook.authors?.map(e => {
                                if (dataBook.authors[amount - 1] === e) {
                                    return e
                                }
                                return e + ", "
                            })}
                            </h2>


                            <div>
                                <table >

                                    <tbody>
                                        <tr>
                                            <th>INFORMAÇÕES</th>

                                        </tr>

                                        <tr>
                                            <td>Páginas</td>
                                            <td className='justify-left'>{dataBook.pageCount}</td>
                                        </tr>
                                        <tr>
                                            <td>Editora</td>
                                            <td className='justify-left'>{dataBook.publisher}</td>
                                        </tr>
                                        <tr>
                                            <td>Publicação</td>
                                            <td className='justify-left'>{dataBook.published}</td>
                                        </tr>
                                        <tr>
                                            <td >Idioma</td>
                                            <td className='justify-left'>{dataBook.language}</td>
                                        </tr>
                                        <tr>
                                            <td>Titulo Original</td>
                                            <td className='justify-left'>{dataBook.title}</td>
                                        </tr>
                                        <tr>
                                            <td>ISBN-10</td>
                                            <td className='justify-left'>{dataBook.isbn10}</td>
                                        </tr><tr>
                                            <td>ISBN-13</td>
                                            <td className='justify-left'>{dataBook.isbn13}</td>
                                        </tr>
                                    </tbody>

                                </table>

                            </div>
                            <h1>RESENHA DA EDITORA</h1>
                            <div>

                                <p >

                                    <span style={{
                                        fontSize: 30,
                                        margin: 10,

                                        width: 17,
                                        height: 17,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>&ldquo;</span>{dataBook.description}
                                </p>
                            </div>

                        </InformationBooks>

                    </Container>


                </Template>


            </Modal>
        </ContainerModal>
    )
}

export default ModalBooks;