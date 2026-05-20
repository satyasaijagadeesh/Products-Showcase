import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team. We're here to help with any questions about our products or your order.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "support@volt.store",
    detail: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+1 (555) 123-4567",
    detail: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Address",
    description: "123 Tech Street",
    detail: "San Francisco, CA 94102",
  },
  {
    icon: Clock,
    title: "Hours",
    description: "Mon-Fri: 9am-6pm",
    detail: "Sat-Sun: 10am-4pm",
  },
];

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy on all products. Items must be in original condition with all packaging.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days.",
  },
  {
    question: "Is there a warranty on products?",
    answer: "All products come with a minimum 1-year manufacturer warranty. Extended warranties are available at checkout.",
  },
];

export default function ContactPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Have a question or need assistance? We&apos;re here to help. 
            Reach out to us and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-border p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-foreground">{item.description}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 lg:mt-24">
          <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-card rounded-lg border border-border p-6"
              >
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
