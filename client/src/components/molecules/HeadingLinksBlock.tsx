type LinksType = {
  heading: string;
  links: {
    name: string;
    href: string;
  }[];
};

const HeadingLinksBlock = ({ heading, links }: LinksType) => {
  return (
    <div className="max-w-[300px]">
      <h1 className="mb-2.5 text-lg font-semibold">{heading}</h1>
      <div className="space-y-2">
        {links.map((data, index) => (
          <a
            key={index}
            className="block text-sm text-[#E3E3E3]"
            href={data.href}
          >
            {data.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeadingLinksBlock;
