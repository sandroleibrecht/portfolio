import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

function ScrollTop({ scrollTo = 0 }) {
  const {pathname} = useLocation();
  useEffect( () => {
    window.scroll({ top: scrollTo, left: 0 });
  }, [pathname]);
  return null;
};

export default ScrollTop;