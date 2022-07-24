import { useNavigation } from "@react-navigation/native";
import React, { ReactElement, useContext } from "react";
import { Button } from "react-native";
import { NavigationContext } from "./NavigationProvider";
import { NavigationBar, Screen } from "./types";
import { getComponentName } from "./utils";

export const NavigationLink = ({
  destination,
  title,
  navigationBar,
  presentation,
}: {
  destination: ReactElement<any>;
  title: string;
  navigationBar?: NavigationBar;
  presentation?: Screen["presentation"];
}) => {
  const { navigate } = useNavigation();
  const { addScreen } = useContext(NavigationContext);
  return (
    <Button
      onPress={() => {
        addScreen({
          view: destination,
          navigationBar,
          presentation: presentation,
        });
        setTimeout(() => {
          navigate(getComponentName(destination) as never);
        }, 0);
      }}
      title={title}
    />
  );
};
