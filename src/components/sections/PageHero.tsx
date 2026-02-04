interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-20">
        <h1 
          className="text-white animate-fade-up text-balance mb-4"
          style={{ 
            textShadow: '0 4px 12px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)'
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p 
            className="text-xl md:text-2xl text-white/90 font-light animate-fade-up-delay-1 max-w-3xl mx-auto"
            style={{ 
              textShadow: '0 2px 8px rgba(0,0,0,0.5)'
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
