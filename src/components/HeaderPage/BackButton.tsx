import {Box,Image } from '@chakra-ui/react';
import Link from 'next/link';

export function BackButton(){
  return(
    <Box
      position="absolute"
      left={["4","0"]}
    >
      <Link href="/">
        <Image cursor="pointer" src="/chevron-left.svg" alt="Back button" w={6} />
      </Link>
    </Box>
  )
}