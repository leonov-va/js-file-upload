import { fileUpload } from "./libs/file-upload/index.js";
import "./libs/file-upload/index.css";

fileUpload("#file", {
  multi: true,
  accept: [".png", ".jpg", ".jpeg", ".gif"],
});
