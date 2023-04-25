import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import picture from '../images/picture.png';
import logo from '../images/logo.png';

import {
  LoadMore,
  UserLi,
  Logos,
  Card,
  Picture,
  Line,
  Avatar,
  Tweets,
  Followers,
  BtnTrue,
  BtnContainer,
  BtnFalse,
} from 'components/Tweets.styled';

import axios from 'axios';

export const Users = () => {
  const [tweets, setTweets] = useState([]);
  const [buttonVisial, setButtonVisial] = useState(false);
  const [limit, setLimit] = useState(3);

  const [following, setFollowing] = useState({});

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
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = async (id, status) => {
    console.log(following);
    setFollowing(prevState => {
      const newState = { ...prevState };

      if (status) {
        delete newState[id];
      } else {
        newState[id] = true;
      }

      return newState;
    });

    setTweets(prevState => {
      return prevState.map(tweet => {
        if (tweet.id === id) {
          const updateFollowers = status
            ? tweet.followers - 1
            : tweet.followers + 1;

          axios
            .put(`tweets/${id}`, { followers: updateFollowers })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error(error);
            });
          return {
            ...tweet,
            followers: updateFollowers,
          };
        }

        return tweet;
      });
    });
  };

  const handleLoadMore = () => {
    setLimit(prevpage => prevpage + 3);
  };

  useEffect(() => {
    getTweets(limit);
  }, [limit]);

  return (
    <main>
      <Card>
        {tweets.map(tweet => {
          const status = following[tweet.id];

          return (
            <UserLi key={nanoid()}>
              <Logos src={logo} alt="logo" />
              <Picture src={picture} alt="picture_question" />
              <Line />
              <Avatar src={tweet.avatar} alt="avatar" />
              <Tweets>{tweet.tweets} tweets</Tweets>
              <Followers>
                {tweet.followers.toLocaleString('en-US')} Followers
              </Followers>
              <BtnContainer>
                {!status && (
                  <BtnFalse
                    type="button"
                    onClick={() => handleChange(tweet.id, status)}
                  >
                    follow
                  </BtnFalse>
                )}

                {status && (
                  <BtnTrue
                    type="button"
                    onClick={() => handleChange(tweet.id, status)}
                  >
                    following
                  </BtnTrue>
                )}
              </BtnContainer>
            </UserLi>
          );
        })}
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
