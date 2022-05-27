import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  chakra,
  Flex,
  Image,
  Spinner,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import Card from '@components/Card';
import { FC, useEffect, useState } from 'react';
import { RedditProps } from 'typings/reddit';

const Home: FC = () => {
  const [loading, setLoading] = useBoolean(false);
  const [data, setData] = useState([]);

  const fetchReddit = async (): Promise<void> => {
    setLoading.toggle();
    const data = await fetch('https://api.imgur.com/3/gallery/r/memes/top/month/1', {
      headers: new Headers({
        Authorization: `${process.env.NEXT_PUBLIC_IMGUR_AUTH}`,
      }),
    });
    const res = await data.json();
    console.log(res);
    const imageTypes = ['image/jpeg', 'image/gif', 'image/png', 'image/webp'];
    setData(res.data.filter((item: RedditProps) => imageTypes.includes(item.type)));
    setLoading.toggle();
  };

  useEffect(() => {
    void fetchReddit();
  }, []);

  return (
    <Box pt="80px">
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
      <Box bg="#DAE0E6" minH="calc(100vh - 224px)" pt="4">
        {loading ? (
          <Box d="flex" justifyContent="center">
            <Spinner size="lg" mt="3" />
          </Box>
        ) : (
          <Box>
            {data.length ? (
              <Box maxW="1000px" m="auto" px="10">
                <Flex>
                  <Box maxW="640px">
                    {data.map((item: RedditProps) => {
                      return (
                        <Card key={item.id}>
                          <Flex>
                            <Box mr="4" textAlign="center">
                              <ArrowUpIcon
                                _hover={{
                                  color: 'green',
                                  fontWeight: 'bold',
                                  fontSize: '20px',
                                }}
                                transition="0.5s ease"
                                cursor="pointer"
                              />
                              <Text>{item.views > 1000 ? `${(item.views / 1000).toFixed(2)}k` : item.score}</Text>
                              <ArrowDownIcon
                                mt="-2"
                                _hover={{
                                  color: 'red',
                                  fontWeight: 'bold',
                                  fontSize: '24px',
                                }}
                                transition="0.5s ease"
                                cursor="pointer"
                              />
                            </Box>
                            <Box>
                              <chakra.h3 color="#2e2e2e" fontWeight="bold" fontSize="24px" mb="4">
                                {item.title}
                              </chakra.h3>
                              <Image src={item.link} alt={item.title} />
                            </Box>
                          </Flex>
                        </Card>
                      );
                    })}
                  </Box>

                  <Box>Lorem</Box>
                </Flex>
              </Box>
            ) : (
              <Box d="flex">
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle>No data found!</AlertTitle>
                  <AlertDescription>Please try another keyword.</AlertDescription>
                </Alert>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
