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

				// DermaAgent Refined Color System
				dermaagent: {
					// Base Colors - Refined Minimal Palette
					'soft-paper-white': '#F9F8F7',
					'warm-bone': '#F4F1ED',
					'light-graphite-lines': '#D3D3D3',
					
					// Primary Text & UI - High Contrast
					'graphite-black': '#1A1A1A',
					'charcoal-gray': '#333333',
					'light-gray-text': '#999999',
					
					// Accent Colors - Minimal & Muted
					'muted-dusty-beige': '#D2BBA2',
					'soft-olive': '#A3A99E',
					'cool-gray-blue': '#AAB6C9',
				},

				// Glass effects
				glass: {
					light: 'rgba(255, 255, 255, 0.7)',
					white: 'rgba(255, 255, 255, 0.9)',
					dark: 'rgba(34, 31, 38, 0.05)',
					accent: 'rgba(163, 169, 158, 0.08)',
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
				},
				'typewriter-blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'cellular-drift': 'cellular-drift 30s infinite ease-in-out',
				'cellular-drift-minimal': 'cellular-drift-minimal 40s infinite ease-in-out',
				'cellular-morph': 'cellular-morph 50s infinite ease-in-out',
			},
			fontFamily: {
				'sans': ['"Inter"', 'sans-serif'],
				
				// DermaAgent Typography System - Final
				'dermaagent-logo': ['"DermaAgent Logo"', '"Playfair Display"', 'serif'],
				'dermaagent-typewriter': ['"DermaAgent Typewriter"', '"IBM Plex Mono"', 'monospace'],
				'dermaagent-ui': ['"DermaAgent UI"', '"Aeonik"', '"Inter"', 'system-ui', 'sans-serif'],
				'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
				'aeonik': ['"Aeonik"', 'sans-serif'],
				'playfair': ['"Playfair Display"', 'serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				
				// DermaAgent Refined Gradients
				'dermaagent-notebook': 'var(--dermaagent-notebook-gradient)',
				'dermaagent-beige': 'var(--dermaagent-beige-gradient)',
				'dermaagent-interactive': 'var(--dermaagent-interactive-gradient)',
			},
			boxShadow: {
				'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
				
				// DermaAgent Refined Shadows
				'dermaagent-minimal': '0 2px 8px rgba(26, 26, 26, 0.03)',
				'dermaagent-soft': '0 1px 4px rgba(26, 26, 26, 0.04)',
				'dermaagent-interactive': '0 0 12px rgba(170, 182, 201, 0.15)',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(8px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
