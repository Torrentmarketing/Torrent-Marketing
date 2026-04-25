import React from 'react'
import { ArrowRight, ChevronRight, Menu, X, Zap, FileText, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/neon-button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import { Logo } from '@/components/Logo'

const WHATSAPP_NUMBER = "923065904574";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Torrent%20Pharma,%20I%20want%20to%20discuss%20pharma%20expansion%20opportunities.`;

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
} as const;

export function HeroSection() {
    return (
        <div className="relative">
            <HeroHeader />
            <HeroGeometric 
                badge="Pakistan's #1 Pharma Expansion Agency"
                title1="Fill Uncovered Markets with"
                title2="Qualified Leads"
                description="Torrent Pharma Marketing connects pharmaceutical manufacturers with serious franchisers and distributors across Pakistan — faster and smarter than field sales alone."
            >
                <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
                    <Button
                        variant="solid"
                        size="lg"
                        className="rounded-full px-8 text-base bg-teal hover:bg-teal/90 text-white border-none shadow-[0_0_20px_rgba(0,168,120,0.3)]">
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <span className="text-nowrap flex items-center gap-2 font-bold">WhatsApp Us Now <MessageCircle className="size-4" /></span>
                        </a>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-8 text-base border-white/20 bg-transparent hover:bg-white/10 text-white">
                        <a href="/proposal.pdf" target="_blank" className="flex items-center gap-2">
                            <span className="text-nowrap flex items-center gap-2 font-bold"><FileText className="size-4" /> Download Proposal</span>
                        </a>
                    </Button>
                </div>
            </HeroGeometric>
            
            <section id="results" className="bg-[#030303] pb-16 pt-16 md:pb-32 border-t border-white/5">
                <div className="group relative m-auto max-w-5xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-display font-bold text-white/80">Meet Our Successful Partners</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
                        <div className="text-white/60 font-display font-bold text-sm hover:text-teal transition-colors text-center">PFE Pharma</div>
                        <div className="text-white/60 font-display font-bold text-sm hover:text-teal transition-colors text-center">PERK Pharma</div>
                        <div className="text-white/60 font-display font-bold text-sm hover:text-teal transition-colors text-center">Crescent Pharma</div>
                        <div className="text-white/60 font-display font-bold text-sm hover:text-teal transition-colors text-center">Shaafi Pharma</div>
                        <div className="text-white/60 font-display font-bold text-sm hover:text-teal transition-colors text-center">Zain Pharma</div>
                        <div className="text-white/60 font-display font-bold text-sm hover:text-teal transition-colors text-center">Caliph Pharma</div>
                        <div className="text-white/60 font-display font-bold text-sm hover:text-teal transition-colors text-center">Delta Pharma</div>
                        <div className="text-white/60 font-display font-bold text-sm hover:text-teal transition-colors text-center">Shazal's Pharma</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const menuItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'System', href: '#system' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Results', href: '#results' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-50 w-full px-2 group top-0">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-white/70 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5 shadow-lg')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a
                                href="/"
                                aria-label="home"
                                className="flex items-center">
                                <Logo size="sm" />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-navy/80 hover:text-navy block duration-150 font-medium">
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-navy/80 hover:text-navy block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    variant="solid"
                                    size="sm"
                                    className={cn("bg-navy text-white hover:bg-navy/90", isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                        <span>Get Started</span>
                                    </a>
                                </Button>
                                {!isScrolled && (
                                     <Button
                                        variant="solid"
                                        size="sm"
                                        className="bg-navy text-white hover:bg-navy/90">
                                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                            <span>Contact Us</span>
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


