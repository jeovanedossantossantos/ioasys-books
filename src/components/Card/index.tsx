import React from "react";
import { Container, Text } from "./style";

interface DataBooksProps {
    authors: Array<string>,
    category: string,
    description: string,
    id: string,
    imageUrl: string,
    isbn10: string,
    isbn13: string,
    language: string,
    pageCount: number,
    published: number,
    publisher: string,
    title: string,
}
const Card = ({
    authors,
    category,
    description,
    id,
    imageUrl,
    isbn10,
    isbn13,
    language,
    pageCount,
    published,
    publisher,
    title,
}: DataBooksProps) => {

    
    return (
        <Container>
            <div>
                <img src={imageUrl} alt="Imagem"
                  
                />
            </div>
            <Text>
                <h2>{title}</h2>
                <h3>{authors[0]}</h3>
                
                <div>
                    <p>{pageCount}</p>
                    <p>{publisher}</p>
                    <p>Publicado em {published}</p>
                </div>
                
            </Text>
        </Container>
    )
}

export default Card