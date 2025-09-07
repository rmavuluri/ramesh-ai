import React from 'react'

const AboutMeSlider = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Slider Panel */}
      <div className="absolute top-0 left-0 right-0 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close about me"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex-shrink-0">
                <img 
                  src="/CR2.png" 
                  alt="Ramesh Mavuluri" 
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Ramesh Mavuluri</h3>
                <p className="text-xl text-blue-600 mb-4">AI Researcher & Developer</p>
                <p className="text-gray-600 leading-relaxed">
                  Passionate about artificial intelligence, machine learning, and building innovative solutions 
                  that make technology more accessible and impactful for everyone.
                </p>
              </div>
            </div>

            {/* Details Sections */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Experience */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                  Experience
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>AI Research & Development</strong><br />
                      Specializing in large language models and emerging AI architectures
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Full-Stack Development</strong><br />
                      Building scalable web applications with modern technologies
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Technical Writing</strong><br />
                      Creating educational content about AI and machine learning
                    </div>
                  </li>
                </ul>
              </div>

              {/* Skills */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Skills & Expertise
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Fullstack Development</span>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Spring Boot</span>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Apache Kafka</span>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">React & Angular & JavaScript</span>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Typescript SDK & AI Libraries</span>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Python SDK & AI Libraries</span>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Terraform &Cloud & DevOps</span>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Education
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h5 className="font-semibold text-gray-900">B.Tech in Computer Science and Engineering</h5>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h5 className="font-semibold text-gray-900">Diploma in Electrical & Electronics Engineering</h5>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </h4>
                <div className="space-y-3">
                  <a 
                    href="https://ramesh-ai.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    ramesh-ai.com
                  </a>
                  <a 
                    href="https://rmavuluri.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    rmavuluri.com
                  </a>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    rmavuluri@protonmail.com <br/>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 (954) 870-9544
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                "My mission is to democratize AI knowledge and make advanced machine learning concepts 
                accessible to everyone. Through this platform, I aim to bridge the gap between complex 
                AI research and practical applications, empowering learners to understand and implement 
                cutting-edge AI solutions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeSlider
