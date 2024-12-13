import Navbar from "../components/organisms/Navbar";

type ChildrenType = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
