import { motion } from 'framer-motion';
import { BookOpen, Heart, Globe, Star, MapPin, Calendar, ArrowRight, Award, Compass } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Blog = () => {
  const { openModal } = useModal();
  const animations = {
    fadeIn: { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 } },
    stagger: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-white min-h-screen pb-24">

      <section className="bg-primary pt-32 pb-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 geometric-pattern" />
        <div className="container-custom relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-secondary font-bold text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            Insights & Stories
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 max-w-4xl mx-auto leading-tight"
          >
            Where Knowledge Meets <span className="text-secondary italic">Faith</span>
          </motion.h1>
          <div className="flex items-center justify-center space-x-6 text-white/60 text-sm font-medium">
             <span className="flex items-center space-x-2"><Calendar size={14} className="text-secondary" /> <span>April 2026</span></span>
             <span className="flex items-center space-x-2"><BookOpen size={14} className="text-secondary" /> <span>8 Min Read</span></span>
          </div>
        </div>
      </section>


      <section className="container-custom py-20">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            

            <div className="lg:col-span-4 order-2 lg:order-1">
               <motion.div {...animations.fadeIn} className="sticky top-32 space-y-8">
                  <div className="bg-primary-dark rounded-[2.5rem] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                        <Compass size={100} />
                     </div>
                     <h3 className="text-2xl font-serif font-bold mb-6 text-secondary">Quick Info</h3>
                     <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                           <MapPin className="text-secondary shrink-0 mt-1" size={20} />
                           <div>
                              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Location</p>
                              <p className="font-semibold">Nakuru, Kenya</p>
                           </div>
                        </div>
                        <div className="flex items-start space-x-4">
                           <Award className="text-secondary shrink-0 mt-1" size={20} />
                           <div>
                              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Admissions</p>
                              <p className="font-semibold text-secondary">Currently ongoing</p>
                              <p className="text-xs text-white/60 mt-1">Grade 7, Forms 3 & 4</p>
                           </div>
                        </div>
                     </div>
                     <button 
                        onClick={openModal}
                        className="mt-10 btn-primary w-full text-center inline-block"
                     >
                        Join the Family
                     </button>
                  </div>

                  <div className="bg-primary/5 rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-primary/10">
                     <h3 className="text-xl font-serif font-bold mb-6 text-primary">Key Pathways</h3>
                     <ul className="space-y-4">
                        {['STEM Track', 'Humanities & Social Sciences', 'Technical Excellence', 'Quran Hifdh'].map((item, i) => (
                           <li key={i} className="flex items-center space-x-3 text-primary/80 text-sm font-medium">
                              <Star size={14} className="text-secondary fill-secondary" />
                              <span>{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </motion.div>
            </div>


            <div className="lg:col-span-8 order-1 lg:order-2">
               <motion.div {...animations.fadeIn} className="prose prose-lg max-w-none">
                  <p className="text-xl md:text-2xl font-serif text-primary mb-10 leading-relaxed drop-cap italic">
                     "If you’re looking for a school that feels like a second home, you’ve found it!" 
                  </p>
                  
                  <div className="space-y-8 text-charcoal/80 leading-relaxed text-sm md:text-lg">
                     <p>
                        At Mumtaaz Girls High School in Nakuru, we’re all about more than just passing exams. Our motto, <strong>"Where Knowledge Meets Faith,"</strong> isn’t just a catchy phrase—it’s how we live every day. We believe that being a great student goes hand-in-hand with being a person of strong character and deep faith.
                     </p>
                     
                     <p>
                        From the moment our girls walk through the gates, they’re stepping into an environment where they’re encouraged to grow spiritually while reaching for the stars academically. It's a sanctuary where the heart and the mind are nurtured in equal measure.
                     </p>

                     <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary pt-10 border-t border-primary/5">Future Leaders & Global Perspectives</h2>
                     <p>
                        Wondering about classes? We’ve got you covered! Whether your daughter is a future scientist, a creative writer, or has a knack for technical skills, our Junior and Senior School pathways are designed to help her find her unique strength. 
                     </p>
                     <p>
                        We even offer languages like <strong>Arabic and Kiswahili</strong> alongside English to give our girls a truly global perspective. It’s all about giving them the tools they need to become the leaders of tomorrow, supported by mentors who truly care about their journey.
                     </p>

                     <div className="my-16 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                        <div className="bg-secondary/10 p-6 md:p-8 rounded-3xl">
                           <h4 className="font-serif font-bold text-primary mb-4">Academic Tracks</h4>
                           <ul className="space-y-2">
                              <li><strong>STEM:</strong> Math, Bio, Chem, Phys</li>
                              <li><strong>Social Sciences:</strong> History, Geog, Business</li>
                              <li><strong>Technical:</strong> Computer, Ag, Home Science</li>
                           </ul>
                        </div>
                        <div className="bg-primary/10 p-6 md:p-8 rounded-3xl">
                           <h4 className="font-serif font-bold text-primary mb-4">Life Beyond Books</h4>
                           <ul className="space-y-2">
                              <li><strong>Athletics:</strong> Football, Netball, Volleyball</li>
                              <li><strong>Creative:</strong> Drama, Music, Theatre Arts</li>
                              <li><strong>Spiritual:</strong> Quran Hifdh, Tarbiyah</li>
                           </ul>
                        </div>
                     </div>

                     <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary pt-10 border-t border-primary/5">A Supportive Community</h2>
                     <p>
                        But it’s not all just books and study sessions. We take pride in our warm, supportive community where every girl is seen and celebrated. Whether we're wishing our Class of 2025 the absolute best in their exams or welcoming new faces during admissions, there’s always a sense of excitement in the air. 
                     </p>
                     <p>
                        If you’re ready to see your daughter thrive in a place that touches hearts and transforms lives, come join the Mumtaaz family! Our comprehensive academic curriculum is designed to empower young women through diverse learning pathways, ensuring every student receive a holistic education that prepares them for both professional success and personal growth.
                     </p>
                  </div>

                  <div className="mt-20 p-8 md:p-10 bg-primary-dark rounded-[3rem] text-center text-white">
                     <Heart className="text-secondary mx-auto mb-6" size={40} />
                     <h3 className="text-xl md:text-2xl font-serif font-bold mb-4">Become Part of the Story</h3>
                     <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">Discover an environment where your daughter can truly flourish in faith and knowledge.</p>
                     <button
                        onClick={openModal}
                        className="btn-primary inline-flex items-center space-x-2"
                     >
                        <span>Admissions Ongoing</span>
                        <ArrowRight size={18} />
                     </button>
                  </div>
               </motion.div>
            </div>

         </div>
      </section>
    </div>
  );
};

export default Blog;
