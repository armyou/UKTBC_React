import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";
import "./vipravaani.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import audioFile from "../../../assets/sounds/page-flip-sound.mp3";

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
  const [currentPage, setCurrentPage] = useState<number>(1);

  const bookRef = useRef<any>(null);
  const flipSound = useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    flipSound.current = new Audio(audioFile);
    flipSound.current.volume = 0.5;
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const playFlipSound = () => {
    if (flipSound.current) {
      flipSound.current.currentTime = 0;
      flipSound.current.play().catch(() => {});
    }
  };

  const handleFlip = (e: any) => {
    setCurrentPage(e.data + 1);
    playFlipSound();
  };

  const goToStart = () => bookRef.current.pageFlip().flip(0);
  const goToEnd = () => bookRef.current.pageFlip().flip(numPages - 1);
  const goToNext = () => bookRef.current.pageFlip().flipNext();
  const goToPrev = () => bookRef.current.pageFlip().flipPrev();

  return (
    <>
      <div className="vertical_spacer_small"></div>
      <div className="vipravaani-page">
        {/* Left side: PDF names only */}
        <div className="pdf-name-list">
          {pdfList.map((pdf, index) => {
            const fileName = pdf.split("/").pop()?.replace(".pdf", "");
            return (
              <div key={index} className="fineName_preview">
                <p
                  className={`pdf-name-item cursor-pointer ${
                    selectedPdf === pdf ? "active-pdf" : ""
                  }`}
                  onClick={() => {
                    setSelectedPdf(pdf);
                    setCurrentPage(1);
                  }}
                >
                  <Icon icon="proicons:pdf-2" width="20" height="20" />
                  {" " + fileName}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right side Book Flip */}
        <div className="bookFlipContainer">
          <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
            <FLIPBOOK
              ref={bookRef}
              width={650}
              height={900}
              className="shadow-2xl rounded-2xl book-container"
              showCover
              onFlip={handleFlip}
            >
              {Array.from(new Array(numPages), (_, index) => (
                <div key={`page_${index + 1}`} className="bg-white page-shadow">
                  <Page
                    pageNumber={index + 1}
                    width={650}
                    height={800}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              ))}
            </FLIPBOOK>
          </Document>
          {/* Navigation Controls */}
          <div className="flip-controls">
            {/* 👇 Zoom buttons on left side */}
            <div className="page-controls">
              <button onClick={goToStart} className="flip-btn">
                <Icon icon="line-md:home-md" width="24" height="24" />
              </button>{" "}
              <button onClick={goToPrev} className="flip-btn">
                <Icon
                  icon="fluent:arrow-previous-16-filled"
                  width="16"
                  height="16"
                />
              </button>
              {"  "}
              <span className="page-info">
                {"Showing "}
                {currentPage === 1
                  ? `${currentPage} / ${numPages}`
                  : currentPage === numPages
                  ? `${currentPage} / ${numPages}`
                  : `${currentPage}-${Math.min(
                      currentPage + 1,
                      numPages
                    )} / ${numPages}`}
              </span>
              {"  "}
              <button onClick={goToNext} className="flip-btn">
                <Icon
                  icon="fluent:arrow-next-16-filled"
                  width="16"
                  height="16"
                />
              </button>{" "}
              <button onClick={goToEnd} className="flip-btn">
                <Icon
                  icon="material-symbols:keyboard-double-arrow-right-rounded"
                  width="24"
                  height="24"
                />
              </button>
              {/* Download Button */}
            </div>
          </div>
          <div className="vipravani_download-btn">
            <a
              href={selectedPdf}
              download
              className=" download-btn"
              style={{ marginLeft: "10px", height: "20px" }}
            >
              <Icon
                icon="material-symbols:download-rounded"
                width="20"
                height="20"
              />
              {"Download "}
            </a>
          </div>
        </div>
      </div>
      <div className="vertical_spacer_small"></div>
    </>
  );
};

export default Book;
