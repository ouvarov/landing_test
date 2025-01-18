import { AccordionItem } from "@/components/FAQSection/components/AccordionItem";

import styles from "./faq_sectiom.module.scss";

const faqData = [
  {
    title: "How do I know that Present Perfect is suitable for me?",
    text: "Present Perfect is great for people who experience persistent anxiety that affects all areas of their life, preventing them from achieving goals and reaching their full potential.<br />Remember, that Present Perfect is not a magic pill that will solve all problems, but it will give you a desire to solve them on your own. Not suitable for children and adolescents under 18 years, pregnant or breastfeeding women.",
  },
  {
    title: "Is there a maximum Present Perfect dosage?",
    text: "Present Perfect is great for people who experience persistent anxiety that affects all areas of their life, preventing them from achieving goals and reaching their full potential.<br />Remember, that Present Perfect is not a magic pill that will solve all problems, but it will give you a desire to solve them on your own. Not suitable for children and adolescents under 18 years, pregnant or breastfeeding women.",
  },
  {
    title: "How soon should I expect the desired effect?",
    text: "Present Perfect is great for people who experience persistent anxiety that affects all areas of their life, preventing them from achieving goals and reaching their full potential.<br />Remember, that Present Perfect is not a magic pill that will solve all problems, but it will give you a desire to solve them on your own. Not suitable for children and adolescents under 18 years, pregnant or breastfeeding women.",
  },
  {
    title: "Is it possible to drive a vehicle while using Present Perfect?",
    text: "Present Perfect is great for people who experience persistent anxiety that affects all areas of their life, preventing them from achieving goals and reaching their full potential.<br />Remember, that Present Perfect is not a magic pill that will solve all problems, but it will give you a desire to solve them on your own. Not suitable for children and adolescents under 18 years, pregnant or breastfeeding women.",
  },
  {
    title:
      "What are the possible side effects of taking Present Perfect and how to avoid them?",
    text: "Present Perfect is great for people who experience persistent anxiety that affects all areas of their life, preventing them from achieving goals and reaching their full potential.<br />Remember, that Present Perfect is not a magic pill that will solve all problems, but it will give you a desire to solve them on your own. Not suitable for children and adolescents under 18 years, pregnant or breastfeeding women.",
  },
  {
    title:
      "Is it allowed to be used simultaneously with other medicines or dietary supplements?",
    text: "Present Perfect is great for people who experience persistent anxiety that affects all areas of their life, preventing them from achieving goals and reaching their full potential.<br />Remember, that Present Perfect is not a magic pill that will solve all problems, but it will give you a desire to solve them on your own. Not suitable for children and adolescents under 18 years, pregnant or breastfeeding women.",
  },
  {
    title: "Can I drink alcohol during the course of Present Perfect?",
    text: "Present Perfect is great for people who experience persistent anxiety that affects all areas of their life, preventing them from achieving goals and reaching their full potential.<br />Remember, that Present Perfect is not a magic pill that will solve all problems, but it will give you a desire to solve them on your own. Not suitable for children and adolescents under 18 years, pregnant or breastfeeding women.",
  },
  {
    title:
      "Do I need a prescription from a doctor to take the Present Perfect?",
    text: "Present Perfect is great for people who experience persistent anxiety that affects all areas of their life, preventing them from achieving goals and reaching their full potential.<br />Remember, that Present Perfect is not a magic pill that will solve all problems, but it will give you a desire to solve them on your own. Not suitable for children and adolescents under 18 years, pregnant or breastfeeding women.",
  },
];

const FAQSection = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div>
        {faqData.map(({ title, text }) => (
          <AccordionItem text={text} key={title} title={title} />
        ))}
      </div>
    </div>
  </section>
);

export { FAQSection };
