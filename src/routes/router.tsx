import HomePage from '@/pages/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator id={undefined} initialRouteName='Home'
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomePage}/>
        </Stack.Navigator>
    );
}

export { MyStack };