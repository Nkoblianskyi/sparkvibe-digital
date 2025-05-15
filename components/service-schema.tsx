import { SITE_URL } from "@/lib/constants"
import type { Service } from "@/lib/types"

export default function ServiceSchema({ service }: { service: Service }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "SparkVibe Digital",
      url: SITE_URL,
    },
    description: service.fullDescription,
    serviceType: service.title,
    url: `${SITE_URL}/services/${service.slug}`,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
}
