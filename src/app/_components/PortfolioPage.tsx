"use client";

import {
  Briefcase,
  ChevronDown,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  User,
} from "lucide-react";
import { v4 as uuid } from "uuid";

const TECHS = {
  techHtml: "HTML",
  techCss: "CSS",
  techJavascript: "JavaScript",
  techReact: "React",
  techNextjs: "Next.js",
  techTypescript: "TypeScript",
  techTailwindcss: "Tailwind CSS",
  techBiome: "Biome",
};

const {
  techHtml,
  techCss,
  techJavascript,
  techReact,
  techNextjs,
  techTypescript,
  techTailwindcss,
  techBiome,
} = TECHS;

export default function PortfolioPage() {
  const projects = [
    {
      id: uuid(),
      title: "ちょいタス",
      description:
        "ちょっとしたことに使えるシンプルなタスク管理アプリケーション。タブ間同期、削除履歴から復元、カラー変更、ドラッグ&ドロップ機能などを実装。",
      tech: [techHtml, techTypescript, techTailwindcss, techBiome],
      github: "#",
      demo: "choitasu.com",
    },
    {
      id: uuid(),
      title: "AUTHENTICATOR_CONVERTER",
      description:
        "Microsoft AuthenticatorからエクスポートしたCSVをBitwarden形式に合わせて変換するツール。",
      tech: [techNextjs, techTypescript, techTailwindcss],
      github: "#",
      demo: "ryo28.github.io/convertpasscsv/",
    },
    {
      id: uuid(),
      title: "天気予報アプリ",
      description:
        "OpenWeather APIを使用した天気予報アプリ。位置情報から現在地の天気を取得。",
      tech: [techJavascript, techHtml, techCss, "API"],
      github: "#",
      demo: "#",
    },
  ];

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
      items: ["Git", "GitHub", "VS Code", "npm", techBiome],
    },
    {
      id: uuid(),
      category: "学習中",
      items: ["Node.js", "Express", "PostgreSQL"],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={"fixed top-0 w-full z-50 transition-all duration-300"}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="flex gap-6">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className={
                      "capitalize hover:text-purple-400 transition-colors"
                    }
                  >
                    {section === "home"
                      ? "ホーム"
                      : section === "about"
                        ? "自己紹介"
                        : section === "skills"
                          ? "スキル"
                          : section === "projects"
                            ? "制作物"
                            : "お問い合わせ"}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 scroll-smooth"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center">
              <User size={64} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Wakki
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              未経験からのWebエンジニア
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              独学でプログラミングを学習し、モダンなWeb技術を使った開発に挑戦しています。
              <br />
              ユーザーに寄り添ったサービス開発に貢献したいと考えています。
            </p>
          </div>
          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://github.com/ryo28"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="flex justify-center">
            <a href="#about" className="animate-bounce">
              <ChevronDown size={32} className="text-purple-400" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-20 scroll-smooth"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            自己紹介
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                テクノロジーで課題を解決することに興味を持ち、プログラミング学習を開始しました。
              </p>
              <p className="text-lg leading-relaxed">
                Udemyや技術書、オンラインコミュニティなどでReact、TypeScript、Next.jsなどのモダンな技術スタックを習得しました。
              </p>
              <p className="text-lg leading-relaxed">
                現在は個人開発でポートフォリオを充実させながら、実務経験を積むことができる環境を探しています。チームで協力しながら成長できる企業で、長期的にキャリアを築いていきたいと考えています。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <Code size={32} className="mx-auto mb-3 text-purple-400" />
                  <h3 className="font-semibold mb-2">学習時間</h3>
                  <p className="text-2xl font-bold text-purple-400">2000+</p>
                  <p className="text-sm text-gray-400">時間</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <Briefcase size={32} className="mx-auto mb-3 text-pink-400" />
                  <h3 className="font-semibold mb-2">制作物</h3>
                  <p className="text-2xl font-bold text-pink-400">10+</p>
                  <p className="text-sm text-gray-400">プロジェクト</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <Github size={32} className="mx-auto mb-3 text-purple-400" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-2xl font-bold text-purple-400">648+</p>
                  <p className="text-sm text-gray-400">コミット</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
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
                    className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 py-20 scroll-smooth"
      >
        <div className="max-w-2xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-12 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            お問い合わせ
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <p className="text-lg text-gray-300 mb-8">
              カジュアル面談や採用のご連絡、お気軽にご連絡ください。
            </p>
            <div className="space-y-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center justify-center gap-3 p-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-105"
              >
                <Mail size={24} />
                <span className="text-lg font-semibold">
                  your.email@example.com
                </span>
              </a>
              <div className="flex gap-6 justify-center">
                <a
                  href="https://github.com/ryo28"
                  className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Github size={28} />
                </a>
                <a
                  href="#"
                  className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-110"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>&copy; 2025 Taro Yamada. All rights reserved.</p>
      </footer>
    </div>
  );
}
