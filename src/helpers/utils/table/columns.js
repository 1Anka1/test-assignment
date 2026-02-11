export const workColumns = [
  'ORIGINATOR',
  'CLIENT/LINE',
  'TYPE',
  'STATUS',
  'CREATED',
];

export const myAccountColumns = [
  'ACCOUNT NAME/TYPE',
  'LINE',
  'BROKER',
  'RENEWAL DATE',
  'PREMIUM',
  'RATED PREMIUM',
  'LOSS RATIO',
  'APPETITE',
  'STATUS',
  'TRIAGE',
  'WINNABILITY',
];

export const statusQueue = ['New', 'Pending Rewiew', 'Completed'];

export const accountDataMap = {
  1: {
    PREMIUM: '$2.3M',
    RATED_PREMIUM: '$2.8M',
    LOSS_RATIO: { value: '32%', color: 'green' },
    APPETITE: 'HIGH',
    STATUS: 'Active',
    TRIAGE: 180,
    WINNABILITY: 'Very Strong',
  },
  2: {
    PREMIUM: '$1.7M',
    RATED_PREMIUM: '$1.9M',
    LOSS_RATIO: { value: '38%', color: 'yellow' },
    APPETITE: 'MEDIUM',
    STATUS: 'Under review',
    TRIAGE: 165,
    WINNABILITY: 'Strong',
  },
  3: {
    PREMIUM: '$875K',
    RATED_PREMIUM: '$920K',
    LOSS_RATIO: { value: '25%', color: 'green' },
    APPETITE: 'HIGH',
    STATUS: 'Active',
    TRIAGE: 182,
    WINNABILITY: 'Very Strong',
  },
  4: {
    PREMIUM: '$1.2M',
    RATED_PREMIUM: '$1.4M',
    LOSS_RATIO: { value: '67%', color: 'red' },
    APPETITE: 'CAUTIOUS',
    STATUS: 'Under review',
    TRIAGE: 158,
    WINNABILITY: 'Medium',
  },
};
