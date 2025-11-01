import { TEAM_MEMBERS } from "@/const";

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl opacity-90">Your Real Estate Advisors</p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Our Professionals</p>
            <h2 className="section-title">Dedicated Real Estate Experts</h2>
            <p className="section-subtitle">
              Meet our dedicated real estate agents and valuers, bringing unique expertise to your success. They will
              guide you through every step of your property journey with personalized advice and support.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition card-hover">
                {/* Image */}
                <div className="bg-muted h-64 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-1">{member.title}</p>
                  <p className="text-xs text-muted-foreground mb-4">{member.credentials}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
