
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

				// DermoAgent Knowledge Dataset Aligned Color System
				dermoagent: {
					// Base Colors - Knowledge Dataset Palette
					'pure-white': '#FFFFFF',
					'pale-cool-grey': '#F8F9FA',
					'light-gray': '#E3E3E3',
					'pale-black': '#212529',
					'dark-cool-grey': '#495057',
					
					// Primary CTA & Warm Accent - Orange-Red Spectrum
					'primary-orange-red': '#A93226',
					'burnt-orange': '#D2691E',
					'warm-accent': '#CC5500',
					
					// Secondary Cool Accent - Deep Blue (NO GREEN)
					'deep-blue': '#2C3E73',
					'muted-blue': '#4A5D8A',
					'light-blue': 'rgba(44, 62, 115, 0.1)',
					
					// Alternative Secondary - Muted Violet
					'muted-violet': '#6B5B95',
					'light-violet': 'rgba(107, 91, 149, 0.1)',
					
					// Subtle Dynamic Elements - Cellular Textures
					'dark-white': '#ECECEC',
					'off-white': '#F5F5F5',
					'semi-transparent-white-light': 'rgba(255, 255, 255, 0.1)',
					'semi-transparent-white-medium': 'rgba(255, 255, 255, 0.3)',
					'semi-transparent-white-strong': 'rgba(255, 255, 255, 0.6)',
				},

				// Glass effects - Updated to use new color system
				glass: {
					light: 'rgba(255, 255, 255, 0.7)',
					white: 'rgba(255, 255, 255, 0.9)',
					dark: 'rgba(33, 37, 41, 0.05)',
					accent: 'rgba(44, 62, 115, 0.08)', // Deep blue instead of green
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
				
				// DermoAgent Typography System - Knowledge Dataset Aligned
				'dermoagent-logo': ['"IBM Plex Mono"', 'monospace'],
				'dermoagent-ui': ['"IBM Plex Mono"', 'monospace'],
				'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				
				// DermoAgent Refined Gradients - Knowledge Dataset Aligned
				'dermoagent-notebook': 'linear-gradient(to bottom, #FFFFFF, #F8F9FA)',
				'dermoagent-primary-cta': 'linear-gradient(135deg, #A93226, #CC5500)',
				'dermoagent-secondary-accent': 'linear-gradient(135deg, #2C3E73, #4A5D8A)',
			},
			boxShadow: {
				'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
				
				// DermoAgent Refined Shadows - Knowledge Dataset Aligned
				'dermaagent-minimal': '0 2px 8px rgba(33, 37, 41, 0.03)',
				'dermaagent-soft': '0 1px 4px rgba(33, 37, 41, 0.04)',
				'dermaagent-interactive': '0 0 12px rgba(44, 62, 115, 0.15)',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(8px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
