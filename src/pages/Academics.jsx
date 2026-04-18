import { motion } from 'framer-motion';
import { BookOpen, Award, Microscope, Users, CheckCircle2, Star, Moon } from 'lucide-react';
import labImg from '../assets/students_lab.png';
import { useModal } from '../context/ModalContext';

const Academics = () => {
  const { openModal } = useModal();
  const categories = [
    {
      title: "Junior School",
      subtitle: "Grade 7",
      description: "Our Junior School program is designed to bridge the gap between primary and secondary education, focusing on core competencies, character development, and Islamic integration.",
      features: ["Competency Based Curriculum", "Advanced ICT Integration", "Islamic Studies Alignment", "Life Skills Training"]
    },
    {
      title: "Senior School",
      subtitle: "Forms 3 & 4",
      description: "A results-oriented program focused on KCSE excellence and university readiness. We emphasize deep conceptual understanding and disciplined study habits.",
      features: ["Intensive KCSE Preparation", "Career Mentorship", "Scientific Inquiry", "Leadership Programs"]
    }
  ];

  return (
    <div className="bg-background min-h-screen">

      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 geometric-pattern" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Excellence in Education</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Empowering Minds Through <br /> <span className="text-secondary italic">Logical Instruction</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Our academic approach combines the rigor of the Kenyan National Curriculum with a unique Islamic perspective, ensuring our students are prepared for both this world and the hereafter.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl shadow-primary/5 border border-primary/5"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
                {idx === 0 ? <BookOpen className="text-primary" size={32} /> : <Award className="text-primary" size={32} />}
              </div>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">{cat.subtitle}</span>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">{cat.title}</h2>
              <p className="text-charcoal/60 mb-8 leading-relaxed text-sm md:text-base">{cat.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-3 text-sm font-medium text-primary/80">
                    <CheckCircle2 className="text-secondary shrink-0" size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      <section className="bg-primary/5 py-24 border-y border-primary/10">
         <div className="container-custom">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">Curriculum Framework</h2>
               <p className="text-charcoal/60">We offer a robust integration of three world-class learning tracks.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "National Curriculum", desc: "The official Kenyan Competency Based Curriculum (CBC) and KCSE guidelines.", icon: <Star className="text-secondary" /> },
                 { title: "Quran Hifdh", desc: "Comprehensive memorization program with specialized tracks for Hifdh proficiency.", icon: <Moon className="text-secondary" /> },
                 { title: "Mumtaaz Certificate", desc: "A specialized spiritual certification program covering Fiqh, Seerah, and Akhlaq.", icon: <CheckCircle2 className="text-secondary" /> }
               ].map((track, idx) => (
                 <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-primary/5 text-center group hover:border-secondary transition-colors">
                    <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">{track.icon}</div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-4">{track.title}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{track.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>


      <section className="bg-primary-dark py-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Our Teaching Methodology</h2>
              <div className="w-20 h-1 bg-secondary mx-auto" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Microscope className="text-secondary" />,
                  title: "Inquiry Based",
                  desc: "We encourage students to ask 'Why?' and 'How?', fostering curiosity about the natural world."
                },
                {
                  icon: <Users className="text-secondary" />,
                  title: "Guided Instruction",
                  desc: "Personalized attention from dedicated educators who mentor students both academically and morally."
                },
                {
                  icon: <Star className="text-secondary" />,
                  title: "Disciplined Focus",
                  desc: "A structured environment ensures students remain focused on their goals without distractions."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>


      <section className="py-16 container-custom">
        <div className="relative rounded-[2rem] overflow-hidden shadow-xl group border-4 border-secondary/10 max-w-5xl mx-auto">
             <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
             <img src={labImg} alt="Students in Lab" className="w-full h-[300px] object-cover object-center group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent z-20">
                <div className="max-w-xl">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2 underline decoration-secondary decoration-2 underline-offset-8">Hands-on Inquiry</h3>
                    <p className="text-white/70 text-sm">Our laboratories provide students with tools for real-world exploration.</p>
                </div>
             </div>
        </div>
      </section>


      <section className="py-24 container-custom text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8">Committed to KCSE Excellence</h2>
        <p className="text-charcoal/60 max-w-2xl mx-auto mb-12">
          Through weekly assessments, intensive remedial classes, and professional guidance, we ensure every girl reaches her full potential.
        </p>
        <button 
          onClick={openModal}
          className="inline-flex items-center space-x-2 md:space-x-4 bg-primary text-white px-8 md:px-10 py-5 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform hover:bg-primary-dark"
        >
           <span className="text-base md:text-lg">KCSE Candidate? Apply Now</span>
           <Award className="text-secondary shrink-0" size={24} />
        </button>
      </section>
    </div>
  );
};

export default Academics;
