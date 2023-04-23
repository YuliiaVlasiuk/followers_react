import { useState, useEffect } from 'react';
import { TweetsList } from '../components/TweetsList';

import { LoadMore } from 'components/Tweets.styled';
import axios from 'axios';

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [buttonVisial, setButtonVisial] = useState(false);
  const [page, setPage] = useState(1);

  async function getTweets(page) {
    try {
      const response = await axios.get(
        `https://644565c3b80f57f581b93898.mockapi.io/tweets?page=${page}&limit=3`
      );
      const newtweet = response.data;
      setTweets(prevtweets => [...prevtweets, ...newtweet]);
      setButtonVisial(true);
      if (page === 4) {
        setButtonVisial(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleLoadMore = () => {
    setPage(prevpage => prevpage + 1);
  };

  useEffect(() => {
    getTweets(page);
  }, [page]);

  return (
    <main>
      <TweetsList tweets={tweets} />
      {buttonVisial && tweets.length > 0 && (
        <LoadMore width="300px" onClick={handleLoadMore}>Load more</LoadMore>
      )}
    </main>
  );
};

export default Tweets;
