export function Nav() {
	return (
		<nav className={"fixed top-0 w-full z-50 transition-all duration-300"}>
			<div className="max-w-6xl mx-auto px-6 py-4">
				<div className="flex justify-between items-center">
					<h1 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						wakkiPortfolio
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
	);
}
