import { GetServerSidePropsContext } from "next";
import React from "react";
import Dashboard from "../components/Dashboard";

import type { UserGithub } from "../contexts/SearchContext";

type Props = {
  data: UserGithub;
};

function Slug({ data }: Props) {
  return (
    <>
      <Dashboard data={data} />
    </>
  );
}

type GetServerSideProps = GetServerSidePropsContext & {
  params: {
    slug: string;
  };
};

export const getServerSideProps = async ({ params }: GetServerSideProps) => {
  const baseURL = "https://api.github.com/users/";
  console.log(`${baseURL}${params.slug}`);

  const res = await fetch(`${baseURL}${params.slug}`);

  if (!res.ok) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  const data = await res.json();

  return {
    props: {
      data
    }
  };
};

export default Slug;
