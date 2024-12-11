import {View} from 'react-native';
import React from 'react';
import Footer from './components/Footer';
import CustomButton from './components/CustomButton';
import Test from './components/Test';

// import Signup from './screens/Signup';
// import Carousel from './screens/Carousel';
// import FlatList from './screens/FlatlistCom';
// import CardCom from './screens/CardCom';
// import ValidationLogin from './screens/ValidationLogin';
// import Login from './components/Login';
// import SignUp from './components/Signup';

const App = () => {
  return (
    <View>
      <FlatList />
      <Login />
      <Carousel />
      <Signup />
      <CardCom />
      <ValidationLogin />
      <Login />
      <SignUp />
      <Footer />
      <Test />
    </View>
  );
};

export default App;
