import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail } from 'lucide-react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import { CONTACT_INFO } from '../constants';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const message = `Name: ${data.name}\nPhone: ${data.phone}\nCity: ${data.city}\nEmail: ${data.email}\nInterest: ${data.interestType}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919347838756?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-primary py-16"
      >
         <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4">Get in Touch</h1>
            <p className="text-orange-100 text-base sm:text-lg">Have questions about franchising, partnerships, or just want to say hi?</p>
         </div>
      </motion.div>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display font-bold text-3xl mb-8 text-secondary">Contact Details</h2>
            <div className="space-y-8">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="flex items-start gap-4"
               >
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                     <MapPin className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-lg">Head Office</h3>
                     <p className="text-text-light mt-1 text-lg">FRUITLINQ AGRO PRIVATE LIMITED</p>
                     <p className="text-text-light text-lg">{CONTACT_INFO.address}</p>
                  </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 className="flex items-start gap-4"
               >
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                     <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-lg">Phone / WhatsApp</h3>
                     <p className="text-text-light mt-1 text-lg">
                       <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary transition-colors">{CONTACT_INFO.phone}</a>
                     </p>
                     <p className="text-base text-gray-400">Mon-Sat, 9am - 7pm</p>
                  </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.5 }}
                 className="flex items-start gap-4"
               >
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                     <Mail className="text-contrast w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-lg">Email</h3>
                     <p className="text-text-light mt-1 text-lg">
                       <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
                     </p>
                  </div>
               </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100"
            >
               <h3 className="font-bold text-lg mb-4">Quick Support</h3>
               <p className="text-base text-text-light mb-4">Need immediate assistance with a vending machine?</p>
               <Button
                 variant="secondary"
                 onClick={() => window.open('https://wa.me/919347838756', '_blank')}
                 className="flex items-center gap-2"
               >
                 Chat on WhatsApp
               </Button>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100"
          >
             <h2 className="font-display font-bold text-2xl mb-6">Send us a Message</h2>
             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                   <label className="block text-sm font-medium mb-1">Name</label>
                   <input {...register("name", { required: true })} className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary outline-none" placeholder="Your name" />
                   {errors.name && <span className="text-red-500 text-xs">Required</span>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="block text-sm font-medium mb-1">Phone</label>
                     <input {...register("phone", { required: true })} className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary outline-none" placeholder="Mobile" />
                     {errors.phone && <span className="text-red-500 text-xs">Required</span>}
                  </div>
                  <div>
                     <label className="block text-sm font-medium mb-1">City</label>
                     <input {...register("city", { required: true })} className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary outline-none" placeholder="City" />
                     {errors.city && <span className="text-red-500 text-xs">Required</span>}
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-medium mb-1">Email</label>
                   <input {...register("email", { required: true })} className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary outline-none" placeholder="Email" />
                   {errors.email && <span className="text-red-500 text-xs">Required</span>}
                </div>

                <div>
                   <label className="block text-sm font-medium mb-1">I am interested in</label>
                   <select {...register("interestType")} className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary outline-none bg-white">
                      <option value="Franchise">Franchise Opportunity</option>
                      <option value="Partnership">Location Partnership (Mall/Office)</option>
                      <option value="Support">Customer Support</option>
                   </select>
                </div>

                <Button type="submit" fullWidth className="mt-4">Request Call Back</Button>
             </form>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Contact;