import React, { useState } from 'react';
import { Box, VStack, Image, Input, Button, Flex, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs,setInput]=useState({
    email:'',
    password:'',
    confirmPassword:''
  })
  const navigate= useNavigate();
  const handleAuth=()=>{
    if(!inputs.email || !inputs.password){
      alert('please insert all the fields');
      return;
    }
    else
    {
      navigate('/');
    }
  }
  return (
    <>
      <Box border="1px solid gray" borderRadius={4} padding={5} marginBottom={4}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor="pointer" alt="Instagram" />
          <Input 
            placeholder="Email" 
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e)=>setInput({...inputs,email:e.target.value})}
          />
          <Input 
            placeholder="Password" 
            fontSize={14} 
            type="password"
            value={inputs.password}
            onChange={(e)=>setInput({...inputs,password:e.target.value})}
          />
          {!isLogin && 
            <Input 
              placeholder="Confirm Password" 
              fontSize={14} 
              type="password"
              value={inputs.confirmPassword}
              onChange={(e)=>setInput({...inputs,confirmPassword:e.target.value})} 
            />}
          <Button w="full" colorScheme="blue" size="sm" fontSize={14} onClick={handleAuth}>
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
          <Flex alignItems="center" justifyContent="center" my={4} gap={1} w="full">
            <Box flex={2} h="1px" bg="gray.400" />
            <Text mx={1} color="gray.500">
              OR
            </Text>
            <Box flex={2} h="1px" bg="gray.400" />
          </Flex>
          <Flex alignItems="center" justifyContent="center" cursor="pointer">
            <Image src="/google.png" w={5} alt="Google Logo" />
            <Text mx={1} color="blue.500">
              <Link to="/">Log in with Google</Link>
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border="1px solid gray" borderRadius={4} padding={5}>
        <Flex alignItems="center" justifyContent="center" flexDirection="column">
          <Text>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </Text>
          <Text
            onClick={() => setIsLogin(!isLogin)}
            color="blue.500"
            cursor="pointer"
            // textDecoration="underline"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
