import AppBar from "./appBar/AppBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
