import React from 'react';
import { View } from 'react-native';
import { Header } from './Header';

type NavigatableProps = {
  title: string;
  leading: string;
  trailing: string;
  children: any;
};

export const Navigatable = ({
  children,
  leading,
  trailing,
  title,
}: NavigatableProps) => {
  return (
    <View>
      <Header title={title} leading={leading} trailing={trailing} />
      <View>{children}</View>
    </View>
  );
};
