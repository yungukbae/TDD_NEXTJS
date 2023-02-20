import { Layout as CommonLayout } from "@/layout/common-layout";
import { NextPage } from "next";

const Page: NextPage = () => {
  return <>Dashboard</>;
};

Page.getLayout = (page) => <CommonLayout>{page}</CommonLayout>;

export default Page;
