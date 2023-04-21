import { MovieName, MovieLi, All } from './MovieList.styled';
//import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
//import css from './TweetsList.module.css';

export const TweetsList = ({ tweets }) => {
  //const location = useLocation();
  console.log('list', tweets);
  return (
    <All>
      {tweets.map(tweet => (
        <MovieLi key={tweet.id}>


          <MovieName>{tweet.user}</MovieName>
          <img
          src={tweet.avatar}
          width={240}
          alt="avatar"     />
          <p>{tweet.tweets} tweets</p>
          <p>{tweet.followers} followers</p>
   
        </MovieLi>
      ))}
    </All>
  );
};

TweetsList.propTypes = {
  movies: PropTypes.array,
};
