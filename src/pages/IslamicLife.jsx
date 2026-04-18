import { motion } from 'framer-motion';
import { Moon, Sun, Heart, Users, Clock, BookOpen, Star, Shield, Award, Smile } from 'lucide-react';
import islamicImg from '../assets/islamic_study_real.jpg';

const IslamicLife = () => {
  const specialFeatures = [
    { title: "Islamic Studies", icon: <BookOpen className="text-secondary" /> },
    { title: "Quran Hifdh", icon: <Star className="text-secondary" /> },
    { title: "Islamic Values", icon: <Heart className="text-secondary" /> },
    { title: "Dedicated Teachers", icon: <Users className="text-secondary" /> },
    { title: "Affordable Fee", icon: <Award className="text-secondary" /> },
    { title: "Student Focused Learning", icon: <Smile className="text-secondary" /> },
    { title: "Safe & Conducive Environment", icon: <Shield className="text-secondary" /> },
  ];

  const schedule = [
    { time: "05:00 AM", task: "Tahajjud & Fajr Prayer", desc: "Starting the day in spiritual communion." },
    { time: "05:30 AM", task: "Morning Quran Class", desc: "Hifz and Tilawah sessions with specialized teachers." },
    { time: "07:30 AM", task: "Breakfast & Morning Assembly", desc: "Daily reminders and spiritual motivation." },
    { time: "08:00 AM", task: "Academic Classes", desc: "Core subjects with Islamic integration." },
    { time: "01:00 PM", task: "Dhuhr Prayer & Lunch", desc: "Community prayer and shared meals." },
    { time: "04:00 PM", task: "Asr Prayer & Islamic Studies", desc: "Deep dive into Seerah, Fiqh, and Akhlaq." },
    { time: "06:30 PM", task: "Maghrib Prayer & Dinner", desc: "Evening reflections." },
    { time: "08:00 PM", task: "Isha Prayer & Preps", desc: "End of day study and reflection." },
  ];

  return (
    <div className="bg-background min-h-screen">

      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] opacity-10" />
        <div className="container-custom relative z-10 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="mb-6 inline-block bg-secondary/20 p-4 rounded-full"
           >
              <Moon className="text-secondary w-8 h-8 fill-secondary" />
           </motion.div>
           <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Building Strong <span className="text-secondary italic">Muslim Women</span></h1>
           <p className="text-white/70 max-w-2xl mx-auto text-lg">
             At Mumtaaz, we don't just teach Islamic subjects; we live them. Our Tarbiyah system is designed to nurture a deep love for Allah and the Sunnah.
           </p>
        </div>
      </section>


      <section className="py-24 container-custom">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-x-8 border-secondary/20">
           <img src={islamicImg} alt="Students Studying Quran" className="w-full h-[400px] md:h-[600px] object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-primary/80 md:from-primary/60 to-transparent flex items-center p-6 md:p-12">
              <div className="max-w-md text-center md:text-left">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">A Journey of Faith</h2>
                 <p className="text-white/80 text-lg">Our students don't just memorize; they understand and internalize the beauty of Islamic teachings in a modern context.</p>
              </div>
           </div>
        </div>
      </section>


      <section className="py-24 bg-primary px-4 md:px-0">
         <div className="container-custom">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Our Special Features</h2>
               <div className="w-20 h-1 bg-secondary mx-auto" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {specialFeatures.map((feature, idx) => (
                 <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-all group">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">{feature.icon}</div>
                    <span className="text-white font-serif font-bold text-sm block leading-tight">{feature.title}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>


      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">The Heart of Our School</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8">Daily Quran Program</h2>
              <p className="text-charcoal/60 mb-8 leading-relaxed text-lg">
                Our day begins before dawn with the words of Allah. Every morning from 5:30 AM to 6:30 AM, our students engage in rigorous Quran classes focusing on Tajweed, Memorization (Hifz), and Tafsir.
              </p>
              
              <div className="space-y-6">
                 {[
                   { title: "Correct Tajweed", icon: <Star className="text-secondary" /> },
                   { title: "Meaningful Reflection", icon: <Star className="text-secondary" /> },
                   { title: "Personalized Hifz Tracks", icon: <Star className="text-secondary" /> }
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-primary/5">
                      {item.icon}
                      <span className="font-bold text-primary">{item.title}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="relative">
              <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] rotate-3" />
              <div className="relative bg-primary-dark rounded-[3rem] p-12 text-white border border-white/10 shadow-2xl">
                 <h3 className="text-2xl font-serif font-bold mb-6 text-secondary">Tarbiyah Pillars</h3>
                 <div className="space-y-8">
                    <div className="flex space-x-6">
                       <Heart className="text-secondary shrink-0" size={32} />
                       <div>
                          <h4 className="font-bold mb-2">Modesty (Haya)</h4>
                          <p className="text-white/50 text-sm">Nurturing a sense of dignity and respect in speech and appearance.</p>
                       </div>
                    </div>
                    <div className="flex space-x-6">
                       <Users className="text-secondary shrink-0" size={32} />
                       <div>
                          <h4 className="font-bold mb-2">Character (Akhlaq)</h4>
                          <p className="text-white/50 text-sm">Focusing on kindness, integrity, and social responsibility.</p>
                       </div>
                    </div>
                    <div className="flex space-x-6">
                       <BookOpen className="text-secondary shrink-0" size={32} />
                       <div>
                          <h4 className="font-bold mb-2">Knowledge (Ilm)</h4>
                          <p className="text-white/50 text-sm">Equipping students with a deep understanding of Islamic theology.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>


      <section className="section-padding bg-primary-dark relative">
        <div className="container-custom relative z-10">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">A Day at Mumtaaz</h2>
              <p className="text-secondary font-serif italic">Disciplined. Spiritual. Productive.</p>
           </div>

           <div className="max-w-4xl mx-auto">
              {schedule.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-center border-l-2 border-secondary/20 md:border-l-0 relative mb-12 md:mb-0"
                >

                   <div className="md:hidden absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary" />

                   <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:py-8">
                      <h4 className="text-secondary font-bold text-xl mb-1">{item.time}</h4>
                   </div>

                   <div className="hidden md:flex flex-col items-center justify-center relative px-8">
                      <div className="w-0.5 h-full bg-secondary/20 absolute" />
                      <div className="w-4 h-4 rounded-full bg-secondary z-10" />
                   </div>

                   <div className="w-full md:w-1/2 md:pl-12 md:py-8">
                      <h4 className="text-white font-serif font-bold text-2xl mb-2">{item.task}</h4>
                      <p className="text-white/40 text-sm">{item.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>


      <section className="py-32 container-custom text-center">
         <div className="max-w-3xl mx-auto italic font-serif text-2xl md:text-3xl text-primary leading-relaxed">
            "We do not just produce graduates; we produce mothers of the ummah, leaders of the future, and devotees of the faith."
         </div>
      </section>
    </div>
  );
};

export default IslamicLife;
