import Head from 'next/head';
import { Chatbot, Layout } from "../../components";

export default function OneReachPage(props) {
  return (
    <>
      <Head>
        <title>ICF Hyperautomation Chatbot - OneReach.ai Chatbot</title>
      </Head>
      <Layout>
        <h1 className="text-3xl">OneReach.ai Chatbot</h1>
        <p className="mt-4">This Chatbot uses OneReach.ai's hosted chatbot</p>
        <Chatbot>
          <iframe
            id="sn_va_web_client"
            title="OneReach NCI Chatbot"
            src="https://chat.icf.onereach.ai/hCSZQQRqQaq4I5l1t_BQAA/nih-icf-poc"
            className="h-full"
          />
        </Chatbot>
      </Layout>
    </>
  );
}