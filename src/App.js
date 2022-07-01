import React from "react";
import "./style.css";
import DocViewer from "react-doc-viewer";

export default function App() {
  const docs = [
    {
      uri:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    } // Local File
  ];
  return <DocViewer documents={docs} />;
}
