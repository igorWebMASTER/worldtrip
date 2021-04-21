import { Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import Link from "next/link";
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