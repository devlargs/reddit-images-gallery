import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Box, chakra, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import Card from '@components/Card';
import ErrorInfo from '@components/ErrorInfo';
import RedditSubHeader from '@components/RedditSubHeader';
import { FC, useEffect, useState } from 'react';
import useRedditSearch from 'store/useRedditInput';
import { RedditProps } from 'typings/reddit';

const Home: FC = () => {
  const searchText = useRedditSearch((e) => e.searchText);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<RedditProps[]>([]);

  const fetchReddit = async (searchText): Promise<void> => {
    const data = await fetch(`https://api.imgur.com/3/gallery/r/${searchText}/top/month/1`, {
      headers: new Headers({
        Authorization: `${process.env.NEXT_PUBLIC_IMGUR_AUTH}`,
      }),
    });
    const res = await data.json();
    const imageTypes = ['image/jpeg', 'image/gif', 'image/png', 'image/webp'];
    setData(res.data.filter((item: RedditProps) => imageTypes.includes(item.type)));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    void fetchReddit(searchText);
  }, [searchText]);

  return (
    <Box pt="80px">
      <Box h="64px" bg="#33A8FF" />
      <RedditSubHeader loading={loading} />
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
                    {data.map((item) => {
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
              <ErrorInfo />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
