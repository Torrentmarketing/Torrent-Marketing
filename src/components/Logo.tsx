import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({ className, size = 'md' }: LogoProps) => {
    const sizes = {
        sm: { icon: 'w-8 h-8', text: 'text-xl', subtext: 'text-[10px]', gap: 'gap-2' },
        md: { icon: 'w-12 h-12', text: 'text-3xl', subtext: 'text-[14px]', gap: 'gap-3' },
        lg: { icon: 'w-20 h-20', text: 'text-5xl', subtext: 'text-[22px]', gap: 'gap-5' }
    }

    const currentSize = sizes[size]

    return (
        <div className={cn("flex items-center", currentSize.gap, className)}>
            <div className={cn("relative flex items-center justify-center shrink-0", currentSize.icon)}>
                {/* Refined colorful delta shape based on the provided logo */}
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                    <defs>
                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F7941E" />
                            <stop offset="100%" stopColor="#FDB913" />
                        </linearGradient>
                        <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00AEEF" />
                            <stop offset="100%" stopColor="#0072BC" />
                        </linearGradient>
                        <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8DC63F" />
                            <stop offset="100%" stopColor="#D7DF23" />
                        </linearGradient>
                    </defs>
                    {/* The logo is a rounded triangle with three overlapping segments */}
                    {/* Blue segment (Left) */}
                    <path 
                        d="M50 15 L20 75 Q15 85 25 85 L75 85 Q85 85 80 75 L50 15" 
                        fill="none" 
                    />
                    <path 
                        d="M50 20 C35 20, 15 55, 15 70 C15 85, 35 85, 50 70 Z" 
                        fill="url(#grad-blue)" 
                        className="mix-blend-multiply opacity-90"
                    />
                    {/* Green segment (Right) */}
                    <path 
                        d="M50 20 C65 20, 85 55, 85 70 C85 85, 65 85, 50 70 Z" 
                        fill="url(#grad-green)" 
                        className="mix-blend-multiply opacity-90"
                    />
                    {/* Orange segment (Top) */}
                    <path 
                        d="M20 75 C30 60, 70 60, 80 75 C85 85, 15 85, 20 75 Z" 
                        fill="url(#grad-orange)" 
                        className="mix-blend-multiply opacity-90"
                        transform="rotate(180 50 55)"
                    />
                    {/* Center hole */}
                    <circle cx="50" cy="55" r="10" fill="white" />
                </svg>
            </div>
            <div className="flex flex-col items-start leading-none">
                <span className={cn("font-sans font-medium text-[#000080] lowercase tracking-tight", currentSize.text)}>
                    torrent
                </span>
                <div className="w-full h-[1.5px] bg-[#000080] my-1 opacity-90"></div>
                <span className={cn("font-sans font-black text-[#000080] tracking-[0.25em] uppercase", currentSize.subtext)}>
                    PHARMA
                </span>
            </div>
        </div>
    )
}
