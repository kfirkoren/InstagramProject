import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
// import {Image} from 'react-native-svg';

const UserStory = props => {
  return (
    <View style={style.container}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDumensions={props.imageDumensions}
      />
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
  imageDumensions: PropTypes.number.isRequired,
};

export default UserStory;
