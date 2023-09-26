import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Wrapper = () => {
  return (
    <div className="content">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
