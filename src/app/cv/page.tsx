export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Curriculum Vitae</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Download PDF Version</h2>
        <a
          href="/Academic_CV_McKenzieWhite_forwebsite.pdf"
          download
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Download CV (PDF)
        </a>
      </div>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">PhD Movement Science</h3>
            <p className="text-gray-600">University of Michigan, Ann Arbor, MI</p>
            <p className="text-gray-500">August 2023</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">MS Biomedical Engineering</h3>
            <p className="text-gray-600">University at Buffalo, The State University of New York</p>
            <p className="text-gray-500">Feb 2018</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">BS Business Administration</h3>
            <p className="text-gray-600">University at Buffalo, The State University of New York</p>
            <p className="text-gray-500">May 2016</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Post-Doctoral Scholar</h3>
            <p className="text-gray-600">Stanford University, Department of Radiology</p>
            <p className="text-gray-500">01/2025 - Current</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Post-Doctoral Scholar</h3>
            <p className="text-gray-600">University of Kentucky, Department of Physical Therapy</p>
            <p className="text-gray-500">09/2023 - 11/2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Developed custom application for musculoskeletal ultrasound image processing</li>
              <li>Built collaborations with the Bioinformatics and Artificial Intelligence Cores to develop fully automated image analysis pipelines for processing B-mode Ultrasound</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Graduate Research Assistant in Kinesiology</h3>
            <p className="text-gray-600">University of Michigan</p>
            <p className="text-gray-500">06/2019-08/2023</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Custom workflow development for the following data sources:</li>
              <li>Dynamic B-mode ultrasound imaging for quantifying muscle fascicle and tendon mechanics</li>
              <li>Knee cartilage composition via T1rho/T2 magnetic resonance imaging</li>
              <li>Multi-stack quadriceps muscle fat infiltration via Dixon magnetic resonance imaging</li>
              <li>Static B-mode ultrasound assessments of femoral trochlear cartilage health</li>
              <li>Software implementation for quadriceps muscle architecture (diffusion tensor imaging)</li>
              <li>Automated workflow development that utilizes 3D marker-less motion capture (DeepLabCut)</li>
              <li>Developed multiple project structures, management plans for 20+ undergraduate students with emphasis on strategic planning, productivity, and building a sustainable lab culture centered on the following core values: trust, integrity, teamwork, dedication, and celebration</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Graduate Research Assistant in Kinesiology</h3>
            <p className="text-gray-600">University of Connecticut</p>
            <p className="text-gray-500">08/2018-06/2019</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Implemented 2D marker-less motion capture into rodent lab and created a semi-automatic program to assess lower extremity gait (python)</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Graduate Student in Biomedical Engineering</h3>
            <p className="text-gray-600">University at Buffalo</p>
            <p className="text-gray-500">08/2016-01/2018</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Lower extremity gait analyses using Vicon Motion Capture Systems and Visual 3D C-Motion software</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Programming</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Python</li>
                <li>MATLAB</li>
                <li>R</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Imaging</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>MRI (Dixon, DTI, T1rho/T2 Mapping)</li>
                <li>Ultrasound (B-mode, Shear Wave)</li>
                <li>Computed Tomography</li>
                <li>X-rays</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Motion Analysis</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Vicon, Visual3D, Motion Capture</li>
                <li>Markerless Tracking</li>
                <li>Lower Extremity Biomechanics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Project & Team Management</li>
                <li>Strategic Planning</li>
                <li>Mentorship</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 