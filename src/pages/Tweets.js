import { useState, useEffect } from 'react';
import { LoadMore, Card, BackBtn } from 'components/Tweets.styled';
import axios from 'axios';
import { TweetCard } from 'components/TweetCard';
import { useLocation } from 'react-router-dom';


export const Users = () => {
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
       {/* <BackLink to={backLinkHref}>Back to products</BackLink> */}
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

export default Users;
