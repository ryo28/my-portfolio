"use client";

import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { Nav } from "./Nav";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";

export function PortfolioPage() {
	return (
		<div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
			<Nav />
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
			<Footer />
		</div>
	);
}
