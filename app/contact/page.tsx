//import { Phone, Mail, MapPin } from "lucide-react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
//import Image from "next/image"

export default function ContactPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 section-dark">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team to discuss your recruitment needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-light">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground">
                  Whether you&apos;re looking to hire top tech talent or find your dream job, our team is here to help. Fill
                  out the form or use our contact details to reach out.
                </p>
              </div>
              <div className="space-y-4">
                
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>contact@swiftbottech.com</p>
                </div>
                
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
            <div className="rounded-lg border p-6 shadow-sm bg-card">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter the subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 section-medium">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border p-6 shadow-sm bg-card">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Sample data
const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in IT recruitment across various industries including software development, fintech, healthcare technology, e-commerce, and more. Our recruiters have domain-specific knowledge to understand the unique requirements of each industry.",
  },
  {
    question: "How long does the recruitment process typically take?",
    answer:
      "The timeline varies depending on the position and specific requirements, but we typically present qualified candidates within 1-2 weeks. The entire process from initial consultation to placement usually takes 3-6 weeks.",
  },
  {
    question: "What is your fee structure?",
    answer:
      "Our fees are typically based on a percentage of the candidate's first-year salary for permanent placements. For contract staffing, we charge a markup on the hourly rate. We're happy to discuss our specific fee structure during our initial consultation.",
  },
  {
    question: "Do you offer any guarantees on placements?",
    answer:
      "Yes, we offer a replacement guarantee period for all permanent placements. If a candidate leaves within a specified period (typically 90 days), we will find a replacement at no additional cost.",
  },
  {
    question: "How do you ensure candidates are a good fit?",
    answer:
      "We use a comprehensive screening process that includes technical assessments, behavioral interviews, reference checks, and cultural fit evaluations. We take the time to understand both our clients' needs and our candidates' goals to ensure the best match.",
  },
  {
    question: "Can you help with international recruitment?",
    answer:
      "Yes, we have experience with international recruitment and can help navigate visa requirements and relocation logistics. We also specialize in remote talent acquisition for companies looking to build distributed teams.",
  },
]

