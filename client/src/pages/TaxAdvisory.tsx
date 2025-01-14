import TextImgBlock from "../components/molecules/TextImgBlock";
import MainLayout from "../templates/MainLayout";

//images
import bgPurple from "../assets/images/full-page-service/audit/img1bg.svg";
import bgBlue from "../assets/images/full-page-service/audit/bgBlue.svg";
import InternalAudit from "../assets/images/full-page-service/audit/img1.svg";
import IntlAudit from "../assets/images/full-page-service/audit/img2.svg";
import SpecialAudit from "../assets/images/full-page-service/audit/img3.svg";
import ServiceHeading from "../components/molecules/ServiceHeading";

//content
const blockContenct = [
  {
    heading: "Corporate Taxation services",
    description:
      "include tax compliance advisory, tax planning under direct and indirect tax laws (filing Tax Returns, Deduction of Tax at Source, filing of Annual Returns, etc.) and representation before tax authorities, including the Tax Appellate Tribunal.",
    img: {
      src: InternalAudit,
      alt: "image 1",
      bgSrc: bgPurple,
    },
  },
  {
    heading: "International Taxation services",
    description:
      "We conduct audits for foreign company subsidiaries, including reporting to the parent company's independent auditor and preparing the group auditors' pack for Indian subsidiaries.",
    img: {
      src: IntlAudit,
      alt: "image 2",
      bgSrc: bgPurple,
    },
    flexDirection: "md:flex-row-reverse",
  },
  {
    heading: "Non-Corporate Services",
    description:
      "We provide services for non-corporate entities like partnerships, LLPs, and family trusts, including formation, tax compliance, advisory, and planning for family-owned businesses.",
    img: {
      src: SpecialAudit,
      alt: "image 1",
      bgSrc: bgBlue,
    },
  },
];

const headingContent = {
  heading: "Tax advisory and compliance",
  description:
    "Comprehensive tax planning and compliance for corporate and non-corporate entities, including direct and indirect taxes, international taxation, and cross-border structuring. Expertise in representation before tax authorities, transfer pricing, double taxation avoidance, and tailored advisory for family-owned businesses and trusts.",
};

const TaxAdvisory = () => {
  return (
    <MainLayout>
      <ServiceHeading {...headingContent} />
      {blockContenct.map((data, index) => (
        <TextImgBlock key={index} {...data} />
      ))}
    </MainLayout>
  );
};

export default TaxAdvisory;
