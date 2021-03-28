import 'react-native-gesture-handler';
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './views/HomeScreen';
import SingleCat from './views/SingleCat';
  
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Kitten List', headerStyle: headerStyle }} />
                <Stack.Screen name="SingleView" component={SingleCat} options={{ title: 'Kitten View', headerStyle: headerStyle }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const headerStyle = {
    backgroundColor: '#6ff606', 
    height: 80
};

export default App;
