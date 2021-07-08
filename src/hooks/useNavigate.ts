import { useContext } from 'react';
import { NavigationContext } from '../components/NavigationRoot';

type NavigationFunctions = {
  to: (any) => void;
  back: () => void;
};

export const useNavigate = (): NavigationFunctions => {
  const { routes, setRoutes } = useContext(NavigationContext);
  return {
    to: (newRoute) => setRoutes([...routes, newRoute]),
    back: () => {
      routes.pop();
      setRoutes([...routes]);
    },
  };
};
