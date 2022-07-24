import React, { ReactNode, ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabItemProps } from './types';
import { getComponentName } from './utils';

const BottomTabs = createBottomTabNavigator();

export const TabView = ({ children }: { children?: ReactNode }) => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
      {React.Children.map(children as ReactElement<any>[], child => {
        const { label, children, icon }: TabItemProps = child?.props;
        return (
          <BottomTabs.Screen
            name={getComponentName(children)}
            key={getComponentName(children)}
            options={{
              tabBarLabel: label,
              tabBarIcon: icon,
            }}>
            {() => children}
          </BottomTabs.Screen>
        );
      })}
    </BottomTabs.Navigator>
  );
};
