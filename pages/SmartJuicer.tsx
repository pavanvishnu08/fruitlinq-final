import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, Thermometer, CreditCard, Clock, Droplet, Activity } from 'lucide-react';
import Layout from '../components/Layout';
import Section from '../components/Section';

const SmartJuicer: React.FC = () => {
  const features = [
     { icon: Thermometer, title: "Cold Chain", desc: "Temp controlled", bg: "bg-blue-50", color: "text-contrast" },
     { icon: CreditCard, title: "UPI Enabled", desc: "Scan & Pay", bg: "bg-yellow-50", color: "text-accent" },
     { icon: Zap, title: "Fully Automatic", desc: "100% Touchless", bg: "bg-green-50", color: "text-secondary" },
     { icon: Droplet, title: "100% Fresh Juice", desc: "No additives", bg: "bg-orange-50", color: "text-primary" },
     { icon: Smartphone, title: "IoT Enabled", desc: "Real-time stats", bg: "bg-purple-50", color: "text-vibrant-purple" },
  ];

  return (
    <Layout>
      {/* Product Hero */}
      <section className="bg-background pt-24 pb-20 overflow-hidden relative">
         <div className="absolute top-20 left-10 w-32 h-32 bg-vibrant-pink/10 rounded-full blur-2xl"></div>
         <div className="absolute bottom-20 right-10 w-40 h-40 bg-vibrant-teal/10 rounded-full blur-2xl"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
            >
               <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-secondary mb-6">Meet the 5th Gen Smart Juicer</h1>
               <p className="text-lg sm:text-xl md:text-2xl text-text-light">
                 Precision engineering meets nature's bounty. The most advanced automated juicing technology in India.
               </p>
            </motion.div>
            
            <div className="relative max-w-[800px] mx-auto">
               {/* Visual Representation of Machine */}
               <img
                  src="/smartjuicerpage-machine.jpeg"
                  alt="5th Gen Smart Juicer"
                  className="relative mx-auto max-w-md md:max-w-lg w-full h-auto rounded-[3rem] shadow-2xl border-8 border-gray-100 z-10"
               />

               {/* Mobile/Tablet Grid for Features (Visible < lg) */}
               <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 px-2">
                  {features.map((f, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                         <div className={`p-2 ${f.bg} rounded-lg shrink-0`}>
                            <f.icon className={`${f.color} w-5 h-5`} />
                         </div>
                         <div>
                            <h4 className="font-bold text-sm leading-tight">{f.title}</h4>
                            <p className="text-xs text-gray-500">{f.desc}</p>
                         </div>
                    </div>
                  ))}
               </div>

               {/* Floating Features - Desktop Only (Visible >= lg) */}
               {/* Left Side */}
               <div className="hidden lg:block absolute top-[10%] left-0 xl:-left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs animate-[float_4s_ease-in-out_infinite] z-20">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-blue-50 rounded-lg">
                        <Thermometer className="text-contrast w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-sm whitespace-nowrap">Cold Chain</h4>
                        <p className="text-sm text-gray-500">Temp controlled</p>
                     </div>
                  </div>
               </div>

               <div className="hidden lg:block absolute top-[40%] left-[-20px] xl:-left-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs animate-[float_5.5s_ease-in-out_infinite_1s] z-20">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-yellow-50 rounded-lg">
                        <CreditCard className="text-accent w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-sm whitespace-nowrap">UPI Enabled</h4>
                        <p className="text-sm text-gray-500">Scan & Pay</p>
                     </div>
                  </div>
               </div>

               <div className="hidden lg:block absolute bottom-[15%] left-0 xl:-left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs animate-[float_4.5s_ease-in-out_infinite_2s] z-20">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-green-50 rounded-lg">
                        <Zap className="text-secondary w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-sm whitespace-nowrap">Fully Automatic</h4>
                        <p className="text-sm text-gray-500">100% Touchless</p>
                     </div>
                  </div>
               </div>

               {/* Right Side */}
               <div className="hidden lg:block absolute top-[20%] right-[-20px] xl:-right-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs animate-[float_5s_ease-in-out_infinite_0.5s] z-20">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-orange-50 rounded-lg">
                        <Droplet className="text-primary w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-sm whitespace-nowrap">100% Fresh Juice</h4>
                        <p className="text-sm text-gray-500">No additives</p>
                     </div>
                  </div>
               </div>
               
               <div className="hidden lg:block absolute bottom-[30%] right-0 xl:-right-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs animate-[float_5s_ease-in-out_infinite_1.5s] z-20">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-purple-50 rounded-lg">
                        <Smartphone className="text-vibrant-purple w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="font-bold text-sm whitespace-nowrap">IoT Enabled</h4>
                        <p className="text-sm text-gray-500">Real-time stats</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Tech Specs Grid */}
      <Section bgColor="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
           {[
             { title: "55 Second Service", desc: "From order to full cup in under a minute.", icon: Clock, bg: "bg-orange-50", color: "text-primary" },
             { title: "Real-time Analytics", desc: "Track sales & machine status via mobile app.", icon: Activity, bg: "bg-yellow-50", color: "text-accent" },
             { title: "Contactless", desc: "QR code ordering and UPI payment.", icon: Smartphone, bg: "bg-purple-50", color: "text-vibrant-purple" },
             { title: "Enclosed System", desc: "Hermetically sealed juicing compartment.", icon: Shield, bg: "bg-blue-50", color: "text-contrast" },
             { title: "Food Grade", desc: "All internal components are certified food-safe.", icon: Shield, bg: "bg-green-50", color: "text-secondary" },
             { title: "Auto-Cleaning", desc: "Self-cleaning cycle maintains hygiene.", icon: Zap, bg: "bg-red-50", color: "text-vibrant-red" },
           ].map((feat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-50 shadow-soft hover:shadow-card transition-shadow"
             >
                <div className={`shrink-0 w-12 h-12 ${feat.bg} rounded-full flex items-center justify-center ${feat.color}`}>
                   <feat.icon size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-lg text-text">{feat.title}</h3>
                   <p className="text-base text-text-light mt-1">{feat.desc}</p>
                </div>
             </motion.div>
           ))}
        </motion.div>
      </Section>

      {/* Technical Specifications Table */}
      <Section id="technical-specifications" bgColor="bg-green-50">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-4xl mx-auto"
         >
            <h2 className="font-display font-bold text-3xl mb-8 text-center">Technical Specifications</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-500 overflow-hidden">
               <div className="grid grid-cols-1 md:grid-cols-2">
                  {[
                     { label: "Dimensions", value: "1000(W) x 900(D) x 2100(H) mm" },
                     { label: "Floor Space", value: "Approx. 15 Sq. Ft." },
                     { label: "Fruit Capacity", value: "50-60 Kg (approx 150-180 cups)" },
                     { label: "Cup Size", value: "200ml / 250ml (Customizable)" },
                     { label: "Power Supply", value: "220V / 50Hz (Standard 15A Socket)" },
                     { label: "Connectivity", value: "4G / Wi-Fi / Ethernet" },
                     { label: "Display", value: "21-inch Interactive Touchscreen" },
                     { label: "Payment", value: "UPI (QR Code), Card, NFC" },
                  ].map((spec, i) => (
                     <div key={i} className={`flex border-b border-gray-100 last:border-0 md:odd:border-r`}>
                        <div className="w-1/3 bg-gray-50 p-4 text-base font-semibold text-text-light flex items-center">{spec.label}</div>
                        <div className="w-2/3 p-4 text-base text-text flex items-center">{spec.value}</div>
                     </div>
                  ))}
               </div>
            </div>
         </motion.div>
      </Section>
    </Layout>
  );
};

export default SmartJuicer;