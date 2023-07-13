import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function App() {
  const Stack = createNativeStackNavigator();
 return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} channelName={"Aditya's World"} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
