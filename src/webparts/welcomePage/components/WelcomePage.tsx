import * as React from 'react';
import styles from './WelcomePage.module.scss';
import { IWelcomePageProps } from './IWelcomePageProps';
import { escape } from '@microsoft/sp-lodash-subset';
//external imports
import { SPComponentLoader } from "@microsoft/sp-loader";
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientConfiguration, SPHttpClientResponse, HttpClientResponse } from "@microsoft/sp-http";

let _image: string = require('./Images/Manoj1.png');


export default class WelcomePage extends React.Component<IWelcomePageProps, {}> {
  public render(): React.ReactElement<IWelcomePageProps> {
    SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
    return (
      <div>
        {/* <article className="row single-post mt-5 no-gutters"> */}
        <div><h5>CEO's Message</h5></div>
        <hr/>
        <span style={{ float: "left" }} className="mr-3" >
          <img src={_image} alt="" style={{ float: "left" }} />
          {/* <span className="text-center">
            <h5>Manoj Baheti</h5>
            <h6>Founder & CEO</h6>
            <h6>Yash Technology</h6>
          </span> */}
        </span>
        <span style={{ textAlign: "justify" }}>
          <p>
            YASH is on an exponential revenue growth path last several years.  We have become extremely intentional in our customer acquisition, given the focus on building long-term sustainable relationships. We want to help our customers realize business value from their technology investments and enable them to transform themselves in the process.
          </p>
          <p>
            We have been working to transform delivery globally and make it agile, focused on emerging best-practices, adopt global quality practices, drive profitability, and align it to deliver outstanding outcomes for our customers.
</p>

          <p>
            Project and program management is a central theme in this delivery transformation. We are establishing a Global Project Management Office ( PMO), which will standardize best practices, guide projects to achieve success consistently, ensure strong governance, and develop a pervasive program management practice across the organization that drives delivery excellence.
</p>

          <p>
            While  Derek Dyer is leading the Global PMO, Shivpal Singh and his team will run the India based central PMO.  They will interact and collaborate with Service lines, Sales, and Delivery teams in managing/helping manage critical projects.
</p>

          <p>
            Key focus areas of the Global PMO include
<br />
            <ul>
              <li>Consolidating PM Best practices within ( and from outside of) the organization and strengthen PM PMI methodologies within YASH.</li>
              <li>Outlining a consistent and well-structured methodology that governs all projects, safeguarding against project failures.</li>
              <li>Maintaining consistency between Projects  Managers by providing them access to templates, tools, repositories and other knowledge assets.</li>
              <li>Train-enable-evaluate-certify project and program managers in line with YASH requirements.</li>
              <li>Act as back up, join or lead large projects as necessary.</li>
              <li>Champion PM within YASH.</li>

            </ul></p>

          <p>Currently, many projects in YASH Americas and Europe of the SAP Serviceline are being governed-managed by the Global PMO. Starting August 2020, projects in these regions of the ILM and Digital service lines will come under the ambit of the PMO. Over time the idea is to bring the governance of all projects across regions under the stewardship of the Global PMO.

          </p>
          <p>
            In the long term, we will also establish a PM academy as part of the Global PMO, which will train-enable-evaluate-certify project managers and keep them abreast of the latest and greatest in the world of Program management.
          </p>
          <br />
          <p>
            This is a strategic and business-critical initiative. I look forward to the leadership and other stakeholders working closely with the Global PMO in ensuring that every project that YASH delivers is exemplary and drives value for our clients.
          </p>

        </span>
        {/* </article> */}
      </div>
    );
  }
}
