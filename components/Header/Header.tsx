import { Search2Icon } from '@chakra-ui/icons';
import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { useEffect, useState, VFC } from 'react';
import useRedditSearch from 'store/useRedditInput';

const Header: VFC = () => {
  const searchText = useRedditSearch((e) => e.searchText);
  const setSearchText = useRedditSearch((e) => e.setSearchText);
  const [searchQuery, setSearchQuery] = useState(searchText);

  useEffect(() => {
    const delayFn = setTimeout(() => setSearchText(searchQuery), 500);
    return () => clearTimeout(delayFn);
    // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <Box h="80px" bg="blue.900" position="fixed" width="100%" px="4">
      <Flex h="80px" alignItems="center" maxW="1200px" m="auto">
        <Text ml="4" mr="10" color="white" fontWeight="bold">
          Imgur Subreddit Galleries
        </Text>

        <InputGroup width="200px">
          <InputLeftElement pointerEvents="none" color="white">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search Reddit"
            color="white"
            required
            value={searchQuery}
            onChange={(e): void => setSearchQuery(e.target.value)}
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Header;
