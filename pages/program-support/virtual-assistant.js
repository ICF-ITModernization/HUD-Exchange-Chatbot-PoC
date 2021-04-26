import { HUDlayout } from "../../components";

export default function VirtualAssistantPage(props) {
  return (
    <HUDlayout>
        <div class="container" id="mainContent">
            <div class="row">
                <div class="col-md-12">
                <ol class="breadcrumb">
                  <li><a href="/">Home</a></li>
                  <li><a href="/program-support/">Program Support</a></li>
                  <li class="active">Virtual Assistant</li>
                </ol>
                <div class="relative flex flex-col min-h-60">
                  <div class="flex-1">
                  <iframe
                        id="sn_va_web_client"
                        title="OneReach NCI Chatbot"
                        src="https://chat.icf.onereach.ai/hCSZQQRqQaq4I5l1t_BQAA/07d7db2-hudexchange"
                        className="min-h-full w-full margin-0"
                        height="800"
                        />
                  </div>
                </div>
                </div>
            </div>
        </div>
    </HUDlayout>
  );
}