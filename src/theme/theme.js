export const theme = Object.freeze({
  space: [0, 5, 8, 18, 32, 64, 128, 256, 512],

  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    table: 'Lucida Sans Unicode, Lucida Grande, Sans-Serif',
  },

  fontSizes: {
    xxs: 6,
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

  colors: {
    primary: '#121521',
    secondary: '#93a2b8',
    accentBlack: '#0c0f17',
    accentBlue: '#3b82f5',
    tableColor: '#232838',
    border: '#293247',
    light: '#ffff',
    background: '#1e2233',
    avatarBg: '#19285e',
    text: '#4a5366',

    blue: '#3b82f5',
    yellow: '#fcd060',
    green: '#3cba7b',
  },

  radius: {
    none: '0',
    round: '25px',
  },

  cubic: {
    timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
