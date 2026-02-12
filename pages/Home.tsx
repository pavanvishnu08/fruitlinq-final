import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, Globe, Droplet, Clock, ShieldCheck, Zap, Building2, GraduationCap, Plane, Stethoscope, Heart, Sun, Leaf, ShoppingBag, TrendingUp, Handshake } from 'lucide-react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:aspect-video overflow-hidden" style={{ backgroundImage: 'url(/background-image.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Floating Orange Slices */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 h-16 bg-orange-300 rounded-full blur-sm opacity-30 animate-bounce"></div>
          <div className="absolute top-20 right-20 w-12 h-12 bg-orange-200 rounded-full blur-sm opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-orange-300 rounded-full blur-sm opacity-20 animate-bounce"></div>
          <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-orange-200 rounded-full blur-sm opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-18 h-18 bg-orange-300 rounded-full blur-sm opacity-25 animate-bounce"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          {/* Centered Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-20 sm:pt-0"
          >
            <div className="text-xl md:text-2xl font-semibold text-white mb-4 tracking-wide drop-shadow-lg">
              India's First Farm-Controlled Franchise
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Farm to Cup in <p>55 Seconds</p>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              Imported, premium oranges from South Africa & Egypt. <p>Freshly squeezed in front of you.</p>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { text: "No water" },
                { text: "No sugar" },
                { text: "No ice" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <p className="text-xl sm:text-2xl font-bold text-center text-green-400 drop-shadow-lg">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/franchise" variant="primary" className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow">
                Explore Franchise
              </Button>
              <Button to="/contact" variant="outline" className="border-2 border-white text-white hover:bg-orange hover:text-black active:bg-white active:text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow">
                Request Call Back
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <Section className="relative -mt-16 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: Handshake, title: "Direct Sourcing", desc: "No Middlemen. Farm to machine.", color: "text-contrast", bg: "bg-blue-50" },
            { icon: CheckCircle, title: "Export-Grade", desc: "Premium fruit selection only.", color: "text-secondary", bg: "bg-green-50" },
            { icon: Droplet, title: "Stable Pricing", desc: "Consistent costs year-round.", color: "text-vibrant-purple", bg: "bg-purple-50" },
            { icon: Clock, title: "Year-Round Supply", desc: "Never run out of fresh stock.", color: "text-primary", bg: "bg-orange-50" },
          ].map((item, index) => (
            <Card key={index} delay={index * 0.1} className="flex flex-col items-center text-center hover:bg-white/80 border-none shadow-lg">
              <div className={`${item.bg} p-4 rounded-full shadow-sm mb-4 transition-transform hover:scale-110 duration-300`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-text">{item.title}</h3>
              <p className="text-text-light text-base">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FRUITLINQ SUPPLY Section */}
      <Section bgColor="bg-orange-50/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Global Sourcing</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-secondary">FRUITLINQ SUPPLY</h2>
            <div className="prose prose-lg text-text-light">
              <p className="mb-4 text-lg">
                Freshness you can rely on—globally. Fruitlinq manages the complete orange supply for every Fruitlinq Smart Juicer franchise, no matter where you operate. All oranges are freshly harvested from carefully selected farms in South Africa and Egypt, and handled through a strict cold-chain and quality-controlled logistics process.
              </p>
              <p className="text-lg">
                From farm selection and quality checks to temperature-controlled transport and traceability, we ensure <strong>consistent taste, food safety, and uninterrupted supply</strong> across all markets.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                  <Globe className="text-primary w-5 h-5" />
                  <span className="font-medium text-sm">South Africa & Egypt</span>
              </div>
              <div className="flex items-center gap-2">
                  <Truck className="text-primary w-5 h-5" />
                  <span className="font-medium text-sm">Cold-Chain Logistics</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg transform lg:rotate-2 hover:rotate-0 transition-transform duration-500"
          >
            <img src="/direct supply.jpg" alt="Fresh Oranges Supply" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white font-bold text-xl">100% Traceable Source</div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Farm to Cup Journey */}
      <Section id="journey" bgColor="bg-white">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Transparency</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-secondary">The Farm-to-Cup Journey</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-200 via-green-200 to-blue-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { step: "01", title: "Premium Orchards", desc: "Sourced from South Africa & Egypt", imgUrl: "/premium-orchards.png", color: "bg-primary" },
              { step: "02", title: "Grade-A Selection", desc: "Rigorous quality checks", imgUrl: "/grade-a-selection.png", color: "bg-secondary" },
              { step: "03", title: "Cold-Chain Logistics", desc: "Temperature controlled transport", imgUrl: "/cold-chain-logistics.png", color: "bg-vibrant-teal" },
              { step: "04", title: "Smart Juicing", desc: "Fresh juice in India instantly", imgUrl: "/smart-juicing.png", color: "bg-vibrant-pink" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-2">
                   <div className={`w-10 h-10 rounded-full ${step.color} text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform`}>
                     {step.step}
                   </div>
                </div>
                <div className="mt-6 text-center">
                  <img src={step.imgUrl} alt={step.title} className="w-16 h-16 mx-auto mb-4 rounded-full object-cover" />
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-base text-gray-500">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FRUITLINQ SMART JUICER Section */}
      <Section bgColor="bg-gray-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative h-[400px] sm:h-[500px] lg:h-[700px] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 order-2 lg:order-1"
           >
               {/* Visual for Tech */}
               <img src="/homepage-machine.jpeg" alt="Smart Technology" className="w-full h-full object-cover opacity-1000" />
               <div className="absolute inset-0 bg-gradient-to-tr from-gray-600/90 to-primary/20"></div>
               <div className="absolute bottom-10 left-10 right-10 text-white">
                   <div className="flex items-center gap-2 mb-2">
                     <Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
                     <span className="font-bold uppercase tracking-widest text-sm text-yellow-300">AIoT Enabled</span>
                   </div>
                   <p className="text-2xl lg:text-3xl font-display font-bold leading-tight">Cutting-edge Robotics & Machine Vision</p>
               </div>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="order-1 lg:order-2"
           >
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Next-Gen Technology</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-text">FRUITLINQ SMART JUICER</h2>
              <p className="text-xl text-text-light mb-8 leading-relaxed">
                Using cutting-edge robotics, machine vision, and AIoT, the Fruitlinq Smart Juicer makes real, freshly squeezed orange juice instantly available—safe, autonomous, and effortless.
              </p>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm mb-8">
                 <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                   <TrendingUp className="w-5 h-5 text-primary" />
                   Performance You Can Measure
                 </h3>
                 <p className="text-text-light text-lg">
                   Our end-to-end hardware and software solutions are field-tested and results-driven, engineered to maximize profitability while scaling efficiently across global markets.
                 </p>
              </div>

              <div className="flex flex-wrap gap-3">
                 {['Machine Vision', 'Robotics', 'AIoT', 'Autonomous'].map((tag, i) => (
                   <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full">
                     <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                     {tag}
                   </div>
                 ))}
              </div>
              <div className="mt-8">
                <Button to="/smart-juicer#technical-specifications" variant="secondary">View Specifications</Button>
              </div>
           </motion.div>
        </motion.div>
      </Section>

      {/* Why Vending Wins */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                   <img src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Fresh Juice" className="rounded-2xl shadow-md w-full h-48 object-cover" />
                   <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-secondary">
                      <h4 className="font-bold text-lg mb-2 text-secondary">Hygiene First</h4>
                      <p className="text-base text-gray-600">Zero human touchpoints ensures maximum safety.</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-primary p-6 rounded-2xl shadow-md text-white bg-gradient-to-br from-primary to-vibrant-red">
                      <h4 className="font-bold text-lg mb-2">24/7 Available</h4>
                      <p className="text-base text-orange-50">Fresh juice anytime, day or night.</p>
                   </div>
                   <img src="public\Oranges.webp" alt="Oranges Supply" className="rounded-2xl shadow-md w-full h-48 object-cover" />
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Future of Food Tech</span>
            <h2 className="font-display font-bold text-4xl mt-2 mb-6">Why Automated Vending Wins in India</h2>
            <p className="text-text-light mb-8 text-xl">
              Traditional juice shops struggle with hygiene and consistency. Fruitlinq's Smart Juicer brings a revolution with automation, cashless payments, and uncompromised quality.
            </p>
            <ul className="space-y-4">
              {[
                "100% Hygienic & Contactless",
                "Cashless UPI & QR Payments",
                "Consistent Taste Every Time",
                "Zero Food Waste"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="font-medium text-text">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/smart-juicer" variant="outline">See How It Works</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Health & Goodness Section (NEW) */}
      <Section bgColor="bg-yellow-50">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
            <h2 className="font-display font-bold text-3xl text-secondary">Pure Immunity in Every Cup</h2>
            <p className="text-text-light mt-2 text-lg">More than just a drink, it's your daily dose of health.</p>
         </motion.div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl text-center shadow-sm"
            >
               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Sun className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-xl mb-2">Vitamin C Powerhouse</h3>
               <p className="text-text-light text-base">One cup meets 80% of your daily Vitamin C requirement, boosting immunity instantly.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl text-center shadow-sm"
            >
               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                  <Leaf className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-xl mb-2">100% Natural</h3>
               <p className="text-text-light text-base">Absolutely no added sugar, water, preservatives, or artificial colors. Just 3-4 whole oranges.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl text-center shadow-sm"
            >
               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-vibrant-red">
                  <Heart className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-xl mb-2">Heart Healthy</h3>
               <p className="text-text-light text-base">Rich in antioxidants and hesperidin, known to improve heart health and lower blood pressure.</p>
            </motion.div>
         </div>
      </Section>

      {/* Locations */}
      <Section id="locations" bgColor="bg-white">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl">Perfect for High-Footfall Zones</h2>
          <p className="text-text-light mt-2 text-lg">Our machines thrive where people need quick, healthy energy.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "IT Parks", icon: Building2, color: "text-contrast", bg: "hover:bg-blue-50" },
            { name: "Malls", icon: ShoppingBag, color: "text-vibrant-pink", bg: "hover:bg-pink-50" },
            { name: "Metros", icon: Truck, color: "text-vibrant-purple", bg: "hover:bg-purple-50" },
            { name: "Hospitals", icon: Stethoscope, color: "text-vibrant-red", bg: "hover:bg-red-50" },
            { name: "Colleges", icon: GraduationCap, color: "text-primary", bg: "hover:bg-orange-50" },
            { name: "Airports", icon: Plane, color: "text-vibrant-teal", bg: "hover:bg-cyan-50" },
          ].map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl ${loc.bg} transition-all duration-300 group cursor-default border border-transparent hover:border-gray-100 shadow-sm hover:shadow-md`}
            >
              <loc.icon className={`w-8 h-8 ${loc.color} mb-3 transition-transform group-hover:scale-110`} />
              <span className="font-semibold text-sm text-center">{loc.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-secondary to-green-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">Start Your Fruitlinq Journey Today</h2>
          <p className="text-green-50 text-xl mb-10 max-w-2xl mx-auto">
            Join the revolution in healthy snacking. Own a franchise that delivers premium quality with automated ease.
          </p>
          <Button to="/franchise" variant="white" className="shadow-lg text-lg px-10 text-green-700 hover:text-green-800">
            Get Franchise Details
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
