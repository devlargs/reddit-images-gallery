import { Box, Flex, Text } from '@chakra-ui/react';
import { FC, useEffect } from 'react';

const Home: FC = () => {
  const fetchReddit = async (): Promise<void> => {
    const data = await fetch('https://api.imgur.com/3/gallery/r/memes/top/month/1', {
      headers: new Headers({
        Authorization: 'Bearer 10d1babe6435548c5e55cee7e5105d076de72ab5',
      }),
    });

    console.log(data);
  };

  useEffect(() => {
    void fetchReddit();
  }, []);

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
