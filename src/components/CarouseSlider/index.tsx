import { Center, Box, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import Link from 'next/link'


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function CarouselSlider(){
    return (
     
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide style={{ width : '100%'}}>
          <Box
            w="100vw"
            height="400"
            align="center"
            textAlign="center"
            bgImage="url('/bgEurope.png')"
            bgPos="center"
            bgRepeat="no-repeat"
          >
            <Center
              flexDirection="column"
              mt="50"
              
            >
              <Link href="/page" passHref >
                  <Text
                    as="h1"
                    fontSize="48"
                    fontWeight="700"
                    zIndex="999"
                    cursor="pointer"
                    color="gray.50"
                    mt="140"
                  >
                    Europa
                  </Text>
                </Link>
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
      
        
        <SwiperSlide style={{ width : ''}}>
          <Box
            w="100vw"
            height="400"
            align="center"
            textAlign="center"
            bgImage="url('/bgEurope.png')"
            bgPos="center"
            bgRepeat="no-repeat"
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
                mt="140"
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
      
       
    </Swiper>
    )
}