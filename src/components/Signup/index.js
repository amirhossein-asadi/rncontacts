import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeNames';

const SignupComponent = ({form, error, onChange, onSubmit}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <Input
          label="Username"
          placeholder="Enter Username"
          onChangeText={value => onChange('username', value)}
          error={error.username}
        />
        <Input
          label="First name"
          placeholder="Enter first name"
          onChangeText={value => onChange('firstName', value)}
          error={error.firstName}
        />
        <Input
          label="Last name"
          placeholder="Enter Last name"
          onChangeText={value => onChange('lastName', value)}
          error={error.lastName}
        />
        <Input
          label="Email"
          placeholder="Enter Email"
          onChangeText={value => onChange('email', value)}
          error={error.email}
        />
        <Input
          label="Password"
          icon={<Text>Show</Text>}
          secureTextEntry={true}
          iconPosition="right"
          placeholder="Enter Password"
          onChangeText={value => onChange('password', value)}
          error={error.password}
        />

        <CustomButton onPress={onSubmit} primary title="Submit" />

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigate(LOGIN)}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default SignupComponent;
