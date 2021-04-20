import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { BannerImg } from "./bannerImg";

export function BannerHome(){
  return (
    
    <Box 
      justify="space-around"
      direction={{ base: 'row', md: 'column', xs : 'column'}}
      position="relative"
      mt="45"
      w="100%"
      bgImage="url('/banner-img.jpg')"
      bgPos="bottom"
      bgRepeat="no-repeat"
      height="350"
    >
      <Stack 
        maxW={1440}
        margin="0 auto"
      >
        <Box
          px="40"
          py="100"
          color="#fff"
        >
            <Text 
              as="h1" 
              fontSize="36"
              lineHeight="54px"
              fontWeight="500"
            >
                5 Continentes, <br/>
                infinitas possibilidades.
            </Text>
            <Text 
              as="p"
              mt="4"
            >
                Chegou a hora de tirar do papel a viagem que você <br/> 
                sempre sonhou. 
            </Text>
        </Box>

        <BannerImg />
      </Stack>
    </Box>
  )

}