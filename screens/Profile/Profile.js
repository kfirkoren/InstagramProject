import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, ScrollView, Image, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';
import style from './style';
import {ProfileTabNavigaton} from '../../navigation/MainNavigation';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageCircle}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <Text style={style.username}>Kfir Koren</Text>
        <View style={style.DataContainer}>
          <View>
            <Text style={style.DataNumber}>45</Text>
            <Text style={style.DataText}>Following</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.DataNumber}>30M</Text>
            <Text style={style.DataText}>Followers</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.DataNumber}>100</Text>
            <Text style={style.DataText}>Posts</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <ProfileTabNavigaton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
