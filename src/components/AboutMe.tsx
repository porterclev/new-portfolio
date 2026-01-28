import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AboutMe = () => (
    <section id="about" className="py-16 bg-secondary/20">
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-4 mt-4">About Me</h2>
                    <p className="text-muted-foreground mb-4">
                        I'm a passionate software engineer with expertise in building web applications,
                        machine learning systems, and mobile applications. My approach to software
                        development focuses on creating elegant solutions to complex problems.
                    </p>
                    <p className="text-muted-foreground mb-4">
                        With experience across multiple programming languages including JavaScript,
                        TypeScript, Python, and more, I enjoy tackling diverse technical challenges
                        and continuously expanding my skillset.
                    </p>
                    <p className="text-muted-foreground">
                        When I'm not coding, you can find me exploring new technologies, contributing
                        to open-source projects, or sharing my knowledge through technical writing.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="bg-white shadow-soft rounded-lg p-6 border">
                        <h3 className="font-semibold mb-4">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "C", "C++", "Ros2", "JavaScript", "TypeScript", "Java", "SQL", "C#" 
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs font-medium py-1 px-2 rounded-full bg-secondary"
                                    >
                                        {skill}
                                    </span>
                                ))}
                        </div>
                        <h3 className="font-semibold mb-4 mt-8">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {[ "Ros2", "React", "Django", "SQL", "MongoDB", "AWS", "Docker", 
                            "TensorFlow", "Git", "MongoDB", "Hono", "Prisma", "Flask", "Power BI"
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs font-medium py-1 px-2 rounded-full bg-secondary"
                                    >
                                        {skill}
                                    </span>
                                ))}
                        </div>
                    </div>

                    <div className="bg-white shadow-soft rounded-lg p-6 border">
                        <h3 className="font-semibold mb-4">Education</h3>
                        <div className="flex">
                            <img src="poly.jpg" alt="Cal Poly Pomona Logo" className="h-10 mr-4" />
                            <div>
                                <p className="font-medium">M.S. of Computer Science</p>
                                <p className="text-sm text-muted-foreground">Cal Poly Pomona, 2025-2027</p>
                            </div>
                        </div>
                        <div className="flex mt-3">
                            <img src="lb.png" alt="CSULB Logo" className="h-10 mr-4" />
                            <div>
                                <p className="font-medium">B.S. in Software Engineering</p>
                                <p className="text-sm text-muted-foreground">CalState University Long Beach, 2021-2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutMe;