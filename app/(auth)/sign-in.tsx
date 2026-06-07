import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
      <View className="flex-1 justify-center px-6 py-12">
        <Image source={require("../../assets/images/kribb.png")}
        resizeMode='contain'       
        />
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

        <TextInput
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-6"
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity className="w-full bg-blue-600 py-4 rounded-xl items-center mb-4">

        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}