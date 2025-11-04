import { COMPANY_NAME, COMPANY_TAGLINE } from "@/const";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About {COMPANY_NAME}</h1>
          <p className="text-xl opacity-90">{COMPANY_TAGLINE}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          {/* About Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">About Us</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                WALE AWOJOBI + ASSOCIATES is an indigenous firm of Estate Surveying and Valuation registered in Nigeria on the 14th day of June, 2010 as a business concern with registration number RC2138243, and approved by the Estate Surveyors and Valuers Registration Board of Nigeria (ESVARBON) to practice the Profession of Estate Surveying and Valuation throughout the Federation. The firm WALE AWOJOBI + ASSOCIATES is a professional member of the Nigerian Institution of Estate Surveyors and Valuers.
              </p>
              <p>
                The firm has offices in Abuja, Lagos, Port Harcourt, Nasarawa, Kaduna and Birnin Kebbi which are manned by seasoned Estate Surveyors and Valuers of considerable experience and competence. The diverse skills incorporated in the firm of WALE AWOJOBI + ASSOCIATES are organised to provide both direct technical input into specific project as well as to provide support services in the multi-disciplinary scope.
              </p>
              <p>
                Our quest for your kind consideration and enlistment as Consultant Estate Surveyor and Valuer is pivoted on our proven skills and experience in the multi-various professional services we render. Thus, we hereby affirm that our firm of Estate Surveyors and Valuers is eminently qualified and able to discharge all briefs that will be referred to it, to your satisfaction and commendation. This we have successfully done in the recent past and our professional services have thus remained a reference point.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At {COMPANY_NAME}, our mission is to provide exceptional estate surveying and valuation services that
              empower our clients to make informed real estate decisions. We are committed to delivering accurate,
              professional, and timely valuations that reflect the true market value of properties across Nigeria.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in building long-term relationships with our clients through transparency, integrity, and
              excellence in everything we do.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-foreground">Professionalism</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of professional conduct and expertise in all our engagements.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-foreground">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with complete honesty and transparency, ensuring our clients can trust our valuations and
                  advice.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-foreground">Expertise</h3>
                <p className="text-muted-foreground">
                  Our team brings decades of combined experience in estate surveying, valuation, and real estate
                  management.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-3 text-foreground">Client Focus</h3>
                <p className="text-muted-foreground">
                  We prioritize our clients' needs and work diligently to exceed their expectations in every project.
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Services</h2>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">Property Valuation</h3>
                <p className="text-muted-foreground">
                  Comprehensive property valuations for residential, commercial, and industrial properties using
                  internationally recognized methodologies.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">Estate Surveying</h3>
                <p className="text-muted-foreground">
                  Professional surveying services including boundary demarcation, site surveys, and feasibility studies
                  for development projects.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">Property Management</h3>
                <p className="text-muted-foreground">
                  Full-service property management solutions including tenant management, maintenance coordination, and
                  financial reporting.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">Project Management</h3>
                <p className="text-muted-foreground">
                  Expert project management services for real estate development and construction projects, ensuring
                  timely delivery and budget compliance.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2 text-foreground">Project Appraisal</h3>
                <p className="text-muted-foreground">
                  Detailed project appraisal and feasibility studies for real estate development projects to support
                  financing and investment decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Why Choose Us</h2>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Over 10 years of experience in the Nigerian real estate market</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Team of certified estate surveyors and valuers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Comprehensive knowledge of property markets across Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Commitment to accuracy, professionalism, and client satisfaction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>Competitive pricing and flexible service packages</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
