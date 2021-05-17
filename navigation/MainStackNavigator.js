import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import SearchCountry from '../screens/SearchCountry';
import SearchState from '../screens/SearchState';
import LandingPage from '../screens/LandingPage';
import Bookmark from '../screens/Bookmark';
import SearchCity from '../screens/SearchCity';
import Location from '../screens/MyLocation';
import CityDetails from '../screens/CityDetails';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#63C5DA',
            height: 70,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#fff',

        //   headerRight: () => (
        //     <Icon containerStyle={{ marginRight: 50}} 
        //       name='heart'
        //       type='font-awesome'
        //       color= '#fff'
        // />
        //   ),

        //   headerLeft: () => (
        //     <Icon containerStyle={{ marginLeft: 50}} 
        //       name='leaf'
        //       type='font-awesome'
        //       color= '#fff'
        //   /> 
        //   ),

        }} >
        <Stack.Screen name="Country" component={SearchCountry} />
        <Stack.Screen name="State" component={SearchState} />
        <Stack.Screen name="Air Quality Index" component={LandingPage} />
        <Stack.Screen name="CityDetails" component={CityDetails} />
        <Stack.Screen name="Favorites" component={Bookmark} />
        <Stack.Screen name="City" component={SearchCity} />
        <Stack.Screen name="Location" component={Location} />
      </Stack.Navigator>
  );
};

export default MainStackNavigator;