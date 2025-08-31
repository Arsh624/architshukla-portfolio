# Archit Shukla – Developer Portfolio

## Overview

This is a single-page developer portfolio that showcases my dual-specialization: **Software Engineering** and **Machine Learning Engineering**. It offers a clean, immersive interface built with modern web technologies and creative UI/UX patterns.

The portfolio includes animated transitions, a dual-resume viewer, project popups with GitHub/demo links, and a smooth user experience across devices.

---

## System Architecture

### Frontend Stack

- **Framework:** React 18 with TypeScript using Vite for fast builds and hot reloading  
- **Routing:** React Router DOM for seamless client-side navigation  
- **Styling:** Tailwind CSS with utility-first design, animations from `tailwindcss-animate`  

### UI Components

- Radix UI (headless components for accessibility and composability)  
- shadcn/ui for consistent and modern component design  

### 3D & Visual Effects

- Three.js & React Three Fiber for generative background visuals  
- React Drei for Three.js helpers  

### Icons

- Lucide React icons  

### Animation

- Framer Motion for subtle motion and transitions  

### State Management & Forms

- React Hook Form for form control  
- TanStack React Query for server state (if needed)  
- Zod for input validation  

---

## Component Architecture

- **Hero Section:** Animated intro with navigation links and a personal tech-oriented manifesto  
- **Navigation:** Smooth section-based routing with scroll triggers  
- **Projects Page:**  
  - Responsive project list with delayed animations  
  - Project details popup with live demo and GitHub links  
- **Resume Viewer:**  
  - Dual resume selector ("Software Developer" & "Machine Learning Engineer")  
  - PDF viewer with download links  
- **Contact & About:** Light sections with links and overview text  

---

## Animation & UX

- Staggered animations for headings, text, and navigation  
- Smooth transitions between sections and resume personas  
- Generative particle background using Three.js for a subtle interactive visual layer  
- Responsive layout for all screen sizes  

---

## Development & Tooling

- **Dev Server:** Vite with React Fast Refresh  
- **Linting & Formatting:**  
  - ESLint for code quality  
  - TypeScript ESLint rules  
- **Hot Reload:** Instant updates during development  
- **Type Safety:** Strict TypeScript settings  
- **Folder Structure:** Modular separation of sections and components  

---

## External Dependencies

### Core Libraries

- `react`, `react-dom`, `react-router-dom`  
- `vite`, `typescript`, `esbuild`  

### Styling & Design

- `tailwindcss`, `postcss`, `clsx`, `class-variance-authority`  
- `@radix-ui/react-*` components  
- `lucide-react` for icons  

### Animation

- `framer-motion`  
- `tailwindcss-animate`  

### Forms & Validation

- `react-hook-form`  
- `zod`  
- `@hookform/resolvers`  

### Graphics

- `three`  
- `@react-three/fiber`  
- `@react-three/drei`  
