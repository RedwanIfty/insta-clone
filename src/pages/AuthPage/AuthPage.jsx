import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
// import React, { useState } from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxH={"container.md"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                {/* Left hand side */}
                <Box display={{base:"none",md:"block"}}>
                   <Image src="/auth.png" h={550} alt='phone image'/>
                </Box>
                {/*Right Hand side */}
                <VStack spacing={4} align={"stretch"}>
                    <AuthForm/>
                    <Box textAlign={"center"}>
                        Get the App
                    </Box>
                    <Flex gap={5} justifyContent={"center"}>
                        <Image src='/playstore.png' h={"10"} alt='PlayStore'></Image>
                        <Image src='/microsoft.png' h={"10"} alt='Microsoft'></Image>

                    </Flex>
                </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage
