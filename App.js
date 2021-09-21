import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomNavigationBar from './CustomNavBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/screens/LandingPage/LandingPage';
import RegisterPage from './src/screens/RegisterPage/RegisterPage';
import LoginPage from './src/screens/LoginPage/LoginPage';
import Verification from './src/screens/LoginPage/Verification/Verification';
import HomePage from './src/screens/HomePage/HomePage';
import TermsPage from './src/screens/TermsPage/TermsPage';
import TermsAndCo from './src/compnents/TermsAndC/TermsAndC';
import DestinationSearch from './src/screens/DestinationPage/DestinationPage';
import CardDetailsPage from './src/screens/SummaryPage/CardDetails/CardDetails';
import PickUpLocationDetails from './src/screens/DestinationPage/PickUpDetails/PickUpDetails';
import SummaryPage from './src/screens/SummaryPage/SummaryPage';
import DropOffDetails from './src/screens/DestinationPage/DropOffDetails/DropOfDetails';
import PickUpInstructions from './src/screens/DestinationPage/PickUpDetails/PickUpInstructions/PickUpInstructionsPage';
import ApprovalPage from './src/screens/RegisterPage/ApprovalPage/ApprovalPage';
import DropOffInstructions from './src/screens/DestinationPage/DropOffDetails/DropOffInstructions/DropOffInstructions';
import AccountPage from './src/screens/AccountPage/AccountPage';
import AccountSettings from './src/screens/AccountPage/AccountSettings/AccountSettings';
import SupportPage from './src/screens/AccountPage/SupportPage/SupportPage';
import ConfirmPickUpPage from './src/screens/SummaryPage/CardDetails/ConfirmPickUpPage/ConfirmPickUpPage';
import ConnectDriverPage from './src/screens/SummaryPage/CardDetails/ConfirmPickUpPage/ConnectDriverPage/ConnectDriverPage';
import AccountCardDetailsPage from './src/screens/AccountPage/AccountCardDetails/AccountCardDetails';
import PromotionPage from './src/screens/AccountPage/Promotions/PromotionPage';
import AboutPage from './src/screens/AccountPage/AboutPage/AboutPage';
import ChangePassword from './src/screens/AccountPage/ChangePassword/ChangePassword';
import ConfirmPage from './src/screens/DestinationPage/ConfirmPage/ConfirmPage';
import ParcelPage from './src/screens/DestinationPage/ParcelPage/ParcelPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="LandingPage"
       screenOptions={{
        header: CustomNavigationBar,
      }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="ApprovalPage" component={ApprovalPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="TermsPage" component={TermsPage} />
        <Stack.Screen name="TermsAndCo" component={TermsAndCo} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
        <Stack.Screen name="CardDetailsPage" component={CardDetailsPage} />
        <Stack.Screen name="SummaryPage" component={SummaryPage} />
        <Stack.Screen name="PickUpLocationDetails" component={PickUpLocationDetails} />
        <Stack.Screen name="DropOffDetails" component={DropOffDetails} />
        <Stack.Screen name="PickUpInstructions" component={PickUpInstructions} />
        <Stack.Screen name="DropOffInstructions" component={DropOffInstructions} />
        <Stack.Screen name="ConfirmPickUpPage" component={ConfirmPickUpPage} />
        <Stack.Screen name="ConfirmPage" component={ConfirmPage} />
        <Stack.Screen name="ParcelPage" component={ParcelPage} />
        <Stack.Screen name="ConnectDriverPage" component={ConnectDriverPage} />
        <Stack.Screen name="AccountCardDetailsPage" component={AccountCardDetailsPage} />
        <Stack.Screen name="PromotionPage" component={PromotionPage} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen options={{headerShown: false}}  name="AccountPage" component={AccountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
