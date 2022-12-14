const { Client } = require("@notionhq/client");
import { NOTION_TOKEN, DATABASE_ID } from "../config";
import Layout from "../src/layout";
import axios from "axios";

const Project = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      {data.results.map((d, idx) => (
        <p key={idx}>{d.properties.이름.title[0]?.plain_text}</p>
      ))}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const options = {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
    data: { page_size: 100 },
  };

  const res = await axios.request(options);

  return { props: { data: res.data } };
};

export default Project;
