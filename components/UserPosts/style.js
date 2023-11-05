import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  postContainer: {
    borderBottomWidth: 1,
    padding: horizontalScale(20),
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: horizontalScale(30),
    marginRight: horizontalScale(19),
  },

  userContainer: {flexDirection: 'row'},
  userDetails: {justifyContent: 'center', marginLeft: 10},
  userNameFont: {
    fontFamily: getFontFamily('inter', '500'),
    fontSize: scaleFontSize(16),
    color: '#000',
  },
  userLocationFont: {
    fontFamily: getFontFamily('inter', '400'),
    fontSize: scaleFontSize(12),
    color: '#000',
  },

  postImage: {
    // alignItems: 'center',
    marginVertical: verticalScale(20),
  },

  iconText: {
    fontFamily: getFontFamily('inter', '500'),
    fontSize: scaleFontSize(14),
    color: '#79869F',
    marginLeft: horizontalScale(3),
  },

  allIconsView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom:horizontalScale(20),
    borderBottomColor: '#EFF2F6',
  },
  iconAndTextView: {flexDirection: 'row', alignItems: 'center', marginLeft: horizontalScale(27)},
});

export default style;
