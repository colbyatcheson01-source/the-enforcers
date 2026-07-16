import Link from 'next/link';
import GuardianKnight from '@/components/GuardianKnight';

const howWeHelp = [
  {
    title: 'Victim Support Services',
    description: 'Confidential, compassionate support for victims of violence and abuse. We connect individuals with professional counselors, legal resources, and safe housing options.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Community Education',
    description: 'Workshops and training programs that teach violence prevention, conflict resolution, and how to recognize signs of abuse. Knowledge is our first line of defense.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Community Safety Networks',
    description: 'Coordinating with local law enforcement, neighborhood watch programs, and community leaders to create safer environments for everyone, especially vulnerable populations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Lawful Intervention',
    description: 'Guidance on lawful, safe intervention methods. We empower community members to take action within the bounds of Canadian law to protect those at risk.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-guardian-void relative overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-guardian-gold/5 via-transparent to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="shield-badge mb-6">The Guardian of Justice</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white font-display leading-tight">
                Stand for<br />
                <span className="text-guardian-gold">what&rsquo;s right</span>
              </h1>
              <div className="divider-guardian w-40"></div>
              <p className="text-xl text-neutral-300 mb-2 max-w-2xl leading-relaxed">
                A symbol of justice, courage and unwavering faith. It represents the strength to protect others, face darkness without fear, and to never stray from the path of honor.
              </p>
              <p className="text-lg text-neutral-400 mb-8 max-w-2xl">
                Building safer communities through support, awareness, and lawful action.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/volunteer" className="btn-primary text-lg px-8 py-4">
                  Stand With Us
                </Link>
                <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                  Contact The Guardian
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-neutral-500">
                <span className="shield-badge text-xs">Canadian Nonprofit</span>
                <span className="shield-badge text-xs">Victim Support</span>
                <span className="shield-badge text-xs">Community Safety</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <GuardianKnight />
            </div>
          </div>
        </div>
      </section>

      {/* Mission banner */}
      <section className="bg-guardian-void border-y border-guardian-iron/30">
        <div className="container-custom py-8 text-center">
          <p className="text-lg md:text-xl text-neutral-300 font-display italic max-w-4xl mx-auto leading-relaxed">
            &ldquo;The Guardian of Justice — A symbol of justice, courage and unwavering faith. It represents the strength to protect others, face darkness without fear, and to never stray from the path of honor.&rdquo;
          </p>
        </div>
      </section>

      {/* How We Help */}
      <section className="section-knight bg-guardian-void">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="shield-badge mb-4 inline-flex">Our Mission</div>
            <h2 className="page-title">How We Protect</h2>
            <p className="page-subtitle mx-auto text-neutral-400">
              Our comprehensive approach combines direct support, education, and community coordination.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeHelp.map((item) => (
              <div key={item.title} className="card text-center">
                <div className="w-16 h-16 bg-guardian-gold/10 text-guardian-gold rounded-xl flex items-center justify-center mx-auto mb-4 border border-guardian-gold/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white font-display">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-knight bg-guardian-void text-white border-t border-guardian-iron/30">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="shield-badge mb-4 inline-flex">Join The Cause</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-display">
              Stand for What&rsquo;s Right
            </h2>
            <div className="divider-guardian max-w-xs mx-auto"></div>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need support, want to volunteer, or are looking to partner with us, every action creates a safer community. Face darkness without fear.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/volunteer" className="btn-primary text-lg px-8 py-4">
                Become a Guardian
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Join the Cause
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
