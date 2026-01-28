import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What is digital marketing and how does it help my business?",
      answer: "Digital marketing helps you promote your business online through channels like search engines, social media, content, and ads to attract, engage, and convert customers."
    },
    {
      question: "How is AI used in digital marketing?",
      answer: "AI enhances digital marketing through personalized content recommendations, predictive analytics, automated customer service, and optimized ad targeting to improve campaign performance and ROI."
    },
    {
      question: "Which digital marketing services do I actually need?",
      answer: "The services you need depend on your business goals, target audience, and budget. Common services include SEO for visibility, content marketing for engagement, and social media for brand awareness."
    },
    {
      question: "Is digital marketing suitable for small businesses?",
      answer: "Yes, digital marketing is highly suitable for small businesses as it offers cost-effective strategies, precise targeting, and measurable results that can compete with larger competitors."
    },
    {
      question: "Can AI really improve marketing performance?",
      answer: "Absolutely. AI can analyze vast amounts of data to identify patterns, predict customer behavior, automate repetitive tasks, and optimize campaigns in real-time for better results."
    },
    {
      question: "How do I get started with your digital marketing services?",
      answer: "Getting started is easy. Contact us for a free consultation where we'll discuss your business goals, analyze your current marketing efforts, and create a customized strategy tailored to your needs."
    },
    {
      question: "How do you measure digital marketing success?",
      answer: "We track key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, ROI, and customer acquisition costs to measure and optimize campaign success."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
              Frequently asked questions
            </h1>
            <p className="text-gray-600 text-base mb-10">Still need help? Contact us</p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/Images/landing%20Page/FAQ.png"
                alt="Person working at desk"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-7 py-6 text-left font-semibold text-black hover:bg-gray-50 transition-colors flex items-center gap-3"
                >
                  <span className="font-semibold">{index + 1}.</span>
                  <span className="flex-1">{faq.question}</span>
                  <span className={`text-2xl font-light text-gray-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    −
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-7 pb-6 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
