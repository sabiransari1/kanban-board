import React, { useState, useEffect } from 'react';
import {
  Box,
  Center,
  Grid,
  Text,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  ModalContent,
  Input,
  Select,
  Flex,
  Button,
} from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { getTasks } from '../redux/task/action';

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [taskname, setTaskname] = useState('');
  const [description, setDescription] = useState('');
  const [subtaskname, setSubtaskname] = useState('');
  const [status, setStatus] = useState('');

  const dispatch = useDispatch();

  const getNewtask = () => {
    onClose();

    const newtask = {
      taskname,
      description,
      subtaskname,
      status,
    };

    setTaskname('');
    setDescription('');
    setSubtaskname('');
    setStatus('');
  };

  useEffect(() => {
    dispatch(getTasks);
  }, []);

  return (
    <Box>
      {/* 1 */}
      <Navbar />
      {/* 2 */}
      <Grid pt={'100px'} templateColumns={'29% 69%'} gap={'1rem'}>
        {/* 1 */}
        <Box p={'1rem'}>
          <Box
            borderRadius={'5px'}
            boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
            p={'1rem'}
            h={'100vh'}
          >
            <Text as={'b'}>
              <Center>ALL BOARDS</Center>
            </Text>

            <Text as={'b'}>
              <Center>Board 1</Center>
            </Text>

            <Text as={'b'}>
              <Center>+ Create New Board</Center>
            </Text>
          </Box>
        </Box>

        {/* 2 */}
        <Box p={'1rem'}>
          <Box
            borderRadius={'5px'}
            boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
            p={'1rem'}
            h={'100vh'}
          >
            <Flex justify={'space-between'} align={'center'}>
              <Text as={'b'}>
                <Center>Board 1</Center>
              </Text>

              <Button onClick={onOpen} variant={'filled'} bgColor={'wheat'}>
                Add New Task
              </Button>
            </Flex>
          </Box>
        </Box>
      </Grid>

      {/* ============== MODAL ============== */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Task</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              placeholder="Task name"
              mb={'1rem'}
              value={taskname}
              onChange={(e) => setTaskname(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Description"
              mb={'1rem'}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Subtask"
              mb={'1rem'}
              value={subtaskname}
              onChange={(e) => setSubtaskname(e.target.value)}
            />

            <Select
              mb={'1rem'}
              // value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Current Status</option>
              <option>Todo</option>
              <option>Doing</option>
              <option>Done</option>
            </Select>

            <Button
              onClick={getNewtask}
              w={'100%'}
              variant={'filled'}
              bgColor={'wheat'}
            >
              Create Task
            </Button>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
