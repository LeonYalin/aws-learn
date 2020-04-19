import { delimeterMsg, logF, logToHTML } from "./utils";

function whatIsAWS() {
  logToHTML('' +
    `Amazom Web ervices (AWS) is a collection of cloud services that can work together or independently to power web apps.
    Servers in data senters around the globe can be used to slace web apps or for cloud computing.

    The key benefits of using AWS are:
    - Scaling, security and maintance is done for you
    - pay as you use
    - deploy globally in preferred geographic areas
    We can check the worldwide regions health status by visiting https://status.aws.amazon.com/

    The AWS services can be connected using VPC (Virtual Private Cloud) there they all know the ip addresses of each other.
    The main competitors of AWS are Microsoft Azure, GoogLe Cloud and Heroku
    `);
}

export default function gettingStarted() {
  delimeterMsg('GETTING STARTED');
  logF(whatIsAWS);
}