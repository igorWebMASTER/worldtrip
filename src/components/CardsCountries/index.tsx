import { Box, Container, Grid, Image, Text } from "@chakra-ui/react";
import { Card } from "./Card";

export function CardsCountries(){
  return (
      <Container
        maxWidth={1160}
        m="4rem auto"
      > 
        <Text
          fontSize="32"
          fontWeight="500"
          color="#47585B"
          ml={["2" , "0"]}
        >
          Cidades +100
        </Text>

      <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]} 
          mt="8"
          h="590"
          gap={8}
      >
          <Card  
              title="Londres"
              subtitle="Reino unido"
              imgIco="/LondoThumb.png"
              image="/Londo.png"
          />

          <Card  
              title="Paris"
              subtitle="França"
              imgIco="/paris-icon.png"
              image="/Paris.png"
          />

          <Card  
              title="Roma"
              subtitle="Itália"
              imgIco="/italia-icon.png"
              image="/Roma.png"
          />

          <Card  
              title="Praga"
              subtitle="República Tcheca"
              imgIco="/praga-icon.png"
              image="/Praga.png"
          />

          <Card  
              title="Amsterdã"
              subtitle="Holanda"
              imgIco="/amsterda-icon.png"
              image="/Amsterda.png"
          />

          
      </Grid>

    </Container>
  )
}