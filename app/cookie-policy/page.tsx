import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | SparkVibe Digital",
  description: "Learn about how SparkVibe Digital uses cookies on our website.",
}

export default function CookiePolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-lg opacity-90">
              Learn about how we use cookies and similar technologies on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="mb-8">
              <p>Last Updated: May 14, 2025</p>
            </div>

            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to the owners of the
              site. Cookies enhance user experience by allowing websites to remember your preferences and understand how
              you use different parts of our website.
            </p>

            <h2>How We Use Cookies</h2>
            <p>SparkVibe Digital uses cookies for a variety of purposes, including:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.
                They enable core functionality such as security, network management, and account access. You may disable
                these by changing your browser settings, but this may affect how the website functions.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> We use analytics cookies to collect information about how visitors
                use our website. This helps us improve our website by understanding how visitors interact with it. These
                cookies collect information in an anonymous form, including the number of visitors to the website, where
                visitors have come from, and the pages they visited.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make
                (such as your username, language, or the region you are in) and provide enhanced, more personal
                features. The information these cookies collect may be anonymized and they cannot track your browsing
                activity on other websites.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The
                intention is to display ads that are relevant and engaging for the individual user and thereby more
                valuable for publishers and third-party advertisers.
              </li>
            </ul>

            <h2>Types of Cookies We Use</h2>
            <h3>First-Party Cookies</h3>
            <p>
              First-party cookies are set by SparkVibe Digital directly when you visit our website. They are used to
              recognize you when you return to our site and to remember your preferences.
            </p>

            <h3>Third-Party Cookies</h3>
            <p>
              Third-party cookies are set by a domain other than our website. We may use third-party services, such as
              Google Analytics, which set cookies to help us understand how visitors use our website.
            </p>

            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies,
              or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and
              from version to version. You can however obtain up-to-date information about blocking and deleting cookies
              via these links:
            </p>
          
            <p>
              Please note that restricting cookies may impact the functionality of our website. For more information
              about cookies, visit{" "}
              .
            </p>

            <h2>Cookie Consent</h2>
            <p>
              When you first visit our website, you will be shown a cookie banner that allows you to accept or reject
              cookies. You can change your preferences at any time by clicking on the Cookie Settings link in the footer
              of our website.
            </p>

            <h2>Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. Any changes will be posted on this page and, where
              appropriate, notified to you by email or when you next visit our website.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our Cookie Policy, please contact us at:</p>
            <p>
              info@sparkvibedigital.com
              <br />
              <br />
              SparkVibe Digital
              <br />
              Dizengoff St 50
              <br />
              Tel Aviv-Yafo, 6433222
              <br />
              Israel
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link href="/" className="text-violet-600 font-medium hover:text-violet-800" scroll={true}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
