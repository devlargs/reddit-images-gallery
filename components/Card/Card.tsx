import { Box } from '@chakra-ui/react';
import { FC } from 'react';

const Card: FC = ({ children }) => {
  return (
    <Box bg="white" border="1px solid lightgray" mb="4" borderRadius="3px" p="10">
      {children}
    </Box>
  );
};

export default Card;
