// /src/utils/FormikUtils.js
import * as Yup from 'yup';

// Validation schema for Login
export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

// Validation schema for Sign Up
export const signUpValidationSchema = Yup.object({
  name: Yup.string().required('Enter Name'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

// Common form submit logic for both Login and SignUp
export const handleFormSubmit = (values, isLogin) => {
  // Handle form submission
  alert(isLogin ? 'Login submitted' : 'Sign Up submitted', `Email: ${values.email}, Password: ${values.password}`);
};



// /src/screens/Login.js

//yarn add yup formik
// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
// import { Formik } from 'formik';
// import { loginValidationSchema, handleFormSubmit } from '../utils/FormikUtils';

// const Login = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         validationSchema={loginValidationSchema}
//         onSubmit={(values) => handleFormSubmit(values, true)}
//       >
//         {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//           <View style={styles.formContainer}>
//             <Text style={styles.header}>Login</Text>

//             <TextInput
//               style={[styles.input, touched.email && errors.email ? styles.inputError : null]}
//               placeholder="Email"
//               keyboardType="email-address"
//               onChangeText={handleChange('email')}
//               onBlur={handleBlur('email')}
//               value={values.email}
//             />
//             {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

//             <TextInput
//               style={[styles.input, touched.password && errors.password ? styles.inputError : null]}
//               placeholder="Password"
//               secureTextEntry
//               onChangeText={handleChange('password')}
//               onBlur={handleBlur('password')}
//               value={values.password}
//             />
//             {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

//             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//               <Text style={styles.buttonText}>Login</Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               style={styles.toggleButton} 
//             //   onPress={() => navigation.navigate('SignUp')}
//             >
//               <Text style={styles.toggleButtonText}>
//                 Don’t have an account? Sign Up
//               </Text>
//             </TouchableOpacity>

//           </View>
//         )}
//       </Formik>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f7f7f7',
//   },
//   formContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingLeft: 15,
//     fontSize: 16,
//   },
//   inputError: {
//     borderColor: 'red',
//   },
//   button: {
//     backgroundColor: '#2a9d8f',
//     paddingVertical: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginBottom: 10,
//   },
//   toggleButton: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   toggleButtonText: {
//     color: '#2a9d8f',
//     fontSize: 16,
//   },
// });

// export default Login;




// /src/screens/SignUp.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { signUpValidationSchema, handleFormSubmit } from '../utils/FormikUtils';

const SignUp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={signUpValidationSchema}
        onSubmit={(values) => handleFormSubmit(values, false)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <Text style={styles.header}>Sign Up</Text>

            <TextInput
              style={[styles.input, touched.name && errors.name ? styles.inputError : null]}
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            <TextInput
              style={[styles.input, touched.email && errors.email ? styles.inputError : null]}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
              style={[styles.input, touched.password && errors.password ? styles.inputError : null]}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.toggleButton} 
            //   onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.toggleButtonText}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 15,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  button: {
    backgroundColor: '#2a9d8f',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },toggleButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#2a9d8f',
    fontSize: 16,
  },
});

export default SignUp;
