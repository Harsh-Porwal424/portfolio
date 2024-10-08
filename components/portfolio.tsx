'use client'

import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Moon, Sun, Calendar, MapPin, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Star = ({ style }) => (
  <div
    className="star"
    style={{
      position: 'absolute',
      width: '2px',
      height: '2px',
      borderRadius: '50%',
      ...style,
    }}
  />
)

export function PortfolioComponent() {
  const [darkMode, setDarkMode] = useState(false)
  const [stars, setStars] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const createStar = () => ({
      id: Math.random(),
      left: `${Math.random() * 100}%`,
      top: '-10px',
      size: Math.random() * 2 + 1,
      animationDuration: `${Math.random() * 3 + 2}s`,
    })

    setStars(Array.from({ length: 50 }, createStar))

    const interval = setInterval(() => {
      setStars(prevStars => [
        ...prevStars.filter(star => star.top !== '110vh'),
        createStar()
      ])
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} relative overflow-hidden`}>
      {/* Dotted background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(${darkMode ? '#ffffff33' : '#00000033'} 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Falling Stars */}
      {stars.map(star => (
        <Star
          key={star.id}
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: darkMode ? 'white' : '#4299e1',
            boxShadow: darkMode
              ? `0 0 ${star.size}px white`
              : `0 0 ${star.size}px #4299e1`,
            animation: `fall ${star.animationDuration} linear forwards`,
          }}
        />
      ))}

      <header className={`sticky top-0 z-20 ${darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white bg-opacity-80'} p-4`}>
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">HP</div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
          <ul className={`md:flex md:space-x-4 ${menuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 md:top-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} md:bg-transparent p-4 md:p-0`}>
            <li><a href="#about" className="block py-2 md:py-0 hover:text-gray-300">About</a></li>
            <li><a href="#experience" className="block py-2 md:py-0 hover:text-gray-300">Experience</a></li>
            <li><a href="#projects" className="block py-2 md:py-0 hover:text-gray-300">Projects</a></li>
            <li><a href="#skills" className="block py-2 md:py-0 hover:text-gray-300">Skills</a></li>
            <li><a href="#education" className="block py-2 md:py-0 hover:text-gray-300">Education</a></li>
            <li><a href="#contact" className="block py-2 md:py-0 hover:text-gray-300">Contact</a></li>
          </ul>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="hidden md:inline-flex">
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <section id="hero" className="text-center mb-16">
          <div className="mb-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2Ff5f47794-0c60-4345-90ef-39acc9b98867-user-pic%20(1).png?alt=media&token=40395980-1860-479d-8979-09105693dd62" alt="Harsh Porwal" className="rounded-full mx-auto" width={200} height={200} />
          </div>
          <h1 className="text-4xl font-bold mb-2">Harsh Porwal</h1>
          <p className="text-xl mb-4">Java and React/Next.js developer</p>
          <div className="flex justify-center space-x-4 mb-4">
            <Button className={darkMode ? "bg-blue-600 hover:bg-blue-700" : ""}>Download CV</Button>
            <Button variant="outline" className={darkMode ? "bg-gray-700 hover:bg-gray-600" : ""}>Contact Info</Button>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/harshporwal" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/harsh-porwal" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <Card className={darkMode ? 'bg-gray-800 text-white' : ''}>
            <CardContent className="mt-4">
              <p>
                Passionate computer science student specializing in IoT at Vellore Institute of Technology. 
                Experienced in full-stack development and machine learning, with a strong academic record and 
                practical experience through internships and projects. Committed to leveraging technology 
                to solve real-world problems and continuously expanding my skill set in the ever-evolving 
                field of computer science.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <Card className={darkMode ? 'bg-gray-800 text-white' : ''}>
            <CardHeader>
              <CardTitle>PRISM Research Intern</CardTitle>
              <CardDescription className={darkMode ? 'text-gray-300' : ''}>Samsung R&D India</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-2">
                <Calendar className="mr-2" size={16} />
                <span>Dec. 2023 – Sep. 2024</span>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="mr-2" size={16} />
                <span>Remote</span>
              </div>
              <ul className="list-disc list-inside space-y-2">
                <li>Implemented an advanced machine unlearning algorithm using PyTorch and ResNet18, enabling selective forgetting of specific classes in a CIFAR-10 image classifier while maintaining 82% accuracy on retained classes.</li>
                <li>Utilized adversarial noise generation and fine-tuning techniques to achieve targeted model amnesia.</li>
                <li>Authored a review research paper on machine unlearning techniques, currently under review at academic journals.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Crop-estate', 'Multithreaded Proxy Server', 'Send-It: File Sharing App'].map((project, index) => (
              <Card key={index} className={darkMode ? 'bg-gray-800 text-white' : ''}>
                <CardHeader>
                  <CardTitle>{project}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg?height=200&width=300" alt={project} className="w-full h-40 object-cover mb-4" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className={darkMode ? "bg-gray-700 hover:bg-gray-600" : ""}>GitHub</Button>
                  <Button className={darkMode ? "bg-blue-600 hover:bg-blue-700" : ""}>Live Demo</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Languages', 'Frameworks', 'Developer Tools'].map((category, index) => (
              <Card key={index} className={darkMode ? 'bg-gray-800 text-white' : ''}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                    <li>Skill 4</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="space-y-8">
            {[
              {
                school: 'Vellore Institute of Technology',
                degree: 'B.Tech - Computer Science and Engineering (with spec. in IOT)',
                date: 'Aug. 2021 - Present',
                details: 'CGPA: 9.40/10.00'
              },
              {
                school: 'Loyola International School',
                degree: 'Higher Secondary Education',
                date: 'Graduated May 2021',
                details: 'Percentage: 85%'
              }
            ].map((edu, index) => (
              <Card key={index} className={darkMode ? 'bg-gray-800 text-white' : ''}>
                <CardHeader>
                  <CardTitle>{edu.school}</CardTitle>
                  <CardDescription className={darkMode ? 'text-gray-300' : ''}>{edu.degree}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2" size={16} />
                    <span>{edu.date}</span>
                  </div>
                  <p>{edu.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <Card className={darkMode ? 'bg-gray-800 text-white' : ''}>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription className={darkMode ? 'text-gray-300' : ''}>Fill out the form below to send me a message</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" className={darkMode ? 'bg-gray-700 text-white' : ''} />
                <Input type="email" placeholder="Your Email" className={darkMode ? 'bg-gray-700 text-white' : ''} />
                <Textarea placeholder="Your Message" className={darkMode ? 'bg-gray-700 text-white' : ''} />
                <Button type="submit" className={darkMode ? "bg-blue-600 hover:bg-blue-700" : ""}>Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className={`${darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white bg-opacity-80'} p-4 relative z-10`}>
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Harsh Porwal. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fall {
          0% { transform: translateY(-10vh); }
          100% { transform: translateY(110vh); }
        }

        @keyframes twinkle {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}