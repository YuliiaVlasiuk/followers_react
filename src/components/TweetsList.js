import { nanoid } from 'nanoid';
import axios from 'axios';

import {
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
} from './Tweets.styled';

import picture from '../images/picture.png';
import logo from '../images/logo.png';

export const TweetsList = ({ tweets }) => {
  const arrayofBull = [];

  for (let index = 0; index < tweets.length; index++) {
    arrayofBull[index] = false;
  }
  console.log(arrayofBull);

  const handleChange = async (id, following) => {
    console.log(id);
    console.log(following);
    console.log('before', tweets);

    const newFollowers = following
      ? tweets[id - 1].followers - 1
      : tweets[id - 1].followers + 1;
    arrayofBull[id - 1] = !following;

    console.log(newFollowers);
    console.log(arrayofBull);

    try {
      await axios.put(
        `https://644565c3b80f57f581b93898.mockapi.io/tweets/${id}`,
        { followers: newFollowers }
      );
    } catch (error) {
      console.log(error);
    }
    console.log('after', tweets);
  };

  return (
    <Card>
      {tweets.map(tweet => {
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
              {!arrayofBull[tweet.id - 1] && (
                <BtnFalse
                  type="button"
                  onClick={() =>
                    handleChange(tweet.id, arrayofBull[tweet.id - 1])
                  }
                >
                  follow
                </BtnFalse>
              )}
              {arrayofBull[tweet.id - 1] && (
                <BtnTrue type="button">following</BtnTrue>
              )}
            </BtnContainer>
          </UserLi>
        );
      })}
    </Card>
  );
};

// TweetsList.propTypes = {
//   movies: PropTypes.array,
// };
