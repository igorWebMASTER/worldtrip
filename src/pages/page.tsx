import { Image } from "@chakra-ui/image";
import { Box, Container, Grid, HStack, Stack, Text } from "@chakra-ui/layout";
import { BannerPage } from "../components/BannerPage";
import { BodyPage } from "../components/BodyPage";
import { Header } from "../components/Header";

export default function Page(){
  return (
     <>
        <Header />
        <BannerPage />
        <BodyPage />

        <Container
          maxWidth={1140}
          m="4rem auto"
        >
          <Text
            fontSize="32"
            fontWeight="500"
            color="#47585B"
          >
            Cidades +100
          </Text>

          <Grid 
              templateColumns="repeat(4, 1fr)" 
              mt="8"
              h="500"
              gap={6}
          >
              <Box 
                w="100%"
                h="10" 
                bg="#fff" 
                borderRadius="10"
              >
                 <Image   
                    src="/Londo.png"
                 />
                 <Box 
                    p="4" 
                    bg="#fff"
                    display="flex"
                  >
                  <Text
                   
                  >
                    Londres 
                  </Text> 
                  <Text >
                    Reino Unido
                  </Text>
                  <Image 
                   src="/LondoThumb.png" 
                   alignSelf="flex-end" 
                   ml="6"
                  />
                </Box>
              </Box>
              <Box 
                w="100%"
                h="10" 
                bg="#fff" 
                borderRadius="10"
              >
                 <Image   
                    src="/Londo.png"
                 />
                 <Box 
                    p="4" 
                    bg="#fff"
                    display="flex"
                  >
                  <Text
                   
                  >
                    Londres 
                  </Text> 
                  <Text >
                    Reino Unido
                  </Text>
                  <Image 
                   src="/LondoThumb.png" 
                   alignSelf="flex-end" 
                   ml="6"
                  />
                </Box>
              </Box>
              <Box 
                w="100%"
                h="10" 
                bg="#fff" 
                borderRadius="10"
              >
                 <Image   
                    src="/Londo.png"
                 />
                 <Box 
                    p="4" 
                    bg="#fff"
                    display="flex"
                  >
                  <Text
                   
                  >
                    Londres 
                  </Text> 
                  <Text >
                    Reino Unido
                  </Text>
                  <Image 
                   src="/LondoThumb.png" 
                   alignSelf="flex-end" 
                   ml="6"
                  />
                </Box>
              </Box>
              <Box 
                w="100%"
                h="10" 
                bg="#fff" 
                borderRadius="10"
              >
                 <Image   
                    src="/Londo.png"
                 />
                 <Box 
                    p="4" 
                    bg="#fff"
                    display="flex"
                  >
                  <Text
                   
                  >
                    Londres 
                  </Text> 
                  <Text >
                    Reino Unido
                  </Text>
                  <Image 
                   src="/LondoThumb.png" 
                   alignSelf="flex-end" 
                   ml="6"
                  />
                </Box>
              </Box>
              <Box 
                w="100%"
                h="10" 
                bg="#fff" 
                borderRadius="10"
              >
                 <Image   
                    src="/Londo.png"
                 />
                 <Box 
                    p="4" 
                    bg="#fff"
                    display="flex"
                  >
                  <Text
                   
                  >
                    Londres 
                  </Text> 
                  <Text >
                    Reino Unido
                  </Text>
                  <Image 
                   src="/LondoThumb.png" 
                   alignSelf="flex-end" 
                   ml="6"
                  />
                </Box>
              </Box>
          </Grid>

          

        </Container>
     </>
  )
}