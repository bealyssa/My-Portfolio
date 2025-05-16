import React from 'react';
import Button from '@mui/material/Button';

export default function Courses() {
    const courses = [
        {
            title: "Frontend Development",
            description: "Learn modern frontend technologies including React, Next.js, and responsive design principles.",
            startDate: "June 15, 2025",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "UI/UX Design",
            description: "Master the principles of user interface and experience design with industry-standard tools.",
            startDate: "July 1, 2025",
            gradient: "from-blue-500/20 to-purple-500/20"
        },
        {
            title: "Backend Development",
            description: "Build robust server-side applications with Node.js, databases, and API development.",
            startDate: "June 15, 2025",
            gradient: "from-green-500/20 to-blue-500/20"
        },
        {
            title: "Mobile App Development",
            description: "Create cross-platform mobile applications using React Native and modern mobile development practices.",
            startDate: "July 1, 2025",
            gradient: "from-yellow-500/20 to-red-500/20"
        }
    ];

    return (
        <section className="container mx-auto px-4 py-24">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Courses</h2>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#0a0a1a] to-[#1a1a2a] rounded-lg overflow-hidden group hover:from-[#0a0a1a] hover:to-[#1a1a3a] transition-all">
                        <div className="relative h-64 overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient}`}></div>
                            <div className="w-full h-full bg-gray-800 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                                    8 weeks
                                </span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                            <p className="text-gray-400 mb-6">
                                {course.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">Starting</p>
                                    <p className="font-medium">{course.startDate}</p>
                                </div>
                                <Button
                                    variant="outline"
                                    className="rounded-full px-6 border-white text-white hover:bg-white hover:text-black"
                                >
                                    Details
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 