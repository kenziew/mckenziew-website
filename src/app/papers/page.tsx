export default function PapersPage() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-4xl font-bold mb-8">Academic Papers</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
          <p className="text-gray-700">
            Machine Learning; Medical Imaging; Lower Limb Alignment; Orthopedic Surgery; Biomechanics; Rehabilitation Science; Osteoarthritis; Muscle Function
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Select Publications</h2>
          <ul className="space-y-8">
            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/39350350/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">The Efficacy of Blood Flow Restriction Training to Improve Quadriceps Muscle Function after Anterior Cruciate Ligament Reconstruction</h3>
                    <p className="text-gray-600">Erickson LN, Owen MK, Casadonte KR, Janatova T, Lucas K, Spencer K, Brightwell BD, Graham MC, <strong>White MS</strong>, Thomas NT, Latham CM, Jacobs CA, Conley CE, Thompson KL, Johnson DL, Hardy PA, Fry CS, Noehren B</p>
                    <p className="text-gray-600">Journal: <strong>Medicine and Science in Sports and Exercise</strong>, February 2025</p>
                    <p className="text-gray-600">PMID: 39350350 | Clinical Trial</p>
                  </div>
                  <div className="md:w-1/3 flex justify-center items-center">
                    <img src="/papers/BFRT.jpeg" alt="Blood Flow Restriction Training" className="rounded-md max-h-40 object-contain" />
                  </div>
                </div>
              </a>
            </li>
            
            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/39503724/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">Associations Between Body Mass Index, Gait Biomechanics, and In Vivo Cartilage Function After Exercise in Those With Anterior Cruciate Ligament Reconstruction</h3>
                    <p className="text-gray-600">Garcia SA, <strong>White MS</strong>, Gallegos J, Balza I, Kahan S, Palmieri-Smith RM</p>
                    <p className="text-gray-600">Journal: <strong>The American Journal of Sports Medicine</strong>, November 2024</p>
                    <p className="text-gray-600">PMID: 39503724 | Reads: 18</p>
                  </div>
                  <div className="md:w-1/3 flex justify-center items-center">
                    <img src="/papers/Associationsjpg.jpg" alt="Associations Between BMI and Cartilage Function" className="rounded-md max-h-40 object-contain" />
                  </div>
                </div>
              </a>
            </li>
            
            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/38824275/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">Beyond weakness: Exploring intramuscular fat and quadriceps atrophy in ACLR recovery</h3>
                    <p className="text-gray-600"><strong>White MS</strong>, Ogier AC, Chenevert TL, Zucker E, Stoneback L, Michel CP, Palmieri-Smith RM, Lepley LK</p>
                    <p className="text-gray-600">Journal: <strong>Journal of Orthopaedic Research</strong>, November 2024</p>
                    <p className="text-gray-600">PMID: 38824275</p>
                  </div>
                  <div className="md:w-1/3 flex justify-center items-center">
                    <img src="/papers/beyondweakness.jpeg" alt="Intramuscular Fat and Quadriceps Atrophy" className="rounded-md max-h-40 object-contain" />
                  </div>
                </div>
              </a>
            </li>
            
            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/39001029/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">Effect of Sampling Rate, Filtering, and Torque Onset Detection on Quadriceps Rate of Torque Development and Torque Steadiness</h3>
                    <p className="text-gray-600"><strong>White MS</strong>, Graham MC, Janatova T, Hawk GS, Thompson KL, Noehren B</p>
                    <p className="text-gray-600">Journal: <strong>Sensors</strong>, June 2024</p>
                    <p className="text-gray-600">PMID: 39001029 | Free PMC article | Reads: 162</p>
                  </div>
                  <div className="md:w-1/3 flex justify-center items-center">
                    <img src="/papers/effect.jpg" alt="Torque Development and Steadiness" className="rounded-md max-h-40 object-contain" />
                  </div>
                </div>
              </a>
            </li>
            
            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/39013455/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">Chronic Adaptions in Quadriceps Fascicle Mechanics Are Related to Altered Knee Biomechanics After Anterior Cruciate Ligament Reconstruction</h3>
                    <p className="text-gray-600"><strong>White MS</strong>, Mancini LM, Stoneback L, Palmieri-Smith RM, Lepley LK</p>
                    <p className="text-gray-600">Journal: <strong>Journal of Applied Biomechanics</strong>, July 2024</p>
                    <p className="text-gray-600">PMID: 39013455</p>
                  </div>
                  <div className="md:w-1/3 flex justify-center items-center">
                    <img src="/papers/chronic.jpeg" alt="Quadriceps Fascicle Mechanics" className="rounded-md max-h-40 object-contain" />
                  </div>
                </div>
              </a>
            </li>
            
            <li>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/36930954/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">Open-sourced semi-automatic program for ultrasound assessments of femoral trochlea cartilage health</h3>
                    <p className="text-gray-600"><strong>White MS</strong>, Palmieri-Smith RM, Lepley LK</p>
                    <p className="text-gray-600">Journal: <strong>Computer Methods in Biomechanics and Biomedical Engineering</strong>, January-March 2024</p>
                    <p className="text-gray-600">PMID: 36930954 | Free PMC article</p>
                  </div>
                  <div className="md:w-1/3 flex justify-center items-center">
                    <img src="/papers/opensource.jpg" alt="Ultrasound Assessments" className="rounded-md max-h-40 object-contain" />
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">View All Publications</h2>
          <p className="text-gray-700 mb-4">Access my complete publication history through these academic profiles:</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.researchgate.net/profile/Mckenzie-White"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              View ResearchGate Profile
            </a>
            <a
              href="https://scholar.google.com/citations?user=9SerzccAAAAJ&hl=en&authuser=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              View Google Scholar Profile
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/?term=McKenzie+S+White"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              View PubMed Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 