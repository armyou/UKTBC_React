import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";
import "./vipravaani.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const FLIPBOOK = HTMLFlipBook as any;

// Dynamically import all PDFs from the folder
const pdfModules = import.meta.glob<string>("../../../assets/dummy/*.pdf", {
  eager: true,
  import: "default",
});
const pdfList: string[] = Object.values(pdfModules) as string[];

const Book: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<string>(pdfList[0]);
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <div className="vertical_spacer_small"></div>
      <div className="vipravaani-page">
        {/* Left side PDF Previews */}
        <div className="pdf-preview-container ">
          {pdfList.map((pdf, index) => (
            <div
              key={index}
              className={`pdf-thumbnail ${
                selectedPdf === pdf ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedPdf(pdf)}
            >
              <p className="pdf-filename">
                {pdf.split("/").pop()?.replace(".pdf", "")}
              </p>
              <Document file={pdf}>
                <Page
                  pageNumber={1}
                  width={120}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>
          ))}
        </div>

        {/* Right side Book Flip */}
        <div className="bookFlipContainer  ">
          <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
            <FLIPBOOK
              width={500}
              height={700}
              className="shadow-2xl rounded-2xl book-container"
              showCover
            >
              {Array.from(new Array(numPages), (_, index) => (
                <div
                  key={`page_${index + 1}`}
                  className="bg-white page-shadow" // bg-white ensures opacity
                >
                  <Page
                    pageNumber={index + 1}
                    width={500}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              ))}
            </FLIPBOOK>
          </Document>
        </div>
      </div>
      <div className="vertical_spacer_small"></div>
    </>
  );
};

export default Book;
