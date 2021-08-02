import React from 'react'
import { 
    Flex,
    Box, 
    Text,
    Image,
    Divider
    } from "@chakra-ui/react"
import api from '../../services/api'
import { useState, useEffect } from 'react'
import Background from '../../assets/Background.svg'

const CardItems = () => {

    const [produtos, setProdutos ] = useState([])

    useEffect(()=>{
        const infos = api.get('/products').then((response)=> {
             setProdutos(response.data)
        })
    }, [])
    return (
        <>
        {produtos.map((produtos)=> {
            return(
        <Flex key={produtos._id}
        maxWidth='85vw'
        flexWrap='wrap'
        flexDir='row'>
            <Flex 
            width='20vw'
            height='380px'
            bg='#fff'
            borderRadius='32px'
            flexDir='column'> 
            <Flex
            alignItems='center'
            backgroundImage= { Background }
            borderRadius='32px'
            padding='20px'
            margin='10px'>
            <Image
            borderRadius="full"
            boxSize="70px"
            src={produtos.image}
            alt="Segun Adebayo"
            />
            <Text fontSize='32px'
            color='white'
            marginLeft='10px'>{produtos.name}</Text>
            </Flex>
                <Text fontSize='16px'
                marginLeft='10px'>{produtos.name}</Text>
                <Text fontSize='14px'
                marginLeft='10px'>{produtos.description}</Text>
                <Text>{console.log(produtos)}</Text>
            </Flex>
            
        </Flex>

        )
        })}
        <Divider orientation="horizontal"
                colorScheme='teal' 
                borderColor='#111111'
                marginTop='48px'
                />
        </>
    )
}

export default CardItems
