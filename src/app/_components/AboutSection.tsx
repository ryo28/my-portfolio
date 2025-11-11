import { FiBriefcase } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { githubCommits, learningTime, production } from "./constants/about";

export function AboutSection() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: ページ内移動のため静的IDが必要
		<section
			id="about"
			className="flex min-h-screen items-center justify-center scroll-smooth px-6 py-20"
		>
			<div className="mx-auto max-w-4xl">
				<h2 className="mb-12 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-center font-bold text-4xl text-transparent">
					自己紹介
				</h2>
				<div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
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
						<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
							<div className="rounded-xl bg-white/5 p-6 text-center">
								<IoCode size={32} className="mx-auto mb-3 text-purple-400" />
								<h3 className="mb-2 font-semibold">学習時間</h3>
								<p className="font-bold text-2xl text-purple-400">
									{learningTime}+
								</p>
								<p className="text-gray-400 text-sm">時間</p>
							</div>
							<div className="rounded-xl bg-white/5 p-6 text-center">
								<FiBriefcase size={32} className="mx-auto mb-3 text-pink-400" />
								<h3 className="mb-2 font-semibold">制作物</h3>
								<p className="font-bold text-2xl text-pink-400">
									{production}+
								</p>
								<p className="text-gray-400 text-sm">プロジェクト</p>
							</div>
							<div className="rounded-xl bg-white/5 p-6 text-center">
								<LuGithub size={32} className="mx-auto mb-3 text-purple-400" />
								<h3 className="mb-2 font-semibold">GitHub</h3>
								<p className="font-bold text-2xl text-purple-400">
									{githubCommits}+
								</p>
								<p className="text-gray-400 text-sm">コミット</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
