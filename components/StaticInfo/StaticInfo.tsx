import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Card from '@components/Card';
import { VFC } from 'react';
import useRedditSearch from 'store/useRedditInput';

const StaticInfo: VFC = () => {
  const searchText = useRedditSearch((e) => e.searchText);
  const setSearchText = useRedditSearch((e) => e.setSearchText);

  return (
    <>
      {[`About ${searchText.toLowerCase()}`, 'You can also check', 'FAQ', 'Rules'].map((item, index) => {
        return (
          <Box key={index}>
            <Card minW="310px" p="0">
              <Box p="12px" bg="blue.500">
                <Text fontSize="14px" lineHeight="18px" fontWeight="700" color="white">
                  {item}
                </Text>
              </Box>
              <Box p="12px">
                {index === 1 ? (
                  <Box>
                    {['cats', 'memes', 'philippines'].map((item) => {
                      return (
                        <>
                          {item !== searchText ? (
                            <Box key={item} px="4" mt="2">
                              <Flex alignItems="center" justifyContent="space-between">
                                <Flex alignItems="center">
                                  <Box mr="4" boxSize="32px" borderRadius="50%" bg="#3182CE" />
                                  <Box>r/{item}</Box>
                                </Flex>
                                <Box>
                                  <Button colorScheme="blue" size="sm" onClick={(): void => setSearchText(item)}>
                                    Check
                                  </Button>
                                </Box>
                              </Flex>
                            </Box>
                          ) : (
                            <></>
                          )}
                        </>
                      );
                    })}
                  </Box>
                ) : (
                  <Text fontSize="14px" lineHeight="18px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Venenatis a
                    condimentum vitae sapien. Orci porta non pulvinar neque laoreet suspendisse interdum. Tristique
                    senectus et netus et.
                  </Text>
                )}
              </Box>
            </Card>
          </Box>
        );
      })}
    </>
  );
};

export default StaticInfo;
