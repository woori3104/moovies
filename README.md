# moovies

```

```
## Navigation Introduction
- install
```
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
```
- 맥 OS를 사용하고 ios앱을 제작하고 있는 경우, 안드로이드의 경우 skip
```
npx pod-install ios
```

- android/app/src/main/java/com/nativemoovies/MainActivity.java 파일 수정
  - create-react-native-app으로 프로젝트 생성시 수정필요 없음. 자동으로 작성됨
``` 
import android.os.Bundle;

protected void onCreate(Bundle savedInstanceState) {
  // Set the theme to AppTheme BEFORE onCreate to support 
  // coloring the background, status bar, and navigation bar.
  // This is required for expo-splash-screen.
  setTheme(R.style.AppTheme);
  super.onCreate(null);
}
```
