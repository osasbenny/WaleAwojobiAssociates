import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <button className="btn-primary">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
