// 🧭 Back button (works even if no previous page)
document.getElementById("backBtn").addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html"; // fallback homepage
  }
});

// 🧠 Employee Data (20 Employees)
const employees = [
  { name: "Amit Kumar", dept: "IT", email: "amit.kumar@company.com", phone: "9876543210" },
  { name: "Sneha Sharma", dept: "HR", email: "sneha.sharma@company.com", phone: "9876501234" },
  { name: "Rahul Verma", dept: "Finance", email: "rahul.verma@company.com", phone: "9876512345" },
  { name: "Priya Nair", dept: "Marketing", email: "priya.nair@company.com", phone: "9876523456" },
  { name: "John Doe", dept: "Sales", email: "john.doe@company.com", phone: "9876534567" },
  { name: "Anita Singh", dept: "Support", email: "anita.singh@company.com", phone: "9876545678" },
  { name: "Karan Mehta", dept: "IT", email: "karan.mehta@company.com", phone: "9876556789" },
  { name: "Meena Joseph", dept: "HR", email: "meena.joseph@company.com", phone: "9876567890" },
  { name: "Vikram Patel", dept: "Finance", email: "vikram.patel@company.com", phone: "9876578901" },
  { name: "Tina George", dept: "Marketing", email: "tina.george@company.com", phone: "9876589012" },
  { name: "Aditya Raj", dept: "Sales", email: "aditya.raj@company.com", phone: "9876590123" },
  { name: "Sana Khan", dept: "Support", email: "sana.khan@company.com", phone: "9876601234" },
  { name: "Ravi Sharma", dept: "IT", email: "ravi.sharma@company.com", phone: "9876612345" },
  { name: "Neha Gupta", dept: "HR", email: "neha.gupta@company.com", phone: "9876623456" },
  { name: "Arjun Das", dept: "Finance", email: "arjun.das@company.com", phone: "9876634567" },
  { name: "Pooja Reddy", dept: "Marketing", email: "pooja.reddy@company.com", phone: "9876645678" },
  { name: "Mohit Sinha", dept: "Sales", email: "mohit.sinha@company.com", phone: "9876656789" },
  { name: "Divya Menon", dept: "Support", email: "divya.menon@company.com", phone: "9876667890" },
  { name: "Arun Iyer", dept: "IT", email: "arun.iyer@company.com", phone: "9876678901" },
  { name: "Shreya Ghosh", dept: "HR", email: "shreya.ghosh@company.com", phone: "9876689012" }
];

const container = document.getElementById("employeeContainer");
const noResults = document.getElementById("noResults");

// 👷 Generate employee cards dynamically
function displayEmployees(list) {
  container.innerHTML = "";
  if (list.length === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
    list.forEach((emp, index) => {
      const card = document.createElement("div");
      card.classList.add("employee-card");
      card.innerHTML = `
        <img src="https://i.pravatar.cc/150?img=${index + 10}" alt="${emp.name}">
        <h3>${emp.name}</h3>
        <p>${emp.dept}</p>
      `;
      card.addEventListener("click", () => openModal(emp, index));
      container.appendChild(card);
    });
  }
}

// Initial render
displayEmployees(employees);

// 🔍 Search & Filter
document.getElementById("searchInput").addEventListener("input", filterEmployees);
document.getElementById("departmentFilter").addEventListener("change", filterEmployees);

function filterEmployees() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const dept = document.getElementById("departmentFilter").value;

  const filtered = employees.filter(emp => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search) ||
      emp.dept.toLowerCase().includes(search);
    const matchesDept = dept === "" || emp.dept === dept;
    return matchesSearch && matchesDept;
  });

  displayEmployees(filtered);
}

// 🪄 Modal
const modal = document.getElementById("employeeModal");
const closeBtn = document.querySelector(".close-btn");

function openModal(emp, idx) {
  document.getElementById("modalImage").src = https://i.pravatar.cc/150?img=${idx + 10};
  document.getElementById("modalName").innerText = emp.name;
  document.getElementById("modalDept").innerText = emp.dept;
  document.getElementById("modalEmail").innerText = emp.email;
  document.getElementById("modalPhone").innerText = emp.phone;
  modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});