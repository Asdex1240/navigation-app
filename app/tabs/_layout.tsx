import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'indigo', 
      headerShown: false,
      // tabBarStyle: {
      //   backgroundColor: 'black'
      // }
      }}>
      
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add-outline" color={color} />,
        }}
      />

      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home Screen',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites Screen',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
