import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Us Today</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Reach out to our team for any inquiries or assistance you may need. Whether you are looking for your dream
          home, need guidance on the buying process, or have any other questions, we are here to help. Let us make your
          real estate journey seamless and enjoyable.
        </p>
        <Link href="/contact">
          <button className="bg-accent-foreground text-accent font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition">
            Get In Touch
          </button>
        </Link>
      </div>
    </section>
  );
}
