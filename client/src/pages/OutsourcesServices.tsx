import ServiceHeading from "../components/molecules/ServiceHeading";
import MainLayout from "../templates/MainLayout";

//images
import bgPurple from "../assets/images/full-page-service/audit/img1bg.svg";
import InternalAudit from "../assets/images/full-page-service/audit/img1.svg";
import TextImgBlock from "../components/molecules/TextImgBlock";

//heading content
const headingContent = {
  heading: "Outsources CFO services",
  description:
    "Acting as a virtual CFO to provide strategic financial advice and oversight. Assisting with financial strategy development, cash flow management, and business planning.",
};

//card content
const content = {
  heading: "Outsources CFO Services",
  description:
    "Acting as a virtual CFO to provide strategic financial advice and oversight. Assisting with financial strategy development, cash flow management, and business planning.",
  img: {
    src: InternalAudit,
    alt: "image 1",
    bgSrc: bgPurple,
  },
};

const OutsourcesServices = () => {
  return (
    <MainLayout>
      <ServiceHeading {...headingContent} />
      <TextImgBlock {...content} />
    </MainLayout>
  );
};

export default OutsourcesServices;
