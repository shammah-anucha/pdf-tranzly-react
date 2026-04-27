import { useState } from "react";

const faqs = [
  {
    question: "What is PDF Tranzly?",
    answer:
      "PDF Tranzly is a free online tool that helps you translate PDF documents directly in your browser. You do not need to install anything to use it. Right now, PDF Tranzly is focused on PDF translation, and more PDF tools and features will be added over time.",
  },
  {
    question: "Is PDF Tranzly safe to use?",
    answer:
      "Yes. PDF Tranzly is built to make PDF translation simple and secure. Your files are processed online so you can translate documents quickly without extra setup. If you are working with important files, it is still a good idea to avoid uploading highly sensitive documents unless you are comfortable with online processing.",
  },
  {
    question: "Is PDF Tranzly available as a subscription or a one-time purchase?",
    answer:
      "At the moment, PDF Tranzly is free to use. There is no subscription and no one-time purchase required for the current PDF translation functionality.",
  },
  {
    question: "How to edit PDF files using PDF Tranzly?",
    answer:
      "Right now, PDF Tranzly does not offer full PDF editing tools. Its current purpose is to translate PDF files online.",
  },
  {
    question: "What are the basic features that come with PDF Tranzly?",
    answer:
      "The main feature currently available in PDF Tranzly is PDF translation. You can upload a PDF, choose the language you want, and translate the document online.",
  },
  {
    question: "What types of files does PDF Tranzly support?",
    answer:
      "At the moment, PDF Tranzly is focused on PDF files.",
  },
  {
    question:
      "What should I do if I encounter problems or errors while using PDF Tranzly?",
    answer:
      "First try refreshing the page and uploading the file again. You can also check whether the PDF is damaged, password-protected, or unusually large.",
  },
  {
    question: "How to choose the best PDF editor?",
    answer:
      "The best PDF tool depends on what you need. If your goal is translating PDF documents quickly online, PDF Tranzly is a simple choice.",
  },
  {
    question:
      "Can I edit a PDF directly in my browser on any device or operating system?",
    answer:
      "With PDF Tranzly, you can use the site directly in your browser on desktop or mobile devices without installing anything. However, the current functionality is PDF translation, not full PDF editing.",
  },
  {
    question: "How do I make a PDF editable or fillable?",
    answer:
      "That feature is not currently available in PDF Tranzly. Right now, the platform focuses on translating PDF documents.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <h2>Frequently asked questions</h2>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article className="faq-card" key={item.question}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className={isOpen ? "faq-arrow open" : "faq-arrow"}>
                  ⌄
                </span>
              </button>

              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}