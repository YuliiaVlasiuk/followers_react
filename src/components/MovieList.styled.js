import styled from "styled-components";
import { Link } from 'react-router-dom';

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
export const MovieLi = styled.li`
list-style-type: none;
width: 380px;
height: 460px;
background-color: #5736A3;

  &:hover {
    border-radius: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
  
`;

export const All=styled.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
`

