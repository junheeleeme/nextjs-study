import Header from "../layout/header";
import Footer from "./footer";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
