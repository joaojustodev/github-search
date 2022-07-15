import React from "react";
import type { UserGithub } from "../../contexts/SearchContext";
import { SearchContext } from "../../contexts/SearchContext";

import { FiArrowLeft, FiGithub, FiTwitter, FiAtSign } from "react-icons/fi";
import {
  Container,
  GoBack,
  Panel,
  PanelContent,
  PanelAvatar,
  PanelInfo,
  PanelBio,
  PanelSocial
} from "./styles";

type DashboardProps = {
  data: UserGithub;
};
const Dashboard = ({ data }: DashboardProps) => {
  const { handleClickCleanData } = React.useContext(SearchContext);

  return (
    <Container>
      <GoBack onClick={handleClickCleanData}>
        <FiArrowLeft fontSize={42} />
      </GoBack>
      <Panel>
        <PanelAvatar>
          <img src={data.avatar_url} alt="avatar_url" />
        </PanelAvatar>
        <PanelContent>
          <PanelInfo>
            <div>
              <h1>{data.name ? data.name : data.login}</h1>
              <small>
                <a href={data.html_url} target="_blank" rel="noreferrer">
                  @{data.login}
                </a>
              </small>
            </div>
            <div>
              <p>Following: {data.following}</p>
              <p>Followers: {data.followers}</p>
              <p>Repositories: {data.public_repos}</p>
            </div>
          </PanelInfo>
          <PanelBio>
            <p>{data.bio ? data.bio : "Bio not found"}</p>
          </PanelBio>
          <PanelSocial>
            <a
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <FiGithub />
            </a>
            {data.twitter_username && (
              <a
                href={`https://twitter.com/${data.twitter_username}`}
                target="_blank"
                rel="noreferrer"
                className="twitter"
              >
                <FiTwitter />
              </a>
            )}
            {data.blog && (
              <a
                href={data.blog}
                target="_blank"
                rel="noreferrer"
                className="blog"
              >
                <FiAtSign />
              </a>
            )}
          </PanelSocial>
        </PanelContent>
      </Panel>
    </Container>
  );
};

export default Dashboard;
