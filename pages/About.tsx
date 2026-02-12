import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Map, CheckCircle, Briefcase } from 'lucide-react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Card from '../components/Card';

const About: React.FC = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-orange-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-secondary mb-4">Who are we?</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-text-light max-w-2xl mx-auto">
            Redefining the juice experience with technology, transparency, and farm-fresh quality.
          </p>
        </div>
      </motion.div>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display font-bold text-3xl mb-6">India's First Farm-Controlled Juice Franchise</h2>
            <div className="space-y-4 text-text-light leading-relaxed text-lg">
              <p className="text-justify">
                Fruitlinq is a fresh grocery and food technology company specializing in fresh fruit sourcing, online fruit delivery, and freshly squeezed orange juice vending machines. Built on decades of experience in global fruit supply chains, we combine quality, technology, and convenience to deliver reliable fresh food experiences. Today, Fruitlinq operates two complementary businesses designed to make fresh food easily accessible.
              </p>
              <p className="text-justify">
                By owning export operations and partnering directly with orchards in South Africa and Egypt, we ensure that every orange squeezed in our machines meets the highest global standards of sweetness and juice content.
              </p>
              <p className="font-bold text-primary text-2xl md:text-3xl leading-snug pt-2">
                No wholesale dependency. <p>No compromise on quality.</p> <p> Just pure, export-grade fruit year-round. </p>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl bg-black"
          >
             <video
               src="/fruitlinq-video.mp4"
               className="w-full h-full object-cover"
               autoPlay
               loop
               muted
               playsInline
               preload="metadata"
             />
          </motion.div>
        </motion.div>
      </Section>

      <Section bgColor="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
           <Card className="border-l-4 border-l-primary" delay={0.1}>
              <h3 className="font-display font-bold text-2xl mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" /> Fresh Fruits Through E-Commerce
              </h3>
              <p className="text-lg">Buy fresh, high-quality fruits online through the Fruitlinq app and website. We source fruits directly from trusted farmers and maintain freshness through strict quality checks, professional packaging, and efficient fulfillment.</p>
           </Card>
           <Card className="border-l-4 border-l-secondary" delay={0.2}>
              <h3 className="font-display font-bold text-2xl mb-4 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-secondary" /> Fresh Orange Juice Through Smart Vending
              </h3>
              <p className="text-text-light text-lg">
                Enjoy freshly squeezed orange juice on demand through our premium vending machines, strategically placed in high-footfall locations such as offices, commercial hubs, and public spaces. Each machine delivers hygienic, additive-free juice with consistent taste and freshness.
              </p>
           </Card>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl mb-4">What Makes Us Different</h2>
          <p className="text-text-light text-lg">We solve the biggest problems in the fresh juice business.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Controlled Sourcing", desc: "We don't buy from the local mandi. We import directly from partner farms.", icon: Map },
             { title: "Tech-First Vending", desc: "IoT-enabled machines that provide real-time sales data and predictive maintenance.", icon: TrendingUp },
             { title: "Predictable Economics", desc: "Fixed fruit costs for franchisees, insulating you from market price spikes.", icon: Target }
           ].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-6">
                   <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-text-light text-lg">{item.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      <Section bgColor="bg-green-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 text-secondary">Why Fruitlinq?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                "25+ years of fresh produce and export expertise",
                "Direct farm sourcing with full traceability",
                "End-to-end supply chain control, from sourcing to packaging and exports",
                "Reliable supply supported by forecasting and operational scale",
                "Digital platforms and franchise support for sustained growth"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="font-medium text-gray-700 text-xl">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-card border border-gray-100 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
             <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                   <Briefcase className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="font-display font-bold text-2xl mb-3 text-text">Corporate Backing</h3>
                   <p className="text-xl text-text-light leading-relaxed">
                     Fruitlinq operates as a wholly owned subsidiary of <span className="font-bold text-gray-900">Hortgro Fresh Private Limited</span>, a globally established fresh produce company with operations across multiple countries and a strong track record in international fruit exports.
                   </p>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default About;