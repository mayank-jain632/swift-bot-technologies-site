import Image from "next/image"

export default function TestimonialsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear what our clients and candidates have to say about their experience with Swift Bot Technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-light">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between rounded-lg border p-6 shadow-sm bg-card">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">&quot;{testimonial.content}&quot;</p>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-medium">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-lg border p-6 shadow-sm bg-card">
              <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-6">
                <div className="md:w-1/3">
                  <div className="mx-auto w-24 h-24 rounded-full overflow-hidden bg-muted">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Featured Testimonial"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex space-x-1 justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-xl italic text-muted-foreground mb-4">
                    &quot;Working with Swift Bot Technologies has completely transformed our hiring process. Their team took
                    the time to understand our company culture and technical requirements, resulting in candidates who
                    not only had the right skills but also fit seamlessly into our team. We&apos;ve reduced our time-to-hire
                    by 40% and improved retention rates significantly. I can&apos;t recommend them highly enough for any
                    company looking to build a strong tech team.&quot;
                  </blockquote>
                  <div>
                    <p className="font-bold text-lg">Alexander Thompson</p>
                    <p className="text-primary">VP of Engineering, CloudMatrix Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-light">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real results from our recruitment partnerships
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            {successStories.map((story, index) => (
              <div key={index} className="rounded-lg border p-6 shadow-sm bg-card">
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className="text-primary mb-4">{story.company}</p>
                <p className="text-muted-foreground mb-4">{story.challenge}</p>
                <p className="text-muted-foreground mb-4">{story.solution}</p>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Results:</span>
                  <span className="text-muted-foreground">{story.results}</span>
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
const testimonials = [
  {
    content:
      "Swift Bot Technologies helped us find the perfect senior developer in record time. Their understanding of our technical requirements was impressive.",
    name: "Sarah Johnson",
    position: "CTO, TechInnovate",
  },
  {
    content:
      "As a job seeker, I was impressed by how well Swift Bot Technologies matched me with opportunities that aligned with my career goals.",
    name: "Michael Chen",
    position: "Software Engineer",
  },
  {
    content:
      "Their contract staffing solutions helped us scale our development team quickly for a major project. The quality of candidates was exceptional.",
    name: "Emily Rodriguez",
    position: "HR Director, DataSphere",
  },
  {
    content:
      "We've worked with several recruitment agencies, but Swift Bot Technologies stands out for their technical expertise and personalized approach.",
    name: "David Wilson",
    position: "CEO, StartupLaunch",
  },
  {
    content:
      "The team at Swift Bot Technologies took the time to understand our company culture, which resulted in candidates who were not just technically qualified but also great cultural fits.",
    name: "Jennifer Lee",
    position: "HR Manager, TechGrowth",
  },
  {
    content:
      "I was placed in my dream job by Swift Bot Technologies. They provided guidance throughout the interview process and negotiated a great package on my behalf.",
    name: "Robert Martinez",
    position: "Full Stack Developer",
  },
  {
    content:
      "Their executive search service helped us find a CTO who has transformed our technical strategy. Worth every penny of their fee.",
    name: "Amanda Thompson",
    position: "Founder, InnovateTech",
  },
  {
    content:
      "Swift Bot Technologies has been our go-to recruitment partner for three years. They consistently deliver high-quality candidates who stay with us long-term.",
    name: "James Wilson",
    position: "Director of Engineering, CodeCraft",
  },
  {
    content:
      "The remote talent they sourced for our team has been exceptional. They have a global network that allowed us to find specialized skills we couldn't find locally.",
    name: "Sophia Garcia",
    position: "Product Manager, GlobalTech",
  },
]

const successStories = [
  {
    title: "Scaling a Development Team",
    company: "FinTech Startup",
    challenge:
      "A rapidly growing fintech startup needed to double their development team from 10 to 20 engineers within three months to meet product deadlines.",
    solution:
      "We implemented a targeted recruitment strategy, focusing on both active and passive candidates with specific fintech experience.",
    results: "All 10 positions filled within the timeline, with 90% retention rate after one year.",
  },
  {
    title: "Executive Leadership Search",
    company: "E-commerce Platform",
    challenge:
      "An established e-commerce company was struggling to find a CTO with the right blend of technical expertise and leadership skills.",
    solution:
      "Our executive search team conducted a comprehensive search, including candidates from outside the e-commerce industry who brought fresh perspectives.",
    results: "Successful placement of a CTO who led a major platform overhaul, resulting in 30% improved performance.",
  },
  {
    title: "Remote Team Building",
    company: "SaaS Provider",
    challenge:
      "A SaaS company needed to build a distributed team across multiple time zones to provide 24/7 customer support and development.",
    solution:
      "We leveraged our global network to source candidates comfortable with remote work and experienced in asynchronous collaboration.",
    results: "Built a team of 15 remote professionals across 8 countries, enabling true round-the-clock operations.",
  },
  {
    title: "Technical Skill Gap",
    company: "Manufacturing Firm",
    challenge:
      "A traditional manufacturing company was digitizing operations but lacked in-house expertise in IoT and data analytics.",
    solution:
      "We identified candidates with both manufacturing background and the required technical skills, providing a bridge between the traditional and digital aspects of the business.",
    results: "Successfully built a digital transformation team that increased operational efficiency by 25%.",
  },
]

