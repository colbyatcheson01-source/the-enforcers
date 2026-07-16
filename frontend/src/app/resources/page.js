import Link from 'next/link';

const emergencyContacts = [
  { name: 'Emergency Services', number: '911', description: 'Immediate danger, crime in progress, medical emergency' },
  { name: 'Canada Suicide Crisis Helpline', number: '988', description: 'Mental health crisis support, 24/7, bilingual' },
  { name: 'Kids Help Phone', number: '1-800-668-6868', description: 'Confidential support for youth, 24/7, text CONNECT to 686868' },
  { name: "Assaulted Women's Helpline", number: '1-866-863-0511', description: 'Support for women experiencing abuse, 24/7, TTY: 1-866-863-7868' },
  { name: 'Victim Services Ontario', number: '1-888-579-2888', description: 'Information and support for victims of crime' },
  { name: 'Canadian Human Rights Commission', number: '1-888-214-1090', description: 'File a human rights complaint, discrimination issues' },
  { name: 'National Human Trafficking Hotline', number: '1-833-900-1010', description: 'Report human trafficking, get support, 24/7' },
  { name: 'Child Helpline', number: '1-800-668-6868', description: 'Support for children and youth in crisis' },
];

const supportServices = [
  {
    title: 'Shelter Safety',
    description: 'Emergency shelter information for individuals fleeing domestic violence or unsafe living situations.',
    link: '#',
  },
  {
    title: 'Legal Aid',
    description: 'Connect with legal resources and representation for victims of violence and abuse.',
    link: '#',
  },
  {
    title: 'Counseling Services',
    description: 'Trauma-informed counseling referrals for survivors of violence and their families.',
    link: '#',
  },
  {
    title: 'Financial Assistance',
    description: 'Information on victim compensation programs and emergency financial support available in Canada.',
    link: '#',
  },
];

const preventionContent = [
  {
    title: 'Recognizing Signs of Abuse',
    content: 'Physical signs such as unexplained injuries, behavioral changes like withdrawal or anxiety, controlling relationships, and isolation from friends and family are potential indicators of abuse. Trust your instincts and report concerns to local authorities.',
  },
  {
    title: 'How to Help Someone in Danger',
    content: 'If you witness someone in immediate danger, call 911. For non-emergency situations, approach the person privately, express concern without judgment, provide information about support services, and respect their autonomy in making decisions.',
  },
  {
    title: 'Community Safety Tips',
    content: 'Establish neighborhood communication networks, share emergency contacts, learn basic first aid and CPR, attend community safety workshops, and always report suspicious activity to law enforcement — not to social media.',
  },
  {
    title: 'Digital Safety & Privacy',
    content: 'Use strong, unique passwords, enable two-factor authentication, be cautious about sharing location data, review privacy settings regularly, and never share personal information about survivors or ongoing cases online.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-guardian-void relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-guardian-gold/5 via-transparent to-transparent"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="shield-badge mb-4 inline-flex">Knowledge is Power</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">Guardian&rsquo;s Resources</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Emergency contacts, support services, and educational materials to help you stay safe and protect others.
          </p>
        </div>
      </section>

      <section className="section bg-guardian-midnight">
        <div className="container-custom">
          {/* Emergency banner */}
          <div className="bg-red-950/50 border border-red-800/50 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-900/50 rounded-full flex items-center justify-center flex-shrink-0 border border-red-700/50">
                <span className="text-red-400 font-bold text-xl">!</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-red-300 mb-2 font-display">In an Emergency, Call 911 Immediately</h2>
                <p className="text-red-400/80 text-sm">
                  If you or someone else is in immediate danger, do not wait. Call 911 right now. The Protectors is not a crisis response service — we provide resources and support, but emergencies require immediate professional intervention.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="shield-badge mb-4 inline-flex">Emergency Lines</div>
            <h2 className="page-title">Canadian Crisis Lines</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {emergencyContacts.map((contact) => (
              <div key={contact.name} className="card flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-white mb-1 font-display">{contact.name}</h3>
                  <p className="text-sm text-neutral-400">{contact.description}</p>
                </div>
                <a href={`tel:${contact.number.replace(/[^0-9]/g, '')}`} className="btn-primary text-sm whitespace-nowrap ml-4 flex-shrink-0">
                  {contact.number}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="page-title">Support Services</h2>
            <p className="text-neutral-400 max-w-3xl mx-auto">
              We can help connect you with professional support services. All services listed are confidential and trauma-informed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {supportServices.map((service) => (
              <div key={service.title} className="card">
                <h3 className="font-semibold text-lg text-white mb-2 font-display">{service.title}</h3>
                <p className="text-neutral-400 mb-4 text-sm">{service.description}</p>
                <Link href={service.link} className="text-guardian-gold hover:text-guardian-goldLight font-medium text-sm">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="page-title">Prevention Education</h2>
            <p className="text-neutral-400 max-w-3xl mx-auto">
              Knowledge is the first line of defense. Learn to recognize, prevent, and respond to violence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {preventionContent.map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-semibold text-lg text-white mb-3 font-display">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
