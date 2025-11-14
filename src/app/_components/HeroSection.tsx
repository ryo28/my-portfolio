import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";

export function HeroSection() {
	return (
		<section
			id="home"
			className="flex min-h-screen items-center justify-center scroll-smooth px-6 pt-20"
		>
			<div className="mx-auto max-w-4xl text-center">
				<div className="mb-8 animate-fade-in">
					<div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-br from-purple-400 to-pink-400">
						<Image
							src="/portfolio-icon.jpeg"
							alt="Profile Picture"
							width={128}
							height={128}
							className="h-full w-full rounded-full"
						/>
					</div>
					<h1 className="mb-4 bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text font-bold text-5xl text-transparent md:text-7xl">
						Wakki
					</h1>
					<p className="mb-8 text-2xl text-gray-300 md:text-3xl">
						未経験からのWebエンジニア
					</p>
					<p className="mx-auto mb-12 max-w-2xl text-gray-400 text-lg">
						独学でプログラミングを学習し、モダンなWeb技術を使った開発に挑戦しています。
						<br />
						ユーザーに寄り添ったサービス開発に貢献したいと考えています。
					</p>
				</div>
				<div className="mb-12 flex justify-center gap-6">
					<a
						href="https://github.com/ryo28"
						target="_blank"
						rel="noreferrer"
						className="rounded-full bg-white/10 p-3 transition-all hover:scale-110 hover:bg-white/20"
					>
						<LuGithub size={24} />
					</a>
					<a
						href="https://x.com/w_a59"
						target="_blank"
						rel="noreferrer"
						className="rounded-full bg-white/10 p-3 transition-all hover:scale-110 hover:bg-white/20"
					>
						<FaXTwitter size={24} />
					</a>
					<a
						href="mailto:wakki.engineer@gmail.com"
						className="rounded-full bg-white/10 p-3 transition-all hover:scale-110 hover:bg-white/20"
					>
						<CiMail size={24} />
					</a>
				</div>
				<div className="flex justify-center">
					<a href="#about" className="animate-bounce">
						<IoChevronDown size={32} className="text-purple-400" />
					</a>
				</div>
			</div>
		</section>
	);
}
