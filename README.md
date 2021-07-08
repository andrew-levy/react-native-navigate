# react-native-navigate

Simple navigation for your React Native apps.

<!-- ## Installation

<i>(Coming soon to package manager near you...)</i>

```console
yarn add react-native-navigate
``` -->

## Usage

At the root of your app, use the `NavigationRoot` component. The first and only child of a `NavigationRoot` component should be the initial screen you want to show.

```jsx
import { NavigationRoot } from 'react-native-navigate';

const App = () => {
  return (
    <NavigationRoot>
      <Home />
    </NavigationRoot>
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

<!-- ## Documentation

### `NavigationRoot`

The `NavigationRoot` component is the container for all of your list items and list sections.

| Prop        | Type        | Description                                  | Default                  | Required                 |
| ----------- | ----------- | -------------------------------------------- | ------------------------ | ------------------------ |
| `listStyle` | `ListStyle` | The style of the list                        | `ListStyle.InsetGrouped` | :heavy_multiplication_x: |
| `sideBar`   | `boolean`   | Put icon in the leading sidebar of each item | `false`                  | :heavy_multiplication_x: |
| `children`  | `ReactNode` | The list items or sections                   | `null`                   | :heavy_check_mark:       | -->
