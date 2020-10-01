import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;

  margin: 0 auto;
  padding: 100px 15px 15px 15px;
`;

export const GoBack = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;

  background: ${({ theme }) => theme.colors.gray};
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;
  border-radius: 50px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const Panel = styled.header`
  width: 100%;

  display: flex;

  padding: 24px;

  background: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  color: #000;

  @media screen and (max-width: 748px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PanelAvatar = styled.div`
  margin-right: 12px;
  > img {
    width: 250px;
    height: 250px;

    border-radius: 50%;
  }
`;

export const PanelContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const PanelInfo = styled.div`
  padding-bottom: 50px;

  display: flex;
  justify-content: space-between;

  small a {
    color: #069;
  }

  @media screen and (max-width: 748px) {
    flex-direction: column;

    div + div {
      margin-top: 25px;
    }

    div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;

export const PanelBio = styled.div`
  width: 100%;

  padding-bottom: 100px;
`;
export const PanelSocial = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 8px;
  }

  a svg {
    font-size: 32px;
  }

  a + a {
    margin-left: 12px;
  }

  a.github {
    background: #000;
    color: #fff;
  }

  a.blog {
    background: #1c64f2;
    color: #fff;
  }

  a.twitter {
    background: #1da1f2;
    color: #fff;
  }
`;
