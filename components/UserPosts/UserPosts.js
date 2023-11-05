/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {
//   faEllipsis,
// } from '@fortawesome/free-regular-svg-icons';
// import { faBookmark, faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import { scaleFontSize } from '../../assets/styles/scaling';

const UserPosts = props => {
  return (
    <View>
      <View style={style.container}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDumensions={props.imageDumensions}
          />
          <View style={style.userDetails}>
            <Text style={style.userNameFont}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.userLocationFont}>{props.location}</Text>
            )}
            {/* רק אם קיים מיקום אז יופיע */}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsis} color="#79869F" size={scaleFontSize(24)} />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={style.allIconsView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={style.iconText}>{props.likes}</Text>
        </View>
        <View style={style.iconAndTextView}>
          <FontAwesomeIcon icon={faComment} color="#79869F" />
          <Text style={style.iconText}>{props.likes}</Text>
        </View>
        <View style={style.iconAndTextView}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={style.iconText}>{props.likes}</Text>
        </View>
      </View>
    </View>
  );
};

UserPosts.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  imageDumensions: PropTypes.number.isRequired,
};

export default UserPosts;
