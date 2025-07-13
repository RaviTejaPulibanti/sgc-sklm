import competative from "../../assets/clubimgs/competative.webp"
import coding from "../../assets/clubimgs/coding.webp"
import dp from "../../assets/clubimgs//photography.webp"
import startup from "../../assets/clubimgs/startup.webp"
import robotics from "../../assets/clubimgs/robotics.webp"
import ls from "../../assets/clubimgs/ls.webp"
import internship from "../../assets/clubimgs/internship.webp"
import linquistic from "../../assets/clubimgs/linguistic.webp"
import Finance from "../../assets/clubimgs/finance.webp"
import sports from "../../assets/clubimgs/sports.webp"
import cc from "../../assets/clubimgs/cc.webp"
import arts from "../../assets/clubimgs/cc.webp"
import electronics from "../../assets/clubimgs/electronics.webp"
import eco from "../../assets/clubimgs/competative.webp"
import yoga from "../../assets/clubimgs/competative.webp"
import he from "../../assets/clubimgs/competative.webp"



import competativeBg from "../../assets/clubBgimgs/competativeBg.webp"
import codingBg from "../../assets/clubBgimgs/codingBg.webp"
import dpBg from "../../assets/clubBgimgs//photographyBg.webp"
import startupBg from "../../assets/clubBgimgs/startupBg.webp"
import roboticsBg from "../../assets/clubBgimgs/roboticsBg.webp"
import lsBg from "../../assets/clubBgimgs/lsBg.webp"
import internshipBg from "../../assets/clubBgimgs/internshipBg.webp"
import linquisticBg from "../../assets/clubBgimgs/linguisticBg.webp"
import FinanceBg from "../../assets/clubBgimgs/finance.webp"
import sportsBg from "../../assets/clubBgimgs/sportsBg.webp"
import ccBg from "../../assets/clubBgimgs/ccBg.webp"
import artsBg from "../../assets/clubBgimgs/artsBg.webp"
import electronicsBg from "../../assets/clubBgimgs/electronics.webp"
import ecoBg from "../../assets/clubBgimgs/ecoBg.webp"
import yogaBg from "../../assets/clubBgimgs/yogaBg.webp"
import heBg from "../../assets/clubBgimgs/heBg.webp"

  export interface ClubEventType {
  id: string;
  title: string;
  date: string;
  description: string;
  clubId?: string;
}


  export interface ClubType {
  id: string;
  name1: string;
  name2?: string;
  founded: number;
  about: string[];
  description: string;
  image?: string;
  heroImage: string;
  backgroundImage: string;
  events: ClubEventType[]; // Use the new interface
  members: {
    id: number;
    name: string;
    role: string;
    linkedin: string;
    image: string;
  }[];
}
  export const clubsData: ClubType[] = [
    {
      id: 'competative',
      name1: 'Competative',
      name2 : '',
      founded: 2015,
      description:
          "Annual technology conference featuring industry leaders",
      about: [
        "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
        "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      heroImage: competative,
      backgroundImage: competativeBg,
      events: [
        {
          id: "1",
          title: "Tech Conference 2023",
          date: "Oct 15, 2023",
          description:
            "Annual technology conference featuring industry leaders",
        },
        {
          id: "2",
          title: "Hackathon",
          date: "Nov 20, 2023",
          description:
            "24-hour coding competition with exciting prizes",
          },
      ],
      members: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: `Member ${i + 1}`,
        role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
        linkedin: `https://linkedin.com/in/member${i + 1}`,
        image: `https://i.pravatar.cc/150?img=${i + 120}`
      })),
      },
      {
        id: 'coding-club',
          name1: 'Coding',
          founded: 2015,
        
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        image:'./clubimgs/coding.webp' ,
        heroImage:coding,
        backgroundImage: codingBg,
        description:
              "Annual technology conference featuring industry leaders",
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
      },
      {
        id: 'd-p',
          name1: 'Designing and',
         name2 : 'Photography',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          dp,
          backgroundImage: dpBg,
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
        },
        {
          id: 'Startup-club',
            name1: 'Startup',
            founded: 2015,
          
          about: [
            "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
            "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
          ],
          heroImage:
                startup,
          backgroundImage: startupBg,
          description:
                "Annual technology conference featuring industry leaders",
          events: [
            {
              id: "1",
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: "2",
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
              },
          ],
          members: Array.from({ length: 12 }, (_, i) => ({
            id: i + 1,
            name: `Member ${i + 1}`,
            role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
            linkedin: `https://linkedin.com/in/member${i + 1}`,
            image: `https://i.pravatar.cc/150?img=${i + 120}`
          })),
      },
      {
        id: 'robotics-club',
        name1: 'Robotics',
        founded: 2015,
        
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
              robotics,

        backgroundImage: roboticsBg,
        description:
              "Annual technology conference featuring industry leaders",
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
      },
      {
        id: 'Lecturers-series-club',
        name1: 'Lecturers',
        name2:'series',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
         ls,
        backgroundImage: lsBg,
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
        },
        {
          id: 'Internship&carrer-oppertunities',
            name1: 'Internship & carrer',
            name2:'opportunities',
            founded: 2015,
          
          about: [
            "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
            "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
          ],
          heroImage:
                internship,
          backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          description:
                "Annual technology conference featuring industry leaders",
          events: [
            {
              id: "1",
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: "2",
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
              },
          ],
          members: Array.from({ length: 12 }, (_, i) => ({
            id: i + 1,
            name: `Member ${i + 1}`,
            role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
            linkedin: `https://linkedin.com/in/member${i + 1}`,
            image: `https://i.pravatar.cc/150?img=${i + 120}`
          })),
      },
      {
        id: 'Linguistic-club',
        name1: 'Linguistic & Personality Development',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          linquistic,
        backgroundImage: linquisticBg,
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
      },
      {
        id: 'Finance-club',
        name1: 'Finance',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          Finance,
        backgroundImage: FinanceBg,
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
      },
      {
        id: 'Games-sports-club',
        name1: 'Sports &',
        name2:'Games',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          sports,
        backgroundImage: sportsBg,
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
      },
      {
        id: 'Cultural-choreography-club',
        name1: 'Cultural &',
        name2:'Choreography',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          cc,
        backgroundImage: ccBg,
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
      },
      {
        id: 'Arts-Craftd',
        name1: 'Arts & Crafts',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        backgroundImage: arts,
        heroImage:
          artsBg,
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
      },
      {
        id: 'electronics-club',
        name1: 'Elctronics',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          electronics,
        backgroundImage: electronicsBg,
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
      },
      {
        id: 'eco-club',
        name1: 'Eco',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          eco,
        backgroundImage: ecoBg,
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
      },
      {
        id: 'yoga-club',
        name1: 'Yoga',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          yogaBg,
        backgroundImage: yogaBg,
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
      },
      {
        id: 'higher-club',
        name1: 'Higher Education',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          he,
        backgroundImage: heBg,
        events: [
          {
            id: "1",
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: "2",
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            
          // Add more events
        ],
        members: Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `Member ${i + 1}`,
          role: i % 3 === 0 ? "President" : i % 2 === 0 ? "Coordinator" : "Member",
          linkedin: `https://linkedin.com/in/member${i + 1}`,
          image: `https://i.pravatar.cc/150?img=${i + 120}`
        })),
      },       
    
  ];
  