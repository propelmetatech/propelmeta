import { motion } from 'framer-motion';
import {
  Heart,
  Zap,
  Users,
  Globe,
  Rocket,
  Star,
  Coffee,
  Music,
  Gamepad2,
  Sparkles,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      {/* Hero Section - Gen Z Style */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Emojis */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-4xl animate-bounce delay-300">
            🚀
          </div>
          <div className="absolute top-32 right-20 text-3xl animate-bounce delay-700">
            ✨
          </div>
          <div className="absolute bottom-40 left-20 text-3xl animate-bounce delay-1000">
            💜
          </div>
          <div className="absolute bottom-20 right-10 text-4xl animate-bounce delay-500">
            🌟
          </div>
          <div className="absolute top-1/2 left-1/4 text-2xl animate-bounce delay-1200">
            🎯
          </div>
          <div className="absolute top-1/3 right-1/3 text-2xl animate-bounce delay-900">
            🔥
          </div>
        </div>

        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px] relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-purple-200/50 bg-gradient-to-r from-purple-50 to-pink-50 backdrop-blur-sm px-6 py-3 text-sm font-bold text-purple-600 mb-8 shadow-lg shadow-purple-500/10"
            >
              <Sparkles className="h-4 w-4 mr-2 text-purple-500 animate-pulse" />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                The Squad Behind the Magic ✨
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black font-display mb-8 leading-[0.9]"
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                We're not just
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent relative">
                building apps
                <div className="absolute -top-4 -right-8 text-4xl animate-spin">
                  ⚡
                </div>
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                we're creating
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent relative">
                digital magic
                <div className="absolute -top-2 -right-6 text-3xl animate-bounce">
                  🪄
                </div>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto font-medium"
            >
              We're a bunch of{' '}
              <span className="text-purple-600 font-bold">digital natives</span>{' '}
              who got tired of seeing amazing businesses struggle online. So we
              said{' '}
              <span className="text-pink-600 font-bold">
                "bet, let's fix this"
              </span>
              and built the most fire platform for local businesses 🔥
            </motion.p>

            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              {[
                { icon: '☕', number: '500+', label: 'Cups of Coffee' },
                { icon: '🎵', number: '1K+', label: 'Lo-fi Hours' },
                { icon: '🚀', number: '50+', label: 'Features Built' },
                { icon: '💜', number: '∞', label: 'Passion Level' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vibe Check Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/90 to-pink-900/80"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-black font-display mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                The Vibe Check
              </span>
              <span className="text-4xl ml-4">✨</span>
            </h2>
            <p className="text-xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed">
              We're not your typical corporate team. We're more like that friend
              group that somehow built a unicorn 🦄
            </p>
          </motion.div>

          {/* Vibe Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: '🎮',
                title: 'Gaming Breaks',
                description:
                  'Our Slack has more gaming channels than work channels. We believe the best ideas come during Mario Kart tournaments.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                emoji: '🌱',
                title: 'Mental Health First',
                description:
                  'Unlimited PTO, therapy coverage, and mandatory "touch grass" breaks. Your wellbeing > everything else.',
                gradient: 'from-green-500 to-blue-500',
              },
              {
                emoji: '🌍',
                title: 'Remote-First Vibes',
                description:
                  "Work from your bed, a beach, or a coffee shop in Tokyo. As long as the WiFi is good, we're good.",
                gradient: 'from-blue-500 to-purple-500',
              },
              {
                emoji: '🎨',
                title: 'Creative Chaos',
                description:
                  'Our design process involves mood boards, TikTok trends, and way too many Figma comments with fire emojis.',
                gradient: 'from-pink-500 to-orange-500',
              },
              {
                emoji: '📱',
                title: 'Always Online',
                description:
                  'We live and breathe digital. Our team chat is basically a 24/7 meme exchange with occasional work updates.',
                gradient: 'from-cyan-500 to-blue-500',
              },
              {
                emoji: '🚀',
                title: 'Move Fast, Break Things',
                description:
                  'We ship features faster than you can say "minimum viable product". Perfection is the enemy of progress.',
                gradient: 'from-orange-500 to-red-500',
              },
            ].map((vibe, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 via-purple-500/5 to-pink-500/10 backdrop-blur-xl border border-white/20 hover:border-purple-400/40 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-700 overflow-hidden">
                  {/* Glowing Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${vibe.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                      {vibe.emoji}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-500">
                      {vibe.title}
                    </h3>
                    <p className="text-purple-200/80 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                      {vibe.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - Gen Z Style */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-spin-slow">
            🌟
          </div>
          <div className="absolute bottom-20 right-20 text-5xl opacity-20 animate-bounce">
            💫
          </div>
          <div className="absolute top-1/2 right-10 text-4xl opacity-20 animate-pulse">
            ✨
          </div>
        </div>

        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-black font-display mb-6">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Plot Twist:
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Our Origin Story
                </span>
                <span className="text-4xl ml-4">📖</span>
              </h2>
            </div>

            {/* Story Timeline */}
            <div className="space-y-12">
              {[
                {
                  year: '2020',
                  emoji: '😤',
                  title: 'The Frustration Era',
                  content:
                    'COVID hit and we watched our favorite local spots struggle to go digital. Big tech was gatekeeping all the good tools behind enterprise paywalls. We said "this ain\'t it, chief" and decided to do something about it.',
                  gradient: 'from-red-500 to-orange-500',
                },
                {
                  year: '2021',
                  emoji: '💡',
                  title: 'The Lightbulb Moment',
                  content:
                    'What if we could give every small business the same superpowers as Amazon and Netflix? AI recommendations, automated marketing, mobile apps - the whole package. But make it actually affordable and not require a CS degree to use.',
                  gradient: 'from-yellow-500 to-orange-500',
                },
                {
                  year: '2022',
                  emoji: '🔥',
                  title: 'The Grind Season',
                  content:
                    'Countless all-nighters fueled by energy drinks and pure determination. We built, tested, broke things, fixed them, and repeated. Our first customers were basically beta testers who believed in the vision.',
                  gradient: 'from-orange-500 to-red-500',
                },
                {
                  year: '2023',
                  emoji: '🚀',
                  title: 'The Glow Up',
                  content:
                    "Things started clicking. Businesses were seeing real results. Revenue was growing. Customer retention was through the roof. We realized we weren't just building software - we were building dreams.",
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  year: '2024',
                  emoji: '🌟',
                  title: 'The Main Character Era',
                  content:
                    "Now we're here, powering thousands of businesses and processing millions in revenue. But we're just getting started. The best plot twists are yet to come.",
                  gradient: 'from-blue-500 to-purple-500',
                },
              ].map((story, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className={`flex items-center gap-8 ${
                    idx % 2 === 1 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={`bg-gradient-to-r ${story.gradient} rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{story.emoji}</span>
                        <div>
                          <div className="text-2xl font-black">
                            {story.year}
                          </div>
                          <div className="text-xl font-bold opacity-90">
                            {story.title}
                          </div>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed opacity-95">
                        {story.content}
                      </p>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl font-black text-slate-800">
                    {idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Gen Z Style */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900/90 to-blue-900/80 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-blue-500/20 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-black font-display mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Meet the Squad
              </span>
              <span className="text-4xl ml-4">👥</span>
            </h2>
            <p className="text-xl text-purple-200/80 max-w-3xl mx-auto">
              The humans behind the magic. We're probably in a Zoom call right
              now debating whether this feature is "fire" or just "mid" 🔥
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CEO & Chief Vibe Officer',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
                fun: 'Drinks 7 coffees/day ☕',
                social: { twitter: '@sarahbuilds', linkedin: 'sarah-chen-ceo' },
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                name: 'David Miller',
                role: 'CTO & Code Wizard',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                fun: 'Debugs in his sleep 🐛',
                social: { github: '@davidcodes', twitter: '@devdavid' },
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                name: 'Emily Zhang',
                role: 'VP of Product & UX Queen',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
                fun: 'Has 47 Figma tabs open 🎨',
                social: {
                  instagram: '@emilydesigns',
                  linkedin: 'emily-zhang-ux',
                },
                gradient: 'from-pink-500 to-orange-500',
              },
              {
                name: 'James Wilson',
                role: 'Head of Growth & Meme Lord',
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
                fun: 'Converts memes to metrics 📈',
                social: {
                  twitter: '@jamesgrows',
                  linkedin: 'james-wilson-growth',
                },
                gradient: 'from-green-500 to-blue-500',
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/10 via-purple-500/5 to-pink-500/10 backdrop-blur-xl border border-white/20 hover:border-purple-400/40 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/30 transition-all duration-700 overflow-hidden text-center">
                  {/* Glowing Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}
                  ></div>

                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div
                      className={`w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r ${member.gradient} p-1 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-500">
                      {member.name}
                    </h3>
                    <p className="text-purple-200/80 text-sm mb-3 group-hover:text-white/90 transition-colors duration-500">
                      {member.role}
                    </p>
                    <p className="text-pink-300/70 text-xs mb-4 font-medium">
                      {member.fun}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {member.social.twitter && (
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                          <Twitter className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {member.social.linkedin && (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                          <Linkedin className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {member.social.github && (
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                          <Github className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {member.social.instagram && (
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                          <Instagram className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 max-w-2xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-3xl font-black text-white mb-4">
                Want to join the squad?
              </h3>
              <p className="text-purple-100 text-lg mb-6">
                We're always looking for talented humans who share our passion
                for empowering businesses. No rockstars or ninjas please - just
                genuine people who want to make a difference.
              </p>
              <div className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold hover:bg-purple-50 transition-colors cursor-pointer">
                <Heart className="w-5 h-5" />
                View Open Positions
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

