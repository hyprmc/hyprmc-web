import React from 'react'
import { cn } from "@/lib/utils"

interface MinecraftButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dirt' | 'stone' | 'wood' | 'grass'
}

export function MinecraftButton({ className, variant = 'dirt', ...props }: MinecraftButtonProps) {
  const baseStyles = "relative px-4 py-2 font-bold text-white text-shadow uppercase transition-transform duration-100 ease-in-out transform hover:translate-y-[2px] active:translate-y-[4px] focus:outline-none minecraft-font"
  
  const variantStyles = {
    dirt: "bg-[#866043] border-b-4 border-[#5C4326] hover:bg-[#9c7a5a] active:border-b-2",
    stone: "bg-[#828282] border-b-4 border-[#5A5A5A] hover:bg-[#9a9a9a] active:border-b-2",
    wood: "bg-[#9C6F4A] border-b-4 border-[#6E4C34] hover:bg-[#b48a5f] active:border-b-2",
    grass: "bg-[#5D9140] border-b-4 border-[#3F6223] hover:bg-[#6eb34e] active:border-b-2",
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      <span className="relative z-10">{props.children}</span>
      <span className="absolute inset-0 bg-black opacity-10"></span>
    </button>
  )
}

