 const REPORT_PASSWORD = "agenx123";

    window.onload = function () {
      if (localStorage.getItem("reportLoggedIn") === "true") {
        showReportPanel();
      }
    };

    function reportLogin() {
      const pass = document.getElementById("reportPass").value;
      if (pass === REPORT_PASSWORD) {
        localStorage.setItem("reportLoggedIn", "true");
        showReportPanel();
      } else {
        alert("Password salah!");
      }
    }

    function showReportPanel() {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("reportPanel").style.display = "block";
      showAll();
    }

    function showAll() {
      const data = JSON.parse(localStorage.getItem("tickets")) || [];
      renderTable(data);
    }

    function showCheckedIn(status) {
      const data = JSON.parse(localStorage.getItem("tickets")) || [];
      const filtered = data.filter(t => t.checkedIn === status);
      renderTable(filtered);
    }

    function renderTable(data) {
      const table = document.getElementById("reportTable");
      table.innerHTML = `<tr><th>Nama</th><th>Email</th><th>ID</th><th>Check-in</th></tr>`;
      data.forEach(t => {
        table.innerHTML += `<tr>
          <td>${t.name}</td>
          <td>${t.email}</td>
          <td>${t.ticketID}</td>
          <td>${t.checkedIn ? '✅' : '❌'}</td>
        </tr>`;
      });
    }