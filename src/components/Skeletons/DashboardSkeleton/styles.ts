import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 100px 15px 15px 15px;
  margin: 0 auto;

  div {
    width: 100%;
    height: 360px;
    padding: 24px;
    background: ${({ theme }) => theme.colors.gray};
    background-image: linear-gradient(
      90deg,
      rgba(220, 220, 220),
      rgba(255, 255, 255, 0.6)
    );
    background-size: 25%;
    background-position: 0px 0px;
    background-repeat: no-repeat;
    border-radius: 8px;
    animation: shimmer 1s linear infinite;
  }

  @keyframes shimmer {
    from {
      background-position: -465px 0px;
    }

    to {
      background-position: 865px 0px;
    }
  }
`;
