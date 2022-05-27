import { Box, Text } from '@chakra-ui/react';
import Card from '@components/Card';
import { VFC } from 'react';
import useRedditSearch from 'store/useRedditInput';

const StaticInfo: VFC = () => {
  const searchText = useRedditSearch((e) => e.searchText);

  return (
    <>
      {[`About ${searchText.toLowerCase()}`, 'FAQ', 'Rules'].map((item, index) => {
        return (
          <Box key={index}>
            <Card minW="310px" p="0">
              <Box p="12px" bg="blue.500">
                <Text fontSize="14px" lineHeight="18px" fontWeight="700" color="white">
                  {item}
                </Text>
              </Box>
              <Box p="12px">
                <Text fontSize="14px" lineHeight="18px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Venenatis a
                  condimentum vitae sapien. Orci porta non pulvinar neque laoreet suspendisse interdum. Tristique
                  senectus et netus et.
                </Text>
              </Box>
            </Card>
          </Box>
        );
      })}
      {/* <Box d="block">
        {Array.from({ length: 3 }).map((_, i) => (
          <Image src={`/images/ads/${i + 1}.jpg`} key={i} alt={`${i}`} w={310} h="100%" />
        ))}
      </Box> */}
    </>
  );
};

export default StaticInfo;
