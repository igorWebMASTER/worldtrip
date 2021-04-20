import { Center, Box, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function CarouselSlider(){
    return (
     
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}

    >
      <SwiperSlide>
        <Box
          w="100vw"
          height="400"
          align="center"
          textAlign="center"
          bgImage="url('/bgEurope.png')"
          bgPos="center"
          bgRepeat="no-repeat"s
        >
          <Center
             flexDirection="column"
            mt="50"
            
          >
            <Text
              as="h1"
              fontSize="48"
              fontWeight="700"
              zIndex="999"
              color="gray.50"
              mt="120"
            >
              Europa
            </Text>
            <Text
              as="p"
              fontSize="24"
              fontWeight="700"
              zIndex="999"
              color="gray.50"
            >
              O continente mais antigo.
            </Text>
          </Center>
        </Box>  
      </SwiperSlide>
     
      <SwiperSlide>
        <Box
          w="100vw"
          height="400"
          align="center"
          textAlign="center"
          justifyContent="center"
          bgImage="url('/bgEurope.png')"
          bgPos="bottom"
          bgRepeat="no-repeat"s
        >
          <Center
             flexDirection="column"
            mt="50"
            
          >
            <Text
              as="h1"
              fontSize="48"
              fontWeight="700"
              zIndex="999"
              color="gray.50"
              mt="120"
            >
              Europa
            </Text>
            <Text
              as="p"
              fontSize="24"
              fontWeight="700"
              zIndex="999"
              color="gray.50"
            >
              O continente mais antigo.
            </Text>
          </Center>
        </Box>  
      </SwiperSlide>
      <Box
          w="100vw"
          height="400"
          align="center"
          textAlign="center"
          justifyContent="center"
          bgImage="url('/bgEurope.png')"
          bgPos="bottom"
          bgRepeat="no-repeat"s
        >
      <SwiperSlide>
       
          <Center
             flexDirection="column"
            mt="50"
            
          >
            <Text
              as="h1"
              fontSize="48"
              fontWeight="700"
              zIndex="999"
              color="gray.50"
              mt="120"
            >
              Europa
            </Text>
            <Text
              as="p"
              fontSize="24"
              fontWeight="700"
              zIndex="999"
              color="gray.50"
            >
              O continente mais antigo.
            </Text>
          </Center>
      
      </SwiperSlide>
      
      </Box>  
    </Swiper>
    )
}