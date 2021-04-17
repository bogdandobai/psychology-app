import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const referenceWidth = 375;
const referenceHeight = 812;
const horizontalScale = (size: number) => {
  return (width / referenceWidth) * size;
};
const verticalScale = (size: number) => {
  return (height / referenceHeight) * size;
};

const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export const Metrics = {
  screenWidth: width,
  screenHeight: height,
  ratio: {
    _78: 0.78,
  },
  moderateScale: {
    _0: moderateScale(0),
    _8: moderateScale(8),
    _15: moderateScale(15),
    _16: moderateScale(16),
    _21: moderateScale(21),
  },
  horizontal: {
    baseMargin: horizontalScale(20),
    largerMargin: horizontalScale(30),
    _0: horizontalScale(0),
    _4: horizontalScale(4),
    _8: horizontalScale(8),
    _10: horizontalScale(10),
    _12: horizontalScale(12),
    _14: horizontalScale(14),
    _15: horizontalScale(15),
    _16: horizontalScale(16),
    _17: horizontalScale(17),
    _18: horizontalScale(18),
    _19: horizontalScale(19),
    _20: horizontalScale(20),
    _21: horizontalScale(21),
    _24: horizontalScale(24),
    _25: horizontalScale(25),
    _28: horizontalScale(28),
    _30: horizontalScale(30),
    _32: horizontalScale(32),
    _34: horizontalScale(34),
    _43: horizontalScale(43),
    _44: horizontalScale(44),
    _48: horizontalScale(48),
    _50: horizontalScale(50),
    _70: horizontalScale(70),
    _80: horizontalScale(80),
    _143: horizontalScale(143),
    _160: horizontalScale(160),
    _250: horizontalScale(250),
  },
  vertical: {
    _0: verticalScale(0),
    _4: verticalScale(4),
    _5: verticalScale(5),
    _8: verticalScale(8),
    _10: verticalScale(10),
    _12: verticalScale(12),
    _13: verticalScale(13),
    _14: verticalScale(14),
    _15: verticalScale(15),
    _16: verticalScale(16),
    _18: verticalScale(18),
    _20: verticalScale(20),
    _22: verticalScale(22),
    _24: verticalScale(24),
    _25: verticalScale(25),
    _28: verticalScale(28),
    _30: verticalScale(30),
    _32: verticalScale(32),
    _40: verticalScale(40),
    _44: verticalScale(44),
    _49: verticalScale(49),
    _50: verticalScale(50),
    _56: verticalScale(56),
    _70: verticalScale(70),
    _80: verticalScale(80),
    _90: verticalScale(90),
    _100: verticalScale(100),
    _120: verticalScale(120),
    _150: verticalScale(150),
    _200: verticalScale(200),
    _320: verticalScale(320),
  },
};
