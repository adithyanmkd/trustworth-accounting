import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

type ChildrenType = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
