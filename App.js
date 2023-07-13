import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import UserData from "./src/screens/UserData";
import Course from "./src/screens/Course";

import {
  JosefinSans_400Regular,
  JosefinSans_500Medium_Italic,
  useFonts,
} from "@expo-google-fonts/josefin-sans";

import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium_Italic,
    Nunito_600SemiBold, Nunito_700Bold
  });

  if(!fontLoaded){
    <AppLoading/>
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home">
          {(props) => <Home {...props} channelName={"Aditya's World"} />}
        </Stack.Screen>

        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: { fontSize: 25,
            fontFamily:"Nunito_600SemiBold" },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: { fontSize: 25,fontFamily:"Nunito_600SemiBold" },
            
            headerTitle: "Students Data",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: { fontSize: 25,fontFamily:"Nunito_600SemiBold" },

            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: { fontSize: 25,fontFamily:"Nunito_600SemiBold" },

            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
