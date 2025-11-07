import { FiBriefcase } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { githubCommits, learningTime, production } from "./constants/about";

export function AboutSection() {
  return (
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
                <IoCode size={32} className="mx-auto mb-3 text-purple-400" />
                <h3 className="font-semibold mb-2">学習時間</h3>
                <p className="text-2xl font-bold text-purple-400">
                  {learningTime}+
                </p>
                <p className="text-sm text-gray-400">時間</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <FiBriefcase size={32} className="mx-auto mb-3 text-pink-400" />
                <h3 className="font-semibold mb-2">制作物</h3>
                <p className="text-2xl font-bold text-pink-400">
                  {production}+
                </p>
                <p className="text-sm text-gray-400">プロジェクト</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <LuGithub size={32} className="mx-auto mb-3 text-purple-400" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-2xl font-bold text-purple-400">
                  {githubCommits}+
                </p>
                <p className="text-sm text-gray-400">コミット</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
