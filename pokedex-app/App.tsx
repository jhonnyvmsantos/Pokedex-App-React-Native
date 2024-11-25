import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { MyStack } from '@/routes/router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
