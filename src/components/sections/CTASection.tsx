import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding-sm cta-gradient">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-primary-foreground mb-6">
            Ready to Work With Australia's Premier Legal Team?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Experience the difference that dedicated expertise and exceptional 
            client service can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+61299169600"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              Call +61 2 9916 9600
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
