import { LuGithub } from "react-icons/lu";
import { RiExternalLinkLine } from "react-icons/ri";
import { v4 as uuid } from "uuid";
import {
	techBiome,
	techEslint,
	techNextjs,
	techTailwindcss,
	techTypescript,
} from "./constants/techs";

export function ProjectsSection() {
	const projects = [
		{
			id: uuid(),
			title: "ちょいタス",
			description:
				"ちょっとしたことに使えるシンプルなタスク管理アプリケーション。タブ間同期、削除履歴から復元、カラー変更、ドラッグ&ドロップ機能などを実装。",
			tech: [techNextjs, techTypescript, techTailwindcss, techBiome],
			github: "https://github.com/ryo28/choitasu",
			demo: "https://choitasu.com",
		},
		{
			id: uuid(),
			title: "AUTHENTICATOR_CONVERTER",
			description:
				"Microsoft AuthenticatorからエクスポートしたCSVをBitwarden形式に合わせて変換するツール。",
			tech: [techNextjs, techTypescript, techTailwindcss, techEslint],
			github: "https://github.com/ryo28/convertpasscsv",
			demo: "https://ryo28.github.io/convertpasscsv/",
		},
		{
			id: uuid(),
			title: "穏やか温泉",
			description: "架空の温泉ホームページ",
			tech: [techNextjs, techTypescript, techTailwindcss, techEslint],
			github: "https://github.com/ryo28/odayaka-onsen-hp",
			demo: "https://odayaka-onsen-hp.vercel.app",
		},
	];

	return (
		<section
			id="projects"
			className="flex min-h-screen items-center justify-center px-6 py-20"
		>
			<div className="mx-auto w-full max-w-6xl">
				<h2 className="mb-12 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-center font-bold text-4xl text-transparent">
					制作物
				</h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<div
							key={project.id}
							className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:transform hover:border-purple-400/50"
						>
							<h3 className="mb-3 font-semibold text-xl">{project.title}</h3>
							<p className="mb-4 text-gray-400 text-sm leading-relaxed">
								{project.description}
							</p>
							<div className="mb-6 flex flex-wrap gap-2">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="rounded-full bg-purple-500/20 px-3 py-1 text-purple-300 text-xs"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-4">
								<a
									href={project.github}
									target="_blank"
									rel="noreferrer"
									className="flex items-center gap-2 text-sm transition-colors hover:text-purple-400"
								>
									<LuGithub size={16} />
									Code
								</a>
								<a
									href={project.demo}
									target="_blank"
									className="flex items-center gap-2 text-sm transition-colors hover:text-purple-400"
								>
									<RiExternalLinkLine size={16} />
									Demo
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
