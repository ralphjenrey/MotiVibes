import React, { useEffect } from "react";
import { ThemeProvider } from "./Theme";
import LoginRegisterStack from "./pages/LoginRegisterStack";
import { AuthProvider } from "./AuthContext";
import { NavigationContainer } from "@react-navigation/native";
// import registerNNPushToken from 'native-notify';
import { Notification } from "./Notification";
import Questions from "./pages/Questions";

// Define App component as a function component
const App = () => {

    // registerNNPushToken(19606, 'VWYmNDLEE9fDz9NgBPJ6Rq');

  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthProvider>
          <LoginRegisterStack />
        </AuthProvider>
      </NavigationContainer>
      
   
    </ThemeProvider>
      //  <Notification />
  );
}

export default App; 
