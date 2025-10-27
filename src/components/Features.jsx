import { Gauge, Trophy, Rocket, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Gauge className="h-6 w-6 text-rose-400" />,
    title: 'Authentic Physics',
    desc: 'Feel tire deformation, aero balance, and weight transfer tuned for competitive sim racing.'
  },
  {
    icon: <Car className="h-6 w-6 text-rose-400" />,
    title: 'Laser‑Scanned Tracks',
    desc: 'Race on meticulously captured circuits with millimeter precision and evolving grip.'
  },
  {
    icon: <Rocket className="h-6 w-6 text-rose-400" />,
    title: 'Stunning Visuals',
    desc: 'HDR lighting, motion blur, and cinematic replays powered by a modern rendering pipeline.'
  },
  {
    icon: <Trophy className="h-6 w-6 text-rose-400" />,
    title: 'Ranked Multiplayer',
    desc: 'Safety ratings and matchmaking create clean, competitive races at any skill level.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-slate-950 to-black">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,63,94,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for Speed</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Everything you need to push limits—from practice laps to championship finals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-rose-500/15 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div id="gameplay" className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
            <img
              src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1400&auto=format&fit=crop"
              alt="Night racing"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h4 className="text-white font-semibold">Dynamic Weather</h4>
              <p className="mt-2 text-sm text-white/70">
                Adaptive track temperatures, rubbering, and rain lines keep every stint alive.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
            <img
              src="https://images.unsplash.com/photo-1518306727298-4c17e1bf6946?q=80&w=1400&auto=format&fit=crop"
              alt="Pit lane"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h4 className="text-white font-semibold">Garage Deep‑Dive</h4>
              <p className="mt-2 text-sm text-white/70">
                Tweak aero, suspension, and tire compounds with powerful setup tools.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
            <img
              src="https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?q=80&w=1400&auto=format&fit=crop"
              alt="Track day"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h4 className="text-white font-semibold">Clean, Ranked Racing</h4>
              <p className="mt-2 text-sm text-white/70">
                Safety and skill ratings pair you with racers who want the same fair fight.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
