import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileTabContentContainer: {
    backgroundColor: 'white',
  },
  profileTabContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    paddingHorizontal: horizontalScale(18),
  },
  image: {
    width: horizontalScale(157),
    height: verticalScale(90),
    marginTop:verticalScale(11),

  },
});

export default style;
