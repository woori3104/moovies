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

# Tab Navigation 

```
npm install @react-navigation/bottom-tabs
```

# Compile Error
```
Cycle in dependencies between targets 'Pods-MyAppName' and 'RxCocoa'; building could produce unreliable results. This usually can be resolved by moving the target's Headers build phase before Compile Sources. Cycle path: Pods-MyAppName → RxCocoa → Pods-MyAppName
```
가 발생한는 경우 xcode에서 Legacy building으로 변경할것 

# Stack Navigation 

```
npm install @react-navigation/native-stack
```

# styled Components 

```
npm install react-native-web
npm install styled-components

// typescript
npm install @types/styled-components @types/styled-components-react-native -D
```

# Typescript 
- Adding TypeScript to an Existing Project
  - 기존 프로젝트에 타입스크립트 추가 
  ```
  npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
  ```
  - typeScript config file 추가
  - index.js는 삭제하지말고 그상태로 유지, 나머지는 tsx로 변경
  - 


# swipe
```
npm i react-native-web-swiper --save
```
