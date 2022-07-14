import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 748px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: calc(48px + (72 - 36) * ((100vw - 600px) / (1920 - 600)));
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 600px;
`;
