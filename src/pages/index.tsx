
import { Box, Center, Container, Text } from '@chakra-ui/layout'
import { BannerHome } from '../components/BannerHome'
import { CategoriesPlaces } from '../components/CategoriesPlaces'
import {Header} from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <BannerHome />
      <CategoriesPlaces />
      <Container
        w="100%"
        maxW="40"
        height="30"
        textAlign="center"
     >
        <Box
          height="1"
          width="100"
          bg="gray.800"
        >

        </Box>
      </Container>
      <Box
        mt="10"
      >
        <Text
          as="h1"
          fontWeight="normal"
          textAlign="center"
          fontSize="36"
          color="#47585B"
        >
        Vamos nessa? <br/>
Então escolha seu continente

          </Text>
      </Box>

      <Box>
        <Text>
          dfdfsdf
          </Text>
      </Box>
      
      <Box>
        <Text>
          dfdfsdf
          </Text>
      </Box>
    </>
  )
}
