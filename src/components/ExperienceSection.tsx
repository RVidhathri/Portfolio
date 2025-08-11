import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section className="relative py-20 bg-purple-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-purple-800">Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* AIML Intern Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200"
          >
            <h3 className="text-xl font-semibold mb-2">AIML Intern</h3>
            <p className="text-gray-600 mb-4">SkillHigh (Remote)</p>
            <p className="text-gray-500 mb-6">June 2025 – Present</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                <p className="text-gray-700">Developed a machine learning model to classify emails as spam.</p>
              </li>
              <li className="flex items-start">
                <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                <p className="text-gray-700">Built a handwritten digit classification model using TensorFlow, Keras, and the MNIST dataset.</p>
              </li>
            </ul>
          </motion.div>

          {/* Full Stack Developer Intern Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer Intern</h3>
            <p className="text-gray-600 mb-4">Qworkz Technology Solutions</p>
            <p className="text-gray-500 mb-6">June 2024 – July 2024</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-4 h-4 bg-pink-500 rounded-full mr-3"></span>
                <p className="text-gray-700">Built a secure document management system for uploading, viewing, and editing documents using HTML, CSS, JavaScript, and PHP Laravel</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 blur-3xl animate-float-reverse"></div>
      </div>
    </section>
  );
};

export default ExperienceSection;
