# Amazon Cameroon | Premium WhatsApp Advertising Platform

A modern, high-conversion landing page designed for **Amazon Cameroon**, an elite advertising network that bridges the gap between local vendors and thousands of digital shoppers via specialized WhatsApp channels.

## 🚀 Key Features

- **Elite UI/UX**: Inspired by global brands like Nike, featuring a minimalist Black & Green (#25D366) color palette, bold typography, and premium spacing.
- **AI Ad Suggestion**: Integrated with **Google Gemini API** to automatically generate persuasive, bilingual (English/French) ad copy for business owners.
- **WhatsApp Integration**: High-conversion forms that redirect users directly to a professional WhatsApp business thread (+250798971739) with pre-filled business data.
- **Modern Animations**: Smooth scroll reveals and interactive elements powered by **Framer Motion**.
- **Fully Responsive**: Optimized for every screen size, from mobile devices used by street vendors to desktop monitors used by agency owners.
- **Performance Focused**: Built with Vite and ES6 modules for ultra-fast loading times.

## 🛠 Tech Stack

- **Framework**: React 19 (JSX)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **AI Integration**: @google/genai (Gemini 3 Flash Preview)
- **Build Tool**: Vite

## 🎨 Brand Identity

The project adheres to a strict two-color visual system:
- **Primary**: `#25D366` (WhatsApp Green) – Used for highlights, CTAs, and accents.
- **Secondary**: `#000000` (Pitch Black) – Used for high-impact typography and backgrounds.
- **Typography**: Plus Jakarta Sans (Main) & Space Grotesk (Display).

## 📥 Setup Instructions

1. **Environment Variable**: Ensure you have access to a Google Gemini API Key. The application expects this in `process.env.API_KEY`.
2. **Local Development**:
   - Clone the repository.
   - Run your development server using Vite.
   - Ensure the `importmap` in `index.html` is correctly pointing to the ESM versions of the libraries.

## 📂 Project Structure

- `App.tsx`: The main orchestration component.
- `components/`: Modular UI sections (Hero, Stats, ValueProp, FeatureCards, Highlight, AdForm, Footer).
- `index.html`: Main entry point with custom font configurations and import maps.


