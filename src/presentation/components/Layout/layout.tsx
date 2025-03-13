import { FC, ReactElement, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC<{ children: ReactNode | ReactElement }> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="container mx-auto py-8">{children}</section>
      <Footer />
    </>
  );
};

export default Layout;
