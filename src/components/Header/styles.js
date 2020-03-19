import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 20px 30px;
  background: #fff;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  img {
    top: 19px;
    left: 30px;
    width: 135px;
    height: 26px;
    margin-right: 60px;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: 20px;
  text-align: left;
  font-weight: bold;
  letter-spacing: 0;
  color: #999999;
  opacity: 1;
  cursor: pointer;

  &.bold-${props => props.index} {
    color: #000
  }
`;

export const Config = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 18px;

  strong {
    text-align: right;
    letter-spacing: 0;
    color: #666666;
    opacity: 1;
  }

  span {
    text-align: right;
    letter-spacing: 0;
    color: #de3b3b;
    opacity: 1;
    cursor: pointer;
  }
`;
