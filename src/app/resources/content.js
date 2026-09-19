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

// Shared category taxonomy — used to power the tab filters on /projects and
// /gallery, and the "explore my work" shortcut buttons on the home page.
// `id` is the URL-safe value used in links like /gallery?category=photography
// and as the filter tab value; `label` is what's shown on screen.
const projectCategories = [
  { id: "software-development", label: "Software Development" },
  { id: "ui-ux-design", label: "UI/UX Design" },
];

const galleryCategories = [
  { id: "photography", label: "Photography" },
  { id: "videography", label: "Videography" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "content-creation", label: "Content Creation" },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description:
    "Portfolio of Muhamad Anang — a creative technologist based in Malang, East Java, Indonesia, working across web & mobile development, UI/UX design, and photo / video production.",
  headline: (
    <>Creative Technologist — building products & telling visual stories</>
  ),
  subline: (
    <>
      I'm Anang, based in Malang, East Java, Indonesia. I sit at the
      intersection of technology and creative production: shipping web & mobile
      products, designing the interfaces people use, and producing the photo,
      video, and brand content behind them.
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
      items: [
        "Web Development",
        "Mobile Development (Flutter)",
        "React / Next.js",
        "Laravel",
      ],
    },
    {
      category: "Design",
      icon: "person",
      items: ["UI/UX & Product Design", "Graphic Design", "Figma Prototyping"],
    },
    {
      category: "Creative & Media",
      icon: "gallery",
      items: [
        "Photography",
        "Videography",
        "Video Editing",
        "Content Creation",
      ],
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
  // Shortcut buttons shown right under the hero so a visitor who's only
  // interested in one field (e.g. an HR person hiring for UI/UX) can jump
  // straight to the relevant portfolio page instead of scrolling everything.
  // `href` combines the target page with a `?category=` query param that the
  // /projects and /gallery pages read to pre-select the matching tab.
  exploreWork: {
    title: "Jump to what you're looking for",
    subtitle:
      "I work across a few different fields — pick one to see that work only.",
    items: [
      {
        label: "Software Development",
        icon: "code",
        href: "/projects?category=software-development",
      },
      {
        label: "UI/UX Design",
        icon: "person",
        href: "/projects?category=ui-ux-design",
      },
      {
        label: "Photography",
        icon: "gallery",
        href: "/gallery?category=photography",
      },
      {
        label: "Videography",
        icon: "gallery",
        href: "/gallery?category=videography",
      },
      {
        label: "Graphic Design",
        icon: "grid",
        href: "/gallery?category=graphic-design",
      },
      {
        label: "Content Creation",
        icon: "gallery",
        href: "/gallery?category=content-creation",
      },
    ],
  },
  // Documentation strip on the home page.
  // TODO: replace these with your own photos (programming, speaking as a
  // presenter, client meetings, photography results, ...). Drop the files in
  // /public/images and update the `src` paths below.
  showcase: {
    title: "Selected work",
    subtitle:
      "A mix of software, design, and creative production — see the full archive on Drive for more.",
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
        title: "Graduation Photography",
        category: "Photography",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-06.jpg",
        alt: "Photography work",
        title: "Content Details & Documentation",
        category: "Content-Creation",
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
        My interest in the creative digital industry led me to graphic design
        and photo / video editing, and traveling turned photography and
        videography into a serious craft. Today I combine all of this into the
        freelance services I offer.
      </>
    ),
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Coursera (University of California, Davis) ",
        description: (
          <>
            Developing SEO skills through competitive analysis, brand presence
            evaluation, and technical SEO practices such as sitemaps,
            robots.txt, redirects, and website error management.
          </>
        ),
      },
      {
        name: "State Polytechnic of Malang",
        description: (
          <>
            Bachelor of Applied Science in Information Technology with a GPA of
            3.84/4.00. Participated in the Web Design Competition at Techomfest,
            Politeknik Negeri Semarang, and the East Java Technology Innovation
            Competition (INOTEK Award) 2024.
          </>
        ),
      },
      {
        name: "MAN 3 Blitar",
        description: (
          <>
            Science major graduate with experience participating in photography
            and research competitions, including the Photography Competition at
            the Grand Opening of Blitar Park 2019 and the Madrasah Young
            Researcher Super Camp (MYRES) 2020.
          </>
        ),
      },
      {
        name: "Pondok Pesantren Terpadu Al Kamal",
        description: (
          <>
            Completed Jurumiyah–Imrithi studies in 2022 at Pondok Pesantren
            Terpadu Al Kamal Blitar. Participated in the Santri Kreatif Film
            Blitar Raya and Pesantren Creative Forum (FKPP) Short Film HSN
            programs.
          </>
        ),
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
          <>
            Served as a Committee Member for Early Access 2023/2024 and
            Hacktoberfest 2023, contributing to the planning and execution of
            organizational events and activities.
          </>
        ),
      },
      {
        name: "Ikatan Mahasiswa POLINEMA Tulungagung",
        role: "Communication & Information Division,",
        timeframe: "2022-2024",
        description: (
          <>
            Served in the Communication & Information Division of Ikatan
            Mahasiswa Polinema Tulungagung and contributed as a Committee Member
            for Student Welcoming (Samba) 2023 and 2024.
          </>
        ),
      },
      {
        name: "Lembaga Pers Mahasiswa (LPM) Kompoen POLINEMA",
        role: "Public Relations Division",
        timeframe: "2022-2023",
        description: (
          <>
            Served as a Committee Member for Institutional Expo 2023 and General
            Assembly 2023, contributing to the preparation and execution of
            organizational events.
          </>
        ),
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
          <>
            Building responsive, accessible front-ends and turning UI/UX designs
            into production interfaces.
          </>
        ),
        images: [],
      },
      {
        title: "Laravel",
        description: (
          <>
            Designing and building fullstack web apps and management systems
            with PHP / Laravel.
          </>
        ),
        images: [],
      },
      {
        title: "Flutter",
        description: (
          <>
            Cross-platform mobile apps, including projects with machine learning
            and face recognition.
          </>
        ),
        images: [],
      },
      {
        title: "Figma",
        description: (
          <>
            UI/UX design and prototyping, from wireframes to handoff-ready
            screens.
          </>
        ),
        images: [],
      },
      {
        title: "Adobe Premiere Pro & CapCut",
        description: (
          <>
            Video editing for brand content, events, travel, and social media.
          </>
        ),
        images: [],
      },
      {
        title: "Lightroom, Photoshop, CorelDRAW, & Canva",
        description: (
          <>
            Photo retouching, color grading, and graphic assets — banners,
            mockups, and brand kits.
          </>
        ),
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
          Build and ship product features across the stack with a strong focus
          on the front-end, using React and Next.js.
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
      timeframe: "2017 – 2025",
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
          Software development: web profiles, management systems, and mobile
          apps built with Laravel, Python, and Flutter.
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

// Case-study style work: software builds and UI/UX design.
// To add a project: drop its cover image in /public/images/projects and add
// an entry below with a `categories` array — one or more ids from
// `projectCategories` above (currently "software-development" and/or
// "ui-ux-design"). A project that belongs to more than one field (e.g. an
// app you both built and designed) lists all of them, so it shows up under
// every matching tab instead of needing a duplicate entry per category.
const projects = {
  label: "Projects",
  title: "Projects",
  description: `Software & UI/UX work by ${person.name}`,
  categories: projectCategories,
  items: [
    {
      title: "ACP - ERP System",
      categories: ["software-development"],
      timeframe: "2026",
      description: (
        <>
          Fullstack web platform built for a client, from UI/UX handoff to a
          production-ready, responsive front-end.
        </>
      ),
      tools: ["React", "JavaScript", "Laravel", "PostgreSQL"],
      image: "/images/projects/acp.png",
    },
    {
      title: "PIU E-Reporting System",
      categories: ["software-development"],
      timeframe: "2025",
      description: (
        <>
          Fullstack web platform built for a client, from UI/UX handoff to a
          production-ready, responsive front-end.
        </>
      ),
      tools: ["React", "TypeScript", "Express", "PostgreSQL"],
      image: "/images/projects/piu-e.png",
    },{
      title: "Warehouse Management System",
      categories: ["software-development"],
      timeframe: "2026",
      description: (
        <>
          Internal system for managing stock, incoming/outgoing goods, and
          warehouse operations, replacing manual, paper-based tracking.
        </>
      ),
      tools: ["React", "Next.js", "TypeScript", "PostgreSQL"],
      image: "/images/projects/wms2.png",
      link: "https://wms.sinvitrixlabs.biz.id/",
      linkLabel: "View on Website",
    },{
      title: "Frozerify - Management System",
      categories: ["software-development"],
      timeframe: "2026",
      description: (
        <>
          Internal system for managing stock, incoming/outgoing goods, and
          warehouse operations, replacing manual, paper-based tracking.
        </>
      ),
      tools: ["React", "Next.js", "TypeScript", "PostgreSQL"],
      image: "/images/projects/frozerify.png",
    },
    {
      title: "Scylla X",
      categories: ["software-development"],
      timeframe: "2025",
      description: (
        <>
          Fullstack web platform built for a client, from UI/UX handoff to a
          production-ready, responsive front-end.
        </>
      ),
      tools: ["Vue Js", "TypeScript", "Go Lang", "PostgreSQL"],
      image: "/images/projects/scyllax.png",
      link: "https://scyllax.pratesis.com/",
      linkLabel: "View on Website",
    },
    {
      title: "SyPIU - Permit System",
      categories: ["software-development"],
      timeframe: "2025",
      description: (
        <>
          Fullstack web platform built for a client, from UI/UX handoff to a
          production-ready, responsive front-end.
        </>
      ),
      tools: ["React", "JavaScript"],
      image: "/images/projects/sypiu.png",
    },
    // Reference: how to add a new project (also shows a project spanning
    // more than one category — omit the second id if it's just one field).
    // {
    //   title: "Project name",
    //   categories: ["ui-ux-design", "software-development"],
    //   timeframe: "2025",
    //   description: <>What the project was and your role in it.</>,
    //   tools: ["Figma"],
    //   image: "/images/projects/your-image.png",
    //   link: "https://www.figma.com/...",
    //   linkLabel: "View on Figma",
    // },
    {
      title: "Fest Ticket App",
      categories: ["software-development", "ui-ux-design"],
      timeframe: "2025",
      description: (
        <>
          A ticketing app for events, allowing users to browse events, select
          seats, and purchase tickets, with face recognition.
        </>
      ),
      tools: ["Figma", "Flutter", "Face Recognition"],
      image: "/images/projects/fest.webp",
    },
    {
      title: "Fest Ticket App - Admin Panel",
      categories: ["ui-ux-design"],
      timeframe: "2025",
      description: (
        <>
          An admin panel for the Fest Ticket App, providing tools for managing
          events, users, and ticket sales.
        </>
      ),
      tools: ["Figma"],
      image: "/images/projects/fest-admin.webp",
    },
    {
      title: "Re-Design Website Kementrian Sekertariat Negara",
      categories: ["ui-ux-design"],
      timeframe: "2025",
      description: (
        <>
          A complete redesign challenge of the official website for the Ministry
          of National Secretariat, focusing on improving user experience and
          modernizing the interface.
        </>
      ),
      tools: ["Figma"],
      image: "/images/projects/kementrian.webp",
    },
    {
      title: "BPR EKA DANA MANDIRI",
      categories: ["software-development"],
      timeframe: "2024",
      description: (
        <>
          Fullstack web platform built for a client, from UI/UX handoff to a
          production-ready, responsive front-end.
        </>
      ),
      tools: ["Laravel"],
      image: "/images/projects/edaman.png",
      link: "https://www.bankekadanamandiri.com/",
      linkLabel: "View on Website",
    },
    {
      title: "Bio Barter App",
      categories: ["ui-ux-design"],
      timeframe: "2024",
      description: <>Design for an animal waste trading app.</>,
      tools: ["Figma"],
      image: "/images/projects/biobarter.webp",
    },
    {
      title: "Cultureeyes App",
      categories: ["ui-ux-design"],
      timeframe: "2024",
      description: (
        <>
          App design for CultureEyes, an application offering a single gateway
          to a nation's entire culture, reated for Techomfest 2023.
        </>
      ),
      tools: ["Figma"],
      image: "/images/projects/cultureeyes.webp",
    },
    {
      title: "Cultureeyes Web",
      categories: ["ui-ux-design"],
      timeframe: "2024",
      description: (
        <>
          App design for Booking Class, an application that allows users to book
          and manage class schedules.
        </>
      ),
      tools: ["Figma"],
      image: "/images/projects/cultureweb.webp",
    },
    {
      title: "Booking Class App",
      categories: ["ui-ux-design"],
      timeframe: "2024",
      description: (
        <>
          App design for Booking Class, an application that allows users to book
          and manage class schedules.
        </>
      ),
      tools: ["Figma"],
      image: "/images/projects/bookingapp.webp",
    },
    {
      title: "Booking Class Web",
      categories: ["ui-ux-design", "software-development"],
      timeframe: "2024",
      description: (
        <>
          App design for Booking Class, an application that allows users to book
          and manage class schedules.
        </>
      ),
      tools: ["Figma", "Laravel"],
      image: "/images/projects/bookingweb.webp",
    },
    {
      title: "Website Management RW",
      categories: ["ui-ux-design", "software-development"],
      timeframe: "2024",
      description: <>Website management for neighborhood unit.</>,
      tools: ["Figma", "Laravel"],
      image: "/images/projects/RW.webp",
    },
    {
      title: "RentAza Web & Mobile App",
      categories: ["ui-ux-design"],
      timeframe: "2024",
      description: <>Web and mobile app design for RentAza, a property rental platform.</>,
      tools: ["Figma", "Laravel"],
      image: "/images/projects/RentAza.png",
    },
    {
      title: "Konsulin Aja App",
      categories: ["ui-ux-design"],
      timeframe: "2023",
      description: (
        <>App design for Konsulin Aja, a mental health consultation platform.</>
      ),
      tools: ["Figma"],
      image: "/images/projects/konsulin.webp",
    },
    {
      title: "Healthy Mindset App",
      categories: ["ui-ux-design"],
      timeframe: "2023",
      description: (
        <>
          App design for Healthy Mindset, an application that provides mental
          health support and resources.
        </>
      ),
      tools: ["Figma"],
      image: "/images/projects/healthy.webp",
    },
  ],
};

// Photo/video/visual work. To add an image: drop the file in
// /public/images/gallery and add an entry below with a `category` matching
// one of `galleryCategories` above (photography, videography, graphic-design,
// or content-creation) and an `orientation` ("horizontal" or "vertical") so
// the masonry grid can lay it out correctly.
const gallery = {
  label: "Gallery",
  title: "Gallery",
  description: `A collection of work and documentation by ${person.name}`,
  categories: galleryCategories,
  images: [
    {
      src: "/images/gallery/pict1.jpg",
      alt: "Graduation portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.png",
      alt: "Videography on location",
      category: "videography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/pict3.jpg",
      alt: "Portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/pict2.jpg",
      alt: "Portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/pict5.jpg",
      alt: "Location photography",
      category: "photography",
      orientation: "horizontal",
    },

    {
      src: "/images/gallery/pict9.png",
      alt: "Workshop documentation",
      category: "content-creation",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/pict10.JPG",
      alt: "Portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Bu Evi - 2.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/bu Endah 1.webp",
      alt: "documentation of content creation",
      category: "content-creation",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "Workshop documentation",
      category: "content-creation",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Bu Astri - 2.webp",
      alt: "Portrait photography",
      category: "content-creation",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Bu Astri.webp",
      alt: "Workshop documentation",
      category: "content-creation",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Batu Paradise - 1.webp",
      alt: "Portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Bu Evi.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Bu Hani - 1.webp",
      alt: "Portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Bu Farida.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Cahaya rasa - 1.webp",
      alt: "Portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo1.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Blitar Park - 3_.jpg",
      alt: "Portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo2.webp",
      alt: "Workshop documentation",
      category: "content-creation",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Blitar Park - 6.jpg",
      alt: "Portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Blitar Park - 2.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Blitar Park - 5.jpg",
      alt: "Portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Blitar Park - 4.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Mbak Abril & Mbak Nana - 1.jpg",
      alt: "Portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Abril & Mbak Nana - 5.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Abril & Mbak Nana - 2.jpg",
      alt: "Portrait photography",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Abril & Mbak Nana - 7.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Abril & Mbak Nana - 8.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Abril - 1.png",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Abril - 2.png",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Cindy - 1.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Cindy - 2.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Abril - 3.png",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Cindy - 3.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Cindy - 4.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Cindy - 5.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Cindy - 8.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Cindy - 7.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Cindy - 6.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Cindy - 9.jpg",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Elva - 1.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Elva - 2.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Elva - 3.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Elva - 4.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Elva - 5.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Vida - 3.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Vida - 4.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/SMAK Albertus - 1.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/SMAK Albertus - 8.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/SMAK Albertus - 9.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Mbak Laras - 3.webp",
      alt: "Workshop documentation",
      category: "photography",
      orientation: "vertical",
    },

    // TODO: no graphic design pieces here yet — add your poster/mockup/brand
    // asset images with category: "graphic-design" when ready.
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
  projects,
  gallery,
};
