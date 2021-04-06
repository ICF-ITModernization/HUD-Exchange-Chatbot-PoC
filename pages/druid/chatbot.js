import Head from 'next/head';
import { useRef, useEffect } from 'react';

export default function DruidPage(props) {
  const ref = useRef(null);

  useEffect(() => {
    let script = document.createElement('script');
    script.src = 'https://huie.community.druidplatform.com/druid_webchat.js';
    script.onload = function () {
      DruidWebchat.init({
        botId: "25df12c1-8ebb-43a2-f806-08d8a3960204",
        baseUrl: "https://comm-druid-api.azurewebsites.net",
        queryParams: "", // pass queryParams to AuthorizeAsync method
        UI: {
            containerElement: null, // [MANDATORY] example: document.getElementById('druidContainerElement') -> specify the webchat expand DOM element
        }
      });
    };
    ref.current.appendChild(script);
  }, []);
  
  return (
    <>
      <Head>
        <link href="https://huie.community.druidplatform.com/druid_webchat.css" rel="stylesheet" />
      </Head>
      <div ref={ref} />
    </>
  );
}