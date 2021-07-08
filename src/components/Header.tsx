import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigate } from '../hooks/useNavigate';
import { NavigationContext } from './NavigationRoot';

type HeaderProps = { title: string; leading: string; trailing: string };

export const Header = ({ title, leading, trailing }: HeaderProps) => {
  const { routes, currentRoute } = useContext(NavigationContext);
  const { back } = useNavigate();

  const headerTitle = title || currentRoute.type.name;
  const headerTrailing = trailing || null;
  const headerLeading =
    leading || routes.length > 1 ? (
      <Button title='Back' onPress={back} />
    ) : null;

  return (
    <View style={styles.header}>
      <View style={styles.content}>
        <View style={styles.leading}>{headerLeading}</View>
        <View style={styles.title}>
          <Text>{headerTitle}</Text>
        </View>
        <View style={styles.trailing}>{headerTrailing}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    zIndex: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leading: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexBasis: 0,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexBasis: 0,
  },
  trailing: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexGrow: 1,
    flexBasis: 0,
  },
});
