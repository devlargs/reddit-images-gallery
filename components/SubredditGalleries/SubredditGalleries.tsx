import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Box, chakra, Flex, Image, Text } from '@chakra-ui/react';
import Card from '@components/Card';
import ErrorInfo from '@components/ErrorInfo';
import StaticInfo from '@components/StaticInfo';
import casual from 'casual-browserify';
import { FC } from 'react';
import { RedditProps } from 'typings/reddit';

const SubredditGalleries: FC<{ data: RedditProps[] }> = ({ data }) => {
  return (
    <Box>
      {data.length ? (
        <Box
          maxW="1000px"
          m="auto"
          px={{
            base: 0,
            lg: 10,
          }}
        >
          <Flex>
            <Box maxW="640px" mx="4">
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
                        <Text color="#787CA6" fontSize="12px" fontWeight="400">
                          Posted by u/{casual.username}
                        </Text>
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

            <Box d={{ base: 'none', lg: 'initial' }}>
              <StaticInfo />
            </Box>
          </Flex>
        </Box>
      ) : (
        <ErrorInfo />
      )}
    </Box>
  );
};

export default SubredditGalleries;
