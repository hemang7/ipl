import React, { useState } from "react";
import "./styles.css";

const teams = {
  DC: [
    {
      name: "Shreyas Iyer (c)",
      nation: "Indian",
      matches: 62,
      runs: 1681,
      wickets: 0
    },
    {
      name: "Kagiso Rabada",
      nation: "South African",
      matches: 18,
      runs: 69,
      wickets: 31
    },
    {
      name: "Marcus Stoinis",
      nation: "Australian",
      matches: 29,
      runs: 473,
      wickets: 15
    },
    {
      name: "Sandeep Lamichhane",
      nation: "Nepalese",
      matches: 9,
      runs: 0,
      wickets: 13
    },
    {
      name: "Ishant Sharma",
      nation: "Indian",
      matches: 89,
      runs: 55,
      wickets: 72
    },
    {
      name: "Ajinkya Rahane",
      nation: "Indian",
      matches: 140,
      runs: 3820,
      wickets: 1
    },
    {
      name: "Ravichandran Ashwin",
      nation: "Indian",
      matches: 139,
      runs: 375,
      wickets: 125
    },
    {
      name: "Shikhar Dhawan",
      nation: "Indian",
      matches: 159,
      runs: 4579,
      wickets: 4
    },
    {
      name: "Shimron Hetmyer",
      nation: "West Indian",
      matches: 5,
      runs: 90,
      wickets: 0
    },
    {
      name: "Daniel Sams",
      nation: "Australian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Alex Carey",
      nation: "Australian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Mohit Sharma",
      nation: "Indian",
      matches: 85,
      runs: 122,
      wickets: 91
    },
    {
      name: "Prithvi Shaw",
      nation: "Indian",
      matches: 25,
      runs: 598,
      wickets: 0
    },
    {
      name: "Lalith Yadav",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Avesh Khan",
      nation: "Indian",
      matches: 8,
      runs: 4,
      wickets: 5
    },
    {
      name: "Axar Patel",
      nation: "Indian",
      matches: 82,
      runs: 796,
      wickets: 71
    },
    {
      name: "Tushar Deshpande",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Anrich Nortje",
      nation: "South African",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Rishabh Pant",
      nation: "Indian",
      matches: 54,
      runs: 1736,
      wickets: 0
    },
    {
      name: "Harshal Patel",
      nation: "Indian",
      matches: 43,
      runs: 107,
      wickets: 43
    },
    {
      name: "Keemo Paul",
      nation: "West Indian",
      matches: 8,
      runs: 18,
      wickets: 9
    },
    {
      name: "Amit Mishra",
      nation: "Indian",
      matches: 147,
      runs: 362,
      wickets: 157
    }
  ],
  CSK: [
    {
      name: "MS Dhoni (c)",
      nation: "Indian",
      matches: 190,
      runs: 4432,
      wickets: 0
    },
    {
      name: "Imran Tahir",
      nation: "South African",
      matches: 55,
      runs: 20,
      wickets: 79
    },
    {
      name: "Lungi Ngidi",
      nation: "South African",
      matches: 7,
      runs: 0,
      wickets: 11
    },
    {
      name: "Ruturaj Gaikwad",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Shane Watson",
      nation: "Australian",
      matches: 134,
      runs: 3575,
      wickets: 92
    },
    {
      name: "Ambati Rayudu",
      nation: "Indian",
      matches: 147,
      runs: 3300,
      wickets: 0
    },
    {
      name: "Murali Vijay",
      nation: "Indian",
      matches: 103,
      runs: 2587,
      wickets: 0
    },
    {
      name: "Kedar Jadhav",
      nation: "Indian",
      matches: 79,
      runs: 1079,
      wickets: 0
    },
    {
      name: "Ravindra Jadeja",
      nation: "Indian",
      matches: 170,
      runs: 1927,
      wickets: 108
    },
    {
      name: "Deepak Chahar",
      nation: "Indian",
      matches: 34,
      runs: 71,
      wickets: 33
    },
    {
      name: "Piyush Chawla",
      nation: "Indian",
      matches: 157,
      runs: 584,
      wickets: 150
    },
    {
      name: "Narayan Jagadeesan",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Mitchell Santner",
      nation: "New Zealander",
      matches: 4,
      runs: 32,
      wickets: 4
    },
    {
      name: "KM Asif",
      nation: "Indian",
      matches: 2,
      runs: 0,
      wickets: 3
    },
    {
      name: "Shardul Thakur",
      nation: "Indian",
      matches: 36,
      runs: 36,
      wickets: 36
    },
    {
      name: "R Sai Kishore",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Faf du Plessis",
      nation: "South African",
      matches: 71,
      runs: 1853,
      wickets: 0
    },
    {
      name: "Monu Kumar",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Dwayne Bravo",
      nation: "West Indian",
      matches: 134,
      runs: 1483,
      wickets: 147
    },
    {
      name: "Josh Hazlewood",
      nation: "Australian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Sam Curran",
      nation: "English",
      matches: 9,
      runs: 95,
      wickets: 10
    },
    {
      name: "Karn Sharma",
      nation: "Indian",
      matches: 62,
      runs: 316,
      wickets: 54
    }
  ],
  KKR: [
    {
      name: "Dinesh Karthik (c)",
      nation: "Indian",
      matches: 182,
      runs: 3654,
      wickets: 0
    },
    {
      name: "Shivam Mavi",
      nation: "Indian",
      matches: 9,
      runs: 13,
      wickets: 5
    },
    {
      name: "Sandeep Warrier",
      nation: "Indian",
      matches: 3,
      runs: 0,
      wickets: 2
    },
    {
      name: "Kuldeep Yadav",
      nation: "Indian",
      matches: 40,
      runs: 44,
      wickets: 39
    },
    {
      name: "Eoin Morgan",
      nation: "English",
      matches: 52,
      runs: 854,
      wickets: 0
    },
    {
      name: "Pat Cummins",
      nation: "Australian",
      matches: 16,
      runs: 77,
      wickets: 17
    },
    {
      name: "Sunil Narine",
      nation: "West Indian",
      matches: 110,
      runs: 771,
      wickets: 122
    },
    {
      name: "Nikhil Naik",
      nation: "Indian",
      matches: 3,
      runs: 30,
      wickets: 0
    },
    {
      name: "M Siddharth",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Andre Russell",
      nation: "West Indian",
      matches: 64,
      runs: 1400,
      wickets: 55
    },
    {
      name: "Lockie Ferguson",
      nation: "New Zealander",
      matches: 9,
      runs: 1,
      wickets: 5
    },
    {
      name: "Prasidh Krishna",
      nation: "Indian",
      matches: 18,
      runs: 1,
      wickets: 14
    },
    {
      name: "Shubman Gill",
      nation: "Indian",
      matches: 27,
      runs: 499,
      wickets: 0
    },
    {
      name: "Nitish Rana",
      nation: "Indian",
      matches: 46,
      runs: 1085,
      wickets: 7
    },
    {
      name: "Siddhesh Lad",
      nation: "Indian",
      matches: 1,
      runs: 15,
      wickets: 0
    },
    {
      name: "Kamlesh Nagarkoti",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Rinku Singh",
      nation: "Indian",
      matches: 10,
      runs: 66,
      wickets: 0
    },
    {
      name: "Varun Chakravarthy",
      nation: "Indian",
      matches: 1,
      runs: 0,
      wickets: 1
    },
    {
      name: "Ali Khan",
      nation: "American",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Tom Banton",
      nation: "English",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Chris Green",
      nation: "South African",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Rahul Tripathi",
      nation: "Indian",
      matches: 34,
      runs: 758,
      wickets: 0
    }
  ],
  KXIP: [
    {
      name: "KL Rahul (c)",
      nation: "Indian",
      matches: 67,
      runs: 1977,
      wickets: 0
    },
    {
      name: "Arshdeep Singh",
      nation: "Indian",
      matches: 3,
      runs: 0,
      wickets: 3
    },
    {
      name: "Chris Gayle",
      nation: "West Indian",
      matches: 125,
      runs: 4484,
      wickets: 18
    },
    {
      name: "Darshan Nalkande",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Krishnappa Gowtham",
      nation: "Indian",
      matches: 22,
      runs: 144,
      wickets: 12
    },
    {
      name: "Hardus Viljoen",
      nation: "South African",
      matches: 6,
      runs: 3,
      wickets: 7
    },
    {
      name: "Harpreet Brar",
      nation: "Indian",
      matches: 2,
      runs: 20,
      wickets: 0
    },
    {
      name: "Jagadeesha Suchith",
      nation: "Indian",
      matches: 15,
      runs: 54,
      wickets: 12
    },
    {
      name: "Karun Nair",
      nation: "Indian",
      matches: 69,
      runs: 1464,
      wickets: 0
    },
    {
      name: "Mandeep Singh",
      nation: "Indian",
      matches: 97,
      runs: 1529,
      wickets: 1
    },
    {
      name: "Mayank Agarwal",
      nation: "Indian",
      matches: 77,
      runs: 1266,
      wickets: 0
    },
    {
      name: "Mohammad Shami",
      nation: "Indian",
      matches: 51,
      runs: 54,
      wickets: 40
    },
    {
      name: "Mujeeb Ur Rahman",
      nation: "Afghan",
      matches: 16,
      runs: 10,
      wickets: 17
    },
    {
      name: "Murugan Ashwin",
      nation: "Indian",
      matches: 22,
      runs: 4,
      wickets: 15
    },
    {
      name: "Nicholas Pooran",
      nation: "West Indian",
      matches: 7,
      runs: 168,
      wickets: 0
    },
    {
      name: "Sarfaraz Khan",
      nation: "Indian",
      matches: 33,
      runs: 408,
      wickets: 0
    },
    {
      name: "Glenn Maxwell",
      nation: "Australian",
      matches: 69,
      runs: 1397,
      wickets: 16
    },
    {
      name: "Sheldon Cottrell",
      nation: "West Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Deepak Hooda",
      nation: "Indian",
      matches: 61,
      runs: 524,
      wickets: 7
    },
    {
      name: "Ishan Porel",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Ravi Bishnoi",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Jimmy Neesham",
      nation: "New Zealander",
      matches: 4,
      runs: 42,
      wickets: 1
    },
    {
      name: "Chris Jordan",
      nation: "English",
      matches: 11,
      runs: 3,
      wickets: 12
    },
    {
      name: "Tajinder Singh",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Simran Singh",
      nation: "Indian",
      matches: 1,
      runs: 16,
      wickets: 0
    }
  ],
  MI: [
    {
      name: "Rohit Sharma (c)",
      nation: "Indian",
      matches: 188,
      runs: 4898,
      wickets: 15
    },
    {
      name: "Digvijay Deshmukh",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Quinton de Kock",
      nation: "South African",
      matches: 50,
      runs: 1456,
      wickets: 0
    },
    {
      name: "Aditya Tare",
      nation: "Indian",
      matches: 35,
      runs: 339,
      wickets: 0
    },
    {
      name: "Saurabh Tiwary",
      nation: "Indian",
      matches: 81,
      runs: 1276,
      wickets: 0
    },
    {
      name: "Jasprit Bumrah",
      nation: "Indian",
      matches: 77,
      runs: 35,
      wickets: 82
    },
    {
      name: "Dhawal Kulkarni",
      nation: "Indian",
      matches: 90,
      runs: 97,
      wickets: 86
    },
    {
      name: "James Pattinson",
      nation: "Australian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Nathan Coulter-Nile",
      nation: "Australian",
      matches: 26,
      runs: 52,
      wickets: 36
    },
    {
      name: "Trent Boult",
      nation: "New Zealander",
      matches: 33,
      runs: 12,
      wickets: 38
    },
    {
      name: "Jayant Yadav",
      nation: "Indian",
      matches: 12,
      runs: 6,
      wickets: 5
    },
    {
      name: "Suryakumar Yadav",
      nation: "Indian",
      matches: 85,
      runs: 1548,
      wickets: 0
    },
    {
      name: "Krunal Pandya",
      nation: "Indian",
      matches: 55,
      runs: 891,
      wickets: 40
    },
    {
      name: "Kieron Pollard",
      nation: "West Indian",
      matches: 148,
      runs: 2755,
      wickets: 56
    },
    {
      name: "Rahul Chahar",
      nation: "Indian",
      matches: 16,
      runs: 15,
      wickets: 15
    },
    {
      name: "Chris Lynn",
      nation: "Australian",
      matches: 41,
      runs: 1280,
      wickets: 0
    },
    {
      name: "Hardik Pandya",
      nation: "Indian",
      matches: 66,
      runs: 1068,
      wickets: 42
    },
    {
      name: "Sherfane Rutherford",
      nation: "West Indian",
      matches: 7,
      runs: 73,
      wickets: 1
    },
    {
      name: "Anmolpreet Singh",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Mohsin Khan",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Mitchell McClenaghan",
      nation: "New Zealander",
      matches: 56,
      runs: 85,
      wickets: 71
    },
    {
      name: "Prince Balwant Rai Singh",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Anukul Roy",
      nation: "Indian",
      matches: 1,
      runs: 0,
      wickets: 1
    },
    {
      name: "Ishan Kishan",
      nation: "Indian",
      matches: 37,
      runs: 695,
      wickets: 0
    }
  ],
  RCB: [
    {
      name: "Virat Kohli (c)",
      nation: "Indian",
      matches: 177,
      runs: 5412,
      wickets: 4
    },
    {
      name: "Mohammed Siraj",
      nation: "Indian",
      matches: 26,
      runs: 29,
      wickets: 28
    },
    {
      name: "Chris Morris",
      nation: "South African",
      matches: 61,
      runs: 517,
      wickets: 69
    },
    {
      name: "Josh Philippe",
      nation: "Australian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Moeen Ali",
      nation: "English",
      matches: 16,
      runs: 297,
      wickets: 9
    },
    {
      name: "Aaron Finch",
      nation: "Australian",
      matches: 75,
      runs: 1737,
      wickets: 1
    },
    {
      name: "AB de Villiers",
      nation: "South African",
      matches: 154,
      runs: 4395,
      wickets: 0
    },
    {
      name: "Shahbaz Ahamad",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Parthiv Patel",
      nation: "Indian",
      matches: 139,
      runs: 2848,
      wickets: 0
    },
    {
      name: "Yuzvendra Chahal",
      nation: "Indian",
      matches: 84,
      runs: 21,
      wickets: 100
    },
    {
      name: "Navdeep Saini",
      nation: "Indian",
      matches: 13,
      runs: 2,
      wickets: 11
    },
    {
      name: "Isuru Udana",
      nation: "Sri Lankan",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Dale Steyn",
      nation: "South African",
      matches: 92,
      runs: 166,
      wickets: 96
    },
    {
      name: "Pawan Negi",
      nation: "Indian",
      matches: 50,
      runs: 365,
      wickets: 34
    },
    {
      name: "Devdutt Padikkal",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Shivam Dube",
      nation: "Indian",
      matches: 4,
      runs: 40,
      wickets: 0
    },
    {
      name: "Umesh Yadav",
      nation: "Indian",
      matches: 119,
      runs: 122,
      wickets: 119
    },
    {
      name: "Gurkeerat Mann Singh",
      nation: "Indian",
      matches: 33,
      runs: 440,
      wickets: 5
    },
    {
      name: "Washington Sundar",
      nation: "Indian",
      matches: 21,
      runs: 75,
      wickets: 16
    },
    {
      name: "Pavan Deshpande",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Adam Zampa",
      nation: "Australian",
      matches: 11,
      runs: 5,
      wickets: 19
    }
  ],
  RR: [
    {
      name: "Steve Smith (c)",
      nation: "Australian",
      matches: 81,
      runs: 2022,
      wickets: 0
    },
    {
      name: "Ankit Rajpoot",
      nation: "Indian",
      matches: 23,
      runs: 17,
      wickets: 22
    },
    {
      name: "Ben Stokes",
      nation: "English",
      matches: 34,
      runs: 635,
      wickets: 26
    },
    {
      name: "Jofra Archer",
      nation: "English",
      matches: 21,
      runs: 82,
      wickets: 26
    },
    {
      name: "Jos Buttler",
      nation: "English",
      matches: 45,
      runs: 1386,
      wickets: 0
    },
    {
      name: "Mahipal Lomror",
      nation: "Indian",
      matches: 4,
      runs: 28,
      wickets: 0
    },
    {
      name: "Manan Vohra",
      nation: "Indian",
      matches: 49,
      runs: 1012,
      wickets: 0
    },
    {
      name: "Mayank Markande",
      nation: "Indian",
      matches: 17,
      runs: 27,
      wickets: 16
    },
    {
      name: "Rahul Tewatia",
      nation: "Indian",
      matches: 20,
      runs: 111,
      wickets: 14
    },
    {
      name: "Riyan Parag",
      nation: "Indian",
      matches: 7,
      runs: 160,
      wickets: 2
    },
    {
      name: "Sanju Samson",
      nation: "Indian",
      matches: 93,
      runs: 2209,
      wickets: 0
    },
    {
      name: "Shashank Singh",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Shreyas Gopal",
      nation: "Indian",
      matches: 31,
      runs: 127,
      wickets: 38
    },
    {
      name: "Varun Aaron",
      nation: "Indian",
      matches: 47,
      runs: 49,
      wickets: 42
    },
    {
      name: "Robin Uthappa",
      nation: "Indian",
      matches: 177,
      runs: 4411,
      wickets: 0
    },
    {
      name: "Jaydev Unadkat",
      nation: "Indian",
      matches: 73,
      runs: 55,
      wickets: 77
    },
    {
      name: "Yashasvi Jaiswal",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Anuj Rawat",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Akash Singh",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Kartik Tyagi",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "David Miller",
      nation: "South African",
      matches: 79,
      runs: 1850,
      wickets: 0
    },
    {
      name: "Oshane Thomas",
      nation: "West Indian",
      matches: 4,
      runs: 0,
      wickets: 5
    },
    {
      name: "Anirudha Joshi",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Andrew Tye",
      nation: "Australian",
      matches: 26,
      runs: 85,
      wickets: 39
    },
    {
      name: "Tom Curran",
      nation: "English",
      matches: 5,
      runs: 23,
      wickets: 6
    }
  ],
  SRH: [
    {
      name: "David Warner (c)",
      nation: "Australian",
      matches: 126,
      runs: 4706,
      wickets: 0
    },
    {
      name: "Rashid Khan",
      nation: "Afghan",
      matches: 46,
      runs: 104,
      wickets: 55
    },
    {
      name: "Sanjay Yadav",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Wriddhiman Saha",
      nation: "Indian",
      matches: 120,
      runs: 1765,
      wickets: 0
    },
    {
      name: "Khaleel Ahmed",
      nation: "Indian",
      matches: 10,
      runs: 0,
      wickets: 19
    },
    {
      name: "Sandeep Sharma",
      nation: "Indian",
      matches: 79,
      runs: 32,
      wickets: 95
    },
    {
      name: "Abdul Samad",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Mitchell Marsh",
      nation: "Australian",
      matches: 20,
      runs: 225,
      wickets: 20
    },
    {
      name: "Shreevats Goswami",
      nation: "Indian",
      matches: 29,
      runs: 293,
      wickets: 0
    },
    {
      name: "Mohammad Nabi",
      nation: "Afghan",
      matches: 13,
      runs: 135,
      wickets: 11
    },
    {
      name: "Fabian Allen",
      nation: "West Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Abhishek Sharma",
      nation: "Indian",
      matches: 6,
      runs: 72,
      wickets: 1
    },
    {
      name: "Basil Thampi",
      nation: "Indian",
      matches: 19,
      runs: 32,
      wickets: 16
    },
    {
      name: "Billy Stanlake",
      nation: "Australian",
      matches: 6,
      runs: 5,
      wickets: 7
    },
    {
      name: "Sandeep Bavanaka",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "Bhuvneshwar Kumar",
      nation: "Indian",
      matches: 117,
      runs: 183,
      wickets: 133
    },
    {
      name: "Virat Singh",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    },
    {
      name: "T Natarajan",
      nation: "Indian",
      matches: 6,
      runs: 0,
      wickets: 2
    },
    {
      name: "Kane Williamson",
      nation: "New Zealander",
      matches: 41,
      runs: 1302,
      wickets: 0
    },
    {
      name: "Shahbaz Nadeem",
      nation: "Indian",
      matches: 64,
      runs: 32,
      wickets: 42
    },
    {
      name: "Jonny Bairstow",
      nation: "English",
      matches: 10,
      runs: 445,
      wickets: 0
    },
    {
      Name: "Manish Pandey",
      nation: "Indian",
      matches: 130,
      runs: 2843,
      wickets: 0
    },
    {
      name: "Vijay Shankar",
      nation: "Indian",
      matches: 33,
      runs: 557,
      wickets: 2
    },
    {
      name: "Siddarth Kaul",
      nation: "Indian",
      matches: 45,
      runs: 12,
      wickets: 49
    },
    {
      name: "Priyam Garg",
      nation: "Indian",
      matches: "No Past IPL Stats Found",
      runs: "",
      wickets: ""
    }
  ]
};
export default function App() {
  const [teamSelected, setTeamSelected] = useState("DC");

  function teamClickHandler(player) {
    setTeamSelected(player);
  }

  return (
    <div className="App">
      <h1>🏏INDIAN PREMIER LEAGUE 🏏</h1>
      <div>
        {Object.keys(teams).map((player) => (
          <button onClick={() => teamClickHandler(player)} className="teams">
            {player}
          </button>
        ))}
        <button className="sort">Sort</button>
      </div>
      <hr />
      <div className="squad-container">
        {teams[teamSelected].map((team) => (
          <div key={team.name} className="squad-list">
            <h2> {team.name} </h2>
            <p className="ipl">IPL 2020</p>
            <p style={{ fontSize: "large" }}> {team.nation} </p>
            <div>
              <p>Runs : {team.runs}</p>
              <p>Wickets : {team.wickets}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
