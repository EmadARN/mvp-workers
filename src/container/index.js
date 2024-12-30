import AppBar from "./appBar/AppBar";
import Footer from "./Footer";

const Layout = ({
  children,
  signinBtnDisplay,
  signinBtnVisable,
  footerDiplay,
}) => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <AppBar
          signinBtnDisplay={signinBtnDisplay}
          signinBtnVisable={signinBtnVisable}
        />
        {children}

        <Footer footerDiplay={footerDiplay} />
      </div>
    </>
  );
};

export default Layout;
