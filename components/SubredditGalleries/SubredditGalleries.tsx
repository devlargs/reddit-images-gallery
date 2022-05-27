import { Box, chakra, Flex, Image, Text } from '@chakra-ui/react';
import Card from '@components/Card';
import ErrorInfo from '@components/ErrorInfo';
import StaticInfo from '@components/StaticInfo';
import Upvote from '@components/Upvote';
import casual from 'casual-browserify';
import { FC } from 'react';
import { BiCommentDetail, BiDownload, BiShareAlt } from 'react-icons/bi';
import { RedditProps } from 'typings/reddit';

const SubredditGalleries: FC<{ data: RedditProps[] }> = ({ data }) => {
  const buttons = [
    {
      text: 'Comments',
      icon: <BiCommentDetail />,
    },
    {
      text: 'Share',
      icon: <BiShareAlt />,
    },
    {
      text: 'Save',
      icon: <BiDownload />,
    },
  ];

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
                        <Upvote views={item.score} />
                      </Box>
                      <Box>
                        <Text color="#787CA6" fontSize="12px" fontWeight="400">
                          Posted by u/{casual.username}
                        </Text>
                        <chakra.h3 color="#2e2e2e" fontWeight="bold" fontSize="24px" mb="4">
                          {item.title}
                        </chakra.h3>
                        <Image src={item.link} alt={item.title} />
                        <Flex mt="8">
                          {buttons.map((item, i) => (
                            <Box cursor="pointer" key={i} mr={5}>
                              <Flex alignItems="center">
                                {item.icon}
                                <Text
                                  ml="1"
                                  fontSize="12px"
                                  color="#878a8c"
                                  lineHeight="12px"
                                  _hover={{
                                    fontWeight: 'bold',
                                  }}
                                >
                                  {item.text}
                                </Text>
                              </Flex>
                            </Box>
                          ))}
                        </Flex>
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
