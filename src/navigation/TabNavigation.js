import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, gStyle } from '../constants';
import { MaterialIcons } from 'react-native-vector-icons';

// grabs stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackDownloads from './StackDownloads';
import StackMore from './StackMore';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.inactiveGrey,
        tabBarIcon: ({ color }) => {
          let iconName = 'home'; // Default icon is Home

          if (route.name === 'StackSearch') {
            iconName = 'search';
          } else if (route.name === 'StackDownloads') {
            iconName = 'theaters'; // Use the Theater icon for "Channels"
          } else if (route.name === 'StackMore') {
            iconName = 'menu';
          }

          return <MaterialIcons name={iconName} size={24} color={color} />;
        },
        tabBarStyle: gStyle.navTabStyle
      })}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="StackSearch"
        component={StackSearch}
        options={{
          tabBarLabel: 'Search'
        }}
      />
      <Tab.Screen
        name="StackDownloads"
        component={StackDownloads}
        options={{
          tabBarLabel: 'Channels' // Change "Downloads" to "Channels"
        }}
      />
      <Tab.Screen
        name="StackMore"
        component={StackMore}
        options={{
          tabBarLabel: 'More'
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
