// Sample data - You can extend to 20 categories x 20 each
const categories = [
  {
    name: "Web Development",
    courses: [
      {
        id: 1,
        title: "HTML & CSS Basics",
        tutor: "John Doe",
        rating: 4.5,
        type: "Coding",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnV1oujsRtYs_YeHRuukfe-Pn6QPfKUMJbnA&s",
        page: "course1.html"
      },
      {
        id: 2,
        title: "JavaScript Essentials",
        tutor: "Jane Smith",
        rating: 4.7,
        type: "Coding",
        image: "https://via.placeholder.com/200x120",
        page: "course2.html"
      },
      // Add 18 more for demo
    ]
  },
  {
    name: "Health & Fitness",
    courses: [
      {
        id: 21,
        title: "Yoga for Beginners",
        tutor: "Anjali Sharma",
        rating: 4.8,
        type: "Health",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnV1oujsRtYs_YeHRuukfe-Pn6QPfKUMJbnA&s",
        page: "course21.html"
      },
      {
        id: 22,
        title: "Home Workouts",
        tutor: "Mark Lee",
        rating: 4.6,
        type: "Health",
        image: "https://via.placeholder.com/200x120",
        page: "course22.html"
      },
      // Add more
    ]
  },
  // Add up to 20 categories
];

// Extra courses from all.json (not shown on homepage)
const allExtraCourses = [
  {
    id: 101,
    title: "Financial Freedom",
    tutor: "Sara Khan",
    rating: 4.9,
    type: "Finance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnV1oujsRtYs_YeHRuukfe-Pn6QPfKUMJbnA&s",
    page: "course101.html"
  },
  {
    id: 102,
    title: "Python for Data Science",
    tutor: "Ravi Patel",
    rating: 4.8,
    type: "Coding",
    image: "https://via.placeholder.com/200x120",
    page: "course102.html"
  },
  // Add more
];
