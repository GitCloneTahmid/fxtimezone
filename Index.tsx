import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const brands = [
  { name: "Nike", logo: "https://cdn.worldvectorlogo.com/logos/nike-4.svg" },
  { name: "Adidas", logo: "https://cdn.worldvectorlogo.com/logos/adidas-9.svg" },
  { name: "H&M", logo: "https://cdn.worldvectorlogo.com/logos/h-m-2.svg" },
  { name: "Zara", logo: "https://cdn.worldvectorlogo.com/logos/zara-2.svg" },
  { name: "Calvin Klein", logo: "https://cdn.worldvectorlogo.com/logos/calvin-klein-1.svg" },
  { name: "Uniqlo", logo: "https://cdn.worldvectorlogo.com/logos/uniqlo-1.svg" },
  { name: "Gap", logo: "https://cdn.worldvectorlogo.com/logos/gap-4.svg" },
  { name: "Puma", logo: "https://cdn.worldvectorlogo.com/logos/puma-logo.svg" },
  { name: "Tommy Hilfiger", logo: "https://cdn.worldvectorlogo.com/logos/tommy-hilfiger-3.svg" },
  { name: "Lacoste", logo: "https://cdn.worldvectorlogo.com/logos/lacoste-1.svg" },
  { name: "Levi's", logo: "https://cdn.worldvectorlogo.com/logos/levis-9.svg" },
  { name: "Under Armour", logo: "https://cdn.worldvectorlogo.com/logos/under-armour-1.svg" },
  { name: "New Balance", logo: "https://cdn.worldvectorlogo.com/logos/new-balance-2.svg" },
  { name: "Hugo Boss", logo: "https://cdn.worldvectorlogo.com/logos/hugo-boss.svg" },
  { name: "Fila", logo: "https://cdn.worldvectorlogo.com/logos/fila-9.svg" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border py-8">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
            <Link to="/" className="text-[15px] font-medium tracking-[3px] text-primary">
              THM LIMITED
            </Link>
            <nav className="flex flex-wrap items-center gap-8">
              <a href="#about" className="text-sm tracking-wide text-foreground hover:text-primary transition-colors">About</a>
              <a href="#capabilities" className="text-sm tracking-wide text-foreground hover:text-primary transition-colors">Capabilities</a>
              <a href="#clients" className="text-sm tracking-wide text-foreground hover:text-primary transition-colors">Clients</a>
              <a href="#contact" className="text-sm tracking-wide text-foreground hover:text-primary transition-colors">Contact</a>
              <div className="flex gap-4 lg:ml-5 lg:pl-5 lg:border-l border-border">
                <Button variant="outline" size="sm" className="text-[13px] font-medium tracking-wide" asChild>
                  <Link to="/login?type=client">Client Login</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-[13px] font-medium tracking-wide" asChild>
                  <Link to="/login?type=factory">Factory Login</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 lg:py-36 bg-secondary border-b border-border">
        <div className="container">
          <h2 className="text-display max-w-[800px] mb-6 text-primary animate-fade-in">
            Private apparel sourcing and production coordination for international brands
          </h2>
          <p className="text-lg max-w-[650px] text-foreground/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We connect global buyers with vetted manufacturing facilities. Discreet execution built on established relationships and consistent delivery.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-b border-border">
        <div className="container">
          <div className="max-w-[750px]">
            <h3 className="text-xs uppercase tracking-[2.5px] font-medium text-muted-foreground mb-5">Introduction</h3>
            <h4 className="text-heading text-primary mb-9">
              THM Limited operates as a private buying house between international apparel brands and manufacturing facilities across multiple regions.
            </h4>
            <p className="text-foreground/70">
              We handle sourcing, production coordination, and quality oversight for brands that require consistent execution at scale. Our work is built on long-term partnerships with both buyers and manufacturers, established through years of reliable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-20 border-t border-l border-border">
            {[
              { number: "680K+", label: "Units per month" },
              { number: "25+", label: "Countries served" },
              { number: "50+", label: "Global brands" },
            ].map((stat, index) => (
              <div key={index} className="p-10 md:p-12 border-r border-b border-border">
                <div className="text-stat text-primary mb-3">{stat.number}</div>
                <div className="text-sm text-muted-foreground tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 bg-secondary border-b border-border">
        <div className="container">
          <div className="max-w-[750px]">
            <h3 className="text-xs uppercase tracking-[2.5px] font-medium text-muted-foreground mb-5">What We Do</h3>
            <h4 className="text-heading text-primary mb-9">Focused capabilities across the production cycle</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {[
                { title: "Buyer Representation", desc: "Acting on behalf of international brands to secure production with qualified manufacturers that meet technical and compliance requirements." },
                { title: "Factory Sourcing & Vetting", desc: "Identifying and evaluating production facilities based on capacity, technical capability, certifications, and established performance records." },
                { title: "Production Coordination", desc: "Managing schedules, material sourcing, specification adherence, and communication between all parties throughout the production process." },
                { title: "Quality Assurance", desc: "Monitoring production standards, conducting inspections, and ensuring adherence to agreed specifications before shipment." },
              ].map((cap, index) => (
                <div key={index}>
                  <h5 className="text-[17px] font-medium text-primary mb-3">{cap.title}</h5>
                  <p className="text-foreground/70 text-base leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-b border-border">
        <div className="container">
          <div className="max-w-[750px]">
            <h3 className="text-xs uppercase tracking-[2.5px] font-medium text-muted-foreground mb-5">How We Work</h3>
            <h4 className="text-heading text-primary mb-9">A structured approach to execution</h4>
            <div className="max-w-[600px] mt-16 space-y-9">
              {[
                "Understand buyer requirements, technical specifications, volume expectations, and delivery timelines.",
                "Match with suitable factories based on product type, capacity, technical capability, and compliance standards.",
                "Coordinate production schedules, material procurement, sample approvals, and quality checkpoints.",
                "Maintain direct communication with all parties, conduct inspections, and oversee shipment until final delivery.",
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-sm font-medium text-muted-foreground min-w-[45px] tracking-wide">0{index + 1}</span>
                  <p className="text-foreground/70">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-secondary border-b border-border">
        <div className="container">
          <div className="max-w-[750px]">
            <h3 className="text-xs uppercase tracking-[2.5px] font-medium text-muted-foreground mb-5">Certifications & Compliance</h3>
            <h4 className="text-heading text-primary mb-9">Meeting international standards</h4>
            <p className="text-foreground/70">
              Our partner factories maintain certifications that meet the compliance requirements of international brands. We work exclusively with facilities that adhere to recognized standards for quality management, environmental responsibility, and social compliance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { name: "ISO 9001", label: "Quality Management" },
              { name: "ISO 14001", label: "Environmental Management" },
              { name: "WRAP", label: "Social Compliance" },
              { name: "OEKO-TEX", label: "Product Safety" },
            ].map((cert, index) => (
              <div key={index} className="text-center p-8 bg-background border border-border">
                <h5 className="text-[15px] font-medium text-primary mb-2">{cert.name}</h5>
                <p className="text-[13px] text-muted-foreground tracking-wide">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-24 bg-secondary border-b border-border">
        <div className="container">
          <div className="text-center max-w-[650px] mx-auto mb-16">
            <h3 className="text-xs uppercase tracking-[2.5px] font-medium text-muted-foreground mb-5">Client Portfolio</h3>
            <h4 className="text-heading text-primary mb-6">Trusted by leading international brands</h4>
            <p className="text-lg text-foreground/70">
              We coordinate production for established athletic, fashion, and retail brands across North America, Europe, and Asia Pacific.
            </p>
          </div>
        </div>
        <div className="overflow-hidden py-16 bg-background w-full">
          <div className="logo-track flex w-max">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex-shrink-0 w-[200px] h-[100px] flex items-center justify-center mx-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <img src={brand.logo} alt={brand.name} className="max-w-[120px] max-h-[60px] w-auto h-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 border-b border-border">
        <div className="container">
          <div className="max-w-[750px]">
            <h3 className="text-xs uppercase tracking-[2.5px] font-medium text-muted-foreground mb-5">Team</h3>
            <h4 className="text-heading text-primary mb-9">Experience in merchandising, quality, and operations</h4>
            <p className="text-foreground/70">
              We are a focused team with backgrounds in production merchandising, quality control, compliance, and factory operations. We maintain direct relationships with both buyers and manufacturers to ensure clear communication and consistent execution.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-secondary border-b border-border">
        <div className="container">
          <div className="max-w-[750px]">
            <h3 className="text-xs uppercase tracking-[2.5px] font-medium text-muted-foreground mb-5">Leadership</h3>
            <h4 className="text-heading text-primary mb-9">Built on relationships and execution</h4>
            <p className="text-foreground/70">
              The company is led by a founder with experience in sales, client acquisition, and operational management within the apparel industry. The approach prioritizes building partnerships that deliver consistent results over multiple production cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-b border-border">
        <div className="container">
          <div className="max-w-[750px]">
            <h3 className="text-xs uppercase tracking-[2.5px] font-medium text-muted-foreground mb-5">Contact</h3>
            <h4 className="text-heading text-primary mb-9">Dhaka office</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-16">
              <div>
                <h5 className="text-[15px] font-medium text-primary mb-4">Address</h5>
                <p className="text-foreground/70 leading-loose">
                  THM Limited<br />House 12, Road 8<br />Sector 4, Uttara<br />Dhaka 1230<br />Bangladesh
                </p>
              </div>
              <div>
                <h5 className="text-[15px] font-medium text-primary mb-4">Email</h5>
                <a href="mailto:contact@thmlimited.com" className="text-foreground border-b border-foreground hover:text-primary hover:border-primary transition-colors">
                  contact@thmlimited.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 text-center">
        <div className="container">
          <p className="text-sm text-primary-foreground/60">© 2025 THM Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
