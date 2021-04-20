import { Image } from "@chakra-ui/image";
import { Box, HStack, Stack, Text } from "@chakra-ui/layout";



export function CategoriesPlaces(){
  return(
    <Box 
      w="100%"
    >
      <Stack
        mt="16"
        p="100"
        maxW={1140}
        margin="1rem auto"
        display="flex"
        direction={{ base: 'row', md: 'row', xs: 'column'}}
        alignItems="space-between"
        align="center"
      >
          <Box
            ml="35"
            mr="35"
          >
            <Image src="/Nightlife.svg" />
          </Box>
          <Box
            ml="35"
            mr="35"
          >
            <Image src="/Beach.svg" />
          </Box>
          <Box
            ml="35"
            mr="35"
          >
            <Image src="/Modern.svg" />
          </Box>
          <Box
            ml="35"
            mr="35"
          >
            <Image src="/Classic.svg" />
          </Box>
          <Box
            ml="35"
            mr="35"
          >
            <Image src="/More.svg" />
          </Box>
      </Stack>
    </Box>
  )
}