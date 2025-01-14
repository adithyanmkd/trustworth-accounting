//images importing
import AuditImg from "../../assets/images/service-images/audit.svg";
import TaxImg from "../../assets/images/service-images/tax.svg";
import AccountingImg from "../../assets/images/service-images/accounting.svg";
import OutsourseImg from "../../assets/images/service-images/oursource.svg";
import financialImg from "../../assets/images/service-images/financial.svg";

import ServiceCard from "../molecules/ServiceCard";

const CardContents = [
  {
    label: "Audit and Assurance",
    description:
      "Offering statutory, internal, and specialized audits under Indian laws, along with risk management, group reporting, and due diligence to ensure compliance, efficiency, and informed decision-making.",
    img: {
      src: AuditImg,
      alt: "audit image",
    },
    mainClassname: "md:flex-row-reverse ",
    href: "/audit-and-assurance",
  },
  {
    label: "Tax Advisory And Comliance",
    description:
      "Comprehensive tax planning and compliance for corporate and non-corporate entities, including direct and indirect taxes, international taxation, and cross-border structuring. Expertise in representation before tax authorities, transfer pricing, double taxation avoidance, and tailored advisory for family-owned businesses and trusts.",
    img: {
      src: TaxImg,
      alt: "tax advisory image",
    },
  },
  {
    label: "Accounting And Bookkeeping",
    description:
      "Maintaining accurate financial records and accounts for businesses, both domestically and internationally.",
    img: {
      src: AccountingImg,
      alt: "accounting image",
    },
    mainClassname: "md:flex-row-reverse ",
  },
  {
    label: "Outsources CFO Services",
    description:
      "Acting as a virtual CFO to provide strategic financial advice and oversight. Assisting with financial strategy development, cash flow management, and business planning.",
    img: {
      src: OutsourseImg,
      alt: "outsource image",
    },
  },
  {
    label: "Financial Consulting And Advisory",
    description:
      "Comprehensive solutions for entity incorporation, financial systems design, IT advisory, project consultancy, financial restructuring, and compliance with Company Law and FEMA. Additional services include business restructuring, strategic planning, risk management, and support for employee stock options and operational optimization.",
    img: {
      src: financialImg,
      alt: "financial image",
    },
    mainClassname: "md:flex-row-reverse ",
  },
];

const ServiceSection = () => {
  return (
    <div id="services" className="mt-10 px-5">
      <h1 className="text-center font-poppins text-4xl font-semibold leading-[120%] lg:text-5xl">
        Our Services
      </h1>
      <p className="mx-auto mt-[18px] max-w-[740px] text-sm leading-[160%] text-[#505050] md:text-center md:text-base">
        Explore our comprehensive accounting consultancy services designed to
        simplify financial management and drive your business success.
      </p>
      <div className="space-y-14 lg:mt-16">
        {CardContents.map((value, index) => (
          <ServiceCard key={index} {...value} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
