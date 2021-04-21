import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";

export function Card({title, subtitle, imgIco, image}){

  return(
      <Box
            w={["70%","100%"]}
            h={["300","50"]} 
            bg="#fff" 
            borderRadius="4"
            border="1px solid rgba(255, 186, 8, 0.5);"
            ml={["15%", "0"]}
          >
            <Image   
                w="100%"
                src={image}
                alt={title}
            />
            <Box 
                p="4" 
                h={["20","100"]}
                bg="#fff"
                border={["0" ,"1px solid rgba(255, 186, 8, 0.5);"]}
                display="flex"
                justifyContent="space-between"
                borderRadius="4"
              >
              <Box>
                  <Text
                    as="p"
                    fontSize="20"
                    mb="2"
                    fontWeight="600"
                    color="#47585B"
                  >
                    {title}
                  </Text> 
                <Text 
                  as="span"
                  fontSize="16"
                  lineHeight="26px"
                  color="#999999"
                >
                  {subtitle}
                </Text>
              </Box>
              <Box>
                <Image 
                  src={imgIco}
                  mr="2"
                  mt="5"
                />
              </Box>
            </Box>
          </Box>
  )
}