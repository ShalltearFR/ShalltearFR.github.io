import { Box, Image, Heading } from '@chakra-ui/react'
import NextLink from "next/link"
import Fonts from '../components/Fonts'

export default function NavBar(){
    return(
        <Box as='nav' display="flex" background="#D9DFFD" boxShadow="0 5px 5px rgba(0, 0, 0, 0.5)" h="100px">
            <Fonts/>
            <Heading alignItems="center" display="flex" ml="3rem" fontSize="32px" fontFamily="Delius Swash Caps">Jossuha Simonin</Heading>
            <Box display="flex" alignItems="center" ml="auto" mr="6rem" gap="15px">
                <NextLink href="/"><Heading fontSize="32px" fontFamily="Delius Swash Caps">Home</Heading></NextLink>
                <Heading fontSize="32px" fontFamily="Delius Swash Caps" >|</Heading>
                <NextLink href="/projects"><Heading fontSize="32px" fontFamily="Delius Swash Caps">Projects</Heading></NextLink>
            </Box>
            <Box mr="3rem" display="flex" justifyContent="center" flexDirection="column">
                <a href="https://github.com/ShalltearFR"><Image w="35px" src="/media/githubLogo.svg" alt=""/></a>
                <a href="https://www.linkedin.com/in/jossuha-simonin"><Image w="35px" src="/media/linkedInLogo.svg" alt=""/></a>
            </Box>
        </Box>
    )
}