import React from 'react';
import './Members.css';
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

interface Member {
  id: number;
  name: string;
  position: string;
}

interface Club {
  id: number;
  name: string;
  logo: string;
  members: Member[];
}

// Club name mappings to match Excel data with our clubNames
const clubNameMappings: Record<string, string> = {
  "COMPETATIVE CLUB": "Competitive Club",
  "CODING CLUB": "Coding Club",
  "DESIGNING CLUB": "Studio Club",
  "STARTUP CLUB": "Startup Club",
  "ROBOTICS CLUB": "Robotics Club",
  "LECTURE SERIES CLUB": "Lecture Series Club",
  "INTERNSHIP & CARRER OPPURTUNITIES": "Internship & Career Opportunities Club",
  "LINGUSTIC & PERSONAL DEVELOPMENT CLUB": "Linguistic & Personality Development Club",
  "FINANCE CLUB": "Finance Club",
  "SPORTS & GAMES CLUB": "Sports & Games Club",
  "CULTURAL & CHOREOGRAPHY CLUB": "Cultural & Choreography Club",
  "ARTS & CRAFTS CLUB": "Arts & Crafts Club",
  "ELECTRONICS CLUB": "Electronics Club",
  "ECO CLUB": "Eco club",
  "YOGA CLUB": "Yoga Club",
  "HIGHER EDUCATION CLUB": "Higher Education Club"
};

// Actual member data from Excel sheet
const excelData = [
  // Startup Club
  { clubName: "Startup Club", position: "GS", name: "Satyaveni Tatiparthi" },
  { clubName: "Startup Club", position: "GS", name: "GANGASANI REDDY KARTHEEK" },
  { clubName: "Startup Club", position: "MEMBER", name: "Balaga.Jaswanth Naidu" },
  { clubName: "Startup Club", position: "MEMBER", name: "Medaboinasandeep" },
  { clubName: "Startup Club", position: "MEMBER", name: "Chekka.Lakshmi priya" },
  { clubName: "Startup Club", position: "MEMBER", name: "SURA AJAY" },
  { clubName: "Startup Club", position: "MEMBER", name: "R.Reshma" },
  { clubName: "Startup Club", position: "Volunteer", name: "G.punyavathi" },
  { clubName: "Startup Club", position: "Volunteer", name: "S.AMRUTHA VARSHINI" },

  // Eco club
  { clubName: "Eco club", position: "MEMBER", name: "Poluru sowjanya" },

  // Studio Club
  { clubName: "Studio Club", position: "GS", name: "Rushitha" },
  { clubName: "Studio Club", position: "GS", name: "KORRA LOVA RAJU" },
  { clubName: "Studio Club", position: "MEMBER", name: "CHINTALAPUDI AMRUTHA VARSHINI" },
  { clubName: "Studio Club", position: "MEMBER", name: "S.Meghana" },
  { clubName: "Studio Club", position: "MEMBER", name: "Lokesh" },

  // Competitive Club
  { clubName: "Competitive Club", position: "GS", name: "M.Sai sneha" },
  { clubName: "Competitive Club", position: "MEMBER", name: "Dhanush B" },
  { clubName: "Competitive Club", position: "MEMBER", name: "Ch.Akshitha" },
  { clubName: "Competitive Club", position: "MEMBER", name: "Bandi Navya" },
  { clubName: "Competitive Club", position: "MEMBER", name: "Mamatha dora" },
  { clubName: "Competitive Club", position: "MEMBER", name: "KANCHIPATI NITHIN" },
  { clubName: "Competitive Club", position: "MEMBER", name: "S.Durga Anjali" },
  { clubName: "Competitive Club", position: "MEMBER", name: "B Sahithi Meghana" },

  // Cultural & Choreography Club
  { clubName: "Cultural & Choreography Club", position: "GS", name: "Duvvada kalyani" },
  { clubName: "Cultural & Choreography Club", position: "MEMBER", name: "Ch chandra moulika" },
  { clubName: "Cultural & Choreography Club", position: "MEMBER", name: "O Jeevitha" },
  { clubName: "Cultural & Choreography Club", position: "MEMBER", name: "Susreya" },
  { clubName: "Cultural & Choreography Club", position: "MEMBER", name: "Kanithi Jahnavi" },
  { clubName: "Cultural & Choreography Club", position: "MEMBER", name: "Shivani" },
  { clubName: "Cultural & Choreography Club", position: "Volunteer", name: "S.Durga Anjali" },
  { clubName: "Cultural & Choreography Club", position: "Volunteer", name: "Mandru Akshaya" },

  // Lecture Series Club
  { clubName: "Lecture Series Club", position: "GS", name: "Podalakuru Prasad" },
  { clubName: "Lecture Series Club", position: "MEMBER", name: "Dola urmila" },
  { clubName: "Lecture Series Club", position: "MEMBER", name: "Gadhireddy Pavithra" },
  { clubName: "Lecture Series Club", position: "MEMBER", name: "Sree Varshitha Ramisetti" },
  { clubName: "Lecture Series Club", position: "MEMBER", name: "Kuruva Tulasi" },
  { clubName: "Lecture Series Club", position: "MEMBER", name: "Katikireddy sindhu" },

  // Internship & Career Opportunities Club
  { clubName: "Internship & Career Opportunities Club", position: "GS", name: "Shaik Ishak" },
  { clubName: "Internship & Career Opportunities Club", position: "GS", name: "Madhira Ramya" },
  { clubName: "Internship & Career Opportunities Club", position: "MEMBER", name: "S. P. S. ROYAL" },

  // Finance Club
  { clubName: "Finance Club", position: "MEMBER", name: "M.Jahnavi" },
  { clubName: "Finance Club", position: "MEMBER", name: "Boddeti Mythri" },
  { clubName: "Finance Club", position: "Volunteer", name: "Patnam naga siri" },
  { clubName: "Finance Club", position: "Volunteer", name: "Sheaik Rizwana" },
  { clubName: "Finance Club", position: "Volunteer", name: "S.Vijayadurga" },

  // Linguistic & Personality Development Club
  { clubName: "Linguistic & Personality Development Club", position: "GS", name: "Madiki Rajasri" },
  { clubName: "Linguistic & Personality Development Club", position: "MEMBER", name: "Aswini" },
  { clubName: "Linguistic & Personality Development Club", position: "MEMBER", name: "TEJASWI" },
  { clubName: "Linguistic & Personality Development Club", position: "MEMBER", name: "Mandela Lavanya" },
  { clubName: "Linguistic & Personality Development Club", position: "MEMBER", name: "K.jahnavi" },
  { clubName: "Linguistic & Personality Development Club", position: "MEMBER", name: "Tamarapalli SuryaKala" },
  { clubName: "Linguistic & Personality Development Club", position: "Volunteer", name: "Patruni Rajeswari" },
  { clubName: "Linguistic & Personality Development Club", position: "Volunteer", name: "B.mary jones" },

  // Robotics Club
  { clubName: "Robotics Club", position: "GS", name: "Shaik.Kashifa" },
  { clubName: "Robotics Club", position: "MEMBER", name: "V. Pushpanjali" },
  { clubName: "Robotics Club", position: "MEMBER", name: "R.Divakar" },
  { clubName: "Robotics Club", position: "Volunteer", name: "Avala Durga" },
  { clubName: "Robotics Club", position: "Volunteer", name: "Vavilapalli Rupavathi" },
  { clubName: "Robotics Club", position: "Volunteer", name: "V. Durga" },

  // Arts & Crafts Club
  { clubName: "Arts & Crafts Club", position: "Volunteer", name: "Jinka pavani" },
  { clubName: "Arts & Crafts Club", position: "Volunteer", name: "Ch. Sravani" },

  // Electronics Club
  { clubName: "Electronics Club", position: "MEMBER", name: "S.sai malathi" },
  { clubName: "Electronics Club", position: "MEMBER", name: "Renuka" },
  { clubName: "Electronics Club", position: "MEMBER", name: "Kallepalli Vishalakshi" },
  { clubName: "Electronics Club", position: "Volunteer", name: "ALUGOLU ROHINI" },

  // Coding Club
  { clubName: "Coding Club", position: "JS", name: "Nithyanand Ganugula" },
];

const clubNames = [
  {name:"COMPETATIVE CLUB",logo:competative },
  {name:"CODING CLUB",logo:coding},
  {name:"DESIGNING CLUB",logo:dp},
  {name:"STARTUP CLUB",logo:startup},
  {name:"ROBOTICS CLUB",logo:robotics},
  {name:"LECTURE SERIES CLUB",logo:ls},
  {name:"INTERNSHIP & CARRER OPPURTUNITIES",logo:internship},
  {name:"LINGUSTIC & PERSONAL DEVELOPMENT CLUB",logo:linquistic},
  {name:"FINANCE CLUB",logo:Finance},
  {name:"SPORTS & GAMES CLUB",logo:sports},
  {name:"CULTURAL & CHOREOGRAPHY CLUB",logo:cc},
  {name:"ARTS & CRAFTS CLUB",logo:arts},
  {name:"ELECTRONICS CLUB",logo:electronics},
  {name:"ECO CLUB",logo:eco},
  {name:"YOGA CLUB",logo:yoga},
  {name:"HIGHER EDUCATION CLUB",logo:he},
];

function Members() {
  // Create actual clubs with members from Excel data
  const clubs: Club[] = clubNames.map((club, clubIndex) => {
    // Find the mapped name for this club
    const mappedName = clubNameMappings[club.name] || club.name;
    
    // Filter members for this club
    const clubMembers = excelData.filter(member => 
      member.clubName.toUpperCase() === mappedName.toUpperCase()
    );

    // Sort members by position (GS first, then JS, then Member, then Volunteer)
    const sortedMembers = clubMembers.sort((a, b) => {
      const positionOrder = ["GS", "JS", "MEMBER", "Volunteer"];
      return positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position);
    }).map((member, memberIndex) => ({
      id: memberIndex + 1,
      name: member.name,
      position: member.position
    }));

    return {
      id: clubIndex + 1,
      name: club.name,
      logo: club.logo,
      members: sortedMembers.length > 0 ? sortedMembers : 
        // Fallback to mock data if no members found for the club
        Array.from({ length: 5 }, (_, memberIndex) => ({
          id: memberIndex + 1,
          name: `Member ${memberIndex + 1}`,
          position: "MEMBER"
        }))
    };
  });

  return (
    <div className="members-page">
      <h1 className="page-title">MEMBERS</h1>
      <div className="clubs-container">
        {clubs.map((club) => (
          <div key={club.id} className="club-card">
            <div className="club-header">
              <h2 className="club-name">{club.name}</h2>
              <img src={club.logo} alt={`${club.name} logo`} className="club-logo" />
            </div>
            <div className="members-grid">
              {club.members.map((member) => (
                <div key={member.id} className="member-item">
                  <div className="member-content">
                    <img 
                      src="https://thumbs.dreamstime.com/b/person-line-icon-outline-vector-sign-linear-style-pictogram-isolated-white-user-account-member-symbol-logo-illustration-88294009.jpg" 
                      alt="Member icon" 
                      className="member-icon"
                    />
                    <span className="member-name">{member.name}</span>
                    <span className="member-position">{member.position}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;