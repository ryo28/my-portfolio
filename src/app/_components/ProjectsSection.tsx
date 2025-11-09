import { LuGithub } from "react-icons/lu";
import { RiExternalLinkLine } from "react-icons/ri";
import { v4 as uuid } from "uuid";
import {
  techBiome,
  techEslint,
  techHtml,
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
      tech: [techHtml, techTypescript, techTailwindcss, techBiome],
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
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          制作物
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
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
                  className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
                >
                  <LuGithub size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
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
