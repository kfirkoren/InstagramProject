import React from 'react';
import {Text} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const ProfileTabTitle = props => {
  return (
    <Text style={[style.title, !props.isFocused && style.titleNotFocused]}>
      {/* זה הדרך בעצם לעשות תנאי של צבע אם משהו אמת או שקר */}
      {props.title}
    </Text>
  );
};

ProfileTabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default ProfileTabTitle;
