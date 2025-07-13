// Get DOM elements
const categoriesContainer = document.getElementById("categories-container");
const searchInput = document.getElementById("search");
const searchOverlay = document.getElementById("searchOverlay");
const searchResults = document.getElementById("searchResults");
const clearSearch = document.getElementById("clearSearch");

// Show overlay and clear icon when input focused
searchInput.addEventListener("focus", () => {
  searchOverlay.style.display = "block";
  clearSearch.style.display = "block";
  searchResults.innerHTML = "";
});

// Clear search on ❌ click
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchOverlay.style.display = "none";
  searchResults.innerHTML = "";
  clearSearch.style.display = "none";
  searchInput.blur();
});

// Handle input typing
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = "";

  if (!query) return;

  let allCourses = [];
  categories.forEach(cat => allCourses.push(...cat.courses));
  allCourses = allCourses.concat(allExtraCourses);

  const matched = allCourses.filter(course =>
    course.title.toLowerCase().includes(query)
  );

  matched.forEach(course => {
    searchResults.appendChild(createCourseCard(course));
  });
});

// Create a single course card (used in both homepage + search)
function createCourseCard(course) {
  const card = document.createElement("div");
  card.className = "course-card";
  card.innerHTML = `
    <img src="${course.image}" alt="${course.title}" />
    <h3>${course.title}</h3>
    <p>${course.tutor}</p>
    <p>⭐ ${course.rating}</p> 
    <p><strong>${course.type}</strong></p>
  `;
  card.onclick = () => {
    window.location.href = `${course.page}`;
  };
  return card;
}

// Render 2 courses per category
function renderCategories(categories) {
  categories.forEach((category) => {
    const section = document.createElement("section");
    section.className = "category";
    section.innerHTML = `<h2>${category.name}</h2>`;

    const courseContainer = document.createElement("div");
    courseContainer.className = "course-container";

    const limitedCourses = category.courses.slice(0, 2);
    limitedCourses.forEach(course => {
      courseContainer.appendChild(createCourseCard(course));
    });

    section.appendChild(courseContainer);
    categoriesContainer.appendChild(section);
  });
}

// Call render on load
renderCategories(categories);
