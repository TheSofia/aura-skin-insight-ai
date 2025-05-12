
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
				ring: 'hsl(var(--ring))',
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
				aurascan: {
					'coral': '#ea384c',     // Refined orange-red
					'light-coral': '#ff6b81', // Lighter variation
					'deep-coral': '#c9303f',  // Deeper variation
					'white': '#FFFFFF',     // Pure white
					'off-white': '#F9F9FB', // Very pale cool grey
					'light-grey': '#F5F5F7', // Light grey for subtle contrasts
					'medium-grey': '#8E9196', // Medium grey for text
					'dark-grey': '#444850',  // Dark grey for important text
					'cyan': '#3DD1E7',      // Luminous cyan for accents
					'teal': '#0ED4B8',      // Teal for dynamic accents
					'violet': '#A78BFA',    // Soft luminous violet
					'blue': '#3E64FF',      // Clean blue
				},
				glass: {
					light: 'rgba(255, 255, 255, 0.7)',
					white: 'rgba(255, 255, 255, 0.9)',
					coral: 'rgba(234, 56, 76, 0.1)',
					cyan: 'rgba(61, 209, 231, 0.1)',
					teal: 'rgba(14, 212, 184, 0.1)',
					violet: 'rgba(167, 139, 250, 0.15)',
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
					'0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(234, 56, 76, 0.5)' },
					'50%': { opacity: '0.8', boxShadow: '0 0 35px rgba(234, 56, 76, 0.7)' }
				},
				'glow-cyan': {
					'0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(61, 209, 231, 0.5)' },
					'50%': { opacity: '0.8', boxShadow: '0 0 35px rgba(61, 209, 231, 0.7)' }
				},
				'glow-teal': {
					'0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(14, 212, 184, 0.5)' },
					'50%': { opacity: '0.8', boxShadow: '0 0 35px rgba(14, 212, 184, 0.7)' }
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
				'glow-cyan': 'glow-cyan 2s ease-in-out infinite',
				'glow-teal': 'glow-teal 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 15s linear infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'pulse-dot': 'pulse-dot 2s infinite ease-in-out',
				'circular-motion': 'circular-motion 6s infinite ease-in-out',
				'fluid-motion': 'fluid-motion 8s ease-in-out infinite',
				'morph': 'morph 12s ease-in-out infinite'
			},
			fontFamily: {
				'sans': ['"Inter"', 'sans-serif'],
				'space': ['"Space Grotesk"', 'sans-serif'],
				'clash': ['"Clash Display"', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-coral': 'linear-gradient(225deg, #ff6b81 0%, #ea384c 100%)',
				'gradient-cyan': 'linear-gradient(225deg, #5EE7F9 0%, #3DD1E7 100%)',
				'gradient-teal': 'linear-gradient(225deg, #3AEAD1 0%, #0ED4B8 100%)',
				'gradient-violet': 'linear-gradient(225deg, #C4B5FD 0%, #A78BFA 100%)',
				'gradient-light': 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F7 100%)',
				'shimmer-coral': 'linear-gradient(90deg, transparent, rgba(234,56,76,0.1), transparent)',
				'shimmer-cyan': 'linear-gradient(90deg, transparent, rgba(61,209,231,0.1), transparent)',
				'shimmer-teal': 'linear-gradient(90deg, transparent, rgba(14,212,184,0.1), transparent)',
				'shimmer-violet': 'linear-gradient(90deg, transparent, rgba(167,139,250,0.1), transparent)',
				'glass-effect': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)',
			},
			boxShadow: {
				'coral': '0 0 20px rgba(234, 56, 76, 0.4), 0 0 40px rgba(234, 56, 76, 0.2)',
				'cyan': '0 0 20px rgba(61, 209, 231, 0.4), 0 0 40px rgba(61, 209, 231, 0.2)',
				'teal': '0 0 20px rgba(14, 212, 184, 0.4), 0 0 40px rgba(14, 212, 184, 0.2)',
				'violet': '0 0 20px rgba(167, 139, 250, 0.4), 0 0 40px rgba(167, 139, 250, 0.2)',
				'light': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
				'inner-glow': 'inset 0 0 10px rgba(234, 56, 76, 0.2)',
				'inner-glow-cyan': 'inset 0 0 10px rgba(61, 209, 231, 0.2)',
				'inner-glow-teal': 'inset 0 0 10px rgba(14, 212, 184, 0.2)',
				'inner-glow-violet': 'inset 0 0 10px rgba(167, 139, 250, 0.2)',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(8px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
