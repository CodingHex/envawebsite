import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 text-center text-white">

          {/* MAIN TITLE */}
          <h1
            className="
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl
              font-extrabold tracking-[0.35em] uppercase text-primary
              mb-6 animate-fade-up
            "
          >
            PREMIUM SOCKS MANUFACTURING
          </h1>

          {/* Supporting Headline */}
          <h2
            className="
              text-2xl md:text-4xl font-bold mb-6
              animate-fade-up [animation-delay:150ms]
            "
          >
            Purpose Woven
            <br />
            <span className="text-primary">In Every Stitch</span>
          </h2>

          {/* Description */}
          <p
            className="
              max-w-2xl mx-auto text-sm md:text-base lg:text-lg
              opacity-90 mb-10
              animate-fade-up [animation-delay:300ms]
            "
          >
            With innovation and purposeful impact from yarn to final stitch,
            we manufacture premium socks where every detail tells a meaningful story.
          </p>

          {/* CTA */}
          <div
            className="
              flex flex-col sm:flex-row justify-center gap-4
              animate-fade-up [animation-delay:450ms]
            "
          >
			<a
			href="#products"
			className="
				group inline-flex items-center gap-2
				bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide
				transition-all duration-300
				hover:bg-primary/90
				active:scale-95
			"
			>
			Explore Our Work
			<span
				className="
				transform translate-x-0 opacity-0
				transition-all duration-300
				group-hover:translate-x-1 group-hover:opacity-100
				"
			>
				→
			</span>
			</a>
			<a
			href="#contact"
			className="
				inline-flex items-center justify-center
				border border-white px-8 py-3
				text-sm font-semibold uppercase tracking-wide
				transition-all duration-300
				hover:bg-white hover:text-black
				active:scale-95
			"
			>
			Get In Touch
			</a>
				
				
				
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white opacity-70 animate-bounce">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
