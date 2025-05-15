import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | SparkVibe Digital",
  description: "Get in touch with SparkVibe Digital for your digital marketing, web development, and design needs.",
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Have a project in mind? Get in touch with our team to discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <ContactForm />
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Contact Information</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-black">Address</h3>
                    <p className="text-gray-700">
                      Dizengoff St 50
                      <br />
                      Tel Aviv-Yafo, 6433222
                      <br />
                      Israel
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-black">Phone</h3>
                    <p className="text-gray-700">+972 52 789 1184</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-black">Email</h3>
                    <p className="text-gray-700">info@sparkvibedigital.com</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-black">Office Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-3xl font-bold mb-6">FAQs</h2>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2 text-black">How quickly can you start on my project?</h3>
                    <p className="text-gray-700">
                      We typically begin new projects within 1-2 weeks of finalizing agreements. However, this can vary
                      based on project complexity and our current workload.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2 text-black">
                      What information should I prepare for our initial consultation?
                    </h3>
                    <p className="text-gray-700">
                      It's helpful to have an overview of your business, your goals for the project, any existing brand
                      guidelines, and examples of websites or designs you like. The more information you can provide,
                      the better we can tailor our solution to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
