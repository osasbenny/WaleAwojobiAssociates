import { BLOG_ARTICLES } from "@/const";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl opacity-90">Insights and Tips for Real Estate Success</p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_ARTICLES.map((article) => (
              <article key={article.id} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition card-hover">
                {/* Image */}
                <div className="bg-muted h-48 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center text-accent text-6xl font-bold">
                    📰
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{article.title}</h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                  {/* Author */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">By {article.author}</p>
                  </div>

                  {/* Read More */}
                  <button className="w-full mt-4 text-accent font-semibold hover:opacity-80 transition">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
