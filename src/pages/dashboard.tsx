import { Layout as CommonLayout } from "@/layout/common-layout";
import { NextPage } from "next";

const Page: NextPage = () => {
  return <>dd</>;
};

Page.getLayout = (page) => <CommonLayout>{page}</CommonLayout>;

export default Page;
