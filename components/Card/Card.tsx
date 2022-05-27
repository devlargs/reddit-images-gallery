import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';

const Card: FC<BoxProps> = ({ children, ...restProps }) => {
  return (
    <Box
      bg="white"
      border="1px solid lightgray"
      mb="4"
      borderRadius="3px"
      p={{
        base: 5,
        md: '10',
      }}
      _hover={{
        border: '1px solid black',
      }}
      transition="0.5s ease-in"
      {...restProps}
    >
      {children}
    </Box>
  );
};

export default Card;
