import { useNavigation } from "@react-navigation/native";
import { useContext, ReactElement } from "react";
import { NavigationContext } from "./NavigationProvider";
import { Screen } from "./types";
import { getComponentName } from "./utils";

export const useNavigate = () => {
  const { navigate, goBack } = useNavigation();
  const { addScreen } = useContext(NavigationContext);

  return {
    to: (
      destination: ReactElement<any>,
      options?: {
        navigationBar?: Screen["navigationBar"];
        presentation?: Screen["presentation"];
      }
    ) => {
      addScreen({
        view: destination,
        navigationBar: options?.navigationBar,
        presentation: options?.presentation,
      });
      setTimeout(() => {
        navigate(getComponentName(destination) as never);
      }, 0);
    },
    back: goBack,
  };
};
