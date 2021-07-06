import { useContext } from 'react';
import { NavigationContext } from '../components/Navigation';

type NavigationFunctions = {
  to: (any) => void;
  back: () => void;
};

export const useNavigate = (): NavigationFunctions => {
  const { routes, setRoutes } = useContext(NavigationContext);
  return {
    to: (newRoute) => setRoutes([...routes, newRoute]),
    back: () => setRoutes(routes.filter((_, i) => i !== routes.length - 1)),
  };
};
