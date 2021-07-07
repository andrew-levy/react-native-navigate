# react-native-navigate

Simple navigation for your React Native apps.

<!-- ## Installation

<i>(Coming soon to package manager near you...)</i>

```console
yarn add react-native-navigate
``` -->

## Usage

At the root of your app, use the `NavigationProvider` component. The first and only child of a `NavigationProvider` component should be the initial screen you want to show.

```jsx
import { NavigationProvider } from 'react-native-navigate';

const App = () => {
  return (
    <NavigationProvider>
      <Home />
    </NavigationProvider>
  );
};
```

To make your components look and feel like _screens_ with navigation features, wrap them in a `NavigationView` component. To navigate to a different NavigationView view, use the `useNavigate` hook.

```jsx
import { NavigationView, useNavigate } from 'react-native-navigate';

const Home = () => {
  const navigate = useNavigate();
  return (
    <NavigationView>
      <Text>Home</Text>
      <Button title='Go to details' onPress={() => navigate.to(<Details />)} />
    </NavigationView>
  );
};
```
