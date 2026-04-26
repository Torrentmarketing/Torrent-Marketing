import { MessageCircle, CheckCircle2, TrendingUp, Users, MapPin, ArrowRight, BarChart3, PhoneCall, Zap, Info, FileText, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { CinematicHero } from "./ui/cinematic-hero";
import { Button } from "@/components/ui/neon-button";
import { AnimatedTestimonials } from "./blocks/animated-testimonials";
import { ParallaxScrollSection } from "./ui/parallax-scroll-feature-section";

const WHATSAPP_NUMBER = "923065904574";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Torrent%20Pharma,%20I%20want%20to%20discuss%20pharma%20expansion%20opportunities.`;

const UserPaths = () => (
  <section className="py-20 bg-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold text-white mb-4">Choose Your Path</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Whether you are a manufacturer looking to expand or a professional looking for a franchise, we have the right opportunity for you.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Company Path */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="glass-card p-8 rounded-3xl border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <BarChart3 size={120} />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-4">For Companies</h3>
          <p className="text-slate-300 mb-6">Pharmaceutical Manufacturers looking to fill uncovered territories and find serious distributors across Pakistan.</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-cyan" /> City-wise franchise availability ads</li>
            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-cyan" /> Qualified business leads only</li>
            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-cyan" /> SMART goal alignment (Results in 30 days)</li>
          </ul>
          <Button 
            variant="solid"
            className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all border-none"
            onClick={() => window.open('/proposal.pdf', '_blank')}
          >
            Expand My Company <FileText className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Franchisers Path */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="glass-card p-8 rounded-3xl border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users size={120} />
          </div>
          <h3 className="text-2xl font-display font-bold text-teal mb-4">For Franchisers</h3>
          <p className="text-slate-300 mb-6">Entrepreneurs and Medical Store owners looking for high-margin pharma franchise opportunities in their city.</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-cyan" /> Connect with top manufacturers</li>
            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-cyan" /> Monopoly rights & high margins</li>
            <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-cyan" /> Verified business opportunities</li>
          </ul>
          <Button 
            variant="solid"
            className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all border-none"
            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
          >
            Find a Franchise <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Franchise Lead Gen",
      desc: "Hum aapke liye serious distributors aur franchisers dhoondtay hain jo invest karne ke liye tayyar hon.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-navy/10 text-navy"
    },
    {
      title: "Territory Marketing",
      desc: "Specific cities (Lahore, Karachi, Multan, etc.) mein targeted ads chala kar wahan ke distributors ko target karein.",
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-teal/10 text-teal"
    },
    {
      title: "WhatsApp Conversion",
      desc: "Sirf leads nahi, sales. Hum aapka WhatsApp system set up karte hain taake har query customer mein badle.",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "bg-navy/10 text-navy"
    },
    {
      title: "Expansion Strategy",
      desc: "New product launch ho ya purana brand expand karna ho, hamari strategy aapko results degi.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-teal/10 text-teal"
    }
  ];

  return (
    <section id="services" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">Our Core Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Pharma marketing is different. Generic agencies don't understand your business. We do.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-900/5 transition-all"
            >
              <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-6`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpansionSystem = () => {
  const steps = [
    { title: "Brand Audit", desc: "Aapke products aur target territory ka analysis." },
    { title: "Lead Funnel Setup", desc: "High-converting landing pages aur ad creatives." },
    { title: "Targeted Launch", desc: "Facebook & Instagram ads targeting pharma investors." },
    { title: "WhatsApp Automation", desc: "Leads direct aapke sales team ke WhatsApp par." },
    { title: "Scaling", desc: "Results dekh kar budget barhana aur expansion." }
  ];

  return (
    <section id="system" className="py-24 bg-navy text-white overflow-hidden relative">
      {/* Decorative background elements for better visibility */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(10,31,143,0.4),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(242,125,38,0.1),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8 leading-tight">
              The 5-Step <br />
              <span className="text-teal drop-shadow-sm">Expansion System</span>
            </h2>
            <p className="text-slate-300 text-lg mb-12 max-w-lg leading-relaxed">
              Humne pharma expansion ko ek science bana diya hai. Follow our system and watch your distributor network grow with precision.
            </p>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-teal group-hover:bg-teal group-hover:text-white group-hover:border-teal transition-all shrink-0 shadow-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pharma-accent transition-colors">{step.title}</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-full border-2 border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] animate-spin-slow opacity-20" />
             <div className="relative z-10 glass-card p-8 rounded-[40px] border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="bg-white/5 p-6 rounded-3xl mb-6 border border-white/10">
                  <p className="text-sm font-bold text-pharma-accent uppercase mb-4 tracking-wider">Live Campaign Stats</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-4xl font-bold text-white">48</p>
                      <p className="text-xs text-slate-400 font-medium">New Leads Today</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-4xl font-bold text-white">12</p>
                      <p className="text-xs text-slate-400 font-medium">Franchise Closed</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-pharma-accent/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-pharma-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                        <div className="h-1.5 w-16 bg-white/10 rounded" />
                      </div>
                      <div className="text-pharma-accent text-[10px] font-bold px-2 py-1 bg-pharma-accent/10 rounded-full">NEW LEAD</div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter Expansion",
      price: "50,000",
      features: [
        "8-10 Professional Posts",
        "2 High-Impact Reels",
        "Targeting 1-2 Cities",
        "Organic + Basic Paid Strategy",
        "Lead Forwarding",
        "Ad Budget Charged Separately"
      ],
      popular: false
    },
    {
      name: "Growth Partner",
      price: "80,000",
      features: [
        "12-15 Professional Posts",
        "4 High-Impact Reels",
        "Targeting Up to 4 Cities",
        "Paid Ad Strategy & Optimization",
        "Lead Filtering & Qualification",
        "Weekly Performance Reports"
      ],
      popular: true
    },
    {
      name: "National Leader",
      price: "120,000",
      features: [
        "20+ Professional Posts",
        "6-8 High-Impact Reels",
        "Targeting Multiple Cities",
        "Advanced Precision Targeting",
        "Priority Lead Handling",
        "Detailed Monthly Analytics"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">Investment Plans</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Choose the plan that fits your expansion goals. No hidden fees.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative p-8 rounded-[32px] border transition-all ${plan.popular ? 'bg-navy text-white shadow-2xl scale-105 border-navy' : 'bg-card text-white border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">Rs. {plan.price}</span>
                <span className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-navy/70'}`}> / month</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className={`w-5 h-5 ${plan.popular ? 'text-teal' : 'text-green-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.popular ? "solid" : "outline"}
                className={`w-full py-6 rounded-xl font-bold text-center block transition-all border-none ${plan.popular ? 'bg-orange text-white hover:bg-orange/90' : 'bg-navy text-white hover:shadow-lg'}`}
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => (
  <section id="about" className="py-24 bg-bg overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              About <span className="text-orange">Us</span>
            </h2>
            <div className="h-1.5 w-24 bg-teal rounded-full mb-8" />
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Torrent Pharma Marketing Services was built to solve a real problem in the pharmaceutical industry.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              For years, manufacturers and local pharma franchise companies have relied on large sales teams to travel from city to city, searching for franchisers and distributors. This process is not only expensive, but also slow and unpredictable.
            </p>
            <p className="text-white font-bold text-xl mb-6">
              We saw this gap — and decided to fix it.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Torrent Pharma Marketing Services was created as a smarter, faster, and more cost-effective way to expand pharma businesses into untapped districts across Pakistan using the power of social media.
            </p>
          </div>

          <div className="bg-card p-8 rounded-[32px] border border-white/5">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Founder’s Story</h3>
            <p className="text-slate-200 font-bold mb-4">I’m Waqar Ali, the founder of Torrent Pharma Marketing Services.</p>
            <p className="text-slate-400 mb-4">
              With over 17 years of experience in the pharmaceutical industry and 6+ years in e-commerce and digital marketing, I’ve worked on both sides of the business — field sales and digital growth.
            </p>
            <p className="text-slate-400 mb-6">
              My journey started as a Territory Manager at Neuvic Pharma (Peshawar), and later I joined GSK Pharma in 2010 as a Product Specialist.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Respiratory', 'Psychiatry', 'Medicine', 'Pediatrics', 'Surgery'].map(spec => (
                <span key={spec} className="px-3 py-1 bg-navy/5 text-navy text-xs font-bold rounded-full border border-navy/10">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass-card p-8 rounded-[40px] border-white/10 shadow-xl">
            <h3 className="text-2xl font-display font-bold text-white mb-6">From Field Experience to Digital Expansion</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              During COVID, I launched my own company, Torrent Pharma, as a KPK-based franchise operation. While working with multiple pharmaceutical companies — including Doctor Raza Pharma, Polyfine Pharma, Nicholas Pharma, Shazals Pharma, Rogen Pharma, Perk Pharma, Origin Pharma, and many others — I realized something important:
            </p>
            <p className="text-teal font-bold text-xl mb-8 italic">
              "The traditional model of expansion is outdated."
            </p>
            <div className="p-6 bg-navy text-white rounded-3xl">
              <p className="text-sm leading-relaxed">
                So I combined my pharma experience with my digital marketing knowledge — and built a system that generates qualified franchisers through social media instead of physical fieldwork.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-card rounded-3xl border border-white/5">
              <p className="text-3xl font-bold text-cyan mb-1">1000+</p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Pharma Contacts</p>
            </div>
            <div className="p-6 bg-card rounded-3xl border border-white/5">
              <p className="text-3xl font-bold text-cyan mb-1">10+</p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Team Professionals</p>
            </div>
          </div>

          <div className="p-8 bg-orange/5 rounded-[32px] border border-orange/10">
            <h4 className="font-bold text-white mb-4">Our Vision</h4>
            <p className="text-slate-300 leading-relaxed italic">
              "To make Torrent Pharma Marketing Services one of the top pharma marketing and expansion companies in Pakistan within the next 3 to 5 years."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Results = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fahad Khan",
      role: "Managing Director",
      company: "PERK Pharma",
      content: "Torrent Pharma has completely transformed our distribution network. We've seen a 40% increase in franchise inquiries within just two months. Their targeted approach is unmatched.",
      rating: 5,
      avatar: "",
    },
    {
      id: 2,
      name: "Sammi",
      role: "Marketing Manager",
      company: "Crescent Pharma",
      content: "The WhatsApp automation system is a game-changer. It has streamlined our lead management and significantly improved our conversion rates. Highly recommended for pharma brands.",
      rating: 5,
      avatar: "",
    },
    {
      id: 3,
      name: "Zarq",
      role: "Manager Operations",
      company: "Shaafi Pharma",
      content: "Expanding into new territories used to be a headache. With Torrent Pharma's targeted approach, we've successfully launched in three new cities this quarter with verified distributors.",
      rating: 5,
      avatar: "",
    },
    {
      id: 4,
      name: "Abbas",
      role: "CEO",
      company: "Caliph Pharma",
      content: "The quality of leads we receive is exceptional. Torrent Pharma understands the pharmaceutical landscape in Pakistan better than any other agency we've worked with.",
      rating: 5,
      avatar: "",
    },
    {
      id: 5,
      name: "Mr Fahad",
      role: "Managing Director",
      company: "PFE Pharma",
      content: "Their 5-step system is incredibly efficient. We were able to establish a strong presence in the northern regions in record time. A truly professional partner.",
      rating: 5,
      avatar: "",
    },
    {
      id: 6,
      name: "MR Riaz",
      role: "Assistant Operations",
      company: "Zain Pharma",
      content: "The support team at Torrent Pharma is always available. They don't just run ads; they help us build a sustainable growth strategy for our franchise network.",
      rating: 5,
      avatar: "",
    },
    {
      id: 7,
      name: "Musa Pracha",
      role: "CEO",
      company: "Delta Pharma",
      content: "We've seen a significant ROI since partnering with Torrent Pharma. Their focus on qualified business opportunities rather than just random leads is what sets them apart.",
      rating: 5,
      avatar: "",
    },
    {
      id: 8,
      name: "MR Faisla Bashir",
      role: "CEO",
      company: "Shazal's Pharma",
      content: "Torrent Pharma's digital expansion model is the future of the industry. It's cost-effective, fast, and delivers measurable results. We are proud to be their partner.",
      rating: 5,
      avatar: "",
    },
  ];

  return (
    <AnimatedTestimonials
      title="Real Results for Real Pharma Brands"
      subtitle="Humne Pakistan ke top pharma manufacturers ko help kiya hai unka network expand karne mein. Hamari case studies bolti hain."
      badgeText="Trusted by Industry Leaders"
      testimonials={testimonials}
      trustedCompanies={["PERK Pharma", "Crescent Pharma", "Shaafi Pharma", "Caliph Pharma", "PFE Pharma", "Zain Pharma", "Delta Pharma", "Shazal's Pharma"]}
    />
  );
};

const Footer = () => (
  <footer className="bg-navy text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="mb-8">
            <Logo size="md" className="text-white" />
          </div>
          <p className="text-slate-400 max-w-sm mb-8">
            Torrent Pharma Marketing Services acts as your digital expansion partner, not just a marketer. We fill uncovered markets with the right people, faster and smarter.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3 text-slate-400">
              <MapPin className="w-5 h-5 text-teal shrink-0 mt-1" />
              <span>Office 6 B, Royal Residencia, Darmangi Garden street 2, Warsak Road Peshawar</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <PhoneCall className="w-5 h-5 text-teal" />
              <span>+92 306 5904574</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/Torrentpharmapakistan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/torrentpharma.pk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#system" className="hover:text-white transition-colors">Expansion System</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Opportunities</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href={WHATSAPP_LINK} className="hover:text-white transition-colors">For Companies</a></li>
            <li><a href={WHATSAPP_LINK} className="hover:text-white transition-colors">For Franchisers</a></li>
            <li><a href={WHATSAPP_LINK} className="hover:text-white transition-colors">Territory Expansion</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center text-navy/70 text-sm">
        <p>© {new Date().getFullYear()} Torrent Pharma Marketing Services. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <CinematicHero />
      <UserPaths />
      <AboutUs />
      <Services />
      <ExpansionSystem />
      <ParallaxScrollSection />
      <Pricing />
      <Results />
      

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
