## react-native-navigate

An experimental (and probably not performant) take on React Navigation.

- Don't need to define your routes upfront, they get added to the stack dynamically.
- Don't need to pass serializable params to your screens, you can just pass props directly to your screen component.
- Can decide the presentation of a screen dynamically.
- Friendlier API

### Basic Example

```tsx
// Wrap your app in a NavigationProvider. The first and only child of the NavigationProvider is the initial screen you want to render.
function App() {
  return (
    <NavigationProvider>
      <Home />
    </NavigationProvider>
  );
}

// Each screen can be wrapped in a NavigationView to define navigation properties like title and displayMode.
function Home() {
  const user = getUser();

  return (
    <NavigationView title="Home" displayMode="large">
      <View>
        <Text>Home</Text>
        {/* Use a NavigationLink to navigate to any view */}
        <NavigationLink
          title="To Settings"
          destination={<Settings user={user} />}
        />
      </View>
    </NavigationView>
  );
}

function Settings({ user }) {
  // You can access navigation utilities like .to() and .back() to navigate to other screens.
  const navigate = useNavigate();

  return (
    <NavigationView>
      <View>
        <Text>Settings</Text>
        <Text>{user.name}</Text>
        <Button title="Back" onPress={navigate.back} />
        <Button
          title="To a screen on the fly!"
          onPress={navigate.to(
            <NavigationView title="">
              <Text>On the fly</Text>
            </NavigationView>
          )}
        />
      </View>
    </NavigationView>
  );
}
```

### Bottom Tabs Example

Use the `TabView` and `TabItem` components to define your tabs.

```tsx
function App() {
  return (
    <NavigationProvider>
      <TabView>
        <TabItem label="Home" icon={(props) => <HouseIcon {...props} />}>
          <Home />
        </TabItem>
        <TabItem label="Settings" icon={(props) => <GearIcon {...props} />}>
          <Settings user={user} />
        </TabItem>
      </TabView>
    </NavigationProvider>
  );
}
```

### Conditional Rendering

If you want to conditionally render a screen, you need to supply a unique key to the NavigationProvider that changes when you want to re-render the whole stack.

```tsx
function App() {
  const { isLoggedIn } = useAuth();
  return (
    <NavigationProvider key={isLoggedIn ? "home" : "auth"}>
      {loggedIn ? <Home /> : <Login />}
    </NavigationProvider>
  );
}
```
