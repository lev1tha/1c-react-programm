import React, { useState } from "react";
import styles from "./faq.module.css";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is ITS?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur dolorum blanditiis at sapiente veniam ipsum, odit natus delectus nostrum in doloribus enim repellat esse laudantium iusto similique magni voluptates nesciunt!",
    },
    {
      question: "1C implementation?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur dolorum blanditiis at sapiente veniam ipsum, odit natus delectus nostrum in doloribus enim repellat esse laudantium iusto similique magni voluptates nesciunt!",
    },
    {
      question: "One-off support services?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur dolorum blanditiis at sapiente veniam ipsum, odit natus delectus nostrum in doloribus enim repellat esse laudantium iusto similique magni voluptates nesciunt!",
    },
    {
      question: "Real Automation Center?",
      answer:
        "Monero is the leading cryptocurrency with a focus on private and censorship-resistant transactions. The Monero wallet software allows you to easily manage your money.",
    },
  ];

  return (
    <section className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.faqQuestion}
            onClick={() => toggleAnswer(index)}
          >
            <p>{faq.question}</p>
            <div
              className={`${styles.iconToggle} ${
                expandedIndex === index ? styles.expanded : ""
              }`}
            >
              <i className={`bx bx-chevron-down`}></i>
            </div>
          </div>
          <div
            className={`${styles.faqAnswer} ${
              expandedIndex === index ? styles.show : ""
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
