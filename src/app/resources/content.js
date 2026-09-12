import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Muhamad",
  lastName: "Anang",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Creative Technologist",
  avatar: "/images/me-cakep.png",
  // IANA time zone identifier — used for the clock in the header.
  location: "Asia/Jakarta",
  // Human-readable location shown around the site.
  locationLabel: "Malang, East Java, Indonesia",
  languages: ["English", "Bahasa Indonesia"],
};

// Primary channels — proof of professionalism, shown everywhere (footer, about, header CTAs).
const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/maafin",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/m.anang_faqih/",
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/@m.anang_faqih",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MuhamadAnang",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ananghusnul10@gmail.com",
  },
];

// Secondary — personal channel with more raw / behind-the-scenes creative content.
const socialMore = [
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://www.tiktok.com/@m.anang_faqihhh",
  },
];

// Creative & business brands — proof of work published off-site, not personal accounts.
const socialCreative = [
  {
    name: "Hikaf",
    icon: "instagram",
    link: "https://www.instagram.com/hikaf.aja/",
  },
  {
    name: "Sinvitrix Labs",
    icon: "instagram",
    link: "https://www.instagram.com/sinvitrixlabs_/",
  },
  {
    name: "VimiTech",
    icon: "instagram",
    link: "https://www.instagram.com/vimitech.dev/",
  },
  {
    name: "SinviMalaptop",
    icon: "instagram",
    link: "https://www.instagram.com/sinvimalaptop_/",
  },
];

// Lowest priority — hobby content, kept for transparency but not pushed.
const socialHobby = [
  {
    name: "Motor / Riding (TikTok)",
    icon: "tiktok",
    link: "https://www.tiktok.com/@_vaqih",
  },
];

// Full, unpublished portfolio archive.
const portfolioDrive =
  "https://drive.google.com/drive/folders/1GC4Vh6hhy7ugf3DLhbarAVdWHxNtVCUA?usp=drive_link";

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description:
    "Portfolio of Muhamad Anang — a creative technologist based in Malang, East Java, Indonesia, working across web & mobile development, UI/UX design, and photo / video production.",
  headline: <>Creative Technologist — building products & telling visual stories</>,
  subline: (
    <>
      I'm Anang, based in Malang, East Java, Indonesia. I sit at the intersection
      of technology and creative production: shipping web & mobile products,
      designing the interfaces people use, and producing the photo, video, and
      brand content behind them.
    </>
  ),
  // Short bullet points shown under the intro on the home page — the fast scan.
  highlights: [
    "Web & Mobile Development — React, Next.js, Laravel, Flutter",
    "UI/UX & Product Design — Figma, from wireframe to handoff",
    "Photography, Videography & Video Editing for brands and events",
    "Graphic Design & Content Creation across social platforms",
    "Mentoring — UI/UX committee & community roles since 2022",
  ],
  // Grouped skills so HR can scan "what can this person do" in seconds.
  skillGroups: [
    {
      category: "Development",
      icon: "grid",
      items: ["Web Development", "Mobile Development (Flutter)", "React / Next.js", "Laravel"],
    },
    {
      category: "Design",
      icon: "person",
      items: ["UI/UX & Product Design", "Graphic Design", "Figma Prototyping"],
    },
    {
      category: "Creative & Media",
      icon: "gallery",
      items: ["Photography", "Videography", "Video Editing", "Content Creation"],
    },
    {
      category: "Leadership",
      icon: "check",
      items: ["Mentoring", "Community & Event Organizing"],
    },
  ],
  cta: {
    primaryLabel: "See selected work",
    primaryHref: "#work",
    driveLabel: "Full portfolio archive",
    driveHref: portfolioDrive,
    cvLabel: "View CV",
    cvHref:
      "https://drive.google.com/file/d/1GrcI2vgTzPmDD1B0oO9hvAPRA4iQqUHK/view?usp=drive_link",
  },
  // Documentation strip on the home page.
  // TODO: replace these with your own photos (programming, speaking as a
  // presenter, client meetings, photography results, ...). Drop the files in
  // /public/images and update the `src` paths below.
  showcase: {
    title: "Selected work",
    subtitle: "A mix of software, design, and creative production — see the full archive on Drive for more.",
    images: [
      {
        src: "/images/projects/wms2.png",
        alt: "Warehouse Management System interface",
        title: "Warehouse Management System",
        category: "Web Development",
        orientation: "horizontal",
      },
      {
        src: "/images/projects/acp.png",
        alt: "Client project interface",
        title: "Client Web Platform",
        category: "Web Development",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/RW.webp",
        alt: "Working on a software project",
        title: "Building & Shipping Software",
        category: "Development",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/pict1.jpg",
        alt: "Photography work",
        title: "Portrait & Event Photography",
        category: "Photography",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-06.jpg",
        alt: "Photography work",
        title: "Travel & Location Photography",
        category: "Photography",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-09.png",
        alt: "Videography on location",
        title: "Videography on Location",
        category: "Videography",
        orientation: "horizontal",
      },
    ],
  },
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.locationLabel}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Muhamad Anang, a software developer from Malang, East Java,
        Indonesia. I started out in web development, grew into a fullstack role
        with Laravel, and now focus on front-end engineering with React and
        Next.js. Along the way I also picked up mobile development with Flutter.
        My interest in the creative digital industry led me to graphic design and
        photo / video editing, and traveling turned photography and videography
        into a serious craft. Today I combine all of this into the freelance
        services I offer.
      </>
    ),
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "State Polytechnic of Malang",
        description: <>Bachelor of Applied Science in Information Technology with a GPA of 3.84/4.00. Participated in the Web Design Competition at Techomfest, Politeknik Negeri Semarang, and the East Java Technology Innovation Competition (INOTEK Award) 2024.
</>,
      },
      {
        name: "MAN 3 Blitar",
        description: <>Science major graduate with experience participating in photography and research competitions, including the Photography Competition at the Grand Opening of Blitar Park 2019 and the Madrasah Young Researcher Super Camp (MYRES) 2020.</>,
      },
      {
        name: "Pondok Pesantren Terpadu Al Kamal",
        description: <>Completed Jurumiyah–Imrithi studies in 2022 at Pondok Pesantren Terpadu Al Kamal Blitar. Participated in the Santri Kreatif Film Blitar Raya and Pesantren Creative Forum (FKPP) Short Film HSN programs.</>,
      },
      // TODO: add your senior high school / any other education here.
    ],
  },
  organizations: {
    display: true,
    title: "Organizations & Activities",
    // TODO: fill in with your real organizations, the roles you held, what you
    // led, and the events / programs you took part in. Delete entries you
    // don't need, or set display: false above to hide this whole section.
    items: [
      {
        name: "Workshop Riset Informatika",
        role: "UI/UX Designer & Committee Member",
        timeframe: "2022 – 2025",
        description: (
          <>Served as a Committee Member for Early Access 2023/2024 and Hacktoberfest 2023, contributing to the planning and execution of organizational events and activities.</>
        ),
      },
      {
        name: "Ikatan Mahasiswa POLINEMA Tulungagung",
        role: "Communication & Information Division,",
        timeframe: "2022-2024",
        description: <>Served in the Communication & Information Division of Ikatan Mahasiswa Polinema Tulungagung and contributed as a Committee Member for Student Welcoming (Samba) 2023 and 2024.</>,
      },
      {
        name: "Lembaga Pers Mahasiswa (LPM) Kompoen POLINEMA",
        role: "Public Relations Division",
        timeframe: "2022-2023",
        description: <>Served as a Committee Member for Institutional Expo 2023 and General Assembly 2023, contributing to the preparation and execution of organizational events.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "React Js & Vue js",
        description: (
          <>Building responsive, accessible front-ends and turning UI/UX designs into production interfaces.</>
        ),
        images: [],
      },
      {
        title: "Laravel",
        description: <>Designing and building fullstack web apps and management systems with PHP / Laravel.</>,
        images: [],
      },
      {
        title: "Flutter",
        description: <>Cross-platform mobile apps, including projects with machine learning and face recognition.</>,
        images: [],
      },
      {
        title: "Figma",
        description: <>UI/UX design and prototyping, from wireframes to handoff-ready screens.</>,
        images: [],
      },
      {
        title: "Adobe Premiere Pro & CapCut",
        description: <>Video editing for brand content, events, travel, and social media.</>,
        images: [],
      },
      {
        title: "Lightroom, Photoshop, CorelDRAW, & Canva",
        description: <>Photo retouching, color grading, and graphic assets — banners, mockups, and brand kits.</>,
        images: [],
      },
    ],
  },
};

const experience = {
  label: "Experience",
  title: "Experience",
  description: `Roles and freelance work by ${person.name}`,
  // TODO: double-check every timeframe below and replace the "20XX" placeholders
  // with your real start / end dates.
  positions: [
    {
      company: "Sinvitrix Labs",
      role: "Fullstack Developer (Front-end oriented)",
      timeframe: "2025 – Present",
      location: "Remote",
      link: "https://sinvitrixlabs.biz.id/",
      linkLabel: "sinvitrixlabs.biz.id",
      achievements: [
        <>
          Build and ship product features across the stack with a strong focus on
          the front-end, using React and Next.js.
        </>,
        <>
          Translate UI/UX designs into responsive, accessible interfaces and
          collaborate with the team to keep the product consistent with the
          design vision.
        </>,
      ],
    },
    {
      company: "IDETAMA (PT Inti Daya Energitama)",
      role: "Software Developer Intern",
      timeframe: "2024 – 2025",
      link: "https://idetama.id/",
      linkLabel: "idetama.id",
      achievements: [
        <>
          Worked on internal web projects, specializing in front-end development
          with React.
        </>,
        <>
          Turned UI/UX designs into functional, responsive user interfaces and
          made sure each screen matched the intended design.
        </>,
      ],
    },
    {
      company: "UD & Percetakan LKS",
      role: "Warehouse Staff",
      timeframe: "20XX – 20XX",
      achievements: [
        <>
          Handled stock management, incoming and outgoing goods, and day-to-day
          warehouse operations for the printing business.
        </>,
      ],
    },
    {
      company: "Freelance Hikaf Media",
      role: "Software Developer · Designer · Video Editor · Photo / Videographer",
      timeframe: "2018 – Present",
      achievements: [
        <>
          Software development: web profiles, management systems, and mobile apps
          built with Laravel, Python, and Flutter.
        </>,
        <>
          Design & editing: brand assets, mockups, and banners, plus photo and
          video editing with the Adobe suite, CorelDRAW, Canva, and CapCut.
        </>,
        <>
          Photography & videography: product shoots, pre-wedding, events, and
          travel — helping brands and individuals tell their story.
        </>,
      ],
    },
  ],
};

const gallery = {
  label: "Gallery",
  title: "Gallery",
  description: `A collection of work and documentation by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/pict1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.png",
      alt: "image",
      orientation: "horizontal",
    },
    
    {
      src: "/images/gallery/pict3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/pict5.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/pict2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/pict9.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/pict10.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export {
  person,
  social,
  socialMore,
  socialCreative,
  socialHobby,
  portfolioDrive,
  home,
  about,
  experience,
  gallery,
};
