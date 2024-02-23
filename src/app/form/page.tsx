
import Form from "@/components/Form";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Form Page | Tuzawise",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Form Page" />

      <Form />
    </>
  );
};

export default SignupPage;
