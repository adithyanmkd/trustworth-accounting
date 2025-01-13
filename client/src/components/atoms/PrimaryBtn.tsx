type BtnProps = {
  label: string;
  classname?: string;
};

const PrimaryBtn = ({ label, classname }: BtnProps) => {
  return (
    <a href="#contact">
      <button
        className={`text-nowrap rounded-[50px] bg-[#A3DC2F] px-4 py-2.5 text-xs font-semibold capitalize md:text-sm ${classname}`}
      >
        {label}
      </button>
    </a>
  );
};

export default PrimaryBtn;
