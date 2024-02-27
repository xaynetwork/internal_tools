import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';

import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Input from '../components/atoms/Input';
import Preview from '../components/Preview';

const Signature: React.FC<RouteComponentProps> = () => {
  const [isEnLang, setIsEnLang] = useState(true);
  const [formValues, setFormValues] = useState({
    name: '',
    role: '',
    phone: '',
    email: '',
  });

  const handleChange = (name: string) => (event: any) => {
    const value = event.target.value;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Box py={4}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={9} md={4} lg={3}>
          <Typography variant="h6" gutterBottom style={{ fontWeight: 300 }}>
            Xayn E-mail Signature Form
          </Typography>
          <Box mb={4}>
            <Input
              label="Name"
              value={formValues.name}
              onChange={handleChange('name')}
            />
            <Input
              label="Role"
              value={formValues.role}
              onChange={handleChange('role')}
            />
            <Input
              label="Phone number"
              value={formValues.phone}
              onChange={handleChange('phone')}
            />
            <Input
              label="E-mail Address"
              type="email"
              value={formValues.email}
              onChange={handleChange('email')}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={9} md={6} lg={5}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Typography variant="caption">Preview</Typography>
            <Box>
              <Grid component="label" alignItems="center" container>
                <Grid item>
                  <Typography>DE</Typography>
                </Grid>
                <Grid item>
                  <Switch
                    checked={isEnLang}
                    onChange={(_, checked) => {
                      setIsEnLang(checked);
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography>EN</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box p={2} borderRadius="3px" border="1px dashed lightgray">
            <Preview language={isEnLang ? 'en' : 'de'} {...formValues} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signature;
