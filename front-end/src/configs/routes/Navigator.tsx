import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

//import AuthStack from './AuthStack';
import AuthStack from './AuthStack';
import MainNavigation from '../../scenes/MainNavigation';
import WelcomeScene from '../../scenes/WelcomeScene';
import SignInScene from '../../scenes/SignInScene';
import SignUpScene from '../../scenes/SignUpScene';
import ForumsScene from '../../scenes/ForumsScene';
import { navigationOption } from '../../component/ButtonBackNavBar';
import ForumDetails from '../../scenes/ForumDetails';

const AppNavigator = createStackNavigator(
  {
    Welcome:{
      screen: WelcomeScene,
      navigationOptions:{
        header: null
      }
    },
    SignIn: {
      screen: SignInScene,
      navigationOptions:{
        header: null
      }
    },
    SignUp: {
      screen: SignUpScene,
      navigationOptions:{
        header: null
      }
    },
    Main:{
      screen: MainNavigation,
      navigationOptions:{
        header: null,
      }
    },
    Forums:{
      screen: ForumsScene,
      navigationOptions: navigationOption('Forums')
    },
    ForumDetail:{
      screen: ForumDetails,
      navigationOptions: navigationOption('Forum Details')
    }
  },
  {
    initialRouteName: 'Welcome',
    navigationOptions:{
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
