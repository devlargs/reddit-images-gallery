import { Box, Spinner } from '@chakra-ui/react';
import RedditSubHeader from '@components/RedditSubHeader';
import SubredditGalleries from '@components/SubredditGalleries';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import useRedditSearch from 'store/useRedditInput';
import { RedditProps } from 'typings/reddit';

const Home: FC = () => {
  const searchText = useRedditSearch((e) => e.searchText);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<RedditProps[]>([]);

  const fetchReddit = async (searchText): Promise<void> => {
    try {
      const data = await fetch(`https://api.imgur.com/3/gallery/r/${searchText}/top/month/1`, {
        headers: new Headers({
          Authorization: `${process.env.NEXT_PUBLIC_IMGUR_AUTH}`,
        }),
      });
      const res = await data.json();
      const imageTypes = ['image/jpeg', 'image/gif', 'image/png', 'image/webp'];
      setData(res.data.filter((item: RedditProps) => imageTypes.includes(item.type)));
    } catch (ex) {
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    void fetchReddit(searchText);
  }, [searchText]);

  return (
    <>
      <Head>
        <title>Imgur Subreddit Galleries</title>
      </Head>
      <Box pt="80px">
        <Box h="64px" bg="#33A8FF" />
        <RedditSubHeader loading={loading} />
        <Box bg="#DAE0E6" minH="calc(100vh - 224px)" pt="4">
          {loading ? (
            <Box d="flex" justifyContent="center">
              <Spinner size="lg" mt="3" />
            </Box>
          ) : (
            <SubredditGalleries data={data} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Home;
