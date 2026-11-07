import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="not-found">
        <div className="container">
          <span className="section-kicker mono">404 · memory miss</span>
          <h1 className="page-title">This fact is not in memory.</h1>
          <p className="page-lead">The route does not exist, but the home page still does.</p>
          <div className="hero-actions"><Link className="button-primary" to="/">Return home</Link></div>
        </div>
      </section>
    </SiteShell>
  );
}
