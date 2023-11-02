import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Flex
      justify={'space-around'}
      align={'center'}
      position={'fixed'}
      bgColor={'wheat'}
      zIndex={'1'}
      w={'100%'}
      h={'70px'}
      p={'0rem 1rem'}
    >
      <Heading>
        <Link to={'/'}>Login</Link>
      </Heading>

      <Heading>
        <Link to={'/kanban-board'}>Kanban Board</Link>
      </Heading>
    </Flex>
  );
};
