import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Mail, MapPin, ClipboardList, Info, HelpCircle, MessageCircle } from 'lucide-react';

const Admissions = () => {
  const processSteps = [
    {
      title: "1. Interview Booking",
      desc: "Parent books for an interview for the child and states the grade they are interested in."
    },
    {
      title: "2. Assessment Test",
      desc: "The Learner takes an assessment test to get an insight on areas they may need support."
    },
    {
      title: "3. Issuance of Letter",
      desc: "If the results of the assessment are satisfactory, the learner is issued with an admission letter."
    }
  ];

  const requirements = [
    "A copy of the latest school report form for ongoing learners",
    "A copy of parent’s / guardians ID Card/ Passport",
    "A copy of child’s birth certificate",
    "A transfer letter from the previous school",
    "NEMIS number and assessment number (for those registered with the Ministry of Education)"
  ];

  const benefits = [
    "Balanced Faith & Academics",
    "Safe Girls-only Environment",
    "Structured Daily Routine",
    "State-of-the-art Labs",
    "Holistic Character Building",
    "Nutritious Halal Meals"
  ];

  return (
    <div className="bg-background min-h-screen pb-24">

      <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 geometric-pattern" />
        <div className="container-custom relative z-10 text-center">
           <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Admissions Now <span className="text-secondary italic">Open</span></h1>
           <p className="text-white/70 max-w-2xl mx-auto text-lg">
             Begin your daughter's journey towards academic excellence and spiritual enlightenment. We are now accepting applications for the 2026 academic year.
           </p>
        </div>
      </section>


      <section className="py-24 container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">Admission Process</h2>
          <div className="w-20 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-primary/5 hover:border-secondary transition-colors group relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-xl shadow-lg">
                {idx + 1}
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4 mt-2">{step.title}</h3>
              <p className="text-charcoal/60 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      <section className="pb-24 container-custom">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-primary/5 border border-primary/5">
               <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-secondary/10 p-3 rounded-2xl">
                     <ClipboardList className="text-secondary" size={28} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary">Admission Requirements</h2>
               </div>
               
               <div className="space-y-6">
                  {requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                       <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                       <p className="text-charcoal/80 font-medium">{req}</p>
                    </div>
                  ))}
               </div>
            </div>


            <div className="space-y-12">
               <div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-8 underline decoration-secondary decoration-4 underline-offset-8">Why Choose Mumtaaz?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {benefits.map((benefit, idx) => (
                       <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 flex items-center space-x-3">
                          <CheckCircle2 className="text-secondary" size={18} />
                          <span className="font-bold text-primary/80">{benefit}</span>
                       </div>
                     ))}
                  </div>
               </div>


               <div className="bg-primary-dark rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     <HelpCircle size={120} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-8 text-secondary">Get in Touch</h3>
                  <div className="space-y-6">
                     <div className="group">
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">Accounting & Fees</p>
                        <div className="flex flex-col space-y-2">
                           <div className="flex items-center space-x-4 text-xl font-bold text-white group-hover:text-secondary transition-colors">
                              <Phone size={20} className="text-secondary" />
                              <a href="tel:+254112210105">+254 112 210105</a>
                           </div>
                           <a href="https://wa.me/254112210105" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-[#25D366] text-xs font-bold hover:underline">
                              <MessageCircle size={14} />
                              <span>Chat on WhatsApp</span>
                           </a>
                        </div>
                     </div>
                     <div className="group">
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">Admissions Office (Dr. Mahmoud)</p>
                        <div className="flex flex-col space-y-2">
                           <div className="flex items-center space-x-4 text-xl font-bold text-white group-hover:text-secondary transition-colors">
                              <Phone size={20} className="text-secondary" />
                              <a href="tel:+254113966669">+254 113 966669</a>
                           </div>
                           <a href="https://wa.me/254113966669" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-[#25D366] text-xs font-bold hover:underline">
                              <MessageCircle size={14} />
                              <span>Chat on WhatsApp</span>
                           </a>
                        </div>
                     </div>
                     <div className="group">
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">School Lead (Mama Zainab)</p>
                        <div className="flex flex-col space-y-2">
                           <div className="flex items-center space-x-4 text-xl font-bold text-white group-hover:text-secondary transition-colors">
                              <Phone size={20} className="text-secondary" />
                              <a href="tel:+254722288688">+254 722 288688</a>
                           </div>
                           <a href="https://wa.me/254722288688" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-[#25D366] text-xs font-bold hover:underline">
                              <MessageCircle size={14} />
                              <span>Chat on WhatsApp</span>
                           </a>
                        </div>
                     </div>
                     <div className="pt-4 border-t border-white/10">
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">Official Email</p>
                        <div className="flex items-center space-x-4 text-lg font-bold text-white">
                           <Mail size={20} className="text-secondary" />
                           <a href="mailto:abumudhafffar94@gmail.com" className="hover:text-secondary transition-colors break-all">abumudhafffar94@gmail.com</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>


      <section className="container-custom">
         <div className="bg-secondary rounded-[3rem] p-8 md:p-12 text-center text-primary relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">You Are All Welcome</h2>
            <p className="text-primary/70 mb-8 max-w-xl mx-auto font-medium">
               We maintain small class sizes to ensure personalized attention. Begin your journey with us today.
            </p>
            <button className="bg-primary text-white px-8 md:px-12 py-4 rounded-full font-bold text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl">
               Download Application Form
            </button>
         </div>
      </section>
    </div>
  );
};

export default Admissions;
