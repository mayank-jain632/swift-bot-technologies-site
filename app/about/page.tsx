import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 section-hero">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                About Swift Bot Technologies
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your trusted partner in IT recruitment, connecting exceptional talent with innovative companies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-light">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="About Swift Bot Technologies"
                width={600}
                height={400}
                className="w-full rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-500">
                Founded in 2024, Swift Bot Technologies began with a simple mission: to bridge the gap between
                exceptional tech talent and companies seeking to innovate and grow. Our founders, experienced tech
                professionals themselves, recognized the challenges both employers and job seekers faced in the rapidly
                evolving IT landscape.
              </p>
              <p className="text-gray-500">
                What started as a small team of dedicated recruiters has grown into a comprehensive IT recruitment
                agency with a global reach. Throughout our journey, we&apos;ve maintained our commitment to personalized
                service, technological innovation, and deep industry expertise.
              </p>
              <p className="text-gray-500">
                Today, Swift Bot Technologies is proud to be a trusted partner to numerous companies, from startups
                to Fortune 500 corporations, helping them build the teams that drive their success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-alt">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Our Mission & Values</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Guided by our core principles to deliver exceptional recruitment services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <div className="rounded-lg border p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-500">
                To connect exceptional tech talent with innovative companies, creating meaningful career opportunities
                and enabling business growth through strategic staffing solutions.
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Excellence</h4>
                    <p className="text-gray-500">
                      We strive for excellence in every placement we make, ensuring the perfect match between candidate
                      and company.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Integrity</h4>
                    <p className="text-gray-500">
                      We operate with honesty and transparency in all our interactions with clients and candidates.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Innovation</h4>
                    <p className="text-gray-500">
                      We embrace cutting-edge technology and innovative approaches to recruitment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Partnership</h4>
                    <p className="text-gray-500">
                      We build long-term relationships based on mutual success and growth.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-light">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Our Team</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the experienced professionals behind Swift Bot Technologies
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white"
              >
                <div className="rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary">{member.position}</p>
                  <p className="mt-2 text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Sample data
const team = [
  {
    name: "Dinesh Kumar",
    position: "Founder & CEO",
    bio: "With over 15 years in tech recruitment, David founded Swift Bot Technologies to revolutionize how companies find tech talent.",
  },
  {
    name: "Jennifer Lee",
    position: "Head of Recruitment",
    bio: "Jennifer brings 10+ years of experience in technical recruiting and has built our exceptional team of specialized recruiters.",
  },
  {
    name: "Robert Chen",
    position: "CTO",
    bio: "Robert oversees our technological infrastructure and develops innovative tools to streamline the recruitment process.",
  },
  {
    name: "Sophia Williams",
    position: "Client Relations Director",
    bio: "Sophia ensures our clients receive personalized service and builds lasting partnerships with companies of all sizes.",
  },
  {
    name: "Marcus Johnson",
    position: "Technical Talent Specialist",
    bio: "Marcus specializes in identifying and recruiting top-tier developers and engineers across all technology stacks.",
  },
  {
    name: "Aisha Patel",
    position: "Executive Search Consultant",
    bio: "Aisha leads our executive search division, connecting companies with C-level and senior technology leaders.",
  },
]

