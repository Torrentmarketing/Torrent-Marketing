import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({ className, size = 'md' }: LogoProps) => {
    return (
        <img 
            src="/logo2.png" 
            alt="Torrent Marketing Logo" 
            className={cn("object-contain", size === 'sm' ? 'max-h-8' : size === 'md' ? 'max-h-12' : 'max-h-20', className)} 
        />
    )
}
