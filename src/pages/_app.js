// pages/_app.js

import Layout from "../components/layout"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import React from "react"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"

import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons"
import ParticlesComponent from "@/components/particles"
import Navbar from "../components/Navbar" // Import the Navbar component here

const PROBLEM_STATEMENT_RELEASED = true

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    console.log(difference)
    console.log(targetDate)

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Prevent negative values
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-white text-center rounded-md p-2">
      <div className="text-lg font-semibold mb-2">The hackathon starts in</div>
      <div className="flex justify-center space-x-4 mt-2">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div className="text-center" key={unit}>
            <div className="bg-gray-800 w-16 h-16 flex justify-center items-center rounded-md">
              {console.log(value)}
              <span className="text-3xl font-bold">{value}</span>
            </div>
            <span className="block mt-1 text-xs font-bold">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = ({ id }) => {
  const targetDate = new Date("February 21, 2025 15:00:00");
  
  console.log("Target Date:", targetDate.toString());

  return (
    <div
      id={id}
      className="z-5 hero-page relative bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center items-center h-screen w-screen"
    >
      <ParticlesComponent />
      <div className="mt-10 absolute w-full flex items-center justify-between px-4 sm:px-8 lg:px-16 top-10 z-10">
        <img src="/logo.png" alt="Eximius" className="h-24 sm:h-48" />
        <img src="/Teranis.png" alt="Teranis" className="h-16 sm:h-20" />
      </div>
      <div className="relative z-20 p-4 text-white text-center">
        <div className="flex justify-center mb-10">
          <span className="text-4xl font-extrabold">TECHLIFT</span>
        </div>
        <p className="max-w-[80%] mx-auto mt-2 text-sm sm:text-base md:text-lg lg:text-xl uppercase font-bold">
          24 Hour National Level Hackathon
        </p>
        <p className="max-w-[80%] mx-auto mt-2 text-sm sm:text-base md:text-lg lg:text-xl uppercase font-bold">
          21,22 Feb 2025
        </p>
      </div>

      <Timer targetDate={targetDate} />
      <div className="absolute bottom-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="https://drive.google.com/uc?export=download&id=1iI_QCflwM_2cHzA0WP-4d0DNDCvSe5ZY"S// brochure link
          className="rounded-md px-8 py-4 bg-green-700 text-white font-semibold shadow-lg hover:bg-green-800 transition duration-300 ease-in-out mt-4 sm:mt-0 text-center"
          download
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Download brochure
        </a>
      </div>
    </div>
  )
}

const AboutSection = ({ id }) => {
  return (
    <div id={id} className="w-full bg-blue-900 text-white py-10 w-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="title-component mb-8">
          <div className="title-decoration">
            <span className="title-decorative-line-left bg-white"></span>
            <span className="title-decorative-line-right bg-white"></span>
          </div>
        </div>
        <div className="text-center">
          {/* <h2 className="nico-moji text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold">
            MediHack
          </h2> */}
          <div className="flex justify-center mb-10">
            <img
              src="/techlift.png"
              alt="TECHLIFT"
              className="h-40 w-auto sm:h-48"
            />
          </div>
          <p className="text-lg mb-8">
          <b>TECHLIFT</b> is a premier 24-hour hackathon dedicated to empowering the elderly and disabled through technology-driven innovation. Hosted by Association of B.Tech in CSE Department and Association of B.tech in ECE Department of LBS Collage of Engineering Kasaragod as part of Teranis’25 & Eximius’25 , this event unites students, developers, designers, engineers, and industry experts to tackle real-world challenges faced by physically disabled and elderly individuals.

Participants will have the opportunity to ideate, innovate, and develop impactful solutions that enhance accessibility, independence, and quality of life. Join us in shaping a future where technology truly empowers everyone! 
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-blue-800 rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Registration Fee</h3>

              <p className="text-3xl text-white mb-2 font-bold">
                Early bird registration fee: ₹300 per head
              </p>
              <p className="text-sm text-white">
                ₹350 per head after early bird registration
              </p>
            </div>
          </div>
          <div className="flex-1 bg-blue-800 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Guidelines</h3>
            </div>
            <ul className="text-sm font-bold text-white list-disc pl-4">
              <li>24 Hour overnight hackathon</li>
              <li>A Team of maximum 5 members can participate</li>
              <li>
                Problem statements will be under the domain Empowerment of Elderly and Disabled
              </li>
              <li>
                Participants should bring their own electronic equipment if
                needed
              </li>
              <li>Food expense will be covered under registration fee</li>
            </ul>
          </div>
          <div className="flex-1 bg-blue-800 rounded-lg p-8 flex flex-col justify-center items-center">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Prize Pool</h3>
              <p className="text-3xl text-white font-bold mb-2 font-bold">
                30k+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TimelineSection = ({ id }) => {
  return (
    <div id={id} className="bg-blue-100 py-10 w-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="title-component mb-8">
          <div className="title-decoration">
            <span className="title-decorative-line-left bg-blue-500"></span>
            <h2 className=" text-lg title-heading text-blue-900 font-bold">
              Timeline
            </h2>
            <span className="title-decorative-line-right bg-blue-500"></span>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-item flex py-6 border-b border-blue-200">
            <div className="w-1/4 mr-6">
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2 text-blue-900">
                  February 13
                </h2>
                <h3 className="text-base font-semibold text-blue-700">
                  Early Bird Registration starting
                </h3>
              </div>
            </div>
            <div className="w-3/4">
              <div className="px-4 py-2 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-2 text-blue-900">
                  Early Bird Registration starts
                </h2>
                <p className="text-sm text-blue-900">
                  Early Bird Registration starts on this date, be sure to
                  register for getting discounted registration fees.
                </p>
              </div>
            </div>
          </div>
          {/* Additional timeline items */}
          <div className="timeline-item flex py-6 border-b border-blue-200">
            <div className="w-1/4 mr-6">
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2 text-blue-900">February 16</h2>
                <h3 className="text-base font-semibold text-blue-700">
                  Early Bird Registration closing
                </h3>
              </div>
            </div>
            <div className="w-3/4">
              <div className="px-4 py-2 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-2 text-blue-900">
                  Early Bird Registration closing
                </h2>
                <p className="text-sm text-blue-900">
                  Early Bird Registration closes on 16 February 2025
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-item flex py-6 border-b border-blue-200">
            <div className="w-1/4 mr-6">
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2 text-blue-900">February 20</h2>
                <h3 className="text-base font-semibold text-blue-700">
                  Online Registration closing
                </h3>
              </div>
            </div>
            <div className="w-3/4">
              <div className="px-4 py-2 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-2 text-blue-900">
                  Last Day for Online Registration
                </h2>
                <p className="text-sm text-blue-900">
                  Ensure you register online before the deadline to secure your
                  spot.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item flex py-6 border-b border-blue-200">
            <div className="w-1/4 mr-6">
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2 text-blue-900">February 21</h2>
                <h3 className="text-base font-semibold text-blue-700">
                  Offline Registration
                </h3>
              </div>
            </div>
            <div className="w-3/4">
              <div className="px-4 py-2 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-2 text-blue-900">
                  On-Site Registration Available
                </h2>
                <p className="text-sm text-blue-900">
                  If you missed online registration, you can register in person
                  on these dates.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item flex py-6 border-b border-blue-200">
            <div className="w-1/4 mr-6">
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2 text-blue-900">
                  Feb 21, 3pm - Feb 22, 3pm
                </h2>
                <h3 className="text-base font-semibold text-blue-700">
                  Hackathon
                </h3>
              </div>
            </div>
            <div className="w-3/4">
              <div className="px-4 py-2 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-2 text-blue-900">
                  Hackathon Kickoff
                </h2>
                <p className="text-sm text-blue-900">
                  Join us for an exciting hackathon event spanning 24 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item flex py-6 border-b border-blue-200">
            <div className="w-1/4 mr-6">
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2 text-blue-900">February 22</h2>
                <h3 className="text-base font-semibold text-blue-700">
                  Result declaration
                </h3>
              </div>
            </div>
            <div className="w-3/4">
              <div className="px-4 py-2 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-2 text-blue-900">
                  Hackathon Winners Announcement
                </h2>
                <p className="text-sm text-blue-900">
                  Find out who emerged victorious in the hackathon competition.
                </p>
              </div>
            </div>
          </div>

          {/* Add more timeline items as needed */}
        </div>
      </div>
    </div>
  )
}

const ProblemStatementBox = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-lg mb-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-4 flex items-center justify-between cursor-pointer">
        <h3 className="text-lg font-bold text-indigo-600">{title}</h3>
        <div className="text-gray-600">
          <FontAwesomeIcon
            icon={isOpen == true ? faCaretUp : faCaretDown}
            className="w-6 h-6 transition-transform transform"
          />
        </div>
      </div>
      {isOpen && (
        <p className="px-4 py-2 text-gray-800 font-bold">{description}</p>
      )}
    </div>
  )
}
const ProblemStatements = ({ id }) => {
  return (
    <div id={id} className="bg-gray-900 py-10 w-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="title-component mb-8">
          <div className="title-decoration">
            <span className="title-decorative-line-left bg-blue-500"></span>
            <h1 className="text-lg title-heading text-white font-bold">
              Problem statements
            </h1>
            <span className="title-decorative-line-right bg-blue-500"></span>
          </div>
        </div>
        <div className="white-box">
          {PROBLEM_STATEMENT_RELEASED ? (
            <ul>
              {problemStatements.map((problem, index) => (
                <li key={index}>
                  <ProblemStatementBox
                    title={problem.title}
                    description={problem.description}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="list-disc list-inside mb-6 bg-white p-6 rounded-lg">
              <li className="text-gray-900">
              The problem statements for <b>TECHLIFT</b> will focus on <b>AssistiveTech and InclusiveTech</b> , driving innovation to empower the elderly and physically disabled.
              </li>
              <li className="text-gray-900">
                Stay Tuned.. Problem statements will be released soon.
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

const problemStatements = [
  { title: "Problem statements will release on February 18 2025"
    /*title: "AI-Powered Elderly Companion Chatbot",
    description:
      "Develop a chatbot with voice and text interaction, offering emotional support, medication reminders, and cognitive exercises for elderly individuals.",
  },
  {
    title: "Voice-Controlled Smart Home System",
    description:
      "Create a smart home assistant that enables elderly and disabled individuals to control appliances, doors, and security systems through voice commands and gestures.",
  },
  {
    title: "Software for Improving Public Accessibility",
    description:
      "Improve public accessibility for elderly and disabled individuals by simplifying essential processes.",
  },
  {
    title: "Accessible Public Transport & Navigation App",
    description:
      "Design an app that provides real-time information on wheelchair-friendly transport, accessible routes, and assistance services, integrating crowdsourced reviews for better accuracy.",
  },
  {
    title: "AI-Based Sign Language Translator",
    description:
      "Build an AI-powered tool that translates sign language into text and speech in real-time, helping hearing-impaired individuals communicate seamlessly.",
  },
  {
    title: "Cognitive Health & Memory Aid App",
    description:
      "Develop an interactive digital assistant for elderly individuals with memory loss, integrating daily reminders, personalized task scheduling, and cognitive exercises to enhance mental well-being.",
  },
  {
    title: "Digital Banking & Finance App for Seniors",
    description:
      "Create a voice-assisted, fraud-proof banking app with large-font interfaces and step-by-step tutorials, ensuring elderly users can safely manage their finances.",
  },
  {
    title: "Smart Fall Detection & Emergency Alert System",
    description:
      "Develop a wearable IoT device that detects falls and automatically sends an SOS alert with real-time location to caregivers or emergency services.",
  },
  {
    title: "AI-Powered Smart Wheelchair with Obstacle Avoidance",
    description:
      "Create a self-navigating wheelchair with AI-based obstacle detection, voice control, and emergency stop functionality for enhanced mobility.",
  },
  {
    title: "Smart Glasses for the Visually Impaired",
    description:
      "Design AI-powered smart glasses that provide object recognition, text-to-speech functionality, and navigation assistance for visually impaired users.",
  },
  {
    title: "AI-Based Hearing Aid with Noise Cancellation",
    description:
      "Build an intelligent hearing aid that enhances speech clarity by filtering background noise using AI, improving communication for individuals with hearing impairments.",
  */},
];




const ContactSection = ({ id }) => {
  return (
    <div id={id} className="bg-gray-900 py-12 w-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
          Get in touch
        </h2>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Technical Coordinators */}
          <div className="md:w-1/3 md:pr-4">
            <h3 className="text-lg font-bold mb-4 text-white text-center">
              Technical Coordinators
            </h3>
            <div className="flex flex-col justify-center text-gray-800">
              {/* Technical Coordinator 1 */}
              <div className="coordinator-card bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
                <img
                  src="sooraj.jpeg"
                  alt="Sooraj"
                  className="rounded-full h-8 w-8 mr-3"
                />
                <div className="coordinator-content">
                  <span className="whitespace-nowrap font-semibold text-black">
                    Sooraj
                  </span>
                  <a
                    href="https://wa.me/+918075386183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block whitespace-nowrap text-black font-semibold"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-1" />
                    +91 80753 86183
                  </a>
                </div>
              </div>
              {/* Technical Coordinator 2 */}
              <div className="coordinator-card bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
                <img
                  src="shamil.jpeg"
                  alt="Shamil Shameer"
                  className="rounded-full h-8 w-8 mr-3"
                />
                <div className="coordinator-content">
                  <span className="whitespace-nowrap font-semibold text-black">
                    Shamil
                  </span>
                  <a
                    href="https://wa.me/+919074107075"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block whitespace-nowrap text-black font-semibold"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-1" />
                    +91 90741 07075
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Program Coordinators */}
          <div className="md:w-1/3 md:pl-4">
            <h3 className="text-lg font-bold mb-4 text-white text-center">
              Program Coordinators
            </h3>
            <div className="flex flex-col justify-center text-gray-800">
              {/* Program Coordinator 1 */}
              <div className="coordinator-card bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
                <img
                  src="abin.jpeg"
                  alt="Abin N R"
                  className="rounded-full h-8 w-8 mr-3"
                />
                <div className="coordinator-content">
                  <span className="whitespace-nowrap font-semibold text-black">
                    Abin N R
                  </span>
                  <a
                    href="https://wa.me/+919526179205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block whitespace-nowrap text-black font-semibold"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-1" />
                    +91 95261 79205
                  </a>
                </div>
              </div>
              {/* Program Coordinator 2 */}
              <div className="coordinator-card bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
                <img
                  src="Nitish.jpeg"
                  alt="Nitish Nayak"
                  className="rounded-full h-8 w-8 mr-3"
                />
                <div className="coordinator-content">
                  <span className="whitespace-nowrap font-semibold text-black">
                    Nitish Nayak
                  </span>
                  <a
                    href="https://wa.me/+918547038838"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block whitespace-nowrap text-black font-semibold"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-1" />
                    +91 85470 38838
                  </a>
                </div>
              </div>
              {/* Program Coordinator 3 - Abin George */}
              <div className="coordinator-card bg-white rounded-lg shadow-md p-4 flex items-center">
                <img
                  src="Ab1n.jpeg"
                  alt="Abin George"
                  className="rounded-full h-8 w-8 mr-3"
                />
                <div className="coordinator-content">
                  <span className="whitespace-nowrap font-semibold text-black">
                    Abin George
                  </span>
                  <a
                    href="https://wa.me/+918547216321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block whitespace-nowrap text-black font-semibold"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-1" />
                    +91 85472 16321
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embed Google Maps */}
        <div className="mt-8">
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            title="LBS College of Engineering Kasaragod"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.1816927493355!2d75.07822077573479!3d12.504113124953912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4846bda0b9525%3A0x1a6965b115fbfb96!2sLBS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1714242919735!5m2!1sen!2sin"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;


const PrizesPage = ({ id }) => {
  return (
    <div id={id} className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Prizes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">
              1st Prize
            </h3>
            <p className="text-3xl text-center font-bold text-blue-600">
              ₹15,000
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">
              2nd Prize
            </h3>
            <p className="text-3xl text-center font-bold text-green-600">
              ₹10,000
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">
              3rd Prize
            </h3>
            <p className="text-3xl text-center font-bold text-purple-600">
              ₹5,000
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}



const QRCodeRegister = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 w-screen bg-gray-800 shadow-lg rounded-2xl  ">
      <h2 className="text-2xl font-semibold mb-4 text-white">Register Now</h2>
      <div className="w-40 h-40 md:w-56 md:h-56 flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden">
        <span className="text-gray-400 rounded-xl"><img src="/qr.jpeg"></img></span>
      </div>
      <p className="text-gray-300 text-sm mt-4 text-center">
        Scan the QR code to register instantly and get started right away!
      </p>
    </div>
  );
};

const faqs = [
  {
    question: "How much is the participation fee?",
    answer:
      "Early bird registration fee: 300. Registration fee: 350. (Food and accommodation included)",
  },
  {
    question: "Who can participate in TECHLIFT?",
    answer:
      "Participants should be school or college students and not working professionals.",
  },
  {
    question: "What are the Hackathon prizes?",
    answer: "View the prizes section for more information",
  },
  {
    question: "Can we use any reference material during the contest?",
    answer:
      "Yes, participants are allowed to use reference materials during the contest.",
  },
  {
    question:
      "What is the participation policy regarding teams? Is participation exclusive to teams, and if so, what is the maximum team size?",
    answer:
      "Yes, participation is exclusive to teams, with a maximum team size of 5 members.",
  },
  {
    question: "As a beginner, is there any value in registering?",
    answer:
      "Absolutely! Hackathons offer a fantastic opportunity to dive into new technologies, build skills, and connect with others. Regardless of your experience level, there's something valuable for everyone to gain.",
  },
  {
    question: "When are the problem statements revealed?",
    answer:
      "Software problem statements are released at the start of the hackathon, Hardware problem statements are released 2 days prior.",
  },
]

const FaqBox = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-lg mb-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-4 flex items-center justify-between cursor-pointer">
        <h3 className="text-lg font-bold text-indigo-600">{question}</h3>
        <div className="text-gray-600">
          <FontAwesomeIcon
            icon={isOpen ? faCaretUp : faCaretDown}
            className="w-6 h-6 transition-transform transform"
          />
        </div>
      </div>
      {isOpen && <p className="px-4 py-2 text-gray-800 font-bold">{answer}</p>}
    </div>
  )
}

const FaqSection = ({ id }) => {
  return (
    <div id={id} className="bg-purple-900 py-10 w-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="title-component mb-8">
          <div className="title-decoration">
            <span className="title-decorative-line-left bg-blue-500"></span>
            <h1 className="text-lg title-heading text-white font-bold">FAQ</h1>
            <span className="title-decorative-line-right bg-blue-500"></span>
          </div>
        </div>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <FaqBox question={faq.question} answer={faq.answer} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// const Footer = () => {
//   return (
//     <footer className="bg-black py-6">
//       <div className="container mx-auto flex justify-center items-center space-x-8 flex-wrap">
//         {/* LinkedIn */}
//         <a
//           href="https://www.linkedin.com/company/ieee-cs-lbscek/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-white transition-colors duration-300"
//         >
//           <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
//         </a>
//         {/* Instagram */}
//         <a
//           href="https://www.instagram.com/ieeecschapter_lbscek?igsh=Z3VpdTA3aTB0cXdo"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-white transition-colors duration-300"
//         >
//           <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
//         </a>
//         {/* Email */}
//         <a
//           href="mailto:ieeecs@lbscek.ac.in"
//           className="text-gray-400 hover:text-white transition-colors duration-300"
//         >
//           <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
//         </a>

//         {/* College Logo */}
//         <a
//           href="https://lbscek.ac.in/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center"
//         >
//           <img
//             src="/collegelogo.png"
//             alt="College Logo"
//             className="h-10 w-auto sm:h-12"
//           />
//         </a>
//       </div>
//     </footer>
//   )
// }

// Other sections omitted for brevity

const Home = () => {
  return (
    <div className="w-screen bg-blue-900">
      <Navbar /> Add the Navbar component here
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <TimelineSection id="timeline" />
      <FaqSection id="faq" />
      <ProblemStatements id="problem-statements" />
      <PrizesPage id="prizes" />
      <QRCodeRegister />
      <ContactSection id="contact" />
      {/* <Footer /> */}
    </div>
  )
}
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}
