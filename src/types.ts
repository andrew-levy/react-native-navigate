import { ReactElement } from "react";

export type NavigationBar = {
  hidden?: boolean;
  backButtonHidden?: boolean;
  title?: string;
  displayMode?: "inline" | "large";
  leading?: () => React.ReactNode;
  trailing?: () => React.ReactNode;
  backgroundColor?: string;
  foregroundColor?: string;
};

export type Screen = {
  view: ReactElement<any>;
  navigationBar?: NavigationBar;
  presentation?:
    | "modal"
    | "transparentModal"
    | "containedModal"
    | "containedTransparentModal"
    | "fullScreenModal"
    | "formSheet"
    | "card"
    | undefined;
};

export type NavigationContextType = {
  screens: Screen[];
  addScreen: (component: Screen, navigationBar?: NavigationBar) => void;
  removeEmptyView: () => void;
};

export type TabItemProps = {
  label?: string;
  children: ReactElement<any>;
  props?: any;
  icon?: (props: {
    focused: boolean;
    color: string;
    size: number;
  }) => React.ReactNode;
};
