/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPosts from '../../components/UserPosts/UserPosts';
import {horizontalScale} from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const userStories = [
    {
      firstName: 'kfir',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'noya',
      id: 2,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'nofar',
      id: 3,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'inbar',
      id: 4,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'omer',
      id: 5,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'avi',
      id: 6,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'ronit',
      id: 7,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'shaked',
      id: 8,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'eliav',
      id: 9,
      profileImage: require('../../assets/images/default_profile.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'kfir',
      lastName: 'koren',
      location: 'kiryat haim',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'noya',
      lastName: 'pesso',
      location: 'haifa',
      likes: 20000,
      comments: 30,
      bookmarks: 44,
      id: 2,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'avi',
      lastName: 'koren',
      location: 'kiryat haim',
      likes: 1341,
      comments: 24,
      bookmarks: 55,
      id: 3,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'ronit',
      lastName: 'koren',
      location: 'kiryat haim',
      likes: 5401,
      comments: 24,
      bookmarks: 55,
      id: 4,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'nofar',
      lastName: 'koren',
      location: 'kiryat haim',
      likes: 15701,
      comments: 56,
      bookmarks: 575,
      id: 5,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurretPage, setuserStoriesCurretPage] = useState(1);
  const [userStoriesRenderData, setuserStoriesRenderData] = useState([]);
  const [isLoadinguserStories, setisLoadinguserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurretPage, setuserPostsCurretPage] = useState(1);
  const [userPostsRenderData, setuserPostsRenderData] = useState([]);
  const [isLoadinguserPosts, setisLoadinguserPosts] = useState(false);

  // const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  // console.log(screenData);

  const pagination = (database, currentPage, pageSize) => {
    console.log('currentPage' + currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setisLoadinguserStories(true);
    const getInitData = pagination(userStories, 1, userStoriesPageSize);
    setuserStoriesRenderData(getInitData);
    setisLoadinguserStories(false);

    setisLoadinguserPosts(true);
    const getInitPostData = pagination(userPosts, 1, userPostsPageSize);
    setuserPostsRenderData(getInitPostData);
    setisLoadinguserPosts(false);
  }, []);



  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View style={style.userPostContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title={'Let’s Explore '} />
                <TouchableHighlight activeOpacity={0.6} underlayColor="#ffffff">
                  <View style={style.messageIcon}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size={horizontalScale(20)}
                      color={'#898DAE'}
                    />
                    <View style={style.messageNumberContainer}>
                      <Text style={style.messageNumber}>2</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={style.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5} 
                  onEndReached={() => {
                    if (isLoadinguserStories) {
                      return;
                    }
                    setisLoadinguserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurretPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setuserStoriesCurretPage(userStoriesCurretPage + 1);
                      setuserStoriesRenderData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setisLoadinguserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                      imageDumensions={horizontalScale(60)}
                    />
                  )}
                />
              </View>
            </>
          }
          data={userPostsRenderData}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          renderItem={({item}) => (
            <UserPosts
              firstName={item.firstName}
              lastName={item.lastName}
              location={item.location}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              image={item.image}
              profileImage={item.profileImage}
              imageDumensions={horizontalScale(48)}
            />
          )}
          onEndReachedThreshold={0.5} 
          onEndReached={() => {
            console.log('fetch page number' + userPostsCurretPage + 1);
            if (isLoadinguserPosts) {
              return;
            }
            setisLoadinguserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurretPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setuserPostsCurretPage(userPostsCurretPage + 1);
              setuserPostsRenderData(prev => [...prev, ...contentToAppend]);
            }
            setisLoadinguserPosts(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
