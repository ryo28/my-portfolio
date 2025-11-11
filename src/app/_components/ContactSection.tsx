import { CiMail } from "react-icons/ci";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export function ContactSection() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: ページ内移動のため静的IDが必要
		<section
			id="contact"
			className="flex min-h-screen items-center justify-center scroll-smooth px-6 py-20"
		>
			<div className="mx-auto w-full max-w-2xl text-center">
				<h2 className="mb-12 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text font-bold text-4xl text-transparent">
					お問い合わせ
				</h2>
				<div className="rounded-2xl border border-white/10 bg-white/5 p-12 backdrop-blur-sm">
					<p className="mb-8 text-gray-300 text-lg">
						カジュアル面談や採用のご連絡、お気軽にご連絡ください。
					</p>
					<div className="space-y-6">
						<a
							href="mailto:wakki.engineer@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="flex items-center justify-center gap-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 p-4 transition-all hover:scale-105 hover:from-purple-600 hover:to-pink-600"
						>
							<CiMail size={24} />
							<span className="font-semibold text-lg">
								wakki.engineer@gmail.com
							</span>
						</a>
						<div className="flex justify-center gap-6">
							<a
								href="https://github.com/ryo28"
								target="_blank"
								rel="noreferrer"
								className="rounded-xl bg-white/10 p-4 transition-all hover:scale-110 hover:bg-white/20"
							>
								<FaGithub size={28} />
							</a>
							<a
								href="https://x.com/w_a59"
								target="_blank"
								rel="noreferrer"
								className="rounded-xl bg-white/10 p-4 transition-all hover:scale-110 hover:bg-white/20"
							>
								<FaXTwitter size={28} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
