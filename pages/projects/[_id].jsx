import { Box, Flex, Heading, Link } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Head from "next/head"
import { useState, useEffect } from "react"
import json from "./projects.json"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function ProjectsID(){
    const router = useRouter()
    const [project, setProject] = useState("loading")

    useEffect(()=>{
        const indexResult = json.findIndex((el) => {
            if(el._id === router.query._id){
              return true
            }
        })
        console.log("indexResult",indexResult)

        if(indexResult !== -1){
            return(
                setProject(json[indexResult])
            )
        } else{
            setProject("notFound")
        }
    }, [router])

    console.log(router.query._id)

    if (project === "loading"){ return <div>loading ...</div> }

    if (project === "notFound"){ return <div>not found ...</div> }

    return(
        <Box as="header" bgColor={project.backgroundColor} h="calc(100vh - 100px)">
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
            <Heading pt="15px" textAlign="center" fontFamily="Ubuntu">{project.title}</Heading>
            <Flex h="65vh" mt="15px">
                <Box w="50%">
                <Carousel showThumbs={false} showStatus={false}>
                    {project.images.map(imageUrl => (
                    <div key={imageUrl}>
                        <img src={imageUrl} alt="" />
                    </div>
                    ))}
                </Carousel>
                </Box>
                <Flex flexDirection="column" justifyContent="center" alignItems="center" w="50%">
                    <Heading textAlign="center" fontFamily="Ubuntu">Techno use :</Heading>
                    <Heading textAlign="center" fontFamily="Ubuntu">{project.technos}</Heading>
                </Flex>
            </Flex>
            <Heading display="flex" justifyContent="center" alignItems="center" fontFamily="Lexend" h="15%"><Link href={project.demoHref} isExternal>See Demo</Link></Heading>
        </Box>
    )
}