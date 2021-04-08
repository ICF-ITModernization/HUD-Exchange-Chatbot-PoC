import Head from 'next/head';
import { Chatbot, Layout } from "../../components";

export default function ServiceNowPage(props) {
  return (
    <>
      <Head>
        <title>ICF Hyperautomation Chatbot - ServiceNow Virtual Agent</title>
      </Head>
      <Layout>
        <h1 className="text-3xl">ServiceNow Integrated Chatbot</h1>
        <p className="mt-4">This Chatbot uses the ServiceNow integrated "Virtual Agent"</p>
        <Chatbot>
          <iframe
            id="sn_va_web_client"
            title="ServiceNow Virtual Agent Client"
            src="https://incentivetechnologygroupllcdemo14.service-now.com/sn_va_web_client_app_embed.do?sysparm_skip_load_history=true"
            className="h-full"
          />
        </Chatbot>
      </Layout>
    </>
  );
}
