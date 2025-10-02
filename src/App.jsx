import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download, Rocket, Shield, Cloud, Cpu, Cable, Layers, Trophy } from "lucide-react";

const skills = [
  { group: "Réseaux & Sécurité", items: ["TCP/IP", "DNS", "DHCP", "OSPF", "BGP", "MPLS", "IPsec", "TLS", "VLAN", "5G", "OSI","Réseaux sans fil","Réseaux cellulaires"] },
  { group: "Cloud / DevOps", items: ["AWS Cloud Foundations", "Docker", "GNS3", "Grafana", "Wazuh", "Zabbix", "Packet Tracer","python","json"] },
  { group: "Systèmes", items: ["Linux/Ubuntu", "Windows", "VirtualBox"] },
  { group: "Langues", items: ["Français (natif)", "Anglais (B1)", "Allemand (A2)"] },
];

const projects = [
  {
    title: "Architecture LAN/WAN sécurisée (PoC + A.O.)",
    tags: ["Routage", "ACL", "Segmentation", "VoIP"],
    description:
      "Réponse complète à appel d’offres : analyse, architecture cible, procédure de migration et PoC d’un SI multi-services (messagerie, DNS, stockage, virtualisation).",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Supervision & Monitoring (Wazuh + Grafana)",
    tags: ["SIEM", "Dashboards", "Agents"],
    description:
      "Installation manager, dashboard et agents. Tableaux de bord et détection d’événements sécurité sur lab virtualisé.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "VPN/MPLS de bout en bout",
    tags: ["OSPF", "eBGP", "VRF", "GRE/IPsec"],
    description:
      "Backbone OSPF (AS 500), accès clients via OSPF et eBGP, interconnexion multi-sites, puis tunnel GRE/IPsec pour sites isolés.",
    icon: <Cable className="w-5 h-5" />,
  },
  {
    title: "Virtualisation et Cloud",
    tags: ["WAN/LAN", "GNS3", "Serveurs"],
    description:
      "Connecter les sites distants d’une entreprise via un réseau d’opérateur ou via Internet,Conception d’un réseau d’opérateur",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "STM32 + Lecteur RFID MFRC522",
    tags: ["HAL", "SPI", "UART"],
    description:
      "Code minimal de détection de badges via SPI & logs UART sous STM32CubeIDE (STM32F303).",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Conception jeu 3D Mario",
    tags: ["Swing", "Collision", "Audio"],
    description:
      "Jeu 3D avec Timer, collisions Rectangle, effets sonores, structure propre (Main, GamePlay, MapGenerator).",
    icon: <Layers className="w-5 h-5" />,
  },
];

const experiences = [
  {
    role: "école d'ingénieur (ETI – Réseaux/Télécoms)",
    org: "CPE Lyon",
    when: "Sept. 2023 – Aujourd’hui",
    where: "Lyon, France",
  },
  {
    role: "Classe prépa (MPSI–MP*)",
    org: "Lycée Buffon",
    when: "2021 – 2023",
    where: "Paris, France",
  }
];

const socials = {
  linkedin: "https://www.linkedin.com/in/yann-adrien-maledy-moutngui-b81b622b1",
  github: "#",
  email: "yann-adrien.maledy-moutngui@cpe.fr",
  phone: "+33 7 63 72 06 31",
  location: "France / Europe",
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90 backdrop-blur">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20 backdrop-blur ${className}`}>{children}</div>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="mb-6 flex items-end justify-between">
      <h2 className="text-2xl font-semibold text-white/90">{title}</h2>
      <div className="h-px flex-1 ml-6 bg-gradient-to-r from-white/20 to-transparent" />
    </div>
    {children}
  </section>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0f1b2d] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <header className="mx-auto max-w-6xl px-6 py-10">
        <nav className="flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">YA.Maledy</a>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#projects" className="hover:text-white">Projets</a>
            <a href="#skills" className="hover:text-white">Compétences</a>
            <a href="#experience" className="hover:text-white">Parcours</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main id="home" className="mx-auto max-w-6xl px-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-center gap-8 py-6 md:grid-cols-5 md:py-10"
        >
          <div className="md:col-span-3">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Bonjour, je suis <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Yann Adrien Maledy</span>
            </h1>
            <p className="mt-4 text-white/80">
              Étudiant en dernière année d'école d'ingénieur à <strong>CPE Lyon</strong>, spécialisé en <em>infrastructure & sécurité des réseaux</em>,
              passionné par les architectures cloud, la cybersécurité et les systèmes critiques.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge><Shield className="h-3.5 w-3.5" /> Sécurité réseau</Badge>
              <Badge><Cloud className="h-3.5 w-3.5" /> Cloud</Badge>
              <Badge><Cable className="h-3.5 w-3.5" /> Télécom/5G</Badge>
              <Badge><Rocket className="h-3.5 w-3.5" /> Projets concrets</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={socials.linkedin}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
                title="Ajoute ton repo GitHub ici"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="/MALEDY_YANN_ADRIEN_cv.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
              >
                <Download className="h-4 w-4" /> CV (PDF)
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <Card className="p-0 overflow-hidden">
              <div className="relative h-56 bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-blue-500/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                      src="/public/photo.jpeg"              // <-- si ton fichier est public/photo.jpg
                      alt="Yann Adrien"
                      className="h-32 w-32 rounded-2xl object-cover border border-white/20 shadow-lg"
                  />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-white/80"><MapPin className="h-4 w-4" /> {socials.location}</div>
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-white/70">
                  <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {socials.email}</span>
                  <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {socials.phone}</span>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        <Section id="projects" title="Projets académiques">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Card>
                  <div className="flex items-center gap-2 text-white/90">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5">{p.icon}</div>
                    <h3 className="font-semibold">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/80">{t}</span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Compétences">
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((s) => (
              <Card key={s.group}>
                <h4 className="font-medium text-white/90">{s.group}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/80">{it}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Parcours">
          <div className="space-y-4">
            {experiences.map((e, idx) => (
              <div key={idx} className="grid gap-3 md:grid-cols-5">
                <div className="md:col-span-2">
                  <div className="text-sm text-white/60">{e.when}</div>
                  <div className="text-xs text-white/50">{e.where}</div>
                </div>
                <div className="md:col-span-3">
                  <Card>
                    <div className="font-medium text-white/90">{e.role}</div>
                    <div className="text-white/70">{e.org}</div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <Card>
            <div className="grid gap-4 md:grid-cols-2">
              <a href={`mailto:${socials.email}`} className="inline-flex items-center gap-2 text-white/90 hover:underline">
                <Mail className="h-4 w-4" /> {socials.email}
              </a>
              <a href={socials.linkedin} className="inline-flex items-center gap-2 text-white/90 hover:underline">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <div className="inline-flex items-center gap-2 text-white/70">
                <Phone className="h-4 w-4" /> {socials.phone}
              </div>
              <div className="inline-flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4" /> {socials.location}
              </div>
            </div>
          </Card>
          <p className="mt-3 text-xs text-white/50">Disponible à partir de février 2026 (stage 3–6 mois). Mobilité : France / Europe.</p>
        </Section>

        <footer className="my-12 flex items-center justify-between text-xs text-white/50">
          <div className="inline-flex items-center gap-2">
            <Trophy className="h-4 w-4" /> Ambition : bâtir des solutions réseau robustes et scalables.
          </div>
          <a href="#home" className="hover:text-white">Haut de page ↑</a>
        </footer>
      </main>
    </div>
  );
}
