import { ComponentType, ReactElement } from 'react';

export const getComponentName = (component: ReactElement<any>) => {
  return (component.type.valueOf() as ComponentType<any>).name;
};
