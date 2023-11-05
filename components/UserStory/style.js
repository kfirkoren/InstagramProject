import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:horizontalScale(20),
  },
  name: {
    fontFamily: getFontFamily('inter', '500'),
    fontSize:scaleFontSize(14),
    color: '#022150',
    marginTop:verticalScale(8),
    textAlign: 'center',
  },

  circle: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    borderRadius: 100,
    padding:horizontalScale(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
