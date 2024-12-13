import AppBar from "./appBar/AppBar";
import Footer from "./Footer";

const Layout = ({ children,signinBtnDisplay }) => {
  return (
    <>
  <div className="min-h-screen flex flex-col justify-between">
      <AppBar signinBtnDisplay={signinBtnDisplay}/>
      {children}
      
      <Footer />
      </div>
    
    </>
  );
};

export default Layout;
