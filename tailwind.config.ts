import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: {
					DEFAULT: 'hsl(var(--ring))',
					'violet-titanium': '#7E69AB',
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},

				// DermaAgent Brand Colors
				dermaagent: {
					// Primary Backgrounds
					'bone-white': '#FDFDFD',
					'warm-off-white': '#FEFCFA',
					'soft-sand': '#FAF8F5',
					'warm-gray': '#F5F3F0',
					'textured-paper': '#F2F0ED',
					
					// Primary Text & UI
					'deep-ink-black': '#1A1A1A',
					'graphite-gray': '#2C2C2C',
					'medium-gray': '#6B6B6B',
					'light-gray': '#A8A8A8',
					
					// Accent Colors
					'amber-glow': '#D4AF37',
					'amber-glow-light': '#E8C35F',
					'amber-glow-dark': '#B8941F',
					'deep-emerald': '#2F5233',
					'deep-emerald-light': '#4A6B4E',
					'deep-emerald-dark': '#1E3621',
					'sapphire-blue': '#1E3A5F',
					'sapphire-blue-light': '#2C5282',
					'sapphire-blue-dark': '#153047',
				},

				// Legacy compatibility
				'burnt-orange': '#C2410C',
				'deep-purple': '#6E59A5',
				'dark-purple': '#210B2C',
				'violet-titanium': '#7E69AB',
				beautyagent: {
					// ... keep existing code (all existing beautyagent colors)
					'white': '#FFFFFF',
					'off-white': '#F8F8F9',
					'light-grey': '#F1F1F3',
					'medium-grey': '#9F9EA1',
					'dark-grey': '#403E43',
					'deeper-grey': '#221F26',
					'ultraviolet': '#33184A',
					'ultraviolet-light': '#492266',
					'rose-quartz': '#D6A9B8',
					'rose-quartz-light': '#EACBD3',
					'cosmic-peach': '#FFDAB9',
					'cosmic-peach-light': '#FFE6D1',
					'breathable-black': '#121014',
					'breathable-black-light': '#1E1B22',
					'plasma-white': '#FFFAF0',
					'plasma-white-light': '#FFFCF7',
					'platinum-sheen': '#E5E4E2',
					'amber-shimmer': '#FFBF65',
					'accent': '#E05F14',
					'dark-orange': '#C94C10',
					'deep-blue': '#2A4365',
					'muted-violet': '#7E69AB',
					'deep-purple': '#5D4A8C',
					'dark-purple': '#34184A',
					'glass-white': 'rgba(255, 255, 255, 0.95)',
					'glass-light': 'rgba(255, 255, 255, 0.7)',
					'glass-accent': 'rgba(224, 95, 20, 0.08)',
					'glass-cosmic': 'rgba(255, 218, 185, 0.08)',
					'glass-ultraviolet': 'rgba(51, 24, 74, 0.1)',
				},
				glass: {
					light: 'rgba(255, 255, 255, 0.7)',
					white: 'rgba(255, 255, 255, 0.9)',
					dark: 'rgba(34, 31, 38, 0.05)',
					accent: 'rgba(249, 115, 22, 0.08)',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'scanning': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' }
				},
				'glow': {
					'0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)' },
					'50%': { opacity: '0.8', boxShadow: '0 0 35px rgba(249, 115, 22, 0.4)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'pulse-dot': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.2)', opacity: '0.8' }
				},
				'circular-motion': {
					'0%': { transform: 'translateY(0) translateX(0)' },
					'25%': { transform: 'translateY(-2px) translateX(2px)' },
					'50%': { transform: 'translateY(0) translateX(3px)' },
					'75%': { transform: 'translateY(2px) translateX(2px)' },
					'100%': { transform: 'translateY(0) translateX(0)' }
				},
				'fluid-motion': {
					'0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
					'50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
					'100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }
				},
				'morph': {
					'0%': { 
						borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
						transform: 'rotate(0deg)'
					},
					'33%': { 
						borderRadius: '40% 60% 50% 50%/30% 60% 40% 70%',
						transform: 'rotate(120deg)'
					},
					'66%': { 
						borderRadius: '30% 70% 70% 30%/50% 40% 60% 50%',
						transform: 'rotate(240deg)'
					},
					'100%': { 
						borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
						transform: 'rotate(360deg)'
					}
				},
				'pulse-subtle': {
					'0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
					'50%': { transform: 'scale(1.02)', opacity: '1' }
				},
				'float-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-2px)' }
				},
				'cellular-drift': {
					'0%': { transform: 'translateX(0) translateY(0) scale(1)' },
					'25%': { transform: 'translateX(2px) translateY(-2px) scale(1.02)' },
					'50%': { transform: 'translateX(3px) translateY(1px) scale(1.01)' },
					'75%': { transform: 'translateX(0) translateY(2px) scale(0.99)' },
					'100%': { transform: 'translateX(0) translateY(0) scale(1)' }
				},
				'cellular-core-pulse': {
					'0%, 100%': { transform: 'scale(1)', opacity: '0.95' },
					'50%': { transform: 'scale(1.08)', opacity: '0.9', filter: 'brightness(1.03)' }
				},
				'cellular-ring-drift': {
					'0%': { transform: 'rotate(0deg) translate(0px, 0px)' },
					'33%': { transform: 'rotate(2deg) translate(1px, -1px)' },
					'66%': { transform: 'rotate(-1deg) translate(2px, 1px)' },
					'100%': { transform: 'rotate(0deg) translate(0px, 0px)' }
				},
				'cellular-particle-float': {
					'0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0.7' },
					'33%': { transform: 'translateY(-3px) translateX(2px) scale(1.1)', opacity: '0.8' },
					'66%': { transform: 'translateY(-1px) translateX(3px) scale(1.05)', opacity: '0.75' },
					'100%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0.7' }
				},
				'orbital-motion': {
					'0%': { transform: 'rotate(0deg) translateX(1px) rotate(0deg)' },
					'33%': { transform: 'rotate(120deg) translateX(1px) rotate(-120deg)' },
					'66%': { transform: 'rotate(240deg) translateX(1px) rotate(-240deg)' },
					'100%': { transform: 'rotate(360deg) translateX(1px) rotate(-360deg)' }
				},
				'orbital-motion-reverse': {
					'0%': { transform: 'rotate(360deg) translateX(1px) rotate(-360deg)' },
					'33%': { transform: 'rotate(240deg) translateX(1px) rotate(-240deg)' },
					'66%': { transform: 'rotate(120deg) translateX(1px) rotate(-120deg)' },
					'100%': { transform: 'rotate(0deg) translateX(1px) rotate(0deg)' }
				},
				'orbital-float': {
					'0%': { transform: 'rotate(0deg) translateX(0px) scale(1)', opacity: '0.7' },
					'25%': { transform: 'rotate(90deg) translateX(3px) scale(1.05)', opacity: '0.8' },
					'50%': { transform: 'rotate(180deg) translateX(0px) scale(1.02)', opacity: '0.75' },
					'75%': { transform: 'rotate(270deg) translateX(2px) scale(0.98)', opacity: '0.7' },
					'100%': { transform: 'rotate(360deg) translateX(0px) scale(1)', opacity: '0.7' }
				},
				'pulse-cellular': {
					'0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
					'50%': { transform: 'scale(1.15)', opacity: '0.5' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'scanning': 'scanning 1.5s ease-in-out infinite alternate',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 15s linear infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'pulse-dot': 'pulse-dot 2s infinite ease-in-out',
				'circular-motion': 'circular-motion 6s infinite ease-in-out',
				'fluid-motion': 'fluid-motion 8s ease-in-out infinite',
				'morph': 'morph 12s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'float-subtle': 'float-subtle 4s ease-in-out infinite',
				'cellular-drift': 'cellular-drift 8s infinite ease-in-out',
				'cellular-core-pulse': 'cellular-core-pulse 7.5s infinite cubic-bezier(0.45, 0, 0.55, 1)',
				'cellular-ring-drift': 'cellular-ring-drift 12s infinite ease-in-out',
				'cellular-particle-float': 'cellular-particle-float 10s infinite ease-in-out',
				'orbital-motion': 'orbital-motion 20s infinite cubic-bezier(0.4, 0, 0.6, 1)',
				'orbital-motion-reverse': 'orbital-motion-reverse 24s infinite cubic-bezier(0.4, 0, 0.6, 1)',
				'orbital-float': 'orbital-float 18s infinite ease-in-out',
				'pulse-cellular': 'pulse-cellular 8s infinite ease-in-out',
			},
			fontFamily: {
				'sans': ['"Inter"', 'sans-serif'],
				'space': ['"Space Grotesk"', 'sans-serif'],
				'clash': ['"Clash Display"', 'sans-serif'],
				'kode': ['"Kode Mono"', 'monospace'],
				'satoshi': ['"Satoshi"', 'sans-serif'],
				'general': ['"General Sans"', 'sans-serif'],
				
				// DermaAgent Typography System
				'dermaagent-typewriter': ['"DermaAgent Typewriter"', '"JetBrains Mono"', '"Source Code Pro"', 'monospace'],
				'dermaagent-ui': ['"DermaAgent UI"', '"Outfit"', '"Inter"', 'system-ui', 'sans-serif'],
				'jetbrains': ['"JetBrains Mono"', 'monospace'],
				'outfit': ['"Outfit"', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-light': 'linear-gradient(135deg, #FFFFFF 0%, #F6F6F7 100%)',
				'gradient-accent': 'linear-gradient(225deg, rgba(249, 115, 22, 0.9) 0%, rgba(249, 115, 22, 1) 100%)',
				'shimmer-accent': 'linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.08), transparent)',
				'glass-effect': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)',
				'gradient-warm': 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(232, 76, 18, 0.1) 100%)',
				'gradient-cool': 'linear-gradient(135deg, rgba(22, 163, 74, 0.05) 0%, rgba(249, 115, 22, 0.05) 100%)',
				
				// DermaAgent Gradients
				'dermaagent-notebook': 'var(--dermaagent-notebook-gradient)',
				'dermaagent-amber': 'var(--dermaagent-amber-gradient)',
				'dermaagent-emerald': 'var(--dermaagent-emerald-gradient)',
				'dermaagent-sapphire': 'var(--dermaagent-sapphire-gradient)',
			},
			boxShadow: {
				'accent': '0 0 20px rgba(249, 115, 22, 0.2), 0 0 40px rgba(249, 115, 22, 0.1)',
				'light': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
				'inner-glow': 'inset 0 0 10px rgba(249, 115, 22, 0.1)',
				'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
				'green-glow': '0 0 15px rgba(22, 163, 74, 0.2)',
				'purple-glow': '0 0 20px rgba(110, 89, 165, 0.3), 0 0 40px rgba(110, 89, 165, 0.1)',
				'dark-purple-glow': '0 0 20px rgba(33, 11, 44, 0.35), 0 0 40px rgba(33, 11, 44, 0.15)',
				
				// DermaAgent Shadows
				'dermaagent-amber': '0 0 20px rgba(212, 175, 55, 0.2), 0 0 40px rgba(212, 175, 55, 0.1)',
				'dermaagent-emerald': '0 0 15px rgba(47, 82, 51, 0.2)',
				'dermaagent-sapphire': '0 0 20px rgba(30, 58, 95, 0.2)',
				'dermaagent-glass': '0 8px 32px rgba(0, 0, 0, 0.06), 0 0 20px rgba(212, 175, 55, 0.1)',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(8px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
