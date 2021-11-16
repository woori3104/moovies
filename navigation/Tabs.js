import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

// name을 변경하면 하단 탭이름과 타이틀 이름이 변경됨 
// screenOptions을 이용하여 Navigation의 색상등의 설정을 변경할 수 있다. 
const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: { backgroundColor: "tomato" },
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "purple",
      headerTitleStyle: { color: "tomato" },
      headerRight: () => (
        <View>
          <Text>Hello</Text>
        </View>
      ),
    }}
  >
    <Tab.Screen name="Movies" component={Movies} />
    <Tab.Screen name="Tv" component={Tv} />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);
export default Tabs;