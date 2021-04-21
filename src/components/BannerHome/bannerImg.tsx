import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/react";

export function BannerImg({display}){
  return (
    <Box 
        position="absolute"
        right="40"
        top="120"
    >
     <Image src='/Airplane.svg' alt="airplane" w={[300, 400]}  display={display}/>
  </Box>
  )
}