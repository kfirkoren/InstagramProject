import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileImage: {
    width: horizontalScale(120),
    height: verticalScale(120),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageCircle: {
    borderWidth: 3,
    borderRadius: 100,
    padding: horizontalScale(2),
    borderColor: '#0150EC',
  },
  username: {
    textAlign: 'center',
    color: 'black',
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily('Inter', '600'),
    marginTop: verticalScale(20),
  },
  DataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(31),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
    paddingVertical: verticalScale(30),
    marginHorizontal: horizontalScale(40),
  },
  DataNumber: {
    color: '#022150',
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily('Inter', '600'),
    textAlign: 'center',
  },
  DataText: {
    color: '#79869F',
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Inter', '400'),
    textAlign: 'center',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
});

export default style;
