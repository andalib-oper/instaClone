import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/onboarding/Onboarding';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="onboarding"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default LoginStack
