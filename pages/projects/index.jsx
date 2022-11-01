import { Box, Flex, Text } from "@chakra-ui/react";
import json from "./projects.json"
import NextLink from "next/link"
import Head from "next/head";

export default function Projects(){
    return(   
        <Flex as="header" h="calc(100vh - 100px)" justifyContent="space-evenly" alignItems="center" bgImage="/media/projects/projectsBg.jpg" bgPos="center">
<Head>
  <title>PortFolio Jossuha</title>
  <meta name="title" content="PortFolio Jossuha"/>
  <meta name="description" content="See my creations"/>

  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://shalltearfr.vercel.app/projects"/>
  <meta property="og:title" content="PortFolio Jossuha"/>
  <meta property="og:description" content="See my creations"/>
  <meta property="og:image" content="/media/meta/projects.jpg"/>

  <meta property="twitter:card" content="summary_large_image"/>
  <meta property="twitter:url" content="https://shalltearfr.vercel.app/projects"/>
  <meta property="twitter:title" content="PortFolio Jossuha"/>
  <meta property="twitter:description" content="See my creations"/>
  <meta property="twitter:image" content="/media/meta/projects.jpg"/>
</Head>
         
            {
                json.map(el=>(
                    <Box key={el._id} w="300px" h="450px" bgImg={el.images[0]} bgSize={"cover"} border="solid 2px black" borderRadius="20px" overflow="hidden" filter="drop-shadow(0px 0px 5px #000000)">
                        <NextLink href={`/projects/${el._id}`} passHref>
                            <Box bg="rgba(255, 255, 255, .25)" backdropFilter="blur(3px)" h="100%" textAlign="center" pt="100px" _hover={{background: "rgba(255, 255, 255, .5)", backdropFilter: "blur(1px)"}}>
                                <Text as="span" fontSize="32px" fontFamily="Delius Swash Caps" fontWeight="bold">{el.title}</Text>
                            </Box>
                        </NextLink>
                    </Box>
                ))
            }
        </Flex>
    )
}