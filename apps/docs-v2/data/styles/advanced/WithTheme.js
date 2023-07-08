import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from '@mui/styles';

function DeepChildRaw(props) {
  return <span>{`spacing ${props.theme.spacing}`}</span>;
}

DeepChildRaw.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.string.isRequired,
  }).isRequired,
};

const DeepChild = withTheme(DeepChildRaw);

function WithTheme() {
  return (
    <ThemeProvider
      theme={{
        spacing: '8px',
      }}
    >
      <DeepChild />
    </ThemeProvider>
  );
}

export default WithTheme;
