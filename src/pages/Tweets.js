import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

import { LoadMore, Card, BackBtn } from './Tweets.styled';
import { TweetCard } from 'components/TweetCard/TweetCard';


export const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [buttonVisial, setButtonVisial] = useState(false);
  const [limit, setLimit] = useState(3);

  const location = useLocation();
  const backToHome = location.state?.from ?? '/';

  async function getTweets(limit) {
    try {
      const response = await axios.get(
        ` https://6446ed517bb84f5a3e3532bf.mockapi.io/tweets?page=1&limit=${limit}`
      );

      setTweets(response.data);
      setButtonVisial(true);
      if (limit > 10) {
        setButtonVisial(false);
      }
    } catch (error) {}
  }

  const handleLoadMore = () => {
    setLimit(prevpage => prevpage + 3);
  };

  useEffect(() => {
    getTweets(limit);
  }, [limit]);

  return (
    <main>
      <BackBtn to={backToHome}>Back to home</BackBtn>

      <Card>
        {tweets.map(tweet => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </Card>

      {buttonVisial && tweets.length > 0 && (
        <LoadMore width="300px" onClick={handleLoadMore}>
          Load more
        </LoadMore>
      )}
    </main>
  );
};

export default Tweets;
