import { Box, Container, HStack, Text } from "@chakra-ui/layout";

export function BodyPage(){

  return (
    <Container
      maxWidth={1240}
      m="5rem auto"
      display="flex"
      flexDirection={["column", "column","row"]}
  > 
    
        <Box
          as="div"
          margin="0 auto"
          w={["90%", "45%"]}
        >
          <Text
            fontSize={["18", "22"]}
            color="#47585B"
          >
            A Europa é, por convenção, um dos seis continentes do mundo. 
            Compreendendo a península ocidental da Eurásia, a Europa geralmente 
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Box
          as="div"
          w={["90%", "45%"]}
          ml="6"
          mt="10"
          display="flex"
          justifyContent="center"
          textAlign={["left","center"]}
          alignItems="center"
        >
          <HStack spacing="35">
            <Box>
              <Text
                fontWeight="600"
                fontSize={["30","32", "48"]}
                color="#FFBA08"
              >
                50
              </Text>
              <Text
                fontWeight="600"
                fontSize={["18","22", "24"]}
                color="#47585B"
              >
                países
              </Text>
            </Box>
            <Box>
              <Text
                 fontWeight="600"
                 fontSize={["30","32", "48"]}
                 color="#FFBA08"
              >
                60
              </Text>
              <Text
                fontWeight="600"
                fontSize={["18","22", "24"]}
                color="#47585B"
              >
                línguas
              </Text>
            </Box>
            <Box>
              <Text
                 fontWeight="600"
                 fontSize={["30","32", "48"]}
                 color="#FFBA08"
              >
                27
              </Text>
              <Text
                fontWeight="600"
                fontSize={["18","22", "24"]}
                color="#47585B"
              >
               cidades + 100
              </Text>
            </Box>
          </HStack>
        </Box>
    
  </Container>
  )
}