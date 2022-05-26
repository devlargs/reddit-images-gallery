import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <Box h="64px" bg="#33A8FF"></Box>
      <Box h="80px" maxW="1200px" m="auto">
        <Flex>
          <Box boxSize="80px" borderRadius="50%" bg="blue.500" border="3px solid white" mt="-5" />
          <Box>
            <Text fontSize="28px" ml="4">
              Memes
            </Text>
            <Text fontSize="16px" ml="4" color="gray.400">
              r/memes
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box bg="#DAE0E6" minH="calc(100vh - 224px)"></Box>
    </>
  );
};

export default Home;
