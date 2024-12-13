import ContactUsBar from "../components/molecules/ContactUsBar";
import MainLayout from "../templates/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="bg-[#374569] px-5 py-14 pt-7">
        <div>
          <h1 className="text-center text-4xl font-bold leading-[120%] text-white">
            Your Auditing Partner
          </h1>
          <p className="mt-2.5 text-xs leading-[160%] text-[#DEDEDE]">
            Empower your finance team. The onestop plateform for all financial
            management of small and medium-sized business.
          </p>
          <ContactUsBar />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
