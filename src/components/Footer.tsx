import { Building, MapPin } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101c2e] text-white py-10 border-t border-[#75777d]/35 select-text">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Brand coordinates block on left */}
        <div className="md:col-span-8 space-y-4">
          <div 
            onClick={() => setActiveTab("home")}
            className="font-display text-2xl font-bold tracking-tight text-white cursor-pointer select-none"
            id="footer-logo"
          >
            JNJ Innovations <span className="text-[#bbc7df] text-xs font-mono font-normal tracking-normal uppercase ml-1 opacity-80">LLC</span>
          </div>
          
          <p className="font-sans text-xs text-[#a3b1cc] max-w-sm leading-relaxed">
            Michigan's go-to consulting partner for small businesses. We find the inefficiencies, automate the work, and implement AI so you can focus on growing your business.
          </p>

          <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-[#bbc7df] tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5" />
            Michigan, USA
          </div>
        </div>

        <div className="md:col-span-4 space-y-4">
          <span className="font-mono text-[10px] font-bold text-[#a3b1cc] block uppercase tracking-widest">// NAV_STATIONS</span>
          <ul className="space-y-2.5 font-sans text-xs font-medium text-white/80">
            {["home", "services", "about", "contact"].map((item) => (
              <li key={item}>
                <button
                  id={`footer-nav-to-${item}`}
                  onClick={() => {
                    setActiveTab(item);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-white capitalize cursor-pointer transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 pt-8 mt-8 border-t border-[#75777d]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-[#79849b] uppercase">
        <span>© {currentYear} JNJ Innovations LLC. All Rights Reserved.</span>
        <span>SECURITY_PROTOCOL: ENGAGED // VERSION_2.0</span>
      </div>
    </footer>
  );
}
