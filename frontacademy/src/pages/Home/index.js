import React from 'react'
import { useState, useEffect } from 'react'
import { 
    Flex,
    Box, 
    Text,
    Image,
    Button,
    Divider} from "@chakra-ui/react"
import Logo from '../../assets/Logo.svg'
import background from '../../assets/background.svg'
import { AddIcon, InfoIcon } from '@chakra-ui/icons'
import api from '../../services/api'
import CardItems from '../../components/CardItems.js/CardItems'


export const Home = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const dados = api.get('/items').then((response)=> {
             setCategories(response.data)
        })
    }, [])


    return(
        <>
        {/* Header */}
        <Flex
        bg='#E5E5E5'
        flexDir='column'
        minH='100vh'
        paddingX='10%'
        >
            <Flex
            bg='#FBFAFA'
            paddingY='9px'
            marginBottom='32px'
                >
                <Image src={Logo} alt='Logo Hortninja' />
            </Flex>

        {/* Infobar */}
        <Flex 
        maxWidth='816px'
        flexDir='column'
        margin='0 auto'>
            <Image src={ background } />
        </Flex>

        <Flex 
        justifyContent='center'
>
        <Flex
        bg='rgba(255, 255, 255, 0.9)'
        width='360px'
        height='160px'
        borderRadius='32px'
        marginRight='10px'
        marginTop='-80px'
        justifyContent='center'
        >
            <Text> Registros </Text>
        </Flex>
        <Flex
        bg='rgba(255, 255, 255, 0.9)'
        width='360px'
        height='160px'
        borderRadius='32px'
        marginLeft='10px'
        marginTop='-80px'
        justifyContent='center'
        >
            <Text> Registros </Text>
        </Flex>
        </Flex>

        {/* Botões de adição */}
        <Divider orientation="horizontal"
         colorScheme='teal' 
         borderColor='#111111'
         marginTop='48px'/>
        <Flex
        justifyContent='center'
        marginTop='70px' 
        >
            <Button 
            background='#006B5C'
            width='360px'
            color='white'
            marginRight='16px'
            borderRadius='100px'
            ><AddIcon /> Adicionar hortaliça</Button>

            <Button 
            background='#006B5C'
            width='360px'
            color='white'
            marginLeft='16px'
            borderRadius='100px'
            ><AddIcon /> Adicionar hortaliça</Button>
        </Flex>

        {/* Lista de itens */}


        {categories.map((category)=> {
            return(
        <Flex key={category._id}
        marginTop='56px'
        flexDir='column'>
            <Text
            fontSize='36px'
            marginBottom='32px'
            >{category.category}</Text>
            <Flex
            justifyContent='space-between'
            flexWrap='wrap'>
            <CardItems />
            </Flex>
        </Flex>)
        })}
        


        {/* Footer */}
        <Box>
            <Text
            color='#111111'
            marginY='4'
            textAlign='center'
            >Copyright © 2021 Feito com ♥ por Kazap Tecnologia - Todos os direitos reservados</Text>
        </Box>
        </Flex>        
        </>
    )
}