import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from "expo-font";
import { Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    // 로컬에서 사진파일을 가져옴
    await Asset.loadAsync(require("./landers.jpeg"));
    // 웹에서 사진 파일을 가져옴
    await Image.prefetch("https://reactnative.dev/img/oss_logo.png");
  };
  if (!ready) {
    return (
      // AppLoading을 렌더링할 때까지 splash screen이 계속 떠있게함
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return <Text>We are done loading!</Text>;
}