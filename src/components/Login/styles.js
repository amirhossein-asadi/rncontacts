import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    marginTop: '2%',
    width: 90,
    height: 90,
    alignSelf: 'center',
  },
  title: {
    marginTop: 12,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 14,
    paddingVertical: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  createSection: {
    flexDirection: 'row',
    marginTop: 10,
  },
  linkBtn: {
    color: colors.primary,
    paddingLeft: 10,
  },
});
