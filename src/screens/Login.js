// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <View style={styles.subContainer}>
//         <Image source={{uri: ""}} style={styles.logoStyle} />
//         <TextInput
//           placeholder="Enter Email or mobile no."
//           value={email}
//           onChangeText={text => setEmail(text)}
//           style={styles.inputBox}
//         />
//         <TextInput
//           placeholder="Enter Password"
//           value={password}
//           onChangeText={text => setPassword(text)}
//           style={styles.inputBox}
//         />
//         <TouchableOpacity style={styles.loginbtn}>
//           <Text style={styles.loginText}>Log in</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.forgotbtn}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.createbtn}>
//           <Text style={styles.createText}>Create new account</Text>
//         </TouchableOpacity>
//         <Image style={styles.metalogo} />
//       </View>
//     </View>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   logoStyle: {
//     height: 60,
//     width: 60,
//     marginVertical: '20%',
//   },
//   container: {
//     padding: 8,
//   },
//   subContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputBox: {
//     borderWidth: 1,
//     borderColor: 'grey',
//     width: '95%',
//     borderRadius: 15,
//     marginTop: 20,
//     paddingHorizontal: 10,
//   },
//   loginbtn: {
//     backgroundColor: 'blue',
//     width: '95%',
//     padding: 10,
//     borderRadius: 20,
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   loginText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 15,
//     fontWeight: '400',
//   },
//   forgotbtn: {
//     marginTop: 10,
//     fontSize: 14,
//     color: 'grey',
//   },
//   createbtn: {
//     borderColor: 'blue',
//     borderWidth: 1,
//     width: '95%',
//     padding: 10,
//     alignItems: 'center',
//     borderRadius: 20,
//     marginTop: '35%',
//   },
//   createText: {
//     fontSize: 15,
//     fontWeight: '400',
//     color: 'blue',
//   },
//   metalogo: {
//     height: 15,
//     width: 70,
//     marginTop: 15,
//   },
// });

