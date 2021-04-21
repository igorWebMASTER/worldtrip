import { Box, Stack, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";

export function BannerPage(){
  
  const isWideVersion = useBreakpointValue({
    base: true,
    xs: false
  })

  return (
    <Box 
      position="relative"
      mt="45"
      w="100%"
      bgImage="url('/BannerPage.png')"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      height="500"
    >
      <Stack 
        maxW={1160}
        margin="0 auto"
      >
        <Box
          px={[10, 20, 30]}
          position="relative"
          py={[400]}
          color="#fff"
          b="0"
        >
            <Text 
              as="h1" 
              fontSize={["32","40" ,"48"]}
              lineHeight="54px"
              fontWeight="700"
            >
               Europa
            </Text>
           
        </Box>

      </Stack>
    </Box>
  )

}