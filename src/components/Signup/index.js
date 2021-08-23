import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeNames';

const SignupComponent = ({
  form,
  errors,
  onChange,
  onSubmit,
  error,
  loading,
}) => {
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
        {error?.error && <Text>error.error</Text>}
        <Input
          label="Username"
          placeholder="Enter Username"
          onChangeText={value => onChange('username', value)}
          error={errors.username || error?.username?.[0]}
        />
        <Input
          label="First name"
          placeholder="Enter first name"
          onChangeText={value => onChange('firstName', value)}
          error={errors.firstName || error?.first_name?.[0]}
        />
        <Input
          label="Last name"
          placeholder="Enter Last name"
          onChangeText={value => onChange('lastName', value)}
          error={errors.lastName || error?.last_name?.[0]}
        />
        <Input
          label="Email"
          placeholder="Enter Email"
          onChangeText={value => onChange('email', value)}
          error={errors.email || error?.email?.[0]}
        />
        <Input
          label="Password"
          icon={<Text>Show</Text>}
          secureTextEntry={true}
          iconPosition="right"
          placeholder="Enter Password"
          onChangeText={value => onChange('password', value)}
          error={errors.password || error?.password?.[0]}
        />
        {console.log('error', error)}
        <CustomButton
          onPress={onSubmit}
          primary
          title="Submit"
          loading={loading}
          disabled={loading}
        />
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
