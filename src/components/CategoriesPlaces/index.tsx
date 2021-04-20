import { Image } from "@chakra-ui/image";
import { Box, HStack, Stack, Text } from "@chakra-ui/layout";



export function CategoriesPlaces(){
  return(
    <Box 
      w="100%"
    >
      <Stack
        mt="16"
        spacing={["10", "20", "40"]}
        margin="6rem auto"
        display="flex"
        direction={{ base: 'row', md: 'row', sm: 'column'}}
        alignItems="space-between"
        align="center"
        justifyItems="center"
        justifyContent="center"
      >
          <Box
            
          >
            <Image src="/Nightlife.svg" />
          </Box>
          <Box
           
          >
            <Image src="/Beach.svg" />
          </Box>
          <Box
            
          >
            <Image src="/Modern.svg" />
          </Box>
          <Box
           
          >
            <Image src="/Classic.svg" />
          </Box>
          <Box
           
          >
            <Image src="/More.svg" />
          </Box>
      </Stack>
    </Box>
  )
}