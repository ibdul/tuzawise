'use client'
import Form from "@/components/Form";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

const SignupPage = () => {
  function submitData(){
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjVhYjE4NDdkMGQ5ZWZkMWRiM2Q5NTQ4IiwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlhdCI6MTcwNTcxMTY5OCwiZXhwIjoxNzE2MzM4ODk4fQ.UuQrx3E72D2jMPYFsY4rDdvwbER5wQ0QkabnASc-PtE");

    var raw = "{\r\n            \"transaction_amount\":100,\r\n            \"historical_transaction_amount\":888,\r\n            \"frequency\": 5,\r\n            \"time_of_day\":\"morning\",\r\n            \"location\":\"urban\",\r\n            \"service\":\"Medical\"\r\n}";

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch("https://tranfuse-22022d955c8b.herokuapp.com/risk-assessment/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
    <>
      <Breadcrumb pageName="Form Page" />

      <button onClick={submitData}>submit</button>
      <Form />
    </>
  );
};

export default SignupPage;
