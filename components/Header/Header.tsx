import { Search2Icon } from '@chakra-ui/icons';
import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { VFC } from 'react';

const Header: VFC = () => {
  return (
    <Box h="80px" bg="blue.900" position="fixed" width="100%">
      <Flex h="80px" alignItems="center" maxW="1200px" m="auto">
        <Text ml="4" mr="10" color="white" fontWeight="bold">
          Reddit Images Gallery
        </Text>
        <InputGroup width="200px">
          <InputLeftElement pointerEvents="none" color="white">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Search Reddit" color="white" />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Header;
