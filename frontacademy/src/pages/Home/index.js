import React from 'react'
import { Flex, Spacer } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import Logo from '../../assets/Logo.svg'

export const Home = () => {
    return(
        <Flex bg='#E5E5E5'
        flexDirection='column'
        justifyContent='space-between'
        minHeight='100vh'
        >
            <Flex
            bg='#FFF'
            paddingY='2'
            justifyContent='space-between'
            alignItems='center'
            >
                <Image src={Logo} alt='Hortninja Logo' />
            </Flex>
        </Flex>
    )
}