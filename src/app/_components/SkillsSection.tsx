import { v4 as uuid } from "uuid";
import {
	techCss,
	techHtml,
	techJavascript,
	techNextjs,
	techReact,
	techReactNative,
	techTailwindcss,
	techTypescript,
} from "./constants/techs";

export function SkillsSection() {
	const skills = [
		{
			id: uuid(),
			category: "フロントエンド",
			items: [
				techHtml,
				techCss,
				techJavascript,
				techTypescript,
				techReact,
				techNextjs,
			],
		},
		{
			id: uuid(),
			category: "スタイリング",
			items: [techTailwindcss, "Responsive Design"],
		},
		{
			id: uuid(),
			category: "ツール",
			items: ["Git", "GitHub", "VS Code", "npm", "pnpm"],
		},
		{
			id: uuid(),
			category: "学習中",
			items: [techNextjs, techTypescript, techReactNative],
		},
	];

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: ページ内移動のため静的IDが必要
		<section
			id="skills"
			className="flex min-h-screen items-center justify-center scroll-smooth px-6 py-20"
		>
			<div className="mx-auto w-full max-w-6xl">
				<h2 className="mb-12 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-center font-bold text-4xl text-transparent">
					スキル
				</h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{skills.map((skill) => (
						<div
							key={skill.id}
							className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-purple-400/50"
						>
							<h3 className="mb-6 font-semibold text-2xl text-purple-400">
								{skill.category}
							</h3>
							<div className="flex flex-wrap gap-3">
								{skill.items.map((item) => (
									<span
										key={item}
										className="rounded-full bg-white/10 px-4 py-2 text-sm transition-colors hover:bg-white/20"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
