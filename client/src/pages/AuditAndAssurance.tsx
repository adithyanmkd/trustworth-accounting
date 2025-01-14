import ServiceHeading from "../components/molecules/ServiceHeading";
import TextImgBlock from "../components/molecules/TextImgBlock";
import MainLayout from "../templates/MainLayout";

//image
import bgPurple from "../assets/images/full-page-service/audit/img1bg.svg";
import bgBlue from "../assets/images/full-page-service/audit/bgBlue.svg";
import InternalAudit from "../assets/images/full-page-service/audit/img1.svg";
import IntlAudit from "../assets/images/full-page-service/audit/img2.svg";
import SpecialAudit from "../assets/images/full-page-service/audit/img3.svg";

const blockContenct = [
  {
    heading: "Internal Audit and Risk Management",
    description:
      "We do internal audits to provide independent assurance and consulting to enhance an organization’s operations by improving risk management, control, and governance. It focuses on operational efficacy, cost control, compliance, asset safeguarding, and reliable financial reporting.",
    img: {
      src: InternalAudit,
      alt: "image 1",
      bgSrc: bgPurple,
    },
  },
  {
    heading: "Audits for International Group reporting and consolidation",
    description:
      "We do internal audits to provide independent assurance and consulting to enhance an organization’s operations by improving risk management, control, and governance. It focuses on operational efficacy, cost control, compliance, asset safeguarding, and reliable financial reporting.",
    img: {
      src: IntlAudit,
      alt: "image 2",
      bgSrc: bgPurple,
    },
    flexDirection: "md:flex-row-reverse",
  },
  {
    heading: "Due Diligence/Special Audits",
    description:
      "We offer due diligence audits with extensive analysis for takeovers, financing, and share issues, along with special audits tailored to management’s needs, covering areas like transaction propriety, fraud investigation, and asset verification.",
    img: {
      src: SpecialAudit,
      alt: "image 1",
      bgSrc: bgBlue,
    },
  },
];

const AuditAndAssurance = () => {
  return (
    <MainLayout>
      <ServiceHeading />
      {blockContenct.map((data, index) => (
        <TextImgBlock key={index} {...data} />
      ))}
    </MainLayout>
  );
};

export default AuditAndAssurance;
