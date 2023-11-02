import React, { useState } from 'react';
import { Box, Center, Flex, Heading, Input, Button } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/action';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { isLoading, isError, isAuth, errMsg } = useSelector((store) => {
    return {
      isLoading: store.authReducer.isLoading,
      isError: store.authReducer.isError,
      isAuth: store.authReducer.isAuth,
      errMsg: store.authReducer.errMsg,
    };
  }, shallowEqual);

  const loginx = (e) => {
    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Flex justify={'center'} align={'center'} pt={'200px'} flexDir={'column'}>
        {/* 1 */}
        <Box>
          {isLoading ? (
            <Center as={'b'} fontSize={'1rem'}>
              Loading...
            </Center>
          ) : isError ? (
            <Center as={'b'} fontSize={'1rem'}>
              {errMsg}
            </Center>
          ) : isAuth ? (
            <Center as={'b'} fontSize={'1rem'}>
              Login Successfull
            </Center>
          ) : (
            ''
          )}
        </Box>

        {/* 2 */}
        <Flex
          flexDir={'column'}
          gap={'1rem'}
          justify={'center'}
          align={'center'}
          w={'30%'}
          mt={'2rem'}
        >
          <Input
            type="email"
            placeholder="Enter Your Email"
            variant={'filled'}
            mb={'1rem'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter Your Password"
            variant={'filled'}
            mb={'1rem'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            onClick={loginx}
            variant={'filled'}
            bgColor={'wheat'}
            w="100%"
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
