import Sidebar from './SideBar';
import Header from './Header';
import Footer from './Footer';
import '../../../styles/Exemplo/layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </div>
    </div>
  );
}