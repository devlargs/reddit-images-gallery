import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';
import { VFC } from 'react';

const ErrorInfo: VFC = () => (
  <Box maxW="1200px" m="auto">
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>No data found!</AlertTitle>
      <AlertDescription>Please try another keyword.</AlertDescription>
    </Alert>
  </Box>
);

export default ErrorInfo;
