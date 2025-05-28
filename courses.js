// document.addEventListener("DOMContentLoaded", () => {
//     const instructor = {
//         name: "Jonas Schmedtmann",
//         role: "Web Developer, Designer, and Teacher",
//         rating: 4.7,
//         reviews: 477192,
//         students: 2141760,
//         courses: 7,
//         image: "https://img-c.udemycdn.com/user/200_H/7799204_2091_3.jpg",
//         bio: [
//           "Hi, I'm Jonas! I'm one of Udemy's Top Instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfaction.",
//           "I'm a full-stack web developer and designer with a passion for building beautiful web interfaces from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
//           "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privilege of training 2,000,000+ learners in the field of web development."
//         ]
//     };
  
//     const container = document.createElement("div");
//     container.className = "instructor-profile";
//     container.innerHTML = `
//       <h2>Instructor</h2>
//       <a href="#">${instructor.name}</a>
//       <div>${instructor.role}</div>
//       <img src="${instructor.image}" alt="${instructor.name}" style="width:100px; border-radius: 50%;">
//       <ul>
//         <li>⭐ ${instructor.rating} Instructor Rating</li>
//         <li>💬 ${instructor.reviews.toLocaleString()} Reviews</li>
//         <li>👥 ${instructor.students.toLocaleString()} Students</li>
//         <li>🎓 ${instructor.courses} Courses</li>
//       </ul>
//       <p>${instructor.bio[0]}</p>
//       <div class="extra-bio" style="display: none;">
//         <p>${instructor.bio[1]}</p>
//         <p style="color: gray;">${instructor.bio[2]}</p>
//       </div>
//       <button id="toggleBio" style="margin-top:10px;">Show more ▼</button>
//     `;
  
//     document.body.appendChild(container);
  
//     const toggleBtn = document.getElementById("toggleBio");
//     const extraBio = container.querySelector(".extra-bio");
  
//     toggleBtn.addEventListener("click", () => {
//       const isHidden = extraBio.style.display === "none";
//       extraBio.style.display = isHidden ? "block" : "none";
//       toggleBtn.textContent = isHidden ? "Show less ▲" : "Show more ▼";
//     });
//   });
  
document.addEventListener("DOMContentLoaded", () => {
  const instructors = [
    {
      name: "Jonas Schmedtmann",
      role: "Web Developer, Designer, and Teacher",
      rating: 4.7,
      reviews: 477192,
      students: 2141760,
      courses: 7,
      image: "https://img-c.udemycdn.com/user/200_H/7799204_2091_3.jpg",
      bio: [
        "Hi, I'm Jonas! I'm one of Udemy's Top Instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfaction.",
        "I'm a full-stack web developer and designer with a passion for building beautiful web interfaces from scratch.",
        "I discovered my passion for teaching during college. This passion led me to Udemy in 2015."
      ]
    },
    {
      name: "Angela Yu",
      role: "Developer and Lead Instructor",
      rating: 4.8,
      reviews: 912345,
      students: 3200000,
      courses: 15,
      image: "https://img-c.udemycdn.com/user/200_H/23234858_7887_2.jpg",
      bio: [
        "Angela is the lead instructor at the London App Brewery.",
        "She has taught over 3 million students how to code.",
        "Her students now work at Google, Apple, Amazon, and more."
      ]
    },
    {
      name: "Maximilian Schwarzmüller",
      role: "Professional Web Developer and Instructor",
      rating: 4.7,
      reviews: 850000,
      students: 2500000,
      courses: 10,
      image: "https://img-c.udemycdn.com/user/200_H/13952972_20c4_5.jpg",
      bio: [
        "Max is a self-taught web developer and instructor.",
        "He loves creating hands-on coding courses.",
        "Max also runs a YouTube channel for web developers."
      ]
    },
    {
      name: "Colt Steele",
      role: "Developer and Bootcamp Instructor",
      rating: 4.8,
      reviews: 600000,
      students: 1800000,
      courses: 8,
      image: "https://img-c.udemycdn.com/user/200_H/4464166_5fd8_3.jpg",
      bio: [
        "Colt has helped thousands become developers.",
        "He has a background in teaching and curriculum design.",
        "His bootcamp style makes learning fun and practical."
      ]
    },
    {
      name: "Brad Traversy",
      role: "Full Stack Web Developer & Instructor",
      rating: 4.7,
      reviews: 510000,
      students: 1700000,
      courses: 12,
      image: "https://img-c.udemycdn.com/user/200_H/9721820_67e7_4.jpg",
      bio: [
        "Brad runs Traversy Media, a top dev channel on YouTube.",
        "He specializes in full-stack development and tech education.",
        "His mission is to make coding accessible to all."
      ]
    },
    {
      name: "Stephen Grider",
      role: "Engineering Architect",
      rating: 4.6,
      reviews: 410000,
      students: 1500000,
      courses: 20,
      image: "https://img-c.udemycdn.com/user/200_H/5487312_0554_4.jpg",
      bio: [
        "Stephen has been building complex web apps for over 10 years.",
        "He brings real-world experience into his courses.",
        "He's trained over 1 million engineers globally."
      ]
    },
    {
      name: "Andrei Neagoie",
      role: "Senior Software Developer & Instructor",
      rating: 4.8,
      reviews: 370000,
      students: 1200000,
      courses: 9,
      image: "https://img-c.udemycdn.com/user/200_H/10575482_2ce3_3.jpg",
      bio: [
        "Andrei's goal is to make coding education better.",
        "He teaches topics that are industry-relevant and up-to-date.",
        "His students have landed jobs at top companies worldwide."
      ]
    }
  ];
  instructors.forEach((instructor) => {
    function getQueryParam(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }
    
    const nameParam = getQueryParam("name");
    const instructor = instructors.find(inst => inst.name === decodeURIComponent(nameParam));
    
    const profile = document.getElementById("profile");
    
    if (instructor) {
      container.innerHTML = `
      <h1 class="section08__text">Instructor</h1>
                        <a style="margin-top: 10px;" href="./ibos code/index.html" class="section08__link">${instructor.name}</a>
                        <p style="margin-top: 10px;" class="section08__p">${instructor.role}</p>
                        <div style="margin-top: 10px;" class="section06__row-wrraper">
                            <img src="${instructor.image}" alt="" class="section08__instructor-pic">
                            <div class="section06__column-wrraper">
                                <div class="section06__row-wrraper">
                                <img src="./secondpictures/SVG (14).svg" alt="" class="section08__pic">
                                <p class="section08__p">${instructor.rating}</p>
                            </div>
                             <div class="section06__row-wrraper">
                                <img src="./secondpictures/SVG (15).svg" alt="" class="section08__pic">
                                <p class="section08__p">${instructor.reviews}</p>
                            </div>
                             <div class="section06__row-wrraper">
                                <img src="./secondpictures/SVG (13).svg" alt="" class="section06__pic">
                                <p class="section08__p">${instructor.students}</p>
                            </div>
                             <div class="section06__row-wrraper">
                                <img src="./secondpictures/SVG (16).svg" alt="" class="section08__pic">
                                <p class="section08__p">${instructor.courses}</p>
                            </div>
                            </div>
                        </div>
                        <p style="overflow: scroll; margin-top: 10px;" class=" section08__p">
                         ${instructor.bio}
                        </p>
                        <div style="margin-top: 10px;" class="section05__row-wrraper">
                            <a href="" class="section05__link">Show more</a>
                             <img src="./secondpictures/SVG (8).svg" alt="" class="section01__pic">
                        </div>`;
    } else {
      profile.textContent = "Instructor not found.";
    }
    const container = document.createElement(".section08__wrraper");
    container.className = "instructor-profile";
    container.style.marginBottom = "30px";

    document.body.appendChild(container);

    const toggleBtn = container.querySelector(".toggleBio");
    const extraBio = container.querySelector(".extra-bio");

    toggleBtn.addEventListener("click", () => {
      const isHidden = extraBio.style.display === "none";
      extraBio.style.display = isHidden ? "block" : "none";
      toggleBtn.textContent = isHidden ? "Show less ▲" : "Show more ▼";
    });
  });
});
