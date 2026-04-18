import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, School, BookOpen, MessageSquare, Phone } from 'lucide-react';

const AdmissionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    currentSchool: '',
    targetGrade: '',
    reason: '',
    parentPhone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Admission Inquiry - Mumtaaz Girls High School*%0A%0A` +
      `*Student Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Transferring From:* ${formData.currentSchool}%0A` +
      `*Interested Grade:* ${formData.targetGrade}%0A` +
      `*Reason for Transfer:* ${formData.reason}%0A` +
      `*Parent Contact:* ${formData.parentPhone}`;

    const whatsappUrl = `https://wa.me/254113966669?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary-dark/80 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden z-10"
          >
            <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-2">Apply for <span className="text-secondary italic">Admission</span></h2>
                  <p className="text-charcoal/60 text-sm">Please fill in the details below to start your journey with us.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-primary/5 rounded-full transition-colors"
                >
                  <X className="text-primary/40 hover:text-primary" size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">First Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-secondary transition-colors" size={18} />
                      <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-primary/5 border-none rounded-2xl py-4 pl-12 pr-4 text-primary font-medium focus:ring-2 focus:ring-secondary transition-all outline-none"
                        placeholder="Student First Name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Last Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-secondary transition-colors" size={18} />
                      <input
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-primary/5 border-none rounded-2xl py-4 pl-12 pr-4 text-primary font-medium focus:ring-2 focus:ring-secondary transition-all outline-none"
                        placeholder="Student Last Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Current/Previous School</label>
                  <div className="relative group">
                    <School className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-secondary transition-colors" size={18} />
                    <input
                      required
                      type="text"
                      name="currentSchool"
                      value={formData.currentSchool}
                      onChange={handleChange}
                      className="w-full bg-primary/5 border-none rounded-2xl py-4 pl-12 pr-4 text-primary font-medium focus:ring-2 focus:ring-secondary transition-all outline-none"
                      placeholder="Enter school name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Grade Interested</label>
                    <div className="relative group">
                      <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-secondary transition-colors" size={18} />
                      <select
                        required
                        name="targetGrade"
                        value={formData.targetGrade}
                        onChange={handleChange}
                        className="w-full bg-primary/5 border-none rounded-2xl py-4 pl-12 pr-4 text-primary font-medium focus:ring-2 focus:ring-secondary appearance-none transition-all outline-none"
                      >
                        <option value="">Select Grade</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Form 1">Form 1</option>
                        <option value="Form 2">Form 2</option>
                        <option value="Form 3">Form 3</option>
                        <option value="Form 4">Form 4</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Contact Number</label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-secondary transition-colors" size={18} />
                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        className="w-full bg-primary/5 border-none rounded-2xl py-4 pl-12 pr-4 text-primary font-medium focus:ring-2 focus:ring-secondary transition-all outline-none"
                        placeholder="e.g. +254..."
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Reason for Transfer</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 text-primary/20 group-focus-within:text-secondary transition-colors" size={18} />
                    <textarea
                      required
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full bg-primary/5 border-none rounded-2xl py-4 pl-12 pr-4 text-primary font-medium focus:ring-2 focus:ring-secondary min-h-[100px] transition-all outline-none resize-none"
                      placeholder="Briefly explain your reason..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 active:scale-[0.98]"
                >
                  <span>Send via WhatsApp</span>
                  <Send size={18} className="text-secondary" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionModal;
