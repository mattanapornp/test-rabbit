import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '22.5em',
  md: '48em',
  lg: '60em',
  xl: '75em',
});

export default {
  breakpoints,
  colors: {
    rabbitBlue: '#005098',
  },
  fontSizes: {
    xs: '0.685rem', // 11px
    sm: '0.875rem', // 14px
    md: '1rem',
  },
  fonts: {
    // TODO: set the actual font family from UI mocks
    heading: 'Poppins, Kanit',
    body: 'Poppins, Kanit, Sarabun',
  },
  styles: {
    global: {
      body: {
        color: '#4f4b66',
      },
    },
  },
};
