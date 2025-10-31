import React from "react";
import Template1 from "./resume-remplates/Template1";
import Template2 from "./resume-remplates/Template2";

const LivePreview = ({ data, template }) => {
  return <div>{template === "template_1" ? <Template1 resumeData={data}/> : <Template2 resumeData={data}/>}</div>;
};

export default LivePreview;
