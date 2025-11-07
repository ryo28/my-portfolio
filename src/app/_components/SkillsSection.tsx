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
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20 scroll-smooth"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          スキル
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
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
