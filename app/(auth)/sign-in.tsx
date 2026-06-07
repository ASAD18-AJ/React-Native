import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-white"
      keyboardShouldPersistTaps="handled"  
    >
      <View className="flex-1 justify-center px-6">
        <Image />
        <Text>Welcome back</Text>
        <Text>Sign in to your account</Text>
        <TextInput
          placeholder='Email address'
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
      </View>
    </ScrollView>
  )
}