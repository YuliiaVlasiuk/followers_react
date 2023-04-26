//import PropTypes from 'prop-types';
import {
  UserLi,
  Logos,
  Picture,
  Line,
  Avatar,
  Tweets,
  FollowersContainer,
  BtnTrue,
  BtnContainer,
  BtnFalse,
} from './TweetsCard.styled';
import { useState } from 'react';


import picture from '../../images/picture.png';
import logo from '../../images/logo.png';

export const TweetCard = ({ tweet }) => {
  const getStatusOfFollower = id => {
    const arrayofFollowers = JSON.parse(localStorage.getItem('followers'));
    if (arrayofFollowers && arrayofFollowers.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  const getFollowers = (followers, status) => {
    if (status) {
      return followers + 1;
    } else return followers;
  };

  const [status, setStatus] = useState(getStatusOfFollower(tweet.id));

  const [followers, setFollowers] = useState(
    getFollowers(tweet.followers, status)
  );

  const handleChange = () => {
    if (status) {
      setFollowers(prevstate => prevstate - 1);
    } else {
      setFollowers(prevstate => prevstate + 1);
    }

    const arrayofFollowers =
      JSON.parse(localStorage.getItem('followers')) || [];

    if (arrayofFollowers.includes(tweet.id)) {
      const newArrayofFollowers = arrayofFollowers.filter(
        item => item !== tweet.id
      );
      localStorage.setItem(`followers`, JSON.stringify(newArrayofFollowers));
    } else
      localStorage.setItem(
        `followers`,
        JSON.stringify([...arrayofFollowers, tweet.id])
      );

    setStatus(!status);
  };
  return (
    <UserLi>
      <Logos src={logo} alt="logo" />
      <Picture src={picture} alt="picture_question" />
      <Line />
      <Avatar src={tweet.avatar} alt="avatar" />
      <Tweets>{tweet.tweets} tweets</Tweets>
      <FollowersContainer>
        {followers.toLocaleString('en-US', { maximumFractionDigits: 0 })}{' '}
        Followers
      </FollowersContainer>

      <BtnContainer>
        {!status && (
          <BtnFalse type="button" onClick={handleChange}>
            follow
          </BtnFalse>
        )}

        {status && (
          <BtnTrue type="button" onClick={handleChange}>
            following
          </BtnTrue>
        )}
      </BtnContainer>
    </UserLi>
  );
};

// TweetCard.propTypes = {
//   id: PropTypes.string,
//   user: PropTypes.string,
//   avatar: PropTypes.string,
//   tweets: PropTypes.number,
//   followers: PropTypes.number,
// };
