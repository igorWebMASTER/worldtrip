import { BannerPage } from "../components/BannerPage";
import { BodyPage } from "../components/BodyPage";
import { CardsCountries } from "../components/CardsCountries";
import { HeaderPage } from "../components/HeaderPage";

export default function Page(){
  return (
     <>
        <HeaderPage />
        <BannerPage />
        <BodyPage />
        <CardsCountries />
     </>
  )
}