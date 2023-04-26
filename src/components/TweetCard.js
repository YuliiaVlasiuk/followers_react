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



export const TweetCard = ({ tweet }) => {

    const getInitialValue = id => {
        const arrayOfActiveFallowers = JSON.parse(localStorage.getItem('followers')) && [];
      
        if (arrayOfActiveFallowers && arrayOfActiveFallowers.includes(id)) {
          return true;
        } else {
          return false;
        }
      };



  const [status, setStatus] = useState(getInitialValue(tweet.id));


  const getInitialFollovers = (follovers, status) => {
    if (status) {
      return follovers + 1;
    } else return follovers;
  };



  const [followers, setFollowers] = useState(
     getInitialFollovers(tweet.followers, status)
  );


 


  const handleChange = () => {
    setStatus(!status);

    if (!status) {
      setFollowers(prevstate => prevstate + 1);
    } else {
      setFollowers(prevstate => prevstate - 1);
    }

    const arrayOfActiveFallowers = JSON.parse(localStorage.getItem('followers')) && [];

    const  filteredFollow = (arrayOfActiveFallowers.includes(tweet.id)) ? arrayOfActiveFallowers.filter(item => item !== tweet.id) : [...arrayOfActiveFallowers, tweet.id]     
       
    localStorage.setItem(`followers`, JSON.stringify(filteredFollow));


  };
  return (
    <UserLi>
      <Logos src={logo} alt="logo" />
      <Picture src={picture} alt="picture_question" />
      <Line />
      <Avatar src={tweet.avatar} alt="avatar" />
      <Tweets>{tweet.tweets} tweets</Tweets>
      <FollowersContainer>{followers.toLocaleString('en-US', { maximumFractionDigits: 0 })} Followers</FollowersContainer>

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
