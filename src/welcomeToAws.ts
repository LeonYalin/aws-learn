import { delimeterMsg, logF, logToHTML } from "./utils";

function installingAws() {
  logToHTML('' +
    `To get started, we should first create an AWS account, fill in the details and billing information. Next, we should install the AWS CLI.
      "aws --version" - to check if it is working properly.
    Then, we should create an access key. In the web console, enter "my security credentials" and create new access key. After we have it, to to the cli and
      "aws configure" - pass the access kyes, region (us-west-2) and output (json) to configure the CLI. To check if it works properly, type
      "aws ec2 describe-instances" - will show the instances info if the access keys are correct.
    `);
}

function usingAlarmsWithIAMAndColudWatch() {
  logToHTML('' +
    `To get started, we should first create an AWS account, fill in the details and billing information. Next, we should install the AWS CLI.
      "aws --version" - to check if it is working properly.
    `);
}

export default function welcomeToAws() {
  delimeterMsg('WELCOME TO AWS');
  logF(installingAws);
  logF(usingAlarmsWithIAMAndColudWatch);
}