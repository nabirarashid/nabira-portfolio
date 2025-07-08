export interface AboutInfo {
  title: string;
  content: string;
  mediaType: "image" | "video" | "frame";
  media?: string;
}

const aboutinfo: AboutInfo[] = [
  {
    title: "hackathons",
    content:
      "i love hackathons! they're a great way to meet new people, learn new skills, and build cool projects. i've participated in several hackathons, including hack the north, uofthacks & jamhacks!",
    mediaType: "image",
    media: "/assets/website/jamhacks.jpg",
  },
  {
    title: "music",
    content:
      "i love music! i play the alto saxophone and i'm part of my school's concert band. i also enjoy listening to music, especially gracie abrams and taylor swift :)",
    mediaType: "video",
  },
  {
    title: "ml & research",
    content:
      "i'm really interested in machine learning and research! i'm currently working on research projects related to sentiment analysis and brain image alignment!",
    mediaType: "image",
    media: "/assets/website/ml.jpg",
  },
  {
    title: "limitless learning initiative",
    content:
      "i founded and am the chairperson of this initiative that aims to bridge education gaps for students across Halton. raised over $1200 in events so far and engaged with 300+ members of the public",
    mediaType: "image",
    media: "/assets/website/krispy.jpg",
  },
  {
    title: "stem from scratch",
    content:
      "not only do i love tech, but i also improving access to it! i'm the co-founder and president of stem from scratch, a student-led initiative that teaches coding to young students & shares STEM resources through monthly newsletters",
    mediaType: "image",
    media: "/assets/website/sfs.jpg",
  },
  {
    title: "content creation",
    content:
      "i love creating content! i have an instagram profile where i post about my coding & ml journey, you should check it out @tech.with.nabira (<a href='https://www.instagram.com/tech.with.nabira/' target='_blank' rel='noopener noreferrer'>leave a follow!</a>)",
    mediaType: "frame",
  },
  {
    title: "community involvement",
    content:
      "i'm passionate about giving back to the community! i'm the social chairperson for the oakville youth action committee and on my school's student council too :0",
    mediaType: "image",
    media: "/assets/website/oyac.JPEG",
  },
  
];

export default aboutinfo;
