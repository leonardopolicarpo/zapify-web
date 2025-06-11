'use client';

import React from 'react';
import { motion } from 'framer-motion';

import {
  BoltIcon,
  LockClosedIcon,
  DevicePhoneMobileIcon,
  BellIcon
} from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const features = [
  { name: 'Tempo real', description: 'Conversas ao vivo com atualizações instantâneas.', icon: BoltIcon },
  { name: 'Segurança', description: 'Seus dados e chats sempre protegidos.', icon: LockClosedIcon },
  { name: 'Multi-dispositivo', description: 'Acesse de qualquer lugar em qualquer aparelho.', icon: DevicePhoneMobileIcon },
  { name: 'Notificações', description: 'Receba notificações instantâneas de novas mensagens.', icon: BellIcon },
];

export default function Home() {
  return (
    // Adicionar classes para light mode light:bg-[#F7F9FC] light:text-[#1A1A1A]
    <div className="bg-[#0D1117] text-[#C9D1D9] min-h-screen overflow-x-hidden">

      <header className="container mx-auto px-6 py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-[#0D1117]/80">
        {/* Substituir 'Zapify' por logo real, componente <Image> */}
        <motion.div
          className="text-xl font-bold cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Zapify
        </motion.div>
        <motion.nav
          className="space-x-3 md:space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="/login"
            className="px-3 py-2 rounded hover:text-white transition-colors duration-200 text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.a>
          <motion.a
            href="/signup"
            className="bg-[#1F6FEB] text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base"
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(31, 111, 235, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Criar Conta
          </motion.a>
        </motion.nav>
      </header>

      <main>
        <section className="container mx-auto px-6 pt-24 pb-16 text-center flex flex-col items-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
            variants={slideInUp}
            initial="hidden" 
            animate="visible"
          >
            Conecte-se em tempo real
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Chat instantâneo, seguro e moderno. A comunicação que você precisa, onde você estiver.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="/login"
              className="bg-[#F7F9FC]/70 text-[#1A1A1A] px-6 py-3 rounded-lg font-medium hover:bg-[#F7F9FC] active:bg-[#F7F9FC] transition-all duration-300 w-full sm:w-auto cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Entrar
            </motion.a>
            <motion.a
              href="/signup"
              className="bg-[#1F6FEB] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors duration-300 shadow-lg shadow-[#1F6FEB]/30 hover:shadow-[#1F6FEB]/50 w-full sm:w-auto cursor-pointer"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 8px 20px rgba(31, 111, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Criar Conta
            </motion.a>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
          <div className="bg-[#161B22] w-72 h-[500px] rounded-2xl shadow-2xl p-4 border border-gray-700 flex items-center justify-center text-gray-500 italic">
            (Mockup SVG)
          </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">
              Mensagem em tempo real com pessoas do mundo todo
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Converse instantaneamente com amigos, familiares e colegas, não importa onde eles estejam, com uma interface fluida e rápida.
            </p>
            {/* <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer px-5 py-3 rounded-lg text-sm inline-flex items-center justify-center">App Store Button</div>
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer px-5 py-3 rounded-lg text-sm inline-flex items-center justify-center">Play Store Button</div>
            </div> */}
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="bg-[#161B22] p-6 rounded-xl shadow-lg text-center flex flex-col items-center border border-transparent hover:border-[#1F6FEB]/50 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <feature.icon className="h-10 w-10 text-[#1F6FEB] mb-5" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-24 text-center bg-gradient-to-t from-[#161B22]/50 to-transparent">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Pronto para se conectar?
          </motion.h2>
          <motion.a
            href="/signup"
            className="bg-[#00C28C] text-[#0D1117] px-10 py-4 rounded-lg text-lg font-bold hover:bg-emerald-500 transition-colors duration-300 shadow-lg shadow-[#00C28C]/30 hover:shadow-[#00C28C]/50 cursor-pointer"
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0px 10px 25px rgba(0, 194, 140, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            Criar Conta Agora
          </motion.a>
        </section>
      </main>

      <footer className="container mx-auto px-6 py-8 border-t border-gray-700/50 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">Zapify &copy; {new Date().getFullYear()}</div>
          <div className="flex space-x-5">
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#" className="hover:text-[#C9D1D9] transition-colors">Privacidade</a>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#" className="hover:text-[#C9D1D9] transition-colors">Termos</a>
            <a href="https://github.com/leonardopolicarpo/zapify-web" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9D1D9] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
};
