import ServiceHeading from "../components/molecules/ServiceHeading";
import MainLayout from "../templates/MainLayout";
import TextImgBlock from "../components/molecules/TextImgBlock";

//images
import bgPurple from "../assets/images/full-page-service/audit/img1bg.svg";
import InternalAudit from "../assets/images/full-page-service/audit/img1.svg";

// heading content
const headingContent = {
  heading: "Financial consulting and Advisory",
  description:
    "Comprehensive solutions for entity incorporation, financial systems design, IT advisory, project consultancy, financial restructuring, and compliance with Company Law and FEMA. Additional services include business restructuring, strategic planning, risk management, and support for employee stock options and operational optimization.",
};

//card content
const content = [
  {
    heading: "Incorporation and Compliance Services",
    description:
      "We offer services for incorporating various legal entities in India, including private/public companies, partnership firms, LLPs, and trusts.",
    img: {
      src: InternalAudit,
      alt: "image 1",
      bgSrc: bgPurple,
    },
  },
  {
    heading: "Systems Design & Introduction",
    description:
      "We design and implement financial, costing, management information, and internal control systems, along with preparing comprehensive manuals for financial and cost accounting, internal controls, and internal audits.",
    img: {
      src: InternalAudit,
      alt: "image 1",
      bgSrc: bgPurple,
    },
    flexDirection: "md:flex-row-reverse",
  },
  {
    heading: "Information Technology Services",
    description:
      "We offer IT services including evaluating accounting software for effectiveness and security, assisting with migration to ERP systems, and providing expert advice on selecting accounting software and conducting information systems audits.",
    img: {
      src: InternalAudit,
      alt: "image 1",
      bgSrc: bgPurple,
    },
  },
  {
    heading: "Project Consultancy",
    description:
      "We assist in evaluating new projects through techno-feasibility studies, cost analysis, financing, and preparing project profiles and feasibility reports, as well as supporting public issues and private equity/venture funding.",
    img: {
      src: InternalAudit,
      alt: "image 1",
      bgSrc: bgPurple,
    },
    flexDirection: "md:flex-row-reverse",
  },
  {
    heading: "Financial Reconstruction",
    description:
      "We conduct studies to identify causes of financial and industrial sickness, suggest revival measures, and prepare schemes for capital restructuring and financial reconstruction, including obtaining regulatory approvals.",
    img: {
      src: InternalAudit,
      alt: "image 1",
      bgSrc: bgPurple,
    },
  },
  {
    heading: "Company Law/ FEMA",
    description:
      "We assist with filing documents online, maintaining statutory records, and preparing petitions/applications for the Registrar of Companies and other authorities. We also represent clients in petitions, compounding offences, and handling foreign currency receivables/payables under FEMA.",
    img: {
      src: InternalAudit,
      alt: "image 1",
      bgSrc: bgPurple,
    },
    flexDirection: "md:flex-row-reverse",
  },
  {
    heading: "Other Management Services",
    description:
      "We provide management advisory services for business restructuring, product planning, pricing, strategic operations, risk assessments, and risk mitigation. We also assist with employee stock options, product costing, recruitment, and training in financial and managerial functions.",
    img: {
      src: InternalAudit,
      alt: "image 1",
      bgSrc: bgPurple,
    },
  },
];
const FinancialConsulting = () => {
  return (
    <MainLayout>
      <ServiceHeading {...headingContent} />
      {content.map((value, index) => (
        <TextImgBlock key={index} {...value} />
      ))}
    </MainLayout>
  );
};

export default FinancialConsulting;
