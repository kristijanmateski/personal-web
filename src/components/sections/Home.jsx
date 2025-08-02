import React from 'react'

export default function Home() {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
        <div className='text-center z-10 px-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right'>Hello, I'm Kristijan Mateski</h1>
            <p className='text-gray-500 text-lg mb-8 max-w-lg mx-auto'>I'm a final-year student at FINKI (Faculty of Computer Science and Engineering) with a strong interest in front-end development. I'm currently focused on learning and mastering React.js and modern JavaScript to become a professional React or JavaScript developer.</p>
            <div className='flex justify-center space-x-4'>
                <a href="#about" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">About Me</a>
                <a href="#project" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">View Projects</a>
            </div>
        </div>
    </section>
  )
}
