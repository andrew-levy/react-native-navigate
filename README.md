# react-native-navigatable

Simple navigation for your React Native apps.

<!-- ## Installation

<i>(Coming soon to package manager near you...)</i>

```console
yarn add react-native-navigatable
``` -->

## Usage

At the root of your app, use the `Navigation` component. The first and only child of a `Navigation` component should be the initial screen you want to show.

```jsx
import { Navigation } from 'react-native-navigatable';

const App = () => {
  return (
    <Navigation>
      <Home />
    </Navigation>
  );
};
```

To make your components look and feel like _screens_ with navigation features, wrap them in a `Navigatable` component. To navigate to a different Navigatable view, use the `useNavigate` hook.

```jsx
import { Navigatable, useNavigate } from 'react-native-navigatable';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Navigatable>
      <Text>Home</Text>
      <Button title='Go to details' onPress={() => navigate.to(<Details />)} />
    </Navigatable>
  );
};
```
