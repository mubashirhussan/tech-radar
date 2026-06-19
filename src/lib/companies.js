export const companies = [
  {
    name: "Northwind Labs",
    niche: "Developer Tools & Cloud Platforms",
    tagline: "Tooling that helps engineering teams ship faster.",
    description:
      "Northwind Labs builds developer-first cloud infrastructure and tooling used by product teams to deploy, observe, and scale their applications. The culture is engineering-led with a strong emphasis on craft, code quality, and autonomy.",
    founded: "2016",
    size: "180+ employees",
    headquarters: "Lahore, Pakistan",
    website: "https://northwindlabs.com",
    strengths: [
      "Modern engineering stack (React, TypeScript, Node.js, AWS).",
      "Strong mentorship and a culture of code reviews.",
      "Remote-friendly with flexible working hours.",
      "Clear growth ladder for individual contributors.",
    ],
  },
  {
    name: "Helio Systems",
    niche: "Renewable Energy Software & IoT",
    tagline: "Software powering the transition to clean energy.",
    description:
      "Helio Systems develops IoT platforms and analytics for solar and renewable energy assets. Teams work close to hardware and real-world impact, combining embedded systems with large-scale data pipelines.",
    founded: "2018",
    size: "90+ employees",
    headquarters: "Islamabad, Pakistan",
    website: "https://heliosystems.io",
    strengths: [
      "Mission-driven work in the clean energy space.",
      "Cross-disciplinary teams spanning hardware and software.",
      "Ownership of features from design to production.",
      "Generous learning and certification budget.",
    ],
  },
  {
    name: "Vertex Retail",
    niche: "Retail Analytics & E-commerce",
    tagline: "Data and commerce tools for modern retailers.",
    description:
      "Vertex Retail provides analytics, inventory, and storefront solutions to retail brands across the region. The company values data-informed decisions and pairs a fast-moving product org with a stable, customer-focused delivery process.",
    founded: "2014",
    size: "250+ employees",
    headquarters: "Karachi, Pakistan",
    website: "https://vertexretail.com",
    strengths: [
      "Large-scale data and analytics challenges.",
      "Stable, customer-focused product organization.",
      "Structured onboarding and clear processes.",
      "Opportunities to work across the full commerce stack.",
    ],
  },
];

export function getCompany(name) {
  return companies.find((company) => company.name === name) ?? null;
}

export function getCompanyNames() {
  return companies.map((company) => company.name).sort();
}
