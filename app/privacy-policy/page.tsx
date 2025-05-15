import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | SparkVibe Digital",
  description: "Learn about how SparkVibe Digital collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg opacity-90">
              Learn about how we collect, use, and protect your personal information.
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

            <h2>Introduction</h2>
            <p>
              SparkVibe Digital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              sparkvibedigital.com (the "Website") or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the Website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out forms on our Website</li>
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information or assistance</li>
              <li>Participate in contests, surveys, or promotions</li>
              <li>Communicate with us via third-party social media sites</li>
            </ul>
            <p>The personal information we may collect includes:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Mailing address</li>
              <li>Payment information (when purchasing services)</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our Website, we may automatically collect certain information about your device and usage
              of the Website. This information may include:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Usage data (pages visited, time spent on pages, links clicked)</li>
              <li>Referral source</li>
              <li>Location information</li>
            </ul>
            <p>
              We collect this information using cookies, web beacons, and other tracking technologies. For more
              information about our use of cookies, please see our{" "}
              <Link href="/cookie-policy" className="text-violet-600 hover:text-violet-800" scroll={true}>
                Cookie Policy
              </Link>
              .
            </p>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing, maintaining, and improving our Website and services</li>
              <li>Processing and completing transactions</li>
              <li>Responding to your inquiries and requests</li>
              <li>Sending administrative information, such as updates, security alerts, and support messages</li>
              <li>
                Sending marketing communications, such as newsletters, promotions, and information about new services
              </li>
              <li>Conducting research and analysis to improve our Website and services</li>
              <li>Personalizing your experience on our Website</li>
              <li>Protecting against fraudulent, unauthorized, or illegal activity</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2>How We Share Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party vendors,
                consultants, and other service providers who perform services on our behalf.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a
                portion of our assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in
                response to valid requests by public authorities.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information with your consent or at your
                direction.
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information. However, please be aware that no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section
              below.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our Website is not intended for children under the age of 16. We do not knowingly collect personal
              information from children under 16. If you are a parent or guardian and believe that your child has
              provided us with personal information, please contact us, and we will delete such information from our
              systems.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the "Last
              Updated" date at the top of this page will be revised accordingly. We encourage you to review this Privacy
              Policy periodically to stay informed about how we are protecting your information.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
