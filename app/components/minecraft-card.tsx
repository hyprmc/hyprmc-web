import React from 'react'
import { cn } from "@/lib/utils"

interface MinecraftCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dirt' | 'stone' | 'wood' | 'grass'
}

export function MinecraftCard({ className, variant = 'stone', children, ...props }: MinecraftCardProps) {
  const baseStyles = "relative overflow-hidden p-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
  
  const variantStyles = {
    dirt: "bg-[#866043] border-4 border-[#5C4326]",
    stone: "bg-[#828282] border-4 border-[#5A5A5A]",
    wood: "bg-[#9C6F4A] border-4 border-[#6E4C34]",
    grass: "bg-[#5D9140] border-4 border-[#3F6223]",
  }

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 bg-black opacity-10"></div>
    </div>
  )
}

