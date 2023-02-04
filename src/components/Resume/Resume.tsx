import React from 'react';
import styled from 'styled-components';
// Material UI
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Typography, Button, Box } from '@mui/material';
// Styles
import './Resume.css';

const StyledFormControl = styled(FormControl)`
  .MuiInputLabel-outlined {
    color: white;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #fff;
  }
  .MuiSelect-icon {
    color: white;
  }
`;

const Resume: React.FC = () => {

  const pdfFile: Record<string, string> = {
    'en': 'Resume-guillaume-paris',
    'fr': 'CV-guillaume-paris'
  };

  const [ languageVersion, setLanguageVersion ] = React.useState<string>('en');

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = pdfFile[languageVersion] + '.pdf';
    link.href = '/documents/' + pdfFile[languageVersion] + '.pdf';
    link.click();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
      <StyledFormControl sx={{ width: '594px' }}>
        <InputLabel id="select-language-version-label" sx={{ borderColor: 'white' }}>Language version</InputLabel>
        <Select 
          sx={{ color: 'white' }}
          labelId="select-language-version"
          id="select-language-version"
          value={languageVersion}
          label="Language version"
          onChange={(event) => setLanguageVersion(event.target.value as string)}
        >
          <MenuItem selected value={'en'} sx={{ color: 'black' }}>English</MenuItem>
          <MenuItem value={'fr'} sx={{ color: 'black' }}>French</MenuItem>
        </Select>
      </StyledFormControl>
      <img src={'/documents/' + pdfFile[languageVersion] + '.jpg'} alt='Resume' className='resume'/>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 4 }}>
        <Button variant='outlined' className='button-nav' onClick={handleDownload}>
          <Typography variant='h5'>Download pdf</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Resume;