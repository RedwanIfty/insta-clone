import React, { useState } from 'react'
import { Box, VStack,Image, Input } from '@chakra-ui/react'
const AuthForm=()=> {
    const [isLogin,setIsLogin]=useState(true);
  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
    <VStack>
        <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram'/>
        <Input
            placeholder='Email'
            fontSize={14}
            type='email'
        />
        <Input
            placeholder='password'
            fontSize={14}
            type='password'
        />
    </VStack>
    </Box>
    </>
  )
}

export default AuthForm
