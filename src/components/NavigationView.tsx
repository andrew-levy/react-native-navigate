import React from 'react';
import { View } from 'react-native';
import { Header } from './Header';

type NavigationViewProps = {
  title: string;
  leading: string;
  trailing: string;
  children: any;
};

export const NavigationView = ({
  children,
  leading,
  trailing,
  title,
}: NavigationViewProps) => {
  return (
    <View>
      <Header title={title} leading={leading} trailing={trailing} />
      <View>{children}</View>
    </View>
  );
};
