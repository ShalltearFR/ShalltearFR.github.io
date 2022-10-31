import { AspectRatio, Flex, Text, Box } from "@chakra-ui/react";
import NextLink from "next/link"

export default function Home() {
  return (
    <Flex as="header" h="calc(100vh - 100px)" justifyContent="center" alignItems="center">
      <Flex w="75vw" h="75vh" bg="rgba(255, 255, 255, .5)" justifyContent="center" alignItems="center" flexDirection="column"  backdropFilter="blur(2px)" borderRadius="20px" border="solid 1px black" boxShadow="5px 5px 5px rgba(0, 0, 0, 0.25)">
        <Text fontSize="32px" textAlign="center" fontFamily="Finger Paint">Junior web developer looking for new perspectives.</Text>
        <Text fontSize="32px" textAlign="center" fontFamily="Finger Paint">This website uses nextJS technology and chakra UI.</Text>
        <Flex fontSize="32px" p="30px 30px" fontFamily="Lexend" mt="45px" bg="rgba(217, 223, 253, .5)" border="solid 1px black" borderRadius="2rem" _hover={{bg: "#A4B3FD", fontSize: "34px", transitionDuration: '1s',transitionTimingFunction: "ease-in-out"}}>
          <NextLink href="/projects">
            <Box as="span" w="100%" h="100%">Discovers projects</Box>
          </NextLink>
        </Flex>
      </Flex>
      <AspectRatio h="calc(100vh - 120px)" _before={{paddingBottom: 0}}  zIndex="-10" position="static">
        <video autoPlay muted loop>         
          <source src="/media/media.mp4" type="video/mp4"/>       
        </video>
      </AspectRatio>
    </Flex>
  )
}
