import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Check, TrendingUp, Settings, Users, DollarSign, Box, Plus, Minus, Timer } from 'lucide-react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import { FranchiseFormData } from '../types';

const Franchise: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FranchiseFormData>();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const onSubmit = (data: FranchiseFormData) => {
    const message = `Name: ${data.name}\nCity: ${data.city}\nPhone: ${data.phone}\nEmail: ${data.email}`;
    const whatsappUrl = `https://wa.me/919347838756?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  const faqs = [
    { q: "How much space is required for installation?", a: "The machine is compact and requires approximately 15-20 sq. ft. of space, making it ideal for lobbies, cafeterias, and corridors. Power requirements are a standard 15A socket." },
    { q: "Do I need dedicated staff to run the machine?", a: "No. The machine is fully automated. You only need a runner for 20-30 minutes daily to refill oranges, replenish cups, and clear the waste bin." },
    { q: "What is the shelf life of the oranges?", a: "Our cold-chain logistics ensure oranges stay fresh from farm to your location. Inside the machine, the temperature is controlled (5-8°C) to maintain freshness for several days." },
    { q: "How do I track my sales?", a: "You get a dedicated mobile app dashboard showing real-time sales, stock levels, machine health status, and revenue analytics." },
    { q: "What is the warranty on the machine?", a: "We provide a comprehensive 1-year warranty on the machine, covering all parts and service. Extended annual maintenance contracts (AMC) are available." },
  ];

  return (
    <Layout>
      {/* Hero */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: 'url(/img2.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-left"
            >
              <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                Own the Future  <br/>of Fresh Juice Vending
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-lg leading-relaxed">
                Start with one machine and scale to 50+. A high-margin, automated business model designed for passive income and scalability.
              </p>
              <Button onClick={() => document.getElementById('franchise-form')?.scrollIntoView({ behavior: 'smooth' })} variant="white" className="text-lg px-8 py-3">
                Apply Now
              </Button>
            </motion.div>
            <div className="hidden lg:block">
              {/* Placeholder for right side if needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Package Details */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl text-text">The Complete Franchise Package</h2>
          <p className="text-text-light mt-2 text-lg">We provide everything you need to succeed.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Machine & Setup",
              items: ["5th-Gen Smart Juicer", "Professional Installation", "1 Year Warranty", "Complete Branding"],
              color: "text-primary", border: "border-primary"
            },
            {
              title: "Operations",
              items: ["Monthly Fruit Supply", "QC Protocols", "Predictive Maintenance", "Spare Parts Support"],
              color: "text-secondary", border: "border-secondary"
            },
            {
              title: "Business Support",
              items: ["Location Assistance", "Staff Training", "Marketing Assets", "Dedicated Account Manager"],
              color: "text-vibrant-purple", border: "border-vibrant-purple"
            }
          ].map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <h3 className={`font-bold text-xl mb-6 ${pkg.color} border-b-2 ${pkg.border} pb-4 inline-block`}>{pkg.title}</h3>
              <ul className="space-y-4 block mt-2">
                {pkg.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i * 0.1) + (idx * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-text-light text-base font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Economics */}
      <Section bgColor="bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-card max-w-5xl mx-auto border border-gray-50"
        >
          <div className="text-center mb-10">
             <h2 className="font-display font-bold text-3xl">Business Snapshot</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-blue-50 group-hover:bg-blue-100 transition-colors rounded-full flex items-center justify-center mb-4 text-contrast">
                   <Timer className="w-8 h-8" />
                </div>
                <div className="font-bold text-2xl text-text">12-18 Mo</div>
                <div className="text-base text-text-light">Payback Period</div>
             </div>
             <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-green-50 group-hover:bg-green-100 transition-colors rounded-full flex items-center justify-center mb-4 text-secondary">
                   <DollarSign className="w-8 h-8" />
                </div>
                <div className="font-bold text-2xl text-text">High</div>
                <div className="text-base text-text-light">Gross Margins</div>
             </div>
             <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-orange-50 group-hover:bg-orange-100 transition-colors rounded-full flex items-center justify-center mb-4 text-primary">
                   <Box className="w-8 h-8" />
                </div>
                <div className="font-bold text-2xl text-text">Stable</div>
                <div className="text-base text-text-light">Supply Cost</div>
             </div>
             <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-purple-50 group-hover:bg-purple-100 transition-colors rounded-full flex items-center justify-center mb-4 text-vibrant-purple">
                   <Settings className="w-8 h-8" />
                </div>
                <div className="font-bold text-2xl text-text">24/7</div>
                <div className="text-base text-text-light">Automated Sales</div>
             </div>
          </div>
        </motion.div>
      </Section>

      {/* FAQ Section */}
      <Section>
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-3xl mx-auto"
         >
            <div className="text-center mb-10">
               <h2 className="font-display font-bold text-3xl">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
               {faqs.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                     <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left font-medium text-lg hover:bg-gray-50 transition-colors"
                     >
                        <span>{item.q}</span>
                        {openFaq === i ? <Minus className="text-primary w-5 h-5" /> : <Plus className="text-gray-400 w-5 h-5" />}
                     </button>
                     {openFaq === i && (
                        <div className="p-5 pt-0 text-text-light text-base leading-relaxed border-t border-gray-50 bg-gray-50/50">
                           {item.a}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </motion.div>
      </Section>

      {/* Form Section */}
      <Section id="franchise-form" className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-vibrant-pink to-secondary"></div>
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-3xl mb-2">Request Franchise Details</h2>
            <p className="text-text-light text-lg">Fill the form below to get our investment deck.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text mb-1">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Enter your name"
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-1">City</label>
              <input
                {...register("city", { required: true })}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Where do you want to start?"
              />
              {errors.city && <span className="text-red-500 text-xs mt-1">City is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-1">Phone Number</label>
              <input
                {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="10-digit mobile number"
              />
              {errors.phone && <span className="text-red-500 text-xs mt-1">Valid phone number is required</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-1">Email Address</label>
              <input
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="your@email.com"
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
            </div>

            <Button type="submit" fullWidth className="mt-4 bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Get Information Pack
            </Button>
            
            <p className="text-xs text-center text-gray-400 mt-4">
              By submitting this form, you agree to our privacy policy and allow us to contact you via WhatsApp/Call.
            </p>
          </form>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Franchise;