import Footer from './Footer.jsx';
import Header from './Header.jsx';

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
