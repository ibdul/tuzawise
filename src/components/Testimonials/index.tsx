import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sabo Masties",
    designation: "User",
    content: "Tuzawise has completely transformed the way I manage my finances. With its personalized recommendations, I've been able to save more, spend wisely, and even start investing for my future. Highly recommended!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Margin Gesmu",
    designation: "User",
    content:
      "As someone who's always been intimidated by financial planning, Tuzawise has been a game-changer for me. The platform is so user-friendly, and the insights it provides are invaluable. I finally feel confident about my financial decisions.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "User",
    content:
    "I've tried other budgeting apps before, but none of them come close to Tuzawise. The level of customization and detail it offers is unmatched. Plus, the investment recommendations have helped me grow my portfolio significantly. Thanks, Tuzawise!",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
