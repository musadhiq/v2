import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Resume from "../../assets/resume.pdf";
// styles
import { ResumeContainer } from "./Style";
import { GiReturnArrow } from "react-icons/gi";
import { Link } from "../../Styles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ViewRes() {
  return (
    <>
      <ResumeContainer>
        <Document className={"PDFDocument"} file={Resume}>
          <Page
            className={"PDFPage PDFPageOne"}
            renderInteractiveForms={false}
            pageNumber={1}
          />
        </Document>
      </ResumeContainer>
      <Link href="/" display={"center"}>
        <GiReturnArrow className="icon r-icon" />
        <span className="r-btn">go back</span>
      </Link>
    </>
  );
}
