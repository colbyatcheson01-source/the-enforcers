import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-guardian-void border-t border-guardian-iron/50" role="contentinfo">
      <div className="divider-guardian">
        <svg className="w-5 h-5 text-guardian-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-guardian-midnight rounded-lg flex items-center justify-center border border-guardian-gold/40">
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-guardian-gold" fill="currentColor">
                  <path d="M50,10 L70,25 L70,55 Q70,75 50,85 Q30,75 30,55 L30,25Z" fill="none" stroke="currentColor" strokeWidth="6"/>
                  <line x1="50" y1="20" x2="50" y2="75" stroke="currentColor" strokeWidth="5"/>
                  <line x1="35" y1="42" x2="65" y2="42" stroke="currentColor" strokeWidth="5"/>
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg text-white font-display tracking-wide">The <span className="text-guardian-gold">Protectors</span></span>
                <span className="block text-[10px] text-neutral-500 tracking-widest uppercase -mt-0.5">Guardians of Justice</span>
              </div>
            </div>
            <p className="text-neutral-400 max-w-md mb-2 text-sm leading-relaxed">
              A symbol of justice, courage and unwavering faith. We represent the strength to protect others, face darkness without fear, and never stray from the path of honor.
            </p>
            <p className="text-guardian-gold/60 text-xs font-display italic mt-3">&ldquo;Stand for what&rsquo;s right&rdquo;</p>
            <p className="text-neutral-600 text-xs mt-4">
              Registered Canadian Nonprofit
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-neutral-400 hover:text-guardian-gold transition-colors text-sm">About Us</Link></li>
              <li><Link href="/resources" className="text-neutral-400 hover:text-guardian-gold transition-colors text-sm">Resources</Link></li>
              <li><Link href="/volunteer" className="text-neutral-400 hover:text-guardian-gold transition-colors text-sm">Volunteer</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-guardian-gold transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-neutral-400 hover:text-guardian-gold transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-neutral-400 hover:text-guardian-gold transition-colors text-sm">Terms of Use</Link></li>
            </ul>
            <div className="mt-6 pt-4 border-t border-guardian-iron/50">
              <h3 className="font-semibold mb-2 text-white text-sm">Emergency?</h3>
              <p className="text-sm text-neutral-400">
                Call <a href="tel:911" className="text-guardian-gold font-bold hover:underline">911</a> immediately
              </p>
              <p className="text-sm text-neutral-500 mt-1">
                Crisis Line: <a href="tel:988" className="text-guardian-gold hover:underline">988</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-guardian-iron/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">
            &copy; {currentYear} The Protectors. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs font-display italic">
            &ldquo;Stand for what&rsquo;s right&rdquo; &mdash; The Guardian of Justice
          </p>
        </div>
      </div>
    </footer>
  );
}
