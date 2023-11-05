import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
// import {Image} from 'react-native-svg';

const UserProfileImage = props => {
  return (
    <View style={style.container}>
      <Image
        source={props.profileImage}
        style={{width: props.imageDumensions, height: props.imageDumensions}}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDumensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
