import { Outlet } from 'react-router-dom';

import $ from './styles.module.scss';

export const Layout = () => {
  return (
    <div className={$.layout}>
      <Outlet />
    </div>
  );
};
