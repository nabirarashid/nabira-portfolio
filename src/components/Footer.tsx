import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-50 max-w-[1440px] mx-auto px-8 py-12 align-center flex flex-col items-center gap-6">
        <div className="flex gap-4">
            <a 
            href="https://www.instagram.com/tech.with.nabira/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-pink-700">
                <FaInstagram className="w-8 h-8" />
            </a>
            <a 
            href="https://github.com/nabirarashid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-pink-700">
                <FaGithub className="w-8 h-8" />
            </a>
            <a 
            href="mailto:nabira.rashidm@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-pink-700">
                <FaEnvelope className="w-8 h-8" />
            </a>
        </div>
          
          <div className="text-zinc-500 text-base">
            nabira rashid 2025
          </div>
      </footer>
  )
}

export default Footer