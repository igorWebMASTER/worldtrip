import { Image } from "@chakra-ui/image";
import { Box, Container, Grid, HStack, Stack, Text } from "@chakra-ui/layout";
import { BannerPage } from "../components/BannerPage";
import { BodyPage } from "../components/BodyPage";
import { CardsCountries } from "../components/CardsCountries";
import { Header } from "../components/Header";

export default function Page(){
  return (
     <>
        <Header />
        <BannerPage />
        <BodyPage />
        <CardsCountries />
     </>
  )
}