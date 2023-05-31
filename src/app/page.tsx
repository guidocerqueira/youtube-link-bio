import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

export default function Home() {
  return (
    <main className="w-full flex justify-center">
      <div className="w-full flex flex-col gap-4 md:max-w-xl mx-4 py-8 bg-white my-8 rounded-xl px-4">
        <div className="flex items-center">
          <Image
            src="https://github.com/guidocerqueira.png"
            width={150}
            height={150}
            alt="Imagem do perfil de Guido Cerqueira"
            className="rounded-full"
          />

          <div className="ml-4">
            <h1 className="text-2xl text-purple-800">Olá, eu sou Guido Cerqueira!</h1>
            <p className="italic text-purple-800">Desenvolvedor de software e professor de programação.</p>
          </div>
        </div>
        <div className="flex w-full justify-around py-8 border-b mb-4">
          <a 
            href="https://youtube.com/@guidocerqueira" 
            className="p-4 bg-purple-500 rounded-full text-white"
          >
            <FaYoutube />
          </a>

          <a 
            href="https://linkedin.com/in/guidocerqueira" 
            className="p-4 bg-purple-500 rounded-full text-white"
          >
            <FaLinkedin />
          </a>

          <a 
            href="https://github.com/guidocerqueira" 
            className="p-4 bg-purple-500 rounded-full text-white"
          >
            <FaGithub />
          </a>

          <a 
            href="https://instagram.com/guidocerqueira" 
            className="p-4 bg-purple-500 rounded-full text-white"
          >
            <FaInstagram />
          </a>
        </div>

        <a 
          href="https://youtu.be/eMELJrBvndI"
          className="w-full rounded-full border-2 border-purple-800 text-purple-800 p-4 flex items-center justify-between"
        >
          Deploy Backend na Cyclic
          <FaExternalLinkAlt />
        </a>

        <a 
          href="https://youtu.be/eMELJrBvndI"
          className="w-full rounded-full border-2 border-purple-800 text-purple-800 p-4 flex items-center justify-between"
        >
          Deploy Backend na Cyclic
          <FaExternalLinkAlt />
        </a>

        <a 
          href="https://youtu.be/eMELJrBvndI"
          className="w-full rounded-full border-2 border-purple-800 text-purple-800 p-4 flex items-center justify-between"
        >
          Deploy Backend na Cyclic
          <FaExternalLinkAlt />
        </a>

        <a 
          href="https://youtu.be/eMELJrBvndI"
          className="w-full rounded-full border-2 border-purple-800 text-purple-800 p-4 flex items-center justify-between"
        >
          Deploy Backend na Cyclic
          <FaExternalLinkAlt />
        </a>

        <a 
          href="https://youtu.be/eMELJrBvndI"
          className="w-full rounded-full border-2 border-purple-800 text-purple-800 p-4 flex items-center justify-between"
        >
          Deploy Backend na Cyclic
          <FaExternalLinkAlt />
        </a>

        <span className="text-purple-800 min-full text-center mt-4">Criado por <a href="https://instagram.com/guidocerqueira" className="text-purple-400">Guido Cerqueira</a></span>
      </div>
    </main>
  )
}
