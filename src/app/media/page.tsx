export default function MediaPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Media & Articles</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Articles & Features</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <a
                href="https://www.evidenceandpractice.com/blogs/the-long-term-burden-of-oversimplified-data-and-diagnoses"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img
                      src="/blogs/xrays.jfif"
                      alt="The Long-Term Burden of Oversimplified Data and Diagnoses article"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">The Long-Term Burden of Oversimplified Data and Diagnoses</h3>
                    <p className="text-gray-600">Evidence & Practice - A Patient-Researcher Perspective</p>
                    <p className="text-gray-600 mt-2">My personal account of navigating the healthcare system as both a patient and researcher, highlighting the impact of incomplete assessments and the importance of comprehensive approaches in musculoskeletal care.</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <a
                href="https://www.ubspectrum.com/article/2013/11/protecting-her-goal"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img
                      src="/blogs/protect_her_goal.jpg"
                      alt="Protecting Her Goal article"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">Protecting Her Goal</h3>
                    <p className="text-gray-600">UB Spectrum - University at Buffalo</p>
                    <p className="text-gray-600 mt-2">Feature article about my journey as an NCAA athlete at the University at Buffalo, overcoming physical challenges to play Division I women's soccer.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 