
import { Box, Container, Text } from '@chakra-ui/layout'
import { BannerHome } from '../components/BannerHome'
import { CarouselSlider } from '../components/CarouseSlider'
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
        mt=""
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

      <CarouselSlider />
      
      <Box mb="8">
        
      </Box>
    </>
  )
}
