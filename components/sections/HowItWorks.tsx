import { HOW_IT_WORKS } from '@/lib/constants'

export default function HowItWorks() {
  return (
    <section className="bg-brand-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-brand-mauve mb-4">
            Simple Process
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-brand-black leading-none">
            How It <span className="italic">Works</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {HOW_IT_WORKS.map((step, index) => (
            <div key={step.step} className="relative flex flex-col">

              {/* Connector line (desktop only) */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(100%+0px)] w-full h-px bg-[#E8E3DC] -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10">
                <span className="font-display text-6xl text-[#E8E3DC] leading-none font-light select-none">
                  {step.step}
                </span>
                <h3 className="font-display text-2xl text-brand-black leading-tight mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
