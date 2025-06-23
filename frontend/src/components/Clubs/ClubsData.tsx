export interface ClubType {
    id: string;
    name1: string;
    name2?: string;
    founded: number;
    about: string[];
  description: string;
  image?: string;
    heroImage: string;
    events: {
      id: number;
      title: string;
      date: string;
      description: string;
    }[];
    members: {
      id: number;
      name: string;
      role: string;
      linkedin: string;
    }[];
  }
  
  export const clubsData: ClubType[] = [
    {
      id: 'tech-innovators',
      name1: 'Tech',
      name2 : 'Innovators',
      founded: 2015,
      description:
          "Annual technology conference featuring industry leaders",
      about: [
        "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
        "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      heroImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      events: [
        {
          id: 1,
          title: "Tech Conference 2023",
          date: "Oct 15, 2023",
          description:
            "Annual technology conference featuring industry leaders",
        },
        {
          id: 2,
          title: "Hackathon",
          date: "Nov 20, 2023",
          description:
            "24-hour coding competition with exciting prizes",
          },
          {
            id: 3,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 4,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
          },    {
            id: 5,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 6,
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
        heroImage:
              "./clubBgimgs/codingBg.webp",
        description:
              "Annual technology conference featuring industry leaders",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
        })),
      },
      {
        id: 'Digital-Literacy-club',
          name1: 'Digital',
         name2 : 'Literacy',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          description:
                "Annual technology conference featuring industry leaders",
          events: [
            {
              id: 1,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 2,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
              },
              {
                id: 3,
                title: "Tech Conference 2023",
                date: "Oct 15, 2023",
                description:
                  "Annual technology conference featuring industry leaders",
              },
              {
                id: 4,
                title: "Hackathon",
                date: "Nov 20, 2023",
                description:
                  "24-hour coding competition with exciting prizes",
              },    {
                id: 5,
                title: "Tech Conference 2023",
                date: "Oct 15, 2023",
                description:
                  "Annual technology conference featuring industry leaders",
              },
              {
                id: 6,
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
          })),
      },
      {
        id: 'Robotics-club ',
          name1: 'Robotics',
          founded: 2015,
        
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description:
              "Annual technology conference featuring industry leaders",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          description:
                "Annual technology conference featuring industry leaders",
          events: [
            {
              id: 1,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 2,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
              },
              {
                id: 3,
                title: "Tech Conference 2023",
                date: "Oct 15, 2023",
                description:
                  "Annual technology conference featuring industry leaders",
              },
              {
                id: 4,
                title: "Hackathon",
                date: "Nov 20, 2023",
                description:
                  "24-hour coding competition with exciting prizes",
              },    {
                id: 5,
                title: "Tech Conference 2023",
                date: "Oct 15, 2023",
                description:
                  "Annual technology conference featuring industry leaders",
              },
              {
                id: 6,
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
          })),
      },
      {
        id: 'Linguistic-club',
        name1: 'Linguistic',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
        })),
      },
      {
        id: 'Games-sports-club',
        name1: 'Games &',
        name2:'Sports',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
        })),
      },
      {
        id: 'Competitive-club',
        name1: 'Competitive',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
        })),
      },
      {
        id: 'Photography-Designing-club',
        name1: 'Photography &',
        name2:'Designing',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
        })),
      },
      {
        id: 'Research-club',
        name1: 'Researchs',
        founded: 2015,
        description:
            "Annual technology conference featuring industry leaders",
        about: [
          "The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring cutting-edge innovations, sharing knowledge, and building meaningful connections.",
          "Our mission is to create a platform where students can develop technical skills, work on real-world projects, and connect with industry professionals.",
        ],
        heroImage:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        events: [
          {
            id: 1,
            title: "Tech Conference 2023",
            date: "Oct 15, 2023",
            description:
              "Annual technology conference featuring industry leaders",
          },
          {
            id: 2,
            title: "Hackathon",
            date: "Nov 20, 2023",
            description:
              "24-hour coding competition with exciting prizes",
            },
            {
              id: 3,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 4,
              title: "Hackathon",
              date: "Nov 20, 2023",
              description:
                "24-hour coding competition with exciting prizes",
            },    {
              id: 5,
              title: "Tech Conference 2023",
              date: "Oct 15, 2023",
              description:
                "Annual technology conference featuring industry leaders",
            },
            {
              id: 6,
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
        })),
      },       
    
  ];
  