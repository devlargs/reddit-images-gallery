import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Text, useToast } from '@chakra-ui/react';
import { FC } from 'react';

const Upvote: FC<{ views }> = ({ views }) => {
  const toast = useToast();
  const vote = (type: 'up' | 'down'): void => {
    toast({
      description: type === 'up' ? 'Upvoted' : 'Downvoted',
      status: type === 'up' ? 'success' : 'error',
      duration: 3000,
      position: 'top-right',
    });
  };

  return (
    <>
      <ArrowUpIcon
        _hover={{
          color: 'green',
          fontWeight: 'bold',
          fontSize: '20px',
        }}
        transition="0.5s ease"
        cursor="pointer"
        onClick={(): void => vote('up')}
      />
      <Text>{views > 1000 ? `${(views / 1000).toFixed(2)}k` : views}</Text>
      <ArrowDownIcon
        mt="-2"
        _hover={{
          color: 'red',
          fontWeight: 'bold',
          fontSize: '24px',
        }}
        transition="0.5s ease"
        cursor="pointer"
        onClick={(): void => vote('down')}
      />
    </>
  );
};

export default Upvote;
