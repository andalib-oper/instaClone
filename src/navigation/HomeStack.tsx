import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import HomeHeader from '../components/Headers/HomeHeader';
import CreatePost from '../screens/home/CreatePost';
import StackHeader from '../components/Headers/StackHeader';
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: true,
          header: () => <HomeHeader />,
        }}
      />
      <Stack.Screen
        name="createPost"
        component={CreatePost}
        options={{
          headerShown: true,
          header: () => <StackHeader title={' Create post'} />,
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: true,
          header: () => <StackHeader title={'   Profile'} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
