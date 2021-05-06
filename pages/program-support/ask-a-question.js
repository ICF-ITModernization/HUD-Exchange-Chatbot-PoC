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
              <li class="active">Ask A Question</li>
            </ol>
            <h1 class="pageTitle">Ask A Question</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="alert alert-info" role="alert" style={{color: "black"}}>
              The following Ask A Question desks are active: BRAC, CDBG-CV, CNA e-Tool, CoC, DRGR, eCon Planning Suite, ESG, <em>e-snaps</em>, HDX, HMIS, HOPWA, HEROS, HUD MAP Guide, IDIS, NSP, Sage, and Title V. Looking for the <a class="alert-link" href="https://www.hudexchange.info/program-support/my-question/">My Question form?</a>
              <br/><br/>
              The AFFH, CDBG, and HOME Ask A Question desks are closed and no longer accepting questions. Please contact your <a class="alert-link" href="https://www.hud.gov/program_offices/comm_planning/staff#fieldoffices">local CPD Field Office</a> or <a class="alert-link" href="https://www.hud.gov/program_offices/fair_housing_equal_opp/contact_fheo#c4">FHEO Regional Office</a> for assistance.
            </div>
            <div class="relative flex flex-col min-h-50">
              <div class="flex-1">
                <iframe
                      id="sn_va_web_client"
                      title="OneReach NCI Chatbot"
                      src="https://chat.icf.onereach.ai/hCSZQQRqQaq4I5l1t_BQAA/07d7db2-hudexchange"
                      className="min-h-full w-full margin-0"
                      height="500"
                      />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="m-1">
              Need more in-depth or personalized help? <a class="alert-link" href="https://www.hudexchange.info/program-support/my-question/">Contact our expert support team directly</a>.
            </p>
          </div>
        </div>
      </div>
    </HUDlayout>
  );
}