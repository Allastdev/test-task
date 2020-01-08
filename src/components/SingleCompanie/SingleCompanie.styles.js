import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Item = styled(Link)`
    width: 300px;
    margin: 20px;
    text-align: center;
    border-radius: 5px;
    padding: 12px;
    text-align: center;
    display: block;
    color: #333;
    margin: 16px auto;
    background-color: #eeebe1;
    text-decoration: none;
    cursor: pointer;
    h2{
      color: rgb(84, 84, 84);
      font-size: 28px;
    }
`
