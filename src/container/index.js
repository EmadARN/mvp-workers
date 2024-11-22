import AppBar from "./appBar/AppBar";
import Footer from "./Footer";

const Layout = ({ children,signinBtnDisplay }) => {
  return (
    <>
      <AppBar signinBtnDisplay={signinBtnDisplay}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
