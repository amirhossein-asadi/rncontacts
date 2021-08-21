import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        <Input
          label="Username"
          iconPosition="right"
          placeholder="Enter Username"
        />
        <Input
          label="Password"
          icon={<Text>Show</Text>}
          secureTextEntry={true}
          iconPosition="right"
          placeholder="Enter Password"
        />
        <CustomButton primary title="Submit" />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new account?</Text>
          <TouchableOpacity onPress={() => navigate(REGISTER)}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
