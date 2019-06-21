import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,

  screamWidth: width < height ? width : height,
  screamHeight: width < height ? height : width,
};
