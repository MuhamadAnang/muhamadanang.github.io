import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Muhamad",
  lastName: "Anang",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/profile.webp",
  // IANA time zone identifier — used for the clock in the header.
  location: "Asia/Jakarta",
  // Human-readable location shown around the site.
  locationLabel: "Malang, East Java, Indonesia",
  languages: ["English", "Bahasa Indonesia"],
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MuhamadAnang",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/maafin/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ananghusnul10@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description:
    "Portfolio of Muhamad Anang — software developer, photographer / videographer, and video editor based in Malang, East Java, Indonesia.",
  headline: <>Software developer, photographer & video editor</>,
  subline: (
    <>
      I'm Anang, a software developer based in Malang, East Java, Indonesia.
      Alongside building software, I freelance as a photographer / videographer
      and a video editor — bringing ideas to life both in code and on screen.
    </>
  ),
  // Short bullet points shown under the intro on the home page.
  highlights: [
    "Fullstack developer, front-end oriented (React / Next.js)",
    "Freelance photographer & videographer",
    "Video editor & creative content creator",
    "Based in Malang, East Java, Indonesia",
  ],
  // Documentation strip on the home page.
  // TODO: replace these with your own photos (programming, speaking as a
  // presenter, client meetings, photography results, ...). Drop the files in
  // /public/images and update the `src` paths below.
  showcase: {
    title: "Moments from my work",
    images: [
      {
        src: "/images/gallery/RW.webp",
        alt: "Building a software project",
        orientation: "horizontal",
      },
      {
        src: "/images/projects/wms2.png",
        alt: "Speaking as a presenter at an event",
        orientation: "horizontal",
      },
      {
        src: "/images/projects/acp.png",
        alt: "In a meeting with a client",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/pict1.jpg",
        alt: "Photography work",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-06.jpg",
        alt: "Photography work",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img-09.png",
        alt: "Videography on location",
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
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, experience, gallery };
