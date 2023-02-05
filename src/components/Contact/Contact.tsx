import React from 'react';
import { MapComponent } from '../utils/GoogleMapComponent';
// Material UI
import { 
  FormHelperText,
  FormControl,
  Input,
  InputLabel,
  Box
} from '@mui/material';

const Contact: React.FC = () => {
  return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <MapComponent />
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input sx={{ color: 'white' }} id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text" sx={{ color: 'white' }}>We'll never share your email.</FormHelperText>
        </FormControl>
      </Box>
    );
};

export default Contact;