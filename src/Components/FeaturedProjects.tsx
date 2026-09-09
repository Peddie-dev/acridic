import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  CloudRain,
  Heart,
  Landmark,
  GraduationCap,
  Thermometer,
  FileText,
  Building2,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow, OutlineButton } from "./ui";

interface ProjectCard {
  icon: LucideIcon;
  location: string;
  year: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const LIGHT_PROJECTS: ProjectCard[] = [
  {
    icon: Droplet,
    location: "Kenya",
    year: "2024",
    title: "Climate & Environment",
    description:
      "Advancing climate resilience through ecosystem restoration, renewable energy research, and evidence-based environmental policy.",
    image: "/images/project-climate.png",
    href: "/what-we-do/climate-environment/kenya-2024",
  },
  {
    icon: CloudRain,
    location: "Uganda",
    year: "2024",
    title: "Agriculture & Food Systems",
    description:
      "Improving food security with climate-smart farming, digital agriculture, and innovative research for resilient food systems.",
    image: "/images/project-agriculture.png",
    href: "/what-we-do/agriculture-food-systems/uganda-2024",
  },
  {
    icon: Heart,
    location: "Ethiopia",
    year: "2024",
    title: "Health & Wellbeing",
    description:
      "Enhancing community health through research, innovation, and evidence-driven healthcare solutions.",
    image: "/images/project-health.png",
    href: "/what-we-do/health-wellbeing/ethiopia-2024",
  },
];

const DARK_PROJECTS: ProjectCard[] = [
  {
    icon: Landmark,
    location: "Tanzania",
    year: "2023",
    title: "Governance & Policy",
    description:
      "Strengthening institutions through policy research, public sector innovation, and evidence-informed governance.",
    image: "/images/project-governance.png",
    href: "/what-we-do/governance-policy/tanzania-2023",
  },
  {
    icon: GraduationCap,
    location: "Rwanda",
    year: "2003",
    title: "Education & Skills",
    description:
      "Supporting equitable education through digital learning, research partnerships, and capacity-building initiatives.",
    image: "/images/project-education.png",
    href: "/what-we-do/education-skills/rwanda-2003",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-16 sm:px-10 lg:px-20 lg:py-12">
      <div className="relative mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[600px] text-center">
          <Eyebrow align="center">Featured Projects</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] lg:hidden">
            Turning Research into Real-World Impact.
          </h2>
          <h2 className="mt-6 hidden text-[clamp(1.875rem,1rem+2.6vw,3rem)] font-bold leading-[110%] tracking-[-0.02em] text-[#16233B] lg:block">
            Turning Knowledge into Impact
          </h2>
          <p className="mt-8 text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] lg:hidden">
            Across Africa, our projects transform research into practical solutions that
            strengthen communities, inform policy, and accelerate sustainable development.
          </p>
          <p className="mt-8 hidden text-[18px] font-normal leading-[175%] tracking-[-0.02em] text-[#5B6B82] lg:block">
            ACRIDC-Africa designs, implements, monitors, evaluates and scales research,
            innovation, humanitarian and sustainable development programmes.
          </p>
          <div className="mt-6 flex justify-center lg:hidden">
            <OutlineButton href="/what-we-do/projects">View All Projects</OutlineButton>
          </div>
          <div className="mt-6 hidden justify-center lg:flex">
            <OutlineButton href="/what-we-do/projects">Explore Our Projects</OutlineButton>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-[25px] sm:grid-cols-2 lg:grid-cols-3">
          {LIGHT_PROJECTS.map((project) => (
            <LightCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <GovernanceCard project={DARK_PROJECTS[0]} />
          <EducationCard project={DARK_PROJECTS[1]} />
        </div>
      </div>
    </section>
  );
}

function ProjectIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="absolute left-6 top-6 z-10 flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#E2F9E7] text-[#16A34A] shadow-[inset_0px_4px_16px_rgba(15,23,42,0.06)]">
      <Icon size={28} strokeWidth={1.75} />
    </span>
  );
}

function Meta({ location, year, className = "text-[#16A34A]" }: { location: string; year: string; className?: string }) {
  return (
    <span className={`flex items-center gap-2 text-[14px] font-medium tracking-[0.02em] ${className}`}>
      {location}
      <span className="h-1 w-1 rounded-full bg-current" />
      {year}
    </span>
  );
}

function LightCard({ project }: { project: ProjectCard }) {
  const Icon = project.icon;
  return (
    <Link
      href={project.href}
      className="group relative flex min-h-[477px] flex-col overflow-hidden rounded-[24px] border border-[#EEF2F7] bg-white shadow-[0px_28px_64px_rgba(12,25,48,0.1)]"
    >
      <div className="relative h-[224px] w-full shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="410px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[rgba(30,41,59,0.2)]" />
        <ProjectIcon icon={Icon} />
        {project.title === "Climate & Environment" && <WeatherWidget />}
        {project.title === "Agriculture & Food Systems" && <SoilMoistureWidget />}
        {project.title === "Health & Wellbeing" && <CommunityReachWidget />}
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <Meta location={project.location} year={project.year} />
        <h3 className="mt-[15px] text-[24px] font-semibold leading-[130%] text-[#16233B]">
          {project.title}
        </h3>
        <p className="mt-3 text-[16px] font-medium leading-7 text-[#5B6B82]">
          {project.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-3 text-base font-semibold leading-[22px] text-[#1E293B]">
          View Project
          <ArrowRight size={24} className="text-[#16A34A]" />
        </span>
      </div>
    </Link>
  );
}

function GovernanceCard({ project }: { project: ProjectCard }) {
  const Icon = project.icon;
  return (
    <Link
      href={project.href}
      className="group relative isolate flex min-h-[380px] overflow-hidden rounded-[32px] border border-white/65 shadow-[0px_24px_60px_-12px_rgba(15,23,42,0.18)]"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="624px"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(250.38deg,rgba(30,41,59,0.12)_1.4%,rgba(30,41,59,0.78)_42.89%,#1E293B_97.85%)]" />
      <ProjectIcon icon={Icon} />
      <PolicyInfluenceWidget />
      <div className="relative z-10 mt-auto max-w-[min(362px,calc(100%-13.5rem))] p-6">
        <Meta location={project.location} year={project.year} />
        <h3 className="mt-4 text-[24px] font-semibold leading-[130%] text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-[16px] font-medium leading-7 text-white">
          {project.description}
        </p>
        <span className="mt-8 inline-flex items-center gap-3 text-base font-semibold text-white">
          View Project
          <ArrowRight size={24} className="text-[#16A34A]" />
        </span>
      </div>
    </Link>
  );
}

function EducationCard({ project }: { project: ProjectCard }) {
  const Icon = project.icon;
  return (
    <Link
      href={project.href}
      className="group relative isolate min-h-[380px] overflow-hidden rounded-[32px] border border-white/65 shadow-[0px_24px_60px_-12px_rgba(15,23,42,0.18)]"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="624px"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(100,116,139,0)_9.62%,#16233B_95.51%)]" />
      <ProjectIcon icon={Icon} />
      <LearningImprovementWidget />
      <div className="absolute bottom-0 left-0 z-10 w-full max-w-[min(362px,calc(100%-13.5rem))] rounded-tr-[18px] rounded-bl-[32px] bg-white/92 p-5">
        <Meta location={project.location} year={project.year} />
        <h3 className="mt-3.5 text-[24px] font-semibold leading-[130%] text-[#1E293B]">
          {project.title}
        </h3>
        <p className="mt-3 text-[16px] font-medium leading-7 text-[#64748B]">
          {project.description}
        </p>
        <span className="mt-8 inline-flex items-center gap-3 text-base font-semibold text-[#1E293B]">
          View Project
          <ArrowRight size={24} className="text-[#16A34A]" />
        </span>
      </div>
    </Link>
  );
}

function WidgetShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`absolute z-10 box-border border border-white/22 bg-[rgba(30,41,59,0.16)] shadow-[0px_12px_30px_rgba(15,23,42,0.16)] backdrop-blur-[10px] ${className}`}
    >
      {children}
    </div>
  );
}

function WeatherWidget() {
  const rows: { icon: LucideIcon; value: string; label: string }[] = [
    { icon: Thermometer, value: "26°C", label: "Avg Temp" },
    { icon: Droplet, value: "65%", label: "Humidity" },
    { icon: CloudRain, value: "12mm", label: "Rainfall" },
  ];
  return (
    <WidgetShell className="right-7 top-7 flex h-[160px] w-[113px] flex-col justify-center gap-[7px] rounded-[18px] px-3">
      {rows.map((row) => {
        const Icon = row.icon;
        return (
          <div key={row.label} className="flex items-center gap-2.5 text-white">
            <Icon size={20} className="text-[#93D6AC]" />
            <span>
              <span className="block text-[14px] font-semibold leading-[130%]">{row.value}</span>
              <span className="block text-[12px] font-normal leading-[130%]">{row.label}</span>
            </span>
          </div>
        );
      })}
    </WidgetShell>
  );
}

function SoilMoistureWidget() {
  const cols = [
    [16, 20, 24],
    [26, 16, 24],
    [22, 28, 27],
    [26, 24, 26],
    [22, 37, 18],
    [16, 20, 24],
    [22, 28, 27],
  ];
  return (
    <WidgetShell className="right-7 top-7 flex h-[160px] w-[157px] flex-col rounded-[18px] px-3.5 py-3">
      <div className="flex items-center gap-2.5 text-white">
        <Droplet size={28} className="text-[#93D6AC]" />
        <span>
          <span className="block text-[12px] font-normal leading-[130%]">Soil Moisture</span>
          <span className="block text-[14px] font-semibold leading-[130%]">62%</span>
        </span>
      </div>
      <div className="mt-auto flex h-[89px] items-end justify-between gap-1">
        {cols.map((stack, i) => (
          <div key={i} className="flex w-[15px] flex-col justify-end overflow-hidden rounded-[1px]">
            <span className="w-full bg-[rgba(147,214,172,0.1)]" style={{ height: stack[0] }} />
            <span className="w-full bg-[rgba(147,214,172,0.35)]" style={{ height: stack[1] }} />
            <span className="w-full bg-[#93D6AC]" style={{ height: stack[2] }} />
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}

function CommunityReachWidget() {
  return (
    <WidgetShell className="right-0 top-0 flex h-[189px] w-[168px] flex-col rounded-b-[18px] rounded-t-none px-4 py-4">
      <span className="text-[13px] font-semibold leading-[130%] text-[#F8FAFC]">Community reach</span>
      <span className="mt-1 text-[20px] font-semibold leading-[130%] text-white">24,850</span>
      <span className="text-[12px] font-semibold leading-[130%] text-white">People Reached</span>
      <div className="mt-auto flex items-end justify-between">
        <div className="relative h-[54px] w-[54px]">
          <svg viewBox="0 0 54 54" className="h-full w-full -rotate-90">
            <circle cx="27" cy="27" r="20" fill="none" stroke="#245D39" strokeWidth="10" />
            <circle
              cx="27"
              cy="27"
              r="20"
              fill="none"
              stroke="#359558"
              strokeWidth="10"
              strokeDasharray="38 126"
            />
            <circle
              cx="27"
              cy="27"
              r="20"
              fill="none"
              stroke="#81BA96"
              strokeWidth="10"
              strokeDasharray="25 126"
              strokeDashoffset="-38"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-1 text-[11px] font-medium leading-[15px] text-white">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#16A34A]" />
            12%
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#16A34A]" />
            30%
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#16A34A]" />
            80%
          </span>
        </div>
      </div>
      <div className="mt-2 flex justify-between text-[11px] font-medium text-white">
        <span className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-[#16A34A]" />
          Men
        </span>
        <span className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-[#16A34A]" />
          Women
        </span>
      </div>
    </WidgetShell>
  );
}

function PolicyInfluenceWidget() {
  const items: { icon: LucideIcon; value: string; label: string }[] = [
    { icon: FileText, value: "12", label: "Policies Informed" },
    { icon: Building2, value: "12", label: "Institutions Supported" },
    { icon: Briefcase, value: "12", label: "Capacity Building Programmes" },
  ];
  return (
    <WidgetShell className="right-7 top-7 hidden h-[230px] w-[195px] flex-col rounded-[18px] border-white/16 bg-[rgba(30,41,59,0.12)] p-5 sm:flex">
      <span className="text-[14px] font-semibold leading-[130%] text-white">Policy Influence</span>
      <div className="mt-3 flex flex-col gap-[7px]">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/32 text-[#93D6AC]">
                <Icon size={20} />
              </span>
              <span>
                <span className="block text-[14px] font-semibold leading-[130%] text-white">
                  {item.value}
                </span>
                <span className="block text-[12px] font-normal leading-[130%] text-white">
                  {item.label}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </WidgetShell>
  );
}

function LearningImprovementWidget() {
  return (
    <WidgetShell className="right-7 top-7 hidden h-[230px] w-[195px] flex-col rounded-[18px] p-5 sm:flex">
      <span className="text-[13px] font-semibold leading-[130%] text-white">Learning Improvement</span>
      <span className="mt-1 text-[20px] font-semibold leading-[130%] text-white">73%</span>
      <span className="text-[12px] font-semibold leading-[130%] text-white">Average Score Increase</span>
      <svg viewBox="0 0 155 70" className="mt-3 w-full flex-1">
        <defs>
          <linearGradient id="learnFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(22,163,74,0.32)" />
            <stop offset="100%" stopColor="rgba(22,163,74,0)" />
          </linearGradient>
        </defs>
        <path
          d="M4 52 C 28 44, 50 40, 72 28 C 96 14, 120 22, 151 8 L 151 70 L 4 70 Z"
          fill="url(#learnFill)"
        />
        <path
          d="M4 52 C 28 44, 50 40, 72 28 C 96 14, 120 22, 151 8"
          fill="none"
          stroke="#16A34A"
          strokeWidth="1.2"
        />
      </svg>
      <div className="mt-1 flex justify-between text-[11px] font-normal text-white/40">
        <span>JAN</span>
        <span>FEB</span>
        <span>MAR</span>
        <span>APR</span>
      </div>
    </WidgetShell>
  );
}
