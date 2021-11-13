import * as Font from "expo-font";
import { Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      // 웹상의 이미지를 가져옴
      return Image.prefetch(image);
    } else {
      // 로컬의 이미지를 가져옴
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [assets] = useAssets([require("./my-face.jpeg")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    const images = loadImages([
      require("./my-face.jpeg"),
      // 문자열을 보내줄경우 -> prefetch
      "https://reactnative.dev/img/oss_logo.png",
    ]);
    await Promise.all([...fonts, ...images]);
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