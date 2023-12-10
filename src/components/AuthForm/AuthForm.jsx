import React, { useState } from 'react'
import { Box, VStack,Image, Input, Button, Flex,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
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
        {!isLogin ? <Input placeholder='Confirm Password' fontSize={14} type='password'/> : null}
        <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14}>
          {isLogin? "Login" : "Sing Up"}
        </Button>
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
          <Box  flex={2} h={"1px"} bg={"gray.400"}/>
            <Text mx={1} color={"white"}>OR</Text>
          <Box  flex={2} h={"1px"} bg={"gray.400"}/>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
          <Image src='/google.png' w={5} alt='Google Logo'/>
          <Text mx={1} color={"blue.500"}>
            <Link to='/'>Log in with Google</Link>
          </Text>
        </Flex>
    </VStack>
    </Box>
    </>
  )
}

export default AuthForm
