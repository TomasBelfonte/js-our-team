const team1El = document.querySelector(".team1");
const team2El = document.querySelector(".team2");
const team3El = document.querySelector(".team3");
const team4El = document.querySelector(".team4");
const team5El = document.querySelector(".team5");
const team6El = document.querySelector(".team6");

const teamMember = [
    { 
    nome:"Waine",
    cognome:"Barnett",
    ruolo:"Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome:"Angela",
        cognome:"Caroll",
        ruolo:"Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        nome:"Walter",
        cognome:"Gordon",
        ruolo:"Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        nome:"Angela",
        cognome:"Lopez",
        ruolo:"Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome:"Scott",
        cognome:"Estrada",
        ruolo:"Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        nome:"Barbara",
        cognome:"Ramos",
        ruolo:"Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
    
];

console.log(teamMember);

team1El.innerHTML = teamMember[0].nome + " , " + teamMember[0].cognome + " , " + teamMember[0].ruolo;
team2El.innerHTML = teamMember[1].nome + " , " + teamMember[1].cognome + " , " + teamMember[1].ruolo;
team3El.innerHTML = teamMember[2].nome + " , " + teamMember[2].cognome + " , " + teamMember[2].ruolo;
team4El.innerHTML = teamMember[3].nome + " , " + teamMember[3].cognome + " , " + teamMember[3].ruolo;
team5El.innerHTML = teamMember[4].nome + " , " + teamMember[4].cognome + " , " + teamMember[4].ruolo;
team6El.innerHTML = teamMember[5].nome + " , " + teamMember[5].cognome + " , " + teamMember[5].ruolo;