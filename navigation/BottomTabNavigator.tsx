import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import {
  BottomTabParamList,
  HomeParamList,
  PositivityToolBoxParamList,
  ProfileParamList,
} from '../types';
import HomeScreen from '../screens/HomeScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import ProfileScreen from '../screens/CreateProfileScreen';
import PositivityToolBoxScreen from '../screens/PositivityToolBoxScreen';
import AffirmationScreen from '../screens/AffirmationScreen';
import MindfulnessScreen from '../screens/MindfulnessScreen';
import BreathingScreen from '../screens/BreathingScreen';
import LaughingScreen from '../screens/LaughingScreen';
import VisualizationScreen from '../screens/VisualizationScreen';
import MovingScreen from '../screens/MovingScreen';
import MentorConnectionScreen from '../screens/MentorConnectionScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].tabBar,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="PositivityToolBox"
        component={TabTwoNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Wellness',
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabThreeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createNativeStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createNativeStackNavigator<PositivityToolBoxParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="PositivityToolBoxScreen"
        component={PositivityToolBoxScreen}
        options={{ headerTitle: 'Wellness Toolbox' }}
      />
      <TabTwoStack.Screen
        name="Affirmation"
        component={AffirmationScreen}
        options={{ headerTitle: 'Daily Affirmation' }}
      />
      <TabTwoStack.Screen
        name="Mindfulness"
        component={MindfulnessScreen}
        options={{ headerTitle: 'Mindfulness' }}
      />
      <TabTwoStack.Screen
        name="Breathing"
        component={BreathingScreen}
        options={{ headerTitle: 'Breathing Exercise' }}
      />
      <TabTwoStack.Screen
        name="Laughing"
        component={LaughingScreen}
        options={{ headerTitle: 'Laughter & Light' }}
      />
      <TabTwoStack.Screen
        name="Visualization"
        component={VisualizationScreen}
        options={{ headerTitle: 'Guided Visualization' }}
      />
      <TabTwoStack.Screen
        name="Moving"
        component={MovingScreen}
        options={{ headerTitle: 'Gentle Movement' }}
      />
      <TabTwoStack.Screen
        name="Resources"
        component={ResourcesScreen}
        options={{ headerTitle: 'Resources & Support' }}
      />
      <TabTwoStack.Screen
        name="MentorConnection"
        component={MentorConnectionScreen}
        options={{ headerTitle: 'Connect with a Mentor' }}
      />
    </TabTwoStack.Navigator>
  );
}
const TabThreeStack = createNativeStackNavigator<ProfileParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </TabThreeStack.Navigator>
  );
}
