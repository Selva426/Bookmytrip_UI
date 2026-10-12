const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = function () {
  menu.classList.toggle("show");
};

const searchForm = document.getElementById("searchForm");
const searchResults = document.getElementById("searchResults");

searchForm.onsubmit = function (e) {
  e.preventDefault();

  const formData = new FormData(searchForm);
  const row = document.createElement("tr");

  ["type", "location", "date", "adults"].forEach(function (field) {
    const cell = document.createElement("td");
    cell.textContent = formData.get(field) || "Not set";
    row.appendChild(cell);
  });

  searchResults.appendChild(row);
};
