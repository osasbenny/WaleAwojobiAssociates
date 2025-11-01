import { COMPANY_STATS } from "@/const";

export default function Stats() {
  return (
    <section className="py-12 md:py-16 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {COMPANY_STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <p className="text-sm md:text-base opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
