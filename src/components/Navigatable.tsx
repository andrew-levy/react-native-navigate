import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { NavigationContext } from './Navigation';
import { useNavigate } from '../hooks/useNavigate';

export const Navigatable = ({ children }) => {
  const { routes } = useContext(NavigationContext);
  const { back } = useNavigate();
  return (
    <View>
      <View style={{ borderBottomWidth: 1 }}>
        {routes.length > 1 && <Button title='back' onPress={back} />}
      </View>
      {children}
    </View>
  );
};
