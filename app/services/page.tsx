import Image from "next/image"
import { ArrowRight, Users, Briefcase, Award, Search, Globe, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 section-hero">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Our Services
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive IT recruitment solutions tailored to your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-light">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg border p-6 shadow-sm bg-white">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/20 p-3">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="mt-4 text-gray-500">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-alt">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Our Recruitment Process</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A streamlined approach to finding the perfect match
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-center text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-light">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Specialized Technical Recruitment</h2>
              <p className="text-gray-500">
                At Swift Bot Technologies, we understand that recruiting for technical roles requires specialized
                knowledge and expertise. Our team of technical recruiters comes from diverse IT backgrounds, allowing us
                to truly understand the skills and qualifications needed for various technical positions.
              </p>
              <p className="text-gray-500">
                We stay up-to-date with the latest technologies, frameworks, and industry trends to ensure we can
                effectively evaluate candidates and match them with the right opportunities.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Technical Roles We Specialize In:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {technicalRoles.map((role, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full">
              <Image
                src="/assets/sb_recruitment_image.jpg"
                alt="Technical Recruitment"
                width={800}
                height={800}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Let us help you find the perfect talent for your organization or the ideal position for your career.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Sample data
const services = [
  {
    title: "Permanent Staffing",
    description: "Find the perfect full-time employees for your organization with our thorough vetting process.",
    icon: <Users className="h-6 w-6 text-primary" />,
    features: [
      "Comprehensive candidate screening",
      "Technical skills assessment",
      "Cultural fit evaluation",
      "Background and reference checks",
      "Salary negotiation assistance",
    ],
  },
  {
    title: "Contract Staffing",
    description: "Flexible workforce solutions for project-based needs and temporary positions.",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    features: [
      "Short and long-term contracts",
      "Project-based staffing",
      "Temp-to-perm options",
      "Rapid deployment",
      "Compliance and payroll management",
    ],
  },
  {
    title: "Executive Search",
    description: "Specialized recruitment for senior and executive-level technology positions.",
    icon: <Award className="h-6 w-6 text-primary" />,
    features: [
      "C-level executive recruitment",
      "Discreet search process",
      "Industry-specific expertise",
      "Leadership assessment",
      "Competitive market analysis",
    ],
  },
  {
    title: "IT Consulting",
    description: "Expert advice on workforce planning, talent acquisition strategies, and market trends.",
    icon: <Search className="h-6 w-6 text-primary" />,
    features: [
      "Workforce planning",
      "Talent acquisition strategy",
      "Market rate analysis",
      "Retention consulting",
      "Diversity and inclusion initiatives",
    ],
  },
  {
    title: "Remote Talent",
    description:
      "Access to a global pool of remote tech professionals to expand your team beyond geographical limitations.",
    icon: <Globe className="h-6 w-6 text-primary" />,
    features: [
      "Global talent sourcing",
      "Remote work best practices",
      "Time zone management",
      "Virtual onboarding assistance",
      "Remote team building strategies",
    ],
  },
  {
    title: "Skill Assessment",
    description: "Comprehensive technical evaluations to ensure candidates meet your specific requirements.",
    icon: <Code className="h-6 w-6 text-primary" />,
    features: [
      "Technical skills verification",
      "Coding challenges",
      "Problem-solving assessments",
      "Technical interviews",
      "Portfolio reviews",
    ],
  },
]

const process = [
  {
    title: "Understand",
    description: "We take the time to understand your specific needs, company culture, and technical requirements.",
  },
  {
    title: "Source",
    description: "Our specialized recruiters identify and engage with qualified candidates from our extensive network.",
  },
  {
    title: "Evaluate",
    description: "Rigorous screening and assessment processes ensure only the best candidates move forward.",
  },
  {
    title: "Match",
    description: "We present you with carefully selected candidates who match your requirements and company culture.",
  },
]

const technicalRoles = [
  "Software Engineers",
  "Full-Stack Developers",
  "DevOps Engineers",
  "Data Scientists",
  "Cloud Architects",
  "Security Specialists",
  "Product Managers",
  "UX/UI Designers",
  "QA Engineers",
  "Machine Learning Engineers",
  "Mobile Developers",
  "Database Administrators",
]

