import { styled } from "styled-components";

export const Button = styled.button`
  display: flex;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  color: white;
  min-width: 220px;
  border: none;
  justify-content: center;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.5s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  border: 1px solid black;
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
