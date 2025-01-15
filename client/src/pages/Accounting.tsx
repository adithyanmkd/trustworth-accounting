import ServiceHeading from "../components/molecules/ServiceHeading";
import MainLayout from "../templates/MainLayout";
import TextImgBlock from "../components/molecules/TextImgBlock";

//images
import bgPurple from "../assets/images/full-page-service/audit/img1bg.svg";
import InternalAudit from "../assets/images/full-page-service/audit/img1.svg";

//heading content
const headingContent = {
  heading: "Accounting And Bookkeeping",
  description:
    "Maintaining accurate financial records and accounts for businesses, both domestically and internationally.",
};

//card content
const content = {
  heading: "Accounting and Bookkeeping",
  description:
    "Maintaining accurate financial records and accounts for businesses, both domestically and internationally.Preparing financial statements and MIS Reporting (balance sheet, profit and loss statement, cash flow statement).",
  img: {
    src: InternalAudit,
    alt: "image 1",
    bgSrc: bgPurple,
  },
};

const Accounting = () => {
  return (
    <MainLayout>
      <ServiceHeading {...headingContent} />
      <TextImgBlock {...content} />
    </MainLayout>
  );
};

export default Accounting;
