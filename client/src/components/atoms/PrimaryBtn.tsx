type BtnProps = {
  label: string;
};

const PrimaryBtn = ({ label }: BtnProps) => {
  return (
    <div>
      <button className="text-nowrap rounded-[50px] bg-[#A3DC2F] px-4 py-2.5 text-xs font-semibold capitalize md:text-sm">
        {label}
      </button>
    </div>
  );
};

export default PrimaryBtn;
