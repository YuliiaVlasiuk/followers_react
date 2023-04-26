import styled from "styled-components";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Logos = styled.img`
position:absolute;
top: 20px;
left: 20px;
`
export const MovieName = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  margin-bottom: 0;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;
export const UserLi = styled.li`
position:relative;
list-style-type: none;
width: 380px;
height: 460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
border-radius:20px;

  &:hover {
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
  
`;

export const Picture = styled.img`
padding: 28px 36px 18px 36px;
`;

export const Line = styled.div`
height: 8px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`
export const Avatar = styled.img`
position: absolute;
top:178px;
left: 150px;
width: 80px;
height: 80px;
border-radius: 50%;
border: 8px solid #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`;

export const Tweets = styled.p`
text-align:center;
padding-top: 62px;
margin: 0;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`;

export const FollowersContainer = styled.p`
text-align:center;
padding-top: 16px;
margin: 0;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`

export const Card=styled.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
`

export const BtnContainer = styled.div`
margin: 0 92px 0 92px;
padding-top: 26px;
`;

export const BtnFalse = styled.button`
width: 100%;
padding: 14px 28px 14px 28px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
`;

export const BtnTrue = styled.button`
width: 100%;
padding: 14px 28px 14px 28px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
background: #5CD3A8;
`;

export const LoadMore = styled.button`
width: 300px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;

text-align: center;
display: flex;
justify-content: center;
margin-left: 480px;
margin-bottom:50px; 
`;

export const BackBtn = styled(NavLink)`
width: 300px;
color: white;
text-decoration: none;

box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
color: white;
background-color: orangered;
text-align: center;
display: flex;
justify-content: center;
margin-left: 480px;
margin-bottom:50px; 
`;
