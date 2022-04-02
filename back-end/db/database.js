const  teams = [
    {
        name: "Celtics",
        location: "Boston, Massachusetts", 
        wins: "47",
        losses: "28",
        winningPercentage: ".627",
        rank: "1",

    },

    {
        name: "Heat",
        location: "Miami, Florida",
        wins: "47",
        losses: "28",
        winningPercentage: ".627" ,
        rank: "2"

    },

    {
        name: "Bucks",
        location: "Milwaukee, Wisconsin", 
        wins: "46",
        losses: "28",
        winningPercentage: ".622",
        rank: "3"

    },

    {
        name: "Sixers",
        location: "Philadelphia, Pennsylvania ", 
        wins: "46",
        losses: "28",
        winningPercentage: ".622",
        rank: "4"

    },

    {
        name: "Bulls",
        location: "Chicago, Illinois", 
        wins: "43",
        losses: "31",
        winningPercentage: ".581",
        rank: "5"

    },

    {
        name: "Raptors",
        location: "Toronto, Canada", 
        wins: "42",
        losses: "32",
        winningPercentage: ".568",
        rank: "6"
    },

    {
        name: "Cavaliers",
        location: "Cleveland, Ohio", 
        wins: "41",
        losses: "33",
        winningPercentage: ".554",
        rank: "7"

    },

    {
        name: "Hornets",
        location: "Charlotte, North Carolina", 
        wins: "39",
        losses: "36",
        winningPercentage: ".520",
        rank: "8"

    },




    {
        name: "Suns",
        location: "Phoenix, Arizona", 
        wins: "61",
        losses: "14",
        winningPercentage: ".813",
        rank: "1"

    },

    {
        name: "Grizzlies",
        location: "Memphis, Tennessee",
        wins: "52",
        losses: "23",
        winningPercentage: ".693",
        rank: "2"

    },

    {
        name: "Warriors",
        location: "San Francisco, California", 
        wins: "48",
        losses: "27",
        winningPercentage: ".640",
        rank: "3"

    },

    {
        name: "Mavericks",
        location: "Dallas, Texas", 
        wins: "46",
        losses: "29",
        winningPercentage: ".613",
        rank: "4"

    },

    {
        name: "Jazz",
        location: "Salt Lake City, Utah", 
        wins: "45",
        losses: "30",
        percent: ".600",
        rank: "5"

    },

    {
        name: "Nuggets",
        location: "Denver, Colorado", 
        wins: "44",
        losses: "31",
        winningPercentage: ".587",
        rank: "6"

    },

    {
        name: "Timberwolves",
        location: "Minneapolis, Minnesota ", 
        wins: "43",
        losses: "33",
        winningPercentage: ".566",
        rank: "7"

    },

    {
        name: "Clippers",
        location: "Los Angeles, California", 
        wins: "36",
        losses: "39",
        winningPercentage: ".480",
        rank: "8"

    }
]

const players = [
    {
        team: "Celtics",
        name: "Jason Tatum",
        position: "SF",
        ppg: "27.1",
        threePoint: "35.6",
        fieldGoal: "45.0",
        freeThrow: "86.0",
        assists: "4.3",
        blocks: "0.6",
        steals: "0.9",
        rebounds: "8.1"
    },

    {
        team: "Celtics",
        name: "Jaylen Brown",
        position: "SG",
        ppg: "23.4",
        threePoint: "35.0",
        fieldGoal: "46.9",
        freeThrow: "75.8",
        assists: "3.2",
        blocks: "0.3",
        steals: "1.0",
        rebounds: "6.1"
    },

    {
        team: "Celtics",
        name: "Marcus Smart",
        position: "PG",
        ppg: "11.9",
        threePoint: "33.0",
        fieldGoal: "41.9",
        freeThrow: "79.9",
        assists: "5.8",
        blocks: "0.3",
        steals: "1.7",
        rebounds: "3.8"
    },

    {
        team: "Celtics",
        name: "Al Horford",
        position: "C",
        ppg: "10.0",
        threePoint: "32.3",
        fieldGoal: "45.2",
        freeThrow: "83.7",
        assists: "3.3",
        blocks: "1.4",
        steals: "0.7",
        rebounds: "7.5"
    },

    {
        team: "Celtics",
        name: "Robert Williams",
        position: "C",
        ppg: "10.0",
        threePoint: "0.0",
        fieldGoal: "73.6",
        freeThrow: "72.2",
        assists: "2.0",
        blocks: "2.2",
        steals: "0.9",
        rebounds: "9.6"
    },

    {
        team: "Heat",
        name: "Jimmy Butler",
        position: "SF",
        ppg: "21.1",
        threePoint: "20.2",
        fieldGoal: "47.0",
        freeThrow: "87.3",
        assists: "5.5",
        blocks: "0.5",
        steals: "1.7",
        rebounds: "6.0"
    },

    {
        team: "Heat",
        name: "Tyler Herro",
        position: "PG",
        ppg: "20.8",
        threePoint: "38.7",
        fieldGoal: "44.3",
        freeThrow: "87.3",
        assists: "3.8",
        blocks: "0.1",
        steals: "0.7",
        rebounds: "4.8"
    },

    {
        team: "Heat",
        name: "Bam Adebayo",
        position: "C",
        ppg: "19.7",
        threePoint: "0.0",
        fieldGoal: "63.2",
        freeThrow: "79.0",
        assists: "2.6",
        blocks: "0.9",
        steals: "1.2",
        rebounds: "10.1"
    },

    {
        team: "Heat",
        name: "Kyle Lowry",
        position: "PG",
        ppg: "11.9",
        threePoint: "40.3",
        fieldGoal: "45.7",
        freeThrow: "87.0",
        assists: "5.9",
        blocks: "0.2",
        steals: "0.6",
        rebounds: "4.6"
    },

    {
        team: "Heat",
        name: "Duncan Robinson",
        position: "SG",
        ppg: "10.3",
        threePoint: "37.8",
        fieldGoal: "38.8",
        freeThrow: "90.0",
        assists: "1.9",
        blocks: "0.1",
        steals: "0.2",
        rebounds: "2.7"
    },

    {
        team: "Bucks",
        name: "Giannis Antetokounmpo",
        position: "PF",
        ppg: "29.7",
        threePoint: "30.0",
        fieldGoal: "55.0",
        freeThrow: "72.2",
        assists: "5.8",
        blocks: "1.4",
        steals: "1.0",
        rebounds: "11.6"
    },

     {
        team: "Bucks",
        name: "Khris Middleton",
        position: "SF",
        ppg: "20.3",
        threePoint: "37.9",
        fieldGoal: "44.5",
        freeThrow: "89.4",
        assists: "5.4",
        blocks: "0.3",
        steals: "1.1",
        rebounds: "5.4"
    },

    {
        team: "Bucks",
        name: "Jrue Holiday",
        position: "PG",
        ppg: "18.6",
        threePoint: "41.5",
        fieldGoal: "50.6",
        freeThrow: "76.1",
        assists: "6.7",
        blocks: "0.4",
        steals: "1.6",
        rebounds: "4.4"
    },

    {
        team: "Bucks",
        name: "Bobby Portis",
        position: "C",
        ppg: "14.8",
        threePoint: "39.9",
        fieldGoal: "47.5",
        freeThrow: "75.0",
        assists: "1.2",
        blocks: "0.8",
        steals: "0.7",
        rebounds: "9.2"
    },

    {
        team: "Bucks",
        name: "Grayson Allen",
        position: "SG",
        ppg: "11.2",
        threePoint: "40.8",
        fieldGoal: "44.3",
        freeThrow: "86.6",
        assists: "1.5",
        blocks: "0.3",
        steals: "0.7",
        rebounds: "3.4"
    },

    {
        team: "Sixers",
        name: "Joel Embiid",
        position: "C",
        ppg: "29.9",
        threePoint: "35.8",
        fieldGoal: "48.9",
        freeThrow: "81.8",
        assists: "4.2",
        blocks: "1.5",
        steals: "1.2",
        rebounds: "11.4"
    },

    {
        team: "Sixers",
        name: "James Harden",
        position: "SG",
        ppg: "22.5",
        threePoint: "33.6",
        fieldGoal: "41.4",
        freeThrow: "87.5",
        assists: "10.1",
        blocks: "0.6",
        steals: "1.3",
        rebounds: "7.9"
    },

    {
        team: "Sixers",
        name: "Tobias Harris",
        position: "PF",
        ppg: "17.5",
        threePoint: "35.6",
        fieldGoal: "48.2",
        freeThrow: "84.4",
        assists: "3.4",
        blocks: "0.6",
        steals: "0.6",
        rebounds: "6.9"
    },

    {
        team: "Sixers",
        name: "Tyrese Maxey",
        position: "PG",
        ppg: "17.4",
        threePoint: "41.6",
        fieldGoal: "48.1",
        freeThrow: "85.7",
        assists: "4.3",
        blocks: "0.4",
        steals: "0.7",
        rebounds: "3.4"
    },

    {
        team: "Sixers",
        name: "Georges Niang",
        position: "SF",
        ppg: "9.3",
        threePoint: "39.8",
        fieldGoal: "43.3",
        freeThrow: "87.5",
        assists: "1.4",
        blocks: "0.2",
        steals: "0.4",
        rebounds: "2.7"
    },

    {
        team: "Bulls",
        name: "Demar Derozan",
        position: "SF",
        ppg: "27.5",
        threePoint: "34.1",
        fieldGoal: "50.5",
        freeThrow: "86.8",
        assists: "5.0",
        blocks: "0.3",
        steals: "0.9",
        rebounds: "5.3"
    },

    {
        team: "Bulls",
        name: "Zach Lavine",
        position: "SG",
        ppg: "24.8",
        threePoint: "39.7",
        fieldGoal: "47.9",
        freeThrow: "85.3",
        assists: "4.6",
        blocks: "0.4",
        steals: "0.6",
        rebounds: "4.7"
    },

    {
        team: "Bulls",
        name: "Nikola Vucevic",
        position: "C",
        ppg: "18.0",
        threePoint: "31.6",
        fieldGoal: "47.6",
        freeThrow: "75.2",
        assists: "3.3",
        blocks: "1.0",
        steals: "1.0",
        rebounds: "11.3"
    },

    {
        team: "Bulls",
        name: "Lonzo Ball",
        position: "PG",
        ppg: "13.0",
        threePoint: "42.3",
        fieldGoal: "42.3",
        freeThrow: "75.0",
        assists: "5.1",
        blocks: "0.9",
        steals: "1.8",
        rebounds: "5.4"
    },

    {
        team: "Bulls",
        name: "Colby White",
        position: "PG",
        ppg: "13.0",
        threePoint: "39.4",
        fieldGoal: "44.3",
        freeThrow: "85.5",
        assists: "3.0",
        blocks: "0.2",
        steals: "0.5",
        rebounds: "3.0"
    },

    {
        team: "Raptors",
        name: "Pascal Siakam",
        position: "PF",
        ppg: "22.2",
        threePoint: "37.3",
        fieldGoal: "49.2",
        freeThrow: "74.3",
        assists: "5.1",
        blocks: "0.6",
        steals: "1.2",
        rebounds: "8.2"
    },

    {
        team: "Raptors",
        name: "Fred Vanvleet",
        position: "SG",
        ppg: "20.6",
        threePoint: "38.5",
        fieldGoal: "41.0",
        freeThrow: "87.3",
        assists: "6.7",
        blocks: "0.5",
        steals: "1.6",
        rebounds: "4.6"
    },

    {
        team: "Raptors",
        name: "Gary Trent Jr",
        position: "SG",
        ppg: "18.0",
        threePoint: "37.6",
        fieldGoal: "40.7",
        freeThrow: "83.6",
        assists: "2.1",
        blocks: "0.3",
        steals: "1.8",
        rebounds: "2.8"
    },

    {
        team: "Raptors",
        name: "Og Anunoby",
        position: "SF",
        ppg: "17.4",
        threePoint: "35.9",
        fieldGoal: "43.8",
        freeThrow: "74.8",
        assists: "2.6",
        blocks: "0.6",
        steals: "1.5",
        rebounds: "5.4"
    },

    {
        team: "Raptors",
        name: "Chris Boucher",
        position: "PF",
        ppg: "9.4",
        threePoint: "28.6",
        fieldGoal: "47.6",
        freeThrow: "77.5",
        assists: "0.3",
        blocks: "0.9",
        steals: "0.6",
        rebounds: "6.2"
    },

    {
        team: "Cavaliers",
        name: "Darius Garland",
        position: "PG",
        ppg: "21.5",
        threePoint: "36.5",
        fieldGoal: "46.4",
        freeThrow: "90.4",
        assists: "8.6",
        blocks: "0.1",
        steals: "1.2",
        rebounds: "3.4"
    },

    {
        team: "Cavaliers",
        name: "Jarrett Allen",
        position: "C",
        ppg: "16.1",
        threePoint: "10.0",
        fieldGoal: "67.7",
        freeThrow: "70.8",
        assists: "1.6",
        blocks: "1.3",
        steals: "0.8",
        rebounds: "10.8"
    },

    {
        team: "Cavaliers",
        name: "PG",
        position: "Collin Sexton",
        ppg: "16.0",
        threePoint: "24.4",
        fieldGoal: "45.0",
        freeThrow: "74.4",
        assists: "2.1",
        blocks: "0.0",
        steals: "0.9",
        rebounds: "3.3"
    },

    {
        team: "Cavaliers",
        name: "Evan Mobley",
        position: "C",
        ppg: "15.0",
        threePoint: "25.3",
        fieldGoal: "50.4",
        freeThrow: "66.9",
        assists: "2.6",
        blocks: "1.7",
        steals: "0.8",
        rebounds: "8.3"
    },

    {
        team: "Cavaliers",
        name: "Kevin Love",
        position: "PF",
        ppg: "13.4",
        threePoint: "38.7",
        fieldGoal: "42.4",
        freeThrow: "84.5",
        assists: "2.2",
        blocks: "0.2",
        steals: "0.4",
        rebounds: "7.3"

    },

    {
        team: "Hornets",
        name: "Miles Bridges",
        position: "SF",
        ppg: "20.1",
        threePoint: "32.6",
        fieldGoal: "48.6",
        freeThrow: "79.9",
        assists: "3.8",
        blocks: "0.9",
        steals: "1.0",
        rebounds: "7.1"
    },

    {
        team: "Hornets",
        name: "LaMelo Ball",
        position: "PG",
        ppg: "20.0",
        threePoint: "38.2",
        fieldGoal: "42.6",
        freeThrow: "86.6",
        assists: "7.3",
        blocks: "0.4",
        steals: "1.6",
        rebounds: "6.8"
    },

    {
        team: "Hornets",
        name: "Terry Rozier",
        position: "SG",
        ppg: "19.6",
        threePoint: "38.3",
        fieldGoal: "44.5",
        freeThrow: "84.7",
        assists: "4.3",
        blocks: "0.4",
        steals: "1.3",
        rebounds: "4.3"
    },

    {
        team: "Hornets",
        name: "Kelly Oubre Jr",
        position: "SG",
        ppg: "15.2",
        threePoint: "34.2",
        fieldGoal: "43.3",
        freeThrow: "66.9",
        assists: "1.1",
        blocks: "0.4",
        steals: "1.1",
        rebounds: "4.0"
    },

    {
        team: "Hornets",
        name: "P.J. Washington",
        position: "PF",
        ppg: "10.2",
        threePoint: "36.4",
        fieldGoal: "45.6",
        freeThrow: "71.6",
        assists: "2.2",
        blocks: "0.9",
        steals: "0.9",
        rebounds: "5.3"
    },
    
    {
        team: "Suns",
        name: "Devin Booker",
        position: "SG",
        ppg: "26.5",
        threePoint: "37.8",
        fieldGoal: "46.5",
        freeThrow: "86.7",
        assists: "4.9",
        blocks: "0.4",
        steals: "1.2",
        rebounds: "5.0"
    },

    {
        team: "Suns",
        name: "Deandre Ayton",
        position: "C",
        ppg: "17.2",
        threePoint: "35.3",
        fieldGoal: "64.4",
        freeThrow: "74.8",
        assists: "1.4",
        blocks: "0.7",
        steals: "0.7",
        rebounds: "10.0"
    },

    {
        team: "Suns",
        name: "Chris Paul",
        position: "PG",
        ppg: "15.0",
        threePoint: "33.0",
        fieldGoal: "49.1",
        freeThrow: "84.7",
        assists: "10.8",
        blocks: "0.3",
        steals: "1.8",
        rebounds: "4.5"
    },

    {
        team: "Suns",
        name: "Mikal Bridges",
        position: "SF",
        ppg: "14.2",
        threePoint: "37.6",
        fieldGoal: "53.2",
        freeThrow: "82.9",
        assists: "2.3",
        blocks: "0.5",
        steals: "1.2",
        rebounds: "4.3"
    },

    {
        team: "Suns",
        name: "Cameron Johnson",
        position: "SF",
        ppg: "12.8",
        threePoint: "44.8",
        fieldGoal: "47.5",
        freeThrow: "87.3",
        assists: "1.5",
        blocks: "0.2",
        steals: "0.8",
        rebounds: "4.1"
    },

    {
        team: "Grizzlies",
        name: "Ja Morant",
        position: "PG",
        ppg: "27.6",
        threePoint: "34.0",
        fieldGoal: "49.3",
        freeThrow: "76.2",
        assists: "6.7",
        blocks: "0.4",
        steals: "1.2",
        rebounds: "5.7"
    },

    {
        team: "Grizzlies",
        name: "Desmond Bane",
        position: "SG",
        ppg: "18.2",
        threePoint: "42.4",
        fieldGoal: "46.0",
        freeThrow: "90.0",
        assists: "2.8",
        blocks: "0.4",
        steals: "1.2",
        rebounds: "4.5"
    },

    {
        team: "Grizzlies",
        name: "Dillon Brooks",
        position: "SF",
        ppg: "17.9",
        threePoint: "30.5",
        fieldGoal: "42.1",
        freeThrow: "87.6",
        assists: "2.6",
        blocks: "0.3",
        steals: "1.3",
        rebounds: "3.2"
    },

    {
        team: "Grizzlies",
        name: "Steven Adams",
        position: "C",
        ppg: "7.1",
        threePoint: "0.0",
        fieldGoal: "54.5",
        freeThrow: "54.8",
        assists: "3.3",
        blocks: "0.8",
        steals: "0.8",
        rebounds: "10.0"
    },

    {
        team: "Grizzlies",
        name: "Jaren Jackson Jr",
        position: "PF",
        ppg: "16.4",
        threePoint: "32.2",
        fieldGoal: "41.8",
        freeThrow: "81.9",
        assists: "1.1",
        blocks: "2.3",
        steals: "0.9",
        rebounds: "5.8"
    },

    {
        team: "Warriors",
        name: "Stephen Curry",
        position: "PG",
        ppg: "25.5",
        threePoint: "38.0",
        fieldGoal: "43.7",
        freeThrow: "92.3",
        assists: "6.3",
        blocks: "0.4",
        steals: "1.3",
        rebounds: "5.2"
    },

    {
        team: "Warriors",
        name: "Jordan Poole",
        position: "SG",
        ppg: "17.8",
        threePoint: "36.1",
        fieldGoal: "45.2",
        freeThrow: "91.5",
        assists: "3.8",
        blocks: "0.3",
        steals: "0.8",
        rebounds: "3.2"
    },

    {
        team: "Warriors",
        name: "Klay Thompson",
        position: "SG",
        ppg: "18.9",
        threePoint: "37.6",
        fieldGoal: "42.1",
        freeThrow: "90.7",
        assists: "2.7",
        blocks: "0.6",
        steals: "0.6",
        rebounds: "4.0"
    },

    {
        team: "Warriors",
        name: "Andrew Wiggins",
        position: "SF",
        ppg: "17.2",
        threePoint: "39.2",
        fieldGoal: "46.6",
        freeThrow: "63.8",
        assists: "2.2",
        blocks: "0.7",
        steals: "1.1",
        rebounds: "4.4"
    },

    {
        team: "Warriors",
        name: "Kevon Looney",
        position: "C",
        ppg: "6.3",
        threePoint: "0.0",
        fieldGoal: "57.1",
        freeThrow: "60.0",
        assists: "2.0",
        blocks: "0.7",
        steals: "0.6",
        rebounds: "7.6"
    },

    {
        team: "Mavericks",
        name: "Luka Doncic",
        position: "PG",
        ppg: "27.9",
        threePoint: "35.0",
        fieldGoal: "45.4",
        freeThrow: "73.2",
        assists: "8.5",
        blocks: "0.5",
        steals: "1.2",
        rebounds: "9.1"
    },

    {
        team: "Mavericks",
        name: "Jalen Brunson",
        position: "PG",
        ppg: "16.2",
        threePoint: "37.3",
        fieldGoal: "50.2",
        freeThrow: "84.0",
        assists: "4.9",
        blocks: "0.0",
        steals: "0.9",
        rebounds: "3.8"
    },

    {
        team: "Mavericks",
        name: "Tim Hardaway Jr",
        position: "SF",
        ppg: "14.2",
        threePoint: "33.6",
        fieldGoal: "39.4",
        freeThrow: "75.7",
        assists: "2.2",
        blocks: "0.1",
        steals: "0.9",
        rebounds: "3.7"
    },

    {
        team: "Mavericks",
        name: "Dorian Finney-Smith",
        position: "PF",
        ppg: "10.7",
        threePoint: "38.1",
        fieldGoal: "45.7",
        freeThrow: "66.7",
        assists: "1.8",
        blocks: "0.5",
        steals: "1.1",
        rebounds: "4.9"
    },

    {
        team: "Mavericks",
        name: "Dwight Powell",
        position: "C",
        ppg: "8.3",
        threePoint: "36.1",
        fieldGoal: "65.7",
        freeThrow: "77.8",
        assists: "1.2",
        blocks: "0.5",
        steals: "0.5",
        rebounds: "4.7"
    },

    {
        team: "Jazz",
        name: "Donovan Mitchell",
        position: "SG",
        ppg: "25.9",
        threePoint: "36.0",
        fieldGoal: "45.2",
        freeThrow: "85.7",
        assists: "5.4",
        blocks: "0.2",
        steals: "1.5",
        rebounds: "4.2"
    },

    {
        team: "Jazz",
        name: "Bojan Bogdanovic",
        position: "SF",
        ppg: "18.1",
        threePoint: "39.2",
        fieldGoal: "45.8",
        freeThrow: "87.0",
        assists: "1.7",
        blocks: "0.0",
        steals: "0.4",
        rebounds: "4.3"
    },

    {
        team: "Jazz",
        name: "Jordan Clarkson",
        position: "PG",
        ppg: "16.1",
        threePoint: "32.0",
        fieldGoal: "41.8",
        freeThrow: "83.9",
        assists: "2.3",
        blocks: "0.2",
        steals: "0.8",
        rebounds: "3.4"
    },

    {
        team: "Jazz",
        name: "Rudy Gobert",
        position: "C",
        ppg: "15.3",
        threePoint: "0.0",
        fieldGoal: "71.2",
        freeThrow: "70.2",
        assists: "1.1",
        blocks: "2.1",
        steals: "0.6",
        rebounds: "14.6"
    },

    {
        team: "Jazz",
        name: "Mike Conley",
        position: "PG",
        ppg: "13.4",
        threePoint: "40.2",
        fieldGoal: "42.7",
        freeThrow: "80.9",
        assists: "5.3",
        blocks: "0.3",
        steals: "1.3",
        rebounds: "3.0"
    },

    {
        team: "Nuggets",
        name: "Nikola Jokic",
        position: "C",
        ppg: "26.3",
        threePoint: "34.5",
        fieldGoal: "57.7",
        freeThrow: "81.5",
        assists: "7.9",
        blocks: "0.9",
        steals: "1.4",
        rebounds: "13.5"
    },

    {
        team: "Nuggets",
        name: "Will Barton",
        position: "SF",
        ppg: "14.6",
        threePoint: "35.9",
        fieldGoal: "43.7",
        freeThrow: "79.7",
        assists: "3.9",
        blocks: "0.5",
        steals: "0.8",
        rebounds: "4.9"
    },

    {
        team: "Nuggets",
        name: "Aaron Gordon",
        position: "PF",
        ppg: "14.6",
        threePoint: "31.6",
        fieldGoal: "51.1",
        freeThrow: "74.4",
        assists: "2.5",
        blocks: "0.6",
        steals: "0.6",
        rebounds: "5.7"
    },

    {
        team: "Nuggets",
        name: "Monte Morris",
        position: "PG",
        ppg: "12.7",
        threePoint: "39.7",
        fieldGoal: "48.7",
        freeThrow: "85.3",
        assists: "4.3",
        blocks: "0.2",
        steals: "0.7",
        rebounds: "3.0"
    },

    {
        team: "Nuggets",
        name: "Jeff Green",
        position: "PF",
        ppg: "10.3",
        threePoint: "31.4",
        fieldGoal: "52.1",
        freeThrow: "83.1",
        assists: "1.3",
        blocks: "0.4",
        steals: "0.4",
        rebounds: "3.1"
    },
    
    {
        team: "Timberwolves",
        name: "Karl-Anthony Towns",
        position: "C",
        ppg: "24.6",
        threePoint: "40.9",
        fieldGoal: "52.9",
        freeThrow: "82.6",
        assists: "3.7",
        blocks: "1.1",
        steals: "1.0",
        rebounds: "9.8"
    },

    {
        team: "Timberwolves",
        name: "Anthony Edwards",
        position: "SF",
        ppg: "21.0",
        threePoint: "35.7",
        fieldGoal: "43.4",
        freeThrow: "78.0",
        assists: "3.7",
        blocks: "0.7",
        steals: "1.5",
        rebounds: "4.7"
    },

    {
        team: "Timberwolves",
        name: "D'Angelo Russell",
        position: "PG",
        ppg: "18.0",
        threePoint: "34.2",
        fieldGoal: "41.2",
        freeThrow: "82.3",
        assists: "7.1",
        blocks: "0.4",
        steals: "0.9",
        rebounds: "3.4"
    },

    {
        team: "Timberwolves",
        name: "Malik Beasley",
        position: "SG",
        ppg: "12.1",
        threePoint: "37.6",
        fieldGoal: "39.1",
        freeThrow: "79.6",
        assists: "1.5",
        blocks: "0.1",
        steals: "0.5",
        rebounds: "2.9"
    },

    {
        team: "Timberwolves",
        name: "Jaden McDaniels",
        position: "PF",
        ppg: "9.4",
        threePoint: "31.3",
        fieldGoal: "45.9",
        freeThrow: "80.0",
        assists: "1.1",
        blocks: "0.8",
        steals: "0.8",
        rebounds: "4.3"
    },

    {
        team: "Clippers",
        name: "Reggie Jackson",
        position: "PG",
        ppg: "16.9",
        threePoint: "33.1",
        fieldGoal: "39.3",
        freeThrow: "83.8",
        assists: "4.8",
        blocks: "0.2",
        steals: "0.7",
        rebounds: "3.7"
    },

    {
        team: "Clippers",
        name: "Marcus Morris Sr",
        position: "SF",
        ppg: "15.7",
        threePoint: "37.2",
        fieldGoal: "43.4",
        freeThrow: "87.4",
        assists: "2.1",
        blocks: "0.3",
        steals: "0.5",
        rebounds: "4.5"
    },

    {
        team: "Clippers",
        name: "Luke Kennard",
        position: "SG",
        ppg: "11.5",
        threePoint: "44.8",
        fieldGoal: "44.3",
        freeThrow: "89.4",
        assists: "2.1",
        blocks: "0.1",
        steals: "0.6",
        rebounds: "3.3"
    },

    {
        team: "Clippers",
        name: "Terance Mann",
        position: "SG",
        ppg: "10.8",
        threePoint: "36.2",
        fieldGoal: "48.0",
        freeThrow: "78.3",
        assists: "2.6",
        blocks: "0.2",
        steals: "0.7",
        rebounds: "5.5"
    },

    {
        team: "Clippers",
        name: "Iviva Zubac",
        position: "C",
        ppg: "10.1",
        threePoint: "0.0",
        fieldGoal: "48.9",
        freeThrow: "85.7",
        assists: "2.3",
        blocks: "0.9",
        steals: "0.8",
        rebounds: "9.3"
    }
]