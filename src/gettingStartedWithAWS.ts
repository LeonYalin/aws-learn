import { delimeterMsg, logF, logToHTML } from "./utils";

function filesystemHierarchy() {
  logToHTML('' +
    `Linux filesystem hierarchy consists of the following directories:
      "/bin" - binary files for a single user
    `);
}

export default function installingLinux() {
  delimeterMsg('INSTALLING AWS');
  logF(filesystemHierarchy);
}