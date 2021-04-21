import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import Link from "next/link";
import { Logo } from "./Logo";
import { useState } from "react";
import { BackButton } from "./BackButton";

export function HeaderPage (){
 

  return(
    <Flex
      as="header"
      maxW={1160}
      m="0 auto" 
      h="70"
      mt="4"
      px="6"
      align="center"
      justify="center"
      position="relative"
  >
    <BackButton />
    <Center
    > 
      <Logo />
    </Center>
  </Flex>
  )
}