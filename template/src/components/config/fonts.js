// Custom fontsize imported

import {fontSize} from '~utils';

// Font family
const Light = 'EncodeSans-Light';
export const Regular = 'EncodeSans-Regular';
const Semibold = 'EncodeSans-SemiBold';

// font size
const sizes = {
  f30: fontSize(30),
  f28: fontSize(28),
  f26: fontSize(26),
  f24: fontSize(24),
  f22: fontSize(22),
  f20: fontSize(20),
  f18: fontSize(18),
  f16: fontSize(16),
  f14: fontSize(14),
  f12: fontSize(12),
  f10: fontSize(10),
};

//  fontWeights
const weights = {
  w1: '100',
  w2: '200',
  w3: '300',
  w4: '400',
  w5: '500',
  w6: '600',
  w7: '700',
  w8: '800',
  w9: '800',
  wn: 'normal',
  wb: 'bold',
};
// font family
// All fonts in the project
const fonts = {
  Light: {
    fontFamily: Light,
  },
  Semibold: {
    fontFamily: Semibold,
  },
  Regular: {
    fontFamily: Regular,
  },
  default: {},
};
// Export all objects
export {fonts, sizes, weights};
