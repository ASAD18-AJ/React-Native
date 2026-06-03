import React from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'

export default function SignIn() {
  return (
    <ScrollView>
      <View>
        <Image />
        <Text>Welcome back</Text>
        <Text>Sign in to your account</Text>
        <TextInput
          placeholder='Email address'
          placeholderTextColor="#9CA3AF"
          value={''}
          onChange={}
        />
      </View>
    </ScrollView>
  )
}