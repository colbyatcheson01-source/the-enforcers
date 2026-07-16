import GuardianKnight from '@/components/GuardianKnight';

const values = [
  {
    title: 'Safety',
    description: 'The well-being of vulnerable individuals is our highest priority. Every action we take is measured against its impact on community safety.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Accountability',
    description: 'We hold ourselves and our volunteers to the highest standards. Transparent operations, regular reporting, and community oversight guide our work.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Respect',
    description: 'Every individual deserves dignity, compassion, and confidentiality. We treat all survivors, volunteers, and community members with respect.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Legality',
    description: 'We operate strictly within Canadian law. We promote lawful reporting, lawful intervention, and cooperation with authorities.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

const codeOfConductItems = [
  'All volunteers and staff must pass a lawful background screening.',
  'No member may engage in harassment, vigilantism, or targeting of individuals.',
  'All interactions with survivors must be confidential and trauma-informed.',
  'Any criminal activity observed must be reported to law enforcement immediately.',
  'Personal information of survivors and volunteers must never be shared publicly.',
  'Community interventions must be coordinated with and approved by local authorities.',
  'Zero tolerance for discrimination of any kind under the Canadian Human Rights Act.',
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-guardian-void relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-guardian-gold/5 via-transparent to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="shield-badge mb-4">Our Cause</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">
                About The <span className="text-guardian-gold">Guardian</span>
              </h1>
              <p className="text-lg text-neutral-300 leading-relaxed">
                A Canadian nonprofit organization dedicated to building safer communities through lawful, compassionate action. We are The Guardian of Justice — standing for what&rsquo;s right.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <GuardianKnight />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-guardian-midnight">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="shield-badge mb-4 inline-flex">Our Mission</div>
            <h2 className="page-title">The Guardian&rsquo;s Oath</h2>
            <div className="divider-guardian max-w-xs mx-auto mb-6"></div>
            <p className="text-lg text-neutral-300 leading-relaxed font-display italic">
              &ldquo;The Protectors promotes a safe, inclusive, and supportive environment for all people, with special emphasis on protecting vulnerable individuals including women, children, and at-risk populations. We raise awareness, provide resources, and support lawful, community-based interventions.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-guardian-void">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="shield-badge mb-4 inline-flex">Our Code</div>
            <h2 className="page-title">The Guardian&rsquo;s Values</h2>
            <p className="page-subtitle mx-auto text-neutral-400">These four pillars guide every decision we make and every action we take.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card text-center">
                <div className="w-16 h-16 bg-guardian-gold/10 text-guardian-gold rounded-xl flex items-center justify-center mx-auto mb-4 border border-guardian-gold/20">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white font-display">{value.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-guardian-midnight">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="page-title">Guardian&rsquo;s Code of Conduct</h2>
            </div>
            <div className="bg-guardian-void/80 border border-guardian-iron/60 rounded-xl p-8 md:p-12 backdrop-blur-sm">
              <p className="text-neutral-300 mb-8 leading-relaxed">
                Our Code of Conduct establishes the standards of behavior expected of all volunteers, staff, and board members. Every individual associated with The Protectors is expected to read, understand, and adhere to these principles.
              </p>
              <ul className="space-y-4">
                {codeOfConductItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-guardian-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-knight bg-guardian-void border-t border-guardian-iron/30">
        <div className="container-custom text-center relative z-10">
          <div className="shield-badge mb-4 inline-flex">Our Pledge</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-display">The Guardian&rsquo;s Commitment</h2>
          <div className="divider-guardian max-w-xs mx-auto"></div>
          <div className="max-w-3xl mx-auto space-y-4 text-neutral-300">
            <p className="text-lg leading-relaxed">
              The Protectors is committed to lawful action, privacy protection, and the well-being of all community members. We do not encourage or engage in vigilantism, harassment, or any form of unlawful conduct.
            </p>
            <p className="text-lg leading-relaxed">
              We work collaboratively with law enforcement, social services, and community organizations to ensure that our interventions are safe, legal, and effective.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
