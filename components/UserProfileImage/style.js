import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import { horizontalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#F35BAC',
    borderWidth: 1,
    borderRadius: 100,
    padding: horizontalScale(3),
  },
});

export default style;
