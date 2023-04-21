import { useState, useEffect} from 'react';
import { TweetsList } from '../components/TweetsList';

import axios from 'axios';

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  async function getTweets() {
    try {
      const response = await axios.get('https://6442e85690738aa7c0686a58.mockapi.io/tweets');
      setTweets(response.data);
    } catch (error) {
      console.log(error);
    }
  }
 useEffect(() => {
  getTweets();
}, []);
  return (
    <main>
       <TweetsList tweets={tweets} />
    </main>
  );
};

export default Tweets;









