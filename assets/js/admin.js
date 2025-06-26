const ADMIN_PASSWORD = "admin123";

function adminLogin() {
  const pass = document.getElementById("adminPass").value;
  if (pass === ADMIN_PASSWORD) {
    document.getElementById("adminPanel").style.display = "block";
    loadTicketsToTable();
  } else {
    alert("Password salah!");
  }
}

function loadTicketsToTable() {
  const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
  const table = document.getElementById("ticketTable");
  table.innerHTML = `<tr><th>Nama</th><th>Email</th><th>ID</th><th>Check-in</th><th>Aksi</th></tr>`;
  tickets.forEach((t, i) => {
    table.innerHTML += `<tr>
      <td><input type="text" value="${t.name}" onchange="editTicket(${i}, 'name', this.value)"></td>
      <td><input type="text" value="${t.email}" onchange="editTicket(${i}, 'email', this.value)"></td>
      <td>${t.ticketID}</td>
      <td>${t.checkedIn ? '✅' : '❌'}</td>
      <td><button onclick="deleteTicket(${i})">Hapus</button></td>
    </tr>`;
  });
}

function editTicket(index, key, value) {
  const tickets = JSON.parse(localStorage.getItem("tickets"));
  tickets[index][key] = value;
  localStorage.setItem("tickets", JSON.stringify(tickets));
  loadTicketsToTable();
}

function deleteTicket(index) {
  const tickets = JSON.parse(localStorage.getItem("tickets"));
  tickets.splice(index, 1);
  localStorage.setItem("tickets", JSON.stringify(tickets));
  loadTicketsToTable();
}
