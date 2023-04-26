import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LoadMore = styled.button`
  width: 300px;
  background: #ebd8ff;
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
  margin-bottom: 50px;
`;

export const Card = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
  margin-bottom: 50px;
`;
