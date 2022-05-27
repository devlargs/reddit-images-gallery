import { Search2Icon } from '@chakra-ui/icons';
import { Box, chakra, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { useEffect, useState, VFC } from 'react';
import { AiFillGithub } from 'react-icons/ai';
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
    <Box h="80px" bg="blue.900" position="fixed" width="100%" px="4" zIndex={1}>
      <Flex h="80px" alignItems="center" maxW="1200px" m="auto" justifyContent="space-between">
        <Flex alignItems="center">
          <Text
            ml="4"
            mr="10"
            color="white"
            fontWeight="bold"
            d={{
              base: 'none',
              md: 'initial',
            }}
          >
            Imgur Subreddit Galleries
          </Text>

          <InputGroup
            width={{
              base: '100%',
              md: '200px',
            }}
          >
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

        <chakra.a
          href="https://github.com/devlargs/reddit-images-gallery"
          target="_blank"
          rel="noreferrer"
          d={{
            base: 'none',
            md: 'initial',
          }}
        >
          <AiFillGithub color="white" fontSize="20px" cursor="pointer" />
        </chakra.a>
      </Flex>
    </Box>
  );
};

export default Header;
