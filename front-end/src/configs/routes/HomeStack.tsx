import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import HomeScene from "../../scenes/HomeScene";
import HelloWorldScene from "../../scenes/HelloWorld";

const HomeStack=createStackNavigator({
    Home: HomeScene,
    Upgrade: HelloWorldScene
},
);

export default HomeStack;
