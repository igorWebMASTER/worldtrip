import { Flex, Text } from "@chakra-ui/layout";
import { Logo } from "./Logo";

export function Header (){
  return(
    <Flex 
      as="header" 
      w="100%"
      h="70"
      mt="4"
      px="6"
      align="center"
      justify="center"
  >
    <Logo />
  </Flex>
  )
}