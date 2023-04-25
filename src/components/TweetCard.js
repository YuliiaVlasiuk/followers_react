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
} from './Tweets.styled';
import { useState } from 'react';

import picture from '../images/picture.png';
import logo from '../images/logo.png';

const getInitialValue = id => {
  const followData = JSON.parse(localStorage.getItem('followers'));

  if (followData && followData.includes(id)) {
    return true;
  } else {
    return false;
  }
};

const getInitialFollovers = (follovers, status) => {
  if (status) {
    return follovers + 1;
  } else return follovers;
};

export const TweetCard = ({ tweet }) => {
  const [status, setStatus] = useState(getInitialValue(tweet.id));

  const [followers, setFollowers] = useState(
    getInitialFollovers(tweet.followers, status)
  );

  const formattedNumber = followers.toLocaleString();

  console.log(followers);

  const handleChange = () => {
    setStatus(!status);

    if (!status) {
      setFollowers(prev => prev + 1);
    } else {
      setFollowers(prev => prev - 1);
    }

    const userId = tweet.id;
    const followData = JSON.parse(localStorage.getItem('followers'));

    if (followData) {
      if (followData.includes(userId)) {
        const filteredFollow = followData.filter(item => item !== userId);
        localStorage.setItem(`followers`, JSON.stringify(filteredFollow));
      } else
        localStorage.setItem(
          `followers`,
          JSON.stringify([...followData, userId])
        );
    } else localStorage.setItem(`followers`, JSON.stringify([userId]));
  };
  return (
    <UserLi>
      <Logos src={logo} alt="logo" />
      <Picture src={picture} alt="picture_question" />
      <Line />
      <Avatar src={tweet.avatar} alt="avatar" />
      <Tweets>{tweet.tweets} tweets</Tweets>
      <FollowersContainer>{formattedNumber} Followers</FollowersContainer>

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
