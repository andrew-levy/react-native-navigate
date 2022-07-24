import { useNavigation } from '@react-navigation/native';
import React, { ReactNode, useContext, useLayoutEffect } from 'react';
import { NavigationContext } from './NavigationProvider';
import { NavigationBar } from './types';
import { getComponentName } from './utils';

export const NavigationView = ({
  children,
  ...navBarOptions
}: {
  children: ReactNode;
} & NavigationBar) => {
  const { setOptions, getState } = useNavigation();
  // check current options first

  const { screens } = useContext(NavigationContext);
  const screenName = getState().routes[getState().index].name;

  const overrideOptions = screens.find(
    s => getComponentName(s.view) === screenName,
  )?.navigationBar;

  const title = overrideOptions?.title || navBarOptions.title;
  const hidden = overrideOptions?.hidden || navBarOptions.hidden;
  const leading = overrideOptions?.leading || navBarOptions.leading;
  const trailing = overrideOptions?.trailing || navBarOptions.trailing;
  const displayMode = overrideOptions?.displayMode || navBarOptions.displayMode;
  const foregroundColor =
    overrideOptions?.foregroundColor || navBarOptions.foregroundColor;
  const backgroundColor =
    overrideOptions?.backgroundColor || navBarOptions.backgroundColor;

  useLayoutEffect(() => {
    setOptions({
      title,
      ...(hidden && {
        headerShown: false,
      }),
      ...(leading && {
        headerLeft: leading,
      }),
      ...(trailing && {
        headerRight: trailing,
      }),
      ...(displayMode && {
        headerLargeTitle: displayMode === 'large',
      }),
      ...(foregroundColor && {
        headerTintColor: foregroundColor,
      }),
      ...(backgroundColor && {
        headerStyle: { backgroundColor: backgroundColor },
      }),
    });
  }, [navBarOptions]);

  return <>{children}</>;
};
