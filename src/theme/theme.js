export const theme = Object.freeze({
  space: [0, 4, 8, 18, 32, 64, 128, 256, 512],

  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    table: 'Lucida Sans Unicode, Lucida Grande, Sans-Serif',
  },

  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    ml: 24,
    l: 32,
    xl: 64,
  },

  fontWeights: {
    light: 200,
    normal: 400,
    medium: 700,
    bold: 900,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  colors: {
    primary: '#121521',
    secondary: '#93a2b8',
    accentBlack: '#0c0f17',
    accentBlue: '#3b82f5',
    border: '#293247',
    light: '#ffff',
    background: '#1e2233',
    avatarBg: '#19285e',
    text: '#4a5366',

    new: '#3b82f5',
    pending: '#fcd060',
    completed: '#3cba7b',
  },

  radius: {
    none: '0',
    round: '15px',
  },

  shadows: {
    boxShadow: '0px 0px 4px 3px gray',
    buttonsShadow: ' 0 1px 1px #2d2020',
    deletButton: '3px 3px 3px 0 red',
    textShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ',
  },
});
