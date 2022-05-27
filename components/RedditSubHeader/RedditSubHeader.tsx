import { Box, Flex, Skeleton, Text } from '@chakra-ui/react';
import { FC } from 'react';
import useRedditSearch from 'store/useRedditInput';

const RedditSubHeader: FC<{ loading: boolean }> = ({ loading }) => {
  const searchText = useRedditSearch((e) => e.searchText);

  return (
    <Box h="80px" maxW="1200px" m="auto" px="4">
      <Flex>
        <Box boxSize="80px" borderRadius="50%" bg="blue.500" border="3px solid white" mt="-5" />
        <Box>
          <Skeleton mt="2" isLoaded={!loading}>
            <Text fontSize="28px" ml="4">
              {searchText ? searchText : 'Search something'}
            </Text>

            {searchText ? (
              <Text fontSize="16px" ml="4" color="gray.400">
                r/{searchText.toLowerCase()}
              </Text>
            ) : (
              <></>
            )}
          </Skeleton>
        </Box>
      </Flex>
    </Box>
  );
};

export default RedditSubHeader;
