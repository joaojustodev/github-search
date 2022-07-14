import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  width: auto;
  height: 40px;
  border-radius: 2px;
  background: red;

  @media screen and (max-width: 747px) {
    top: calc(100vh - 10%);
  }
`;
