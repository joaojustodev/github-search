import styled from "styled-components";

export const Form = styled.form`
  margin: 15px 0;

  .input-block {
    display: flex;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 320px;
  height: 40px;
  padding-left: 6px;

  font-size: 18px;

  border: none;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  @media screen and (max-width: 748px) {
    width: 260px;
  }
`;

export const Button = styled.button`
  width: 66px;
  height: 40px;

  background: ${({ theme }) => theme.colors.gray};

  border: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  cursor: pointer;
  transition: all 0.4s ease;

  > svg {
    font-size: 28px;
  }
`;

export const ErrorMessage = styled.span`
  margin: 4px 0;
  color: red;

  display: flex;
  align-items: center;

  > svg {
    margin-right: 8px;
  }
`;
