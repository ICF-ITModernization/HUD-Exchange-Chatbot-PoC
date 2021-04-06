import Head from 'next/head';
import { useRef, useEffect } from 'react';

import { Chatbot, Layout } from "../../components";

export default function DruidPage(props) {
  let druidWebchatRoot = useRef(null);

  useEffect(() => {
  }, []);
  
  return (
    <>
      <Head>
        <link href="https://huie.community.druidplatform.com/druid_webchat.css" rel="stylesheet" />
      </Head>
      <Layout>
        <h1 className="text-3xl">Druid Chatbot</h1>
        <p className="mt-4">This Chatbot uses Druid's hosted chatbot</p>
        <iframe className="flex-grow -mb-4" src="/druid/chatbot"></iframe>
      </Layout>
    </>
  );
}