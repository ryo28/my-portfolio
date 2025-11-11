export function Nav() {
	return (
		<nav className={"fixed top-0 z-50 w-full transition-all duration-300"}>
			<div className="mx-auto max-w-6xl px-6 py-4">
				<div className="flex items-center justify-between">
					<h1 className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text font-bold text-2xl text-transparent">
						wakkiPortfolio
					</h1>
					<div className="flex gap-6">
						{["home", "about", "skills", "projects", "contact"].map(
							(section) => (
								<a
									key={section}
									href={`#${section}`}
									className={
										"capitalize transition-colors hover:text-purple-400"
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
	);
}
