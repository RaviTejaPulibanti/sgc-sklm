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
const clubNames = [
  {name:"COMPETATIVE CLUB",logo:competative },
  {name:"CODING CLUB",logo:coding},
  {name:"DESIGNING CLUB",logo:dp},
  {name:"START CLUB",logo:startup},
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
  // Generate mock data for 16 clubs with 17 members each (as in your screenshot)
   const clubs: Club[] = clubNames.map((club, clubIndex) => ({
    id: clubIndex + 1,
    name: club.name,
    logo: club.logo,
    members: Array.from({ length: 30 }, (_, memberIndex) => {
  let position = "Former Member";
  if (memberIndex < 20) {
    position = memberIndex === 0 ? "GENERAL SECRETARY" 
             : memberIndex === 1 ? "JOINT SECRETARY" 
             : "EXECUTIVE MEMBER";
  }
  return {
    id: memberIndex + 1,
    name: `Member ${memberIndex + 1}`,
    position: position
  };
})
  }));

  return (
    <div className="members-page">
      <h1 className="page-title"> MEMBERS </h1>
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
                    <img src='https://thumbs.dreamstime.com/b/person-line-icon-outline-vector-sign-linear-style-pictogram-isolated-white-user-account-member-symbol-logo-illustration-88294009.jpg'></img>
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