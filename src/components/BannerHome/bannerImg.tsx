import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";

export function BannerImg(){
  return (
    <Box 
    position="absolute"
    right="40"
    top="120"
  >
     <Image src='/Airplane.svg' alt="airplane" maxW="400"/>
  </Box>
  )
}