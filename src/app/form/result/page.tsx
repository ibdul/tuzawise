
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
            <h3>Total spending: NGN600k</h3>
            <li>Web Transactions: NGN300K</li>
            <li>POS Transactions: NGN200K</li>
            <li>Others: NGN100K</li>
          </ul>
          <div className="">

            <h2 className="font-bold text-md">
              Trends
            </h2>
            <p>
              Your spending has remained relatively consistent over the past three months, with a slight increase in dining out expenses.
            </p>
          </div>
          <div className="">
            <h2 className="font-bold text-md">
              Areas for Improvement
            </h2>
            <p>
              Consider reducing expenses in the miscellaneous category, where the majority of your discretionary spending occurs.
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
            <h3>  Consider diversifying your portfolio with a mix of stocks and bonds to mitigate risk.</h3>
            <li>Explore investment opportunities in low-cost index funds for long-term growth.</li>
          </ul>
          <div className="">
            <h2 className="font-bold text-md">
Recommended Investments:
            </h2>
          <ul className="list-disc list-inside">
            <li>Consider diversifying your portfolio with a mix of stocks and bonds to mitigate risk.</li>
            <li>Explore investment opportunities in low-cost index funds for long-term growth.</li>
          </ul>
          <div></div>
          </div>
          <div className="">
            <h2 className="font-bold text-md"> Diversification </h2>
            <p> Investing in both stocks and bonds can help spread risk and optimize returns for your investment portfolio. </p>
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
            <p>Your current budget is aligned with your financial goals, with a focus on saving for emergencies and discretionary spending.</p>
          <ul className="list-disc list-inside">
            <h3>  Consider diversifying your portfolio with a mix of stocks and bonds to mitigate risk.</h3>
            <li>Explore investment opportunities in low-cost index funds for long-term growth.</li>
          </ul>
          <div className="">
            <h2 className="font-bold text-md">
                Budgeting Recommendations:
            </h2>
              <ul className="list-disc list-inside">
                <li>
                  Consider setting aside a specific amount each month for savings and investments to reach your long-term financial goals.
                </li>
                <li>
                  Track your spending more closely to identify areas where you can cut back and reallocate funds towards your priorities.
                </li>
              </ul>
          <div></div>
          </div>
          <div className="">
            <h2 className="font-bold text-md">
              Areas for Improvement
            </h2>
            <p>
              Consider reducing expenses in the miscellaneous category, where the majority of your discretionary spending occurs.
            </p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
