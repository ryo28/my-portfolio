import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export function ContactSection() {
  return (
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
              <CiMail size={24} />
              <span className="text-lg font-semibold">
                your.email@example.com
              </span>
            </a>
            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/ryo28"
                className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-110"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="#"
                className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-110"
              >
                <FaLinkedinIn size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
