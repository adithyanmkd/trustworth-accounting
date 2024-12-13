import PrimaryBtn from "../atoms/PrimaryBtn";

const ContactUsBar = () => {
  return (
    <>
      <form
        action=""
        className="mt-7 flex h-auto items-center justify-between rounded-[30px] bg-white py-1.5 pr-2"
      >
        <input
          className="ml-2 h-8 w-[220px] pl-3 outline-none placeholder:text-xs"
          type="text"
          placeholder="Enter your email address"
        />
        <PrimaryBtn label="contact us" />
      </form>
    </>
  );
};

export default ContactUsBar;
