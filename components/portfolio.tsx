'use client'

import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Moon, Sun, Calendar, MapPin, Menu, Code, Server, Database } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { v4 as uuidv4 } from 'uuid'; // Import uuid for unique IDs


interface StarProps {
  style?: React.CSSProperties; // Specify the type of 'style' prop
}

// Define the Star interface
interface Star {
  id: string; // Use string for UUID
  left: string;
  top: string;
  size: number;
  animationDuration: string;
}


const Star: React.FC<StarProps> = ({ style }) => (
  <div
    className="star"
    style={{
      position: 'absolute',
      width: '2px',
      height: '2px',
      borderRadius: '50%',
      ...style, // Spread the style object
    }}
  />
);


export function PortfolioComponent() {
  const [darkMode, setDarkMode] = useState(false)
  const [stars, setStars] = useState<Star[]>([]); // Use the Star interface here
  const [menuOpen, setMenuOpen] = useState(false)


  const STAR_COUNT = 50;
  const INTERVAL_TIME = 200;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const createStar = (): Star => ({ // Use the Star interface for the star object
      id: uuidv4(),
      left: `${Math.random() * 100}%`,
      top: '-10px',
      size: Math.random() * 2 + 1,
      animationDuration: `${Math.random() * 3 + 2}s`,
    });

    // Initialize stars
    setStars(Array.from({ length: STAR_COUNT }, createStar));

    const interval = setInterval(() => {
      setStars(prevStars => [
        ...prevStars.filter(star => parseFloat(star.top) < window.innerHeight),
        createStar(),
      ]);
    }, INTERVAL_TIME);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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
          <div className="text-2xl font-bold"><a href="#">HP</a></div>
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
          <p className="text-xl mb-4">A Passionate Software Engineer & Fullstack Developer !!</p>
          <div className="flex justify-center space-x-4 mb-4">
            <Button
              className={darkMode ? "bg-blue-600 hover:bg-blue-700" : ""}
              onClick={() => window.open("https://drive.google.com/file/d/12QPbPfdrb4QLGNHnBUR5AA4_RDHP3QCn/view?usp=sharing", "_blank")}
            >
              Download CV
            </Button>

            <Button variant="outline" className={darkMode ? "bg-gray-700 hover:bg-gray-600" : ""}>
              <a href="#contact">
                Contact Info
              </a>
            </Button>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Harsh-Porwal424" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/harsh-porwal-a836ba209/" target="_blank" rel="noopener noreferrer">
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
                Experienced in full-stack development and machine un-learning, with a strong academic record and
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
              <CardTitle>Research Intern</CardTitle>
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

        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Code className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <ul className="list-disc list-inside">
                <li>C/C++</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Server className="w-12 h-12 mb-4 text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Frameworks/Libraries</h3>
              <ul className="list-disc list-inside">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Redux</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Database className="w-12 h-12 mb-4 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Databases & Developer Tools</h3>
              <ul className="list-disc list-inside">
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>AWS (Amazon Web Services)</li>

              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Crop-estate",
                github: "https://github.com/Harsh-Porwal424/crop-estate",
                live: "https://github.com/Harsh-Porwal424/crop-estate",
                img_link: "https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2F368497784-1cf96518-eaa8-4c99-a4bb-a7d347278fef.png?alt=media&token=14c51689-3441-4d0f-a11c-d86fd35d3f61",
                desc: "Developed a MERN stack real estate application for buying, renting, and listing properties, featuring real-time chat via Socket.io. The application is containerized with Docker, reducing deployment time by 50% and enhancing scalability. I also implemented Prometheus for backend metrics collection and created a dashboard with Grafana to visualize over 30 metrics."
              },
              {
                name: "Multithreaded Proxy Server",
                github: "https://github.com/Harsh-Porwal424/MultithreadedProxyServer",
                live: "https://github.com/Harsh-Porwal424/MultithreadedProxyServer",
                img_link: "https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2F367610233-db139cfb-09d1-47f1-ae3c-2115f7fbf61b.png?alt=media&token=dbcf9866-d34a-4532-952e-a4c06f7b067e",
                desc: "Developed a high-performance, multithreaded HTTP proxy server capable of managing up to 400 concurrent client connections. To enhance response times and minimize bandwidth usage, I implemented an efficient caching mechanism using the LRU (Least Recently Used) eviction policy."
              },
              {
                name: "Send-It: File Sharing App",
                github: "https://github.com/Harsh-Porwal424/SendIt",
                live: "https://send-it-seven.vercel.app/",
                img_link: "https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2FScreenshot%202024-10-09%20at%203.08.56%E2%80%AFAM.png?alt=media&token=6a810c9e-69bf-4123-ba9c-f7b2d5d10055",
                desc: "Developed a file-sharing platform that allows secure file upload, storage, and password-protected downloads. The platform also enables users to share files via short URLs and direct email capabilities, enhancing convenience and security."
              },
              {
                name: "Animal Health Monitoring (IOT)",
                github: "https://github.com/Harsh-Porwal424/AnimalHealthMonitering",
                live: "https://animal-health-monitering.vercel.app/",
                img_link: "https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2FScreenshot%202024-10-09%20at%203.12.45%E2%80%AFAM.png?alt=media&token=257aef6a-c848-4046-a275-75a48da97a92",
                desc: "Developed a wearable device with a Raspberry Pi Pico to monitor heart rate, respiratory rate, and temperature in animals. The device collects data using sensors and transmits it to ThingSpeak for real-time monitoring, with LEDs providing visual alerts for abnormalities. A moving average filter improves data accuracy. The project is showcased on GitHub, with a live website and YouTube demonstration."
              },
              {
                name: "Sumzee",
                github: "https://github.com/Harsh-Porwal424/sumzee",
                live: "https://sumzee.netlify.app/",
                img_link: "https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2FScreenshot%202024-10-09%20at%203.17.47%E2%80%AFAM.png?alt=media&token=fa18c209-34ab-4c4b-b572-f03f49418377",
                desc: "Developed “Sumzee,” an open-source article summarizer powered by OpenAI GPT-4. This tool efficiently generates quick and accurate summaries of articles, allowing users to save time while staying informed. By streamlining the reading process, “Sumzee” helps users get the gist of content without the need to read lengthy articles. The project is designed to enhance productivity and information retention, making it a valuable resource for anyone looking to manage their reading more effectively."
              },
              {
                name: "Pharmacy Management System",
                github: "https://github.com/Harsh-Porwal424/Pharmacy_Management_Sys",
                live: "https://github.com/Harsh-Porwal424/Pharmacy_Management_Sys",
                img_link: "https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2FScreenshot%202024-10-09%20at%203.23.28%E2%80%AFAM.png?alt=media&token=c482c51c-8a9a-432f-91f4-8ba110315a3f",
                desc: "Developed a Pharmacy Management System using Python’s tkinter for the GUI and MySQL for data management. The system enables users to efficiently add, update, delete, and search medication records through an intuitive interface. It enhances operational efficiency in pharmacies by streamlining medication information management, ensuring data accuracy, and providing user-friendly error handling."
              }
            ].map((project, index) => (
              <Card key={index} className={darkMode ? 'bg-gray-800 text-white' : ''}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={project.img_link} alt={project.name} className="w-full h-40 object-cover mb-4" />
                  <p>{project.desc}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className={darkMode ? "bg-gray-700 hover:bg-gray-600" : ""}
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    GitHub
                  </Button>
                  <Button
                    className={darkMode ? "bg-blue-600 hover:bg-blue-700" : ""}
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="publication" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Publication</h2>
          <div className="space-y-8">
            {[
              {
                paper_name: 'Review of Data Bias in Healthcare Applications (Link)',
                year: 'iJOE International Journal of Online and Biomedical Engineering',
                desc: 'Data bias is a major difficulty in medical AI, affecting data collection, processing, and model building. We examine its impact on healthcare and discuss methods to reduce bias, including algorithms like SMOTE, AdaSyn, Fair-SMOTE, and BayesBoost.',
              }
            ].map((edu, index) => (
              <Card key={index} className={darkMode ? 'bg-gray-800 text-white' : ''}>
                <CardHeader>

                  <CardTitle>
                    <a href="https://doi.org/10.3991/ijoe.v20i12.49997" target="_blank" rel="noopener noreferrer">
                      {edu.paper_name}
                    </a>
                  </CardTitle>

                  <CardDescription className={darkMode ? 'text-gray-300' : ''}>{edu.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{edu.desc}</p>
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
              },
              {
                school: 'GD Goenka Public School',
                degree: 'Senior Secondary Education',
                date: 'Graduated May 2019',
                details: 'Percentage: 92%'
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
              <CardTitle className='text-xl'>Get in Touch</CardTitle>
              <CardDescription className={`${darkMode ? 'text-white-600' : 'text-black-600'} text-lg`}>
                You can reach me directly at <strong>harshporwal204@gmail.com</strong> or call me at <strong>+91 7652053816</strong>.
                Alternatively, fill out the form below to send me a message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);

                  const name = formData.get('name') as string; // Retrieve name
                  const email = formData.get('email') as string; // Retrieve email
                  const message = formData.get('message') as string; // Retrieve message

                  const mailtoLink = `mailto:harshporwal204@gmail.com?subject=Message from ${name} (${email})&body=${encodeURIComponent(message)}`;
                  window.open(mailtoLink, '_blank');
                }}
              >
                <Input name="name" placeholder="Your Name" className={darkMode ? 'bg-gray-700 text-white' : ''} required />
                <Input name="email" type="email" placeholder="Your Email" className={darkMode ? 'bg-gray-700 text-white' : ''} required />
                <Textarea name="message" placeholder="Your Message" className={darkMode ? 'bg-gray-700 text-white' : ''} required />
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