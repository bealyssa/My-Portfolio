import React from 'react';

const techIcons = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
];

export default function Features() {
    return (
        <section className="w-full px-2 md:px-8 py-24 bg-[#0A0105] flex flex-col items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-[1400px] auto-rows-[260px] lg:auto-rows-[340px]">
                {/* Map Card */}
                <div className="rounded-3xl shadow-xl bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-center min-h-[400px] min-w-[320px] col-span-1 lg:row-span-2 lg:min-h-[700px]">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/OpenStreetMap_Mapnik_Example.png" alt="Map" className="rounded-2xl w-full h-72 object-cover mb-6" />
                    <div className="text-center w-full">
                        <div className="text-2xl font-bold text-white">Berlin, Germany</div>
                        <div className="text-gray-300 text-base mt-2">15:16:59</div>
                    </div>
                </div>
                {/* My Library */}
                <div className="rounded-3xl shadow-xl bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-center min-h-[220px]">
                    <div className="text-2xl font-bold text-white mb-2">My Library</div>
                    <div className="text-gray-400 text-sm mb-4">Books I love reading</div>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81dgfR0YQPL.jpg" alt="Shoe Dog" className="w-28 h-32 object-cover rounded-xl shadow-md" />
                </div>
                {/* Tech Stack */}
                <div className="rounded-3xl shadow-xl bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-center min-h-[220px]">
                    <div className="text-2xl font-bold text-white mb-2">Tech Stack</div>
                    <div className="text-gray-400 text-sm mb-4">Tools I enjoy using</div>
                    <div className="flex gap-3 flex-wrap justify-center">
                        {techIcons.map((icon, i) => (
                            <img key={i} src={icon} alt="tech" className="w-10 h-10 rounded-lg bg-white/10 p-1" />
                        ))}
                    </div>
                </div>
                {/* About Me */}
                <div className="rounded-3xl shadow-xl bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-center min-h-[220px]">
                    <div className="text-2xl font-bold text-white mb-2">About me</div>
                    <div className="text-gray-400 text-sm mb-2 text-center">I craft digital products & deliver experiences, build my ideas & share things I like. Curiosity led me to be a generalist, meaning I can do well from ideation to launch.</div>
                </div>
                {/* My Notebook */}
                <div className="rounded-3xl shadow-xl bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-center min-h-[220px]">
                    <div className="text-2xl font-bold text-white mb-2">My Notebook</div>
                    <div className="text-gray-400 text-sm mb-4">Thoughts, tips & tricks</div>
                    <div className="relative w-full flex justify-center">
                        <img src="https://placehold.co/160x80/222/fff?text=NOTEBOOK" alt="Notebook" className="rounded-xl w-40 h-20 object-cover" />
                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full">COMING SOON</span>
                    </div>
                </div>
                {/* Foundation of My Work */}
                <div className="rounded-3xl shadow-xl bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-center min-h-[220px] lg:col-span-2">
                    <div className="text-2xl font-bold text-white mb-4">FOUNDATION OF MY WORK</div>
                    <img src="https://placehold.co/320x120/333/fff?text=Venn+Diagram" alt="Venn Diagram" className="w-60 h-28 object-contain mb-4" />
                    <div className="flex flex-row gap-8 text-white text-base">
                        <div>
                            <div className="font-bold">Functionality</div>
                            <div>Designs that serve a purpose</div>
                        </div>
                        <div>
                            <div className="font-bold">Simplicity</div>
                            <div>Complexity surfaced only when necessary</div>
                        </div>
                        <div>
                            <div className="font-bold">Emotion</div>
                            <div>Products with a character & solutions optimized for emotion</div>
                        </div>
                    </div>
                </div>
                {/* Favorite Place */}
                <div className="rounded-3xl shadow-xl bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-center min-h-[220px]">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Masa Lubrense" className="rounded-xl w-full h-32 object-cover mb-4" />
                    <div className="text-white font-bold text-xl">Masa Lubrense</div>
                    <div className="text-gray-400 text-sm">Favorite spot on Earth [so far]</div>
                </div>
                {/* Twitter */}
                <div className="rounded-3xl shadow-xl bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-center min-h-[180px]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mb-4"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.32 0-.63-.02-.94-.06A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 5.1a8.36 8.36 0 0 1-2.54.7z" fill="#1DA1F2" /></svg>
                    <div className="text-white font-bold text-xl mb-1">Twitter</div>
                    <div className="text-gray-400 text-sm">Join my design bubble</div>
                </div>
                {/* Behance */}
                <div className="rounded-3xl shadow-xl bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-center min-h-[180px]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mb-4"><path d="M8.67 10.86c.41-.21.68-.62.68-1.09 0-.02 0-.04-.01-.06-.09-.61-.62-1.08-1.25-1.08H4.5v2.23h3.59c.19 0 .37-.04.58-.13zm-1.08-2.17c.36 0 .65.29.65.65s-.29.65-.65.65H4.5V8.69h3.09zm1.08 3.13c-.21-.09-.39-.13-.58-.13H4.5v2.23h3.59c.63 0 1.16-.47 1.25-1.08 0-.02.01-.04.01-.06 0-.47-.27-.88-.68-1.09zm-1.08 2.17c-.36 0-.65-.29-.65-.65s.29-.65.65-.65h3.09v1.3H7.59zm7.41-2.13c-1.13 0-2.05.92-2.05 2.05s.92 2.05 2.05 2.05c.9 0 1.67-.59 1.94-1.41h-1.09c-.13.19-.36.32-.62.32-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.26 0 .49.13.62.32h1.09c-.27-.82-1.04-1.41-1.94-1.41zm0 2.13c-.36 0-.65-.29-.65-.65s.29-.65.65-.65.65.29.65.65-.29.65-.65.65zm2.5-2.13c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm-2.5 2.13c-.36 0-.65-.29-.65-.65s.29-.65.65-.65.65.29.65.65-.29.65-.65.65zm2.5-2.13c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75z" fill="#1769FF" /></svg>
                    <div className="text-white font-bold text-xl mb-1">Behance</div>
                    <div className="text-gray-400 text-sm">A few of my older works</div>
                </div>
                {/* Say Hello */}
                <div className="rounded-3xl shadow-xl bg-white/10 backdrop-blur-md p-8 flex flex-col items-center justify-center min-h-[180px]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mb-4"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#222" /></svg>
                    <div className="text-black font-bold text-xl mb-1">Say Hello</div>
                    <div className="text-gray-700 text-sm">For project inquiries or just connecting</div>
                </div>
            </div>
        </section>
    );
} 