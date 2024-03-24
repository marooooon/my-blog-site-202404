// components/Layout.js
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
