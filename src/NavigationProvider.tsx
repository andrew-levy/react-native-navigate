import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { createContext, ReactElement, ReactNode, useState } from "react";
import { Screen, NavigationBar, NavigationContextType } from "./types";
import { getComponentName } from "./utils";

export const NavigationContext = createContext<NavigationContextType>({
  screens: [],
  addScreen: (_: Screen) => {},
  removeEmptyView: () => {},
});

const EmptyView = () => null;

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const firstChild = React.Children.toArray(children)[0];

  const [screens, setScreens] = useState<NavigationContextType["screens"]>([
    { view: firstChild as ReactElement<any> },
  ]);

  const removeEmptyView = () => {
    setScreens(screens.filter((s) => s.view.type !== EmptyView));
  };

  const addScreen = (newScreen: Screen) => {
    const filterScreens = (screen: Screen) =>
      getComponentName(screen.view) === getComponentName(newScreen.view);
    const matchedScreens = screens.filter(filterScreens);
    if (matchedScreens.length === 0) {
      setScreens([...screens, newScreen]);
    } else {
      if (screens.length !== 1) {
        const index = screens.findIndex(filterScreens);
        const newScreens = [...screens];
        newScreens[index] = newScreen;
        setScreens(newScreens);
      }
    }
  };

  return (
    <NavigationContainer>
      <NavigationContext.Provider
        value={{ screens, addScreen, removeEmptyView }}
      >
        <Stack.Navigator>
          {screens.map((screen) => {
            return (
              <Stack.Screen
                key={getComponentName(screen.view)}
                name={getComponentName(screen.view)}
                options={{
                  ...(getComponentName(screen.view) === "TabView" && {
                    headerShown: false,
                  }),
                  ...(screen.presentation &&
                    screen.presentation && {
                      presentation: screen.presentation,
                    }),
                }}
              >
                {() => screen.view}
              </Stack.Screen>
            );
          })}
        </Stack.Navigator>
      </NavigationContext.Provider>
    </NavigationContainer>
  );
};
