import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { loginValidator } from "../helpers/loginValidator";
import { passwordValidator } from "../helpers/passwordValidator";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = () => {
   if (loginValidator(username.value, password.value)) {;
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeScreen" }],
      });
    }else{
      alert("Falsche Anmeldedaten!");
      console.log(username.value + " + " + password.value);
    }
  };

  return (
    <Background>
      <Logo />
      <Header>Bitte logge dich ein!</Header>
      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: "" })}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onLoginPressed}>
        Log in
      </Button>
    </Background>
  );
}