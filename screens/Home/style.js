import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginRight: horizontalScale(-5),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  messageIcon: {
    padding: horizontalScale(14),
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },

  messageNumberContainer: {
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(10),
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: verticalScale(10),
    borderRadius: 10,
    alignItems: 'center',
  },

  messageNumber: {
    color: 'white',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', '600'),
  },

  userStoryContainer: {
    marginTop: verticalScale(21),
    marginHorizontal: 0,
  },

  userPostContainer: {
    marginHorizontal: horizontalScale(23),
  },
});

export default style;
