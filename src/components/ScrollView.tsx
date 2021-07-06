import React from 'react';
import {
  ScrollView as ScrollViewRN,
  ScrollViewProps as ScrollViewRNProps,
} from 'react-native';

type ScrollViewProps = ScrollViewRNProps & { children: any };

export const ScrollView = ({
  children,
  scrollEventThrottle = 16,
  ...props
}: ScrollViewProps) => {
  const handleScroll = (e) => {
    // set contentOffset.y to an animated shared value which is
    console.log(e.nativeEvent.contentOffset.y);
  };
  return (
    <ScrollViewRN {...props} onScroll={handleScroll}>
      {children}
    </ScrollViewRN>
  );
};
