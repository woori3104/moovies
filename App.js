import AppLoading from "expo-app-loading";
import React , {useState} from 'react';
import { Text } from "react-native"

export default function App() {
  const [ready, setReady] = useState(false);
  // onFinish는 로딩이 끝나면 호출되는 함수
  const onFinish = () => setReady(true);

  const startLoading = async () => {};
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