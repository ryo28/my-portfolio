import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { RiUser3Line } from "react-icons/ri";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 scroll-smooth"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            <RiUser3Line size={64} className="text-white" />
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
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110"
          >
            <LuGithub size={24} />
          </a>
          <a
            href="https://x.com/w_a59"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="mailto:wakki.engineer@gmail.com"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110"
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
