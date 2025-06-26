document.getElementById("ticketForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const ticketID = "TIKET" + Math.floor(100000 + Math.random() * 900000);

  document.getElementById("tName").textContent = name;
  document.getElementById("tEmail").textContent = email;
  document.getElementById("tPhone").textContent = phone;
  document.getElementById("ticketID").textContent = ticketID;
  document.getElementById("ticket").style.display = "block";

  let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
  tickets.push({ name, email, phone, ticketID, checkedIn: false });
  localStorage.setItem("tickets", JSON.stringify(tickets));

  document.getElementById("ticketForm").reset();
});
