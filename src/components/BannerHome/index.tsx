import { Box, Stack, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { BannerImg } from "./bannerImg";

export function BannerHome(){
  
  const isWideVersion = useBreakpointValue({
    base: true,
    xs: false
  })

  return (
    <Box 
      justify="space-around"
      direction={{ base: 'row', md: 'column', xs : 'column'}}
      position="relative"
      mt="45"
      w="100%"
      bgImage="url('/Background.png')"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      height="350"
    >
      <Stack 
        maxW={1440}
        margin="0 auto"
      >
        <Box
          px={[10, 20, 30]}
          py={[10, 10, 100]}
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

        <BannerImg display={isWideVersion ? 'none' : 'block'}  />
      </Stack>
    </Box>
  )

}