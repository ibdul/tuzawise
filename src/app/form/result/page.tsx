
import Form from "@/components/Form";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title:
    "Result | Tuzawise",
};

const SignupPage = () => {
  return (
    <>

      <Breadcrumb pageName="Result" />
      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px] space-y-20">
        <div className="container grid grid-cols-2">
          <div>
          <SectionTitle
            title="Spending Analysis"
            paragraph="Understand how and on what you spend your morning"
          />
          <h2 className="text-xl font-bold" >Overview</h2>
            <ul className="list-disc list-inside">
            <h3>Total spending: <b>NGN5.2M</b></h3>
            <li>Web Transactions: <b>NGN1.4M</b></li>
            <li>POS Transactions: <b>NGN3M</b></li>
            <li>Others: <b>NGN1.8M</b></li>
          </ul>
          <div className="">

            <h2 className="font-bold text-md">
              Trends
            </h2>
            <p>
                Your expenditure has maintained a relatively stable pattern throughout the preceding three months, albeit showing a slight rise in dining out expenses.
            </p>
          </div>
          <div className="">
            <h2 className="font-bold text-md">
              Areas for Improvement
            </h2>
            <p>
                You may want to think about cutting back on expenses in the miscellaneous category since that's where most of your optional spending happens.
            </p>
          </div>
          </div>
        </div>
<div className="container grid grid-cols-2">
          <div>
          </div>
          <div>

          <SectionTitle
            subtitle="Make money"
            title="Investment Recommendations"
            paragraph="Learn how to gain more from your money"
          />
          <h2 className="text-xl font-bold" >Personalized Suggestions</h2>
          <ul className="list-disc list-inside">
            <h3>
                You might want to consider spreading out your investments by including both stocks and bonds. This can help reduce the overall risk in your portfolio.
              </h3>

            <li>
                Take a look at investing in low-cost index funds as they offer great potential for long-term growth.
              </li>
          </ul>
          <div className="">
            <h2 className="font-bold text-md">
                Recommended Investments:
            </h2>
          <ul className="list-disc list-inside">
            <li>
You may want to think about diversifying your portfolio by including a combination of stocks and bonds. This can help reduce the overall risk in your investments.
                </li>
            <li>Explore the possibility of investing in low-cost index funds for potential long-term growth.</li>
          </ul>
          <div></div>
          </div>
          <div className="">
            <h2 className="font-bold text-md"> Diversification </h2>
            <p>Including both stocks and bonds in your investment portfolio can help spread out risk and improve potential returns.</p>
          </div>
          </div>
        </div>
        <div className="container grid grid-cols-2">
          <div>

          <SectionTitle
            subtitle="Budgets"
            title="Personalized Budgeting Advice"
            paragraph="Learn how to make better spend of your money"
          />
          <h2 className="text-xl font-bold" >Budget Overview</h2>
            <p>Your budget currently reflects your financial goals well, with an emphasis on saving for emergencies and discretionary spending.</p>
          <ul className="list-disc list-inside">
            <h3>You might want to consider diversifying your portfolio by including a combination of stocks and bonds. This can help reduce the overall risk in your investments.</h3>
            <li>Explore the potential investment opportunities available in low-cost index funds, which are known for their potential for long-term growth.</li>
          </ul>
          <div className="">
            <h2 className="font-bold text-md">
                Budgeting Recommendations:
            </h2>
              <ul className="list-disc list-inside">
                <li>You may want to think about setting aside a set amount each month for savings and investments. This can help you work towards achieving your long-term financial goals.</li>
                <li>Keep a closer eye on your spending to pinpoint areas where you could reduce expenses. By doing so, you can free up funds to allocate towards your top priorities.</li>
              </ul>
          <div></div>
          </div>
          <div className="">
            <h2 className="font-bold text-md">
              Areas for Improvement
            </h2>
            <p>Think about cutting down on expenses in the miscellaneous category, as this is where most of your optional spending tends to happen.</p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
