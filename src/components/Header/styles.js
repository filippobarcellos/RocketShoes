import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
<<<<<<< HEAD
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
=======
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8

  div {
    text-align: right;
    margin-right: 10px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
