'use client';

import Image from 'next/image';
import { FaLinkedin, FaGithub, FaUniversity, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { AiFillGoogleCircle, AiOutlineFilePdf } from 'react-icons/ai';
import { SiPubmed } from 'react-icons/si';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 flex flex-col items-center">
          <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden bg-gray-200 shadow-md mb-6">
            <Image
              src="/images/pic.jpg"
              alt="Photo of McKenzie White"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
          
          <div className="w-full space-y-3">
            <a
              href="https://www.linkedin.com/in/mckenzie-white/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
              <span className="text-gray-400">LinkedIn</span>
            </a>
            <a
              href="https://github.com/kenziew"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              title="GitHub"
            >
              <FaGithub size={24} />
              <span className="text-gray-400">GitHub</span>
            </a>
            <a
              href="https://x.com/_mckenziew"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-400 transition-colors"
              title="Twitter/X"
            >
              <FaTwitter size={24} />
              <span className="text-gray-400">Twitter/X</span>
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=McKenzie+S+White"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
              title="PubMed"
            >
              <SiPubmed size={24} />
              <span className="text-gray-400">PubMed</span>
            </a>
            <a
              href="mailto:kenzieswhite@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              title="Email"
            >
              <FaEnvelope size={24} />
              <span className="text-gray-400">Email</span>
            </a>
            <a
              href="https://profiles.stanford.edu/mckenzie-white"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              title="Stanford Profile"
            >
              <FaUniversity size={24} />
              <span className="text-gray-400">Stanford Profile</span>
            </a>
            <a
              href="/Academic_CV_McKenzieWhite_forwebsite.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
              title="Download CV"
            >
              <AiOutlineFilePdf size={24} />
              <span className="text-gray-400">Download CV</span>
            </a>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-3">McKenzie White</h1>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            I am a Postdoctoral Scholar in the <a href="https://med.stanford.edu/mimi.html" target="_blank" rel="noopener noreferrer">Machine Intelligence for Medical Imaging (<span className="text-blue-600 font-medium">MIMI</span>) Laboratory</a> at Stanford University. My work focuses on machine learning, medical imaging, and biomechanics, developing tools that bridge computational methods with musculoskeletal research and clinical care.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            I earned my Master's in Biomedical Engineering from the University at Buffalo, where I played NCAA Women's Soccer, and my PhD from the University of Michigan focusing on neuromuscular adaptations following knee injuries using advanced imaging to assess muscle and joint function.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            My research is shaped by my experiences as a patient who has navigated multiple surgical interventions. This drives my passion to improve methodology, collect higher quality data, and develop better pre-operative assessments and rehabilitation programs to optimize surgical outcomes.
          </p>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Education & Affiliations</h2>
            <ul className="space-y-6">
              <li className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-10">
                  <div className="w-20 h-16 relative flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/logos/stanford2.png"
                      alt="Stanford University Logo"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Stanford University</h3>
                    <p className="text-gray-600 mt-1">PostDoc, Department of Radiology</p>
                    <p className="text-gray-600 mt-1">2025 - Present</p>
                  </div>
                </div>
              </li>
              <li className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-10">
                  <div className="w-20 h-16 relative flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/logos/umich.png"
                      alt="University of Michigan Logo"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">University of Michigan</h3>
                    <p className="text-gray-600 mt-1">PhD, School of Kinesiology</p>
                    <p className="text-gray-600 mt-1">2019 - 2023</p>
                  </div>
                </div>
              </li>
              <li className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-10">
                  <div className="w-20 h-16 relative flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/logos/UB4.png"
                      alt="University at Buffalo Logo"
                      width={75}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">University at Buffalo</h3>
                    <p className="text-gray-600 mt-1">MS in Biomedical Engineering</p>
                    <p className="text-gray-600 mt-1">2016 - 2018</p>
                  </div>
                </div>
              </li>
              <li className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-10">
                  <div className="w-20 h-16 relative flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/logos/UB4.png"
                      alt="University at Buffalo Logo"
                      width={75}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">University at Buffalo</h3>
                    <p className="text-gray-600 mt-1">BS in Business Administration</p>
                    <p className="text-gray-600 mt-1">2012 - 2016</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 