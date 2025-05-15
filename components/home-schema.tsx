import { SITE_URL } from "@/lib/constants"

export default function HomeSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SparkVibe Digital",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dizengoff St 50",
      addressLocality: "Tel Aviv-Yafo",
      postalCode: "6433222",
      addressCountry: "Israel",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+972 52 789 1184",
      contactType: "customer service",
      email: "info@sparkvibedigital.com",
      availableLanguage: "English",
    },
    description:
      "SparkVibe Digital is a full-service digital agency specializing in web development, digital marketing, and design services.",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
}
