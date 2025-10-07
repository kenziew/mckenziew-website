export default function ConsultingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Consulting</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8" style={{ borderLeft: '4px solid #1D63FF' }}>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I help research groups, startups, and companies harness AI-driven methods to turn complex data into actionable insights. I develop comprehensive, high-performance data workflows and can support your team at any stage of the data lifecycle, from initial collection and processing through to final analysis.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-4">My expertise lies in:</h2>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="text-2xl mr-3" style={{ color: '#1D63FF' }}>•</span>
            <span className="text-lg text-gray-700"><strong>Medical & Imaging AI:</strong> Automated image segmentation, annotation, and quantitative analyses</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3" style={{ color: '#1D63FF' }}>•</span>
            <span className="text-lg text-gray-700"><strong>Big Data Workflows:</strong> Scalable pipelines for cleaning, merging, and analyzing large multi-modal datasets</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3" style={{ color: '#1D63FF' }}>•</span>
            <span className="text-lg text-gray-700"><strong>Custom Analytics:</strong> Advanced machine learning and visualizations to drive informed decisions</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3" style={{ color: '#1D63FF' }}>•</span>
            <span className="text-lg text-gray-700"><strong>Process Automation:</strong> Streamlining repetitive tasks with AI and custom workflow automation to save time and reduce error</span>
          </li>
        </ul>
        
        <p className="text-lg text-gray-700">
          Please contact me with inquiries at <a href="mailto:kenzieswhite@gmail.com" className="hover:underline font-medium" style={{ color: '#1D63FF' }}>kenzieswhite@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}

