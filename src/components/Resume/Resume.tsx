import React from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// Material UI
import { Typography, Button, Box } from '@mui/material';

const Resume: React.FC = () => {

  // // eslint-disable-next-line
  // const [numPages, setNumPages] = React.useState<number | null>(null);
  // // eslint-disable-next-line
  // const [pageNumber, setPageNumber] = React.useState<number>(1);

  // const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
  //   setNumPages(numPages);
  //   setPageNumber(1);
  // };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = `resume-guillaume-paris.pdf`;
    link.href = `/documents/Resume_Guillaume_Paris.pdf`;
    link.click();
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: 600 }}>
        <Typography variant='h3'>My resume</Typography>
      </Box>
        {/* <Document
          file='/documents/Resume_Guillaume_Paris.pdf'
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document> */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant='outlined' className='button-nav' onClick={handleDownload}>
          <Typography variant='h5' className='button-nav-text'>Download pdf</Typography>
        </Button>
      </Box>
    </>
  );
};

export default Resume;