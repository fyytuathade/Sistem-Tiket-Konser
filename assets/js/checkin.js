const STAFF_PASSWORD = "agenx123";

    window.onload = function () {
      if (localStorage.getItem("checkinLoggedIn") === "true") {
        showCheckinPanel();
      }
    };

    function checkinLogin() {
      const pass = document.getElementById("checkinPass").value;
      if (pass === STAFF_PASSWORD) {
        localStorage.setItem("checkinLoggedIn", "true");
        showCheckinPanel();
      } else {
        alert("Password salah!");
      }
    }

    function showCheckinPanel() {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("checkinPanel").style.display = "block";
    }

    function checkTicket() {
      const id = document.getElementById("ticketID").value.trim();
      const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
      const resultDiv = document.getElementById("result");
      const index = tickets.findIndex(t => t.ticketID === id);

      if (index === -1) {
        resultDiv.innerHTML = `<p style='color: red;'>Tiket tidak ditemukan.</p>`;
        return;
      }

      if (tickets[index].checkedIn) {
        resultDiv.innerHTML = `<p style='color: orange;'>Tiket sudah digunakan.</p>`;
        return;
      }

      tickets[index].checkedIn = true;
      localStorage.setItem("tickets", JSON.stringify(tickets));

      resultDiv.innerHTML = `<p style='color: green;'>Check-in berhasil!</p>
        <ul>
          <li>Nama: ${tickets[index].name}</li>
          <li>Email: ${tickets[index].email}</li>
          <li>ID Tiket: ${tickets[index].ticketID}</li>
        </ul>`;
    }