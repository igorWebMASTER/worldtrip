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
      >
        Cidades +100
      </Text>

      <Grid
          templateColumns="repeat(4, 1fr)" 
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
              imgIco="/LondoThumb.png"
              image="/Londo.png"
          />

          <Card  
              title="Roma"
              subtitle="Itália"
              imgIco="/LondoThumb.png"
              image="/Londo.png"
          />

          <Card  
              title="Praga"
              subtitle="República Tcheca"
              imgIco="/LondoThumb.png"
              image="/Londo.png"
          />

          <Card  
              title="Amsterdã"
              subtitle="Holanda"
              imgIco="/LondoThumb.png"
              image="/Londo.png"
          />

          
      </Grid>

    </Container>
  )
}