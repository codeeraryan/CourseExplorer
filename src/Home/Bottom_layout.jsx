import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { ComputerDesktopIcon, HomeIcon } from 'react-native-heroicons/solid';
import Enrolled from './Enrolled';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator initialRouteName='Home' screenOptions={{ animation: 'shift', headerShown: false, }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: (tabInfo) => <HomeIcon height={tabInfo.focused?60:20} color={tabInfo.focused?'blue':'gray'} /> }} />
      <Tab.Screen name="Enrolled" component={Enrolled} options={{ tabBarIcon: (tabInfo) => <ComputerDesktopIcon height={tabInfo.focused?60:20} color={tabInfo.focused?'blue':'gray'} /> }} />
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>

  );
}

export default MyTabs;