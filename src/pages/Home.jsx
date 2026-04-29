import { motion } from 'framer-motion';
import { Shield, BookOpen, Clock, Heart, ArrowRight, GraduationCap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

import campusImg from '../assets/campus_aerial.png';
import labImg from '../assets/students_lab.png';
import buildingImg from '../assets/school_building.png';

const Home = () => {
  const { openModal } = useModal();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="overflow-hidden">

      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-background">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-6 inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full"
              >
                <Star className="text-secondary w-4 h-4 fill-secondary" />
                <span className="text-primary text-xs font-bold uppercase tracking-widest">A Premier Islamic Girls Institution</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-tight"
              >
                Where <span className="text-secondary italic">Faith</span> Meets <br />
                Academic Excellence
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-charcoal/70 text-lg mb-10 font-light max-w-xl"
              >
                Nurturing disciplined, confident, and knowledgeable young Muslim women in a secure, faith-based environment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <button 
                  onClick={openModal}
                  className="btn-primary w-full sm:w-auto text-center hover:scale-105 transition-transform"
                >
                  Apply Now
                </button>
                <Link to="/academics" className="btn-outline w-full sm:w-auto text-center">Explore Programs</Link>
              </motion.div>
            </div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex-1 w-full"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] -rotate-3" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src={campusImg}
                    alt="Mumtaaz Campus"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="bg-primary-dark py-12 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <Shield className="text-secondary w-8 h-8 mb-2" />
              <h3 className="text-white font-serif font-bold text-sm">Secure Environment</h3>
              <p className="text-white/40 text-[10px] uppercase tracking-wider font-semibold">Girls-only Campus</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <BookOpen className="text-secondary w-8 h-8 mb-2" />
              <h3 className="text-white font-serif font-bold text-sm">Academic Excellence</h3>
              <p className="text-white/40 text-[10px] uppercase tracking-wider font-semibold">Balanced Curriculum</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Clock className="text-secondary w-8 h-8 mb-2" />
              <h3 className="text-white font-serif font-bold text-sm">Structured Routine</h3>
              <p className="text-white/40 text-[10px] uppercase tracking-wider font-semibold">Tarbiyah Focused</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Heart className="text-secondary w-8 h-8 mb-2" />
              <h3 className="text-white font-serif font-bold text-sm">Spiritual Growth</h3>
              <p className="text-white/40 text-[10px] uppercase tracking-wider font-semibold">Quranic Foundation</p>
            </div>
          </div>
        </div>
      </section>


      <section className="section-padding bg-background geometric-pattern">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Academic Programs</h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
            <p className="mt-6 text-charcoal/60 max-w-2xl mx-auto italic font-serif">
              "Seeking knowledge is an obligation upon every Muslim."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Junior Boarding',
                grade: '(Grades 7, 8 & 9)',
                desc: 'A secure and nurturing boarding environment focused on early excellence.',
                img: buildingImg
              },
              {
                title: 'Junior Day',
                grade: '(Grades 7, 8 & 9)',
                desc: 'Quality education for day students with strong Islamic foundation.',
                img: buildingImg
              },
              {
                title: 'Senior Boarding',
                grade: '(Grades 10, 11 & 12) & Form 3 & 4',
                desc: 'Intensive KCSE preparation in a results-oriented boarding facility.',
                img: labImg
              },
              {
                title: 'Senior Day',
                grade: '(Grades 10, 11 & 12) & Form 3 & 4',
                desc: 'Advanced day school program focusing on university readiness.',
                img: labImg
              }
            ].map((program, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-primary/5"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-10 border border-primary/5 rounded-b-3xl">
                  <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-2 block">{program.grade}</span>
                  <h3 className="text-3xl font-serif font-bold text-primary mb-4">{program.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed mb-8">{program.desc}</p>
                  <Link to="/academics" className="flex items-center space-x-2 text-primary font-bold hover:text-secondary transition-colors group">
                    <span>Explore Program</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 geometric-pattern scale-150 rotate-45" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="bg-secondary/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
                <GraduationCap className="text-secondary w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Rooted in the Quran. <br />
              <span className="text-secondary italic">Guided by Sunnah.</span>
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Mumtaaz Girls High School is more than an institution; it's a sanctuary where faith and intellect converge. We believe that true success lies in the balance of worldly knowledge and spiritual depth.
            </p>
            <Link to="/islamic-life" className="btn-primary inline-block">Learn About Our Tarbiyah</Link>
          </motion.div>
        </div>
      </section>


      <section className="section-padding bg-background">
        <div className="container-custom">
           <div className="bg-primary-dark rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl transition-transform" />
              
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Secure Your Daughter's <br /> <span className="text-secondary">Future Today</span></h2>
              <p className="text-white/60 mb-12 max-w-xl mx-auto">Join a community of excellence and faith. You are all welcome to enroll for the upcoming academic session.</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={openModal}
                  className="btn-primary px-12 py-5 text-lg hover:scale-105 transition-transform"
                >
                  Apply Now
                </button>
                <div className="flex items-center space-x-4 text-white/80">
                   <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <ArrowRight className="text-secondary" />
                   </div>
                   <span className="font-semibold tracking-wide">Join 200+ Confident Students</span>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
