import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import FavoritesStack from './FavoritesStack';
import FavoritesChartStack from './FavoritesChartStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'pokeball';
          } else if (route.name === 'Favoritos') {
            iconName = 'star';
          } else if (route.name === 'Gráfico') {
            iconName = 'chart-pie';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favoritos" component={FavoritesStack} />
      <Tab.Screen name="Gráfico" component={FavoritesChartStack} />
    </Tab.Navigator>
  );
}
