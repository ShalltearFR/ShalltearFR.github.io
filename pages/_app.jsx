import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import './projects/caroussel.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
