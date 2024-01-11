// PdfGenerator.js
import React from 'react';
import { PDFViewer, Document, Page, Text } from '@react-pdf-viewer/react-pdf';

const Pdfgenerator = ({ instructionDownload }) => {
  return (
    <PDFViewer width="100%" height="600">
      <Document>
        <Page>
          <Text>{instructionDownload}</Text>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Pdfgenerator;
