const tzSelect = document.getElementById("timezone");
const timeline = document.getElementById("timeline");
const clock = document.getElementById("clock");

function loadTimezones() {
  timezones.forEach(tz => {
    const opt = document.createElement("option");
    opt.value = tz.offset;
    opt.textContent = tz.label;
    tzSelect.appendChild(opt);
  });
}

function renderTimeline(offset) {
  timeline.innerHTML = "";
  const timelineWidth = timeline.offsetWidth || 800;

  sessions.forEach(session => {
    const div = document.createElement("div");
    div.className = "session";
    div.style.backgroundColor = session.color;

    const start = (session.start + 24 + parseInt(offset)) % 24;
    const end = (session.end + 24 + parseInt(offset)) % 24;

    let width = 0;
    let left = 0;

    if (end > start) {
      width = end - start;
      left = start;
    } else {
      width = 24 - start + end;
      left = start;
    }

    div.style.left = (left * 100 / 24) + "%";
    div.style.width = (width * 100 / 24) + "%";
    div.style.top = sessions.indexOf(session) * 45 + "px";
    div.textContent = session.name;
    timeline.appendChild(div);
  });

  const now = new Date();
  const localHour = (now.getUTCHours() + parseInt(offset) + 24) % 24;
  const nowLine = document.createElement("div");
  nowLine.style.position = "absolute";
  nowLine.style.width = "2px";
  nowLine.style.height = "100%";
  nowLine.style.left = (localHour * 100 / 24) + "%";
  nowLine.style.background = "#000";
  timeline.appendChild(nowLine);
}

function updateClock() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  clock.textContent = now.toLocaleTimeString([], options);
}

function renderVolumeChart() {
  const ctx = document.getElementById("volumeChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: Array.from({length: 24}, (_, i) => i + ":00"),
      datasets: [{
        label: "Volume",
        data: [10, 8, 7, 6, 6, 7, 10, 15, 18, 22, 24, 28, 30, 35, 32, 30, 26, 22, 18, 15, 12, 10, 9, 8],
        borderColor: "#3366cc",
        backgroundColor: "rgba(51, 102, 204, 0.2)",
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { mode: 'index', intersect: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "#ddd" }
        },
        x: {
          grid: { color: "#eee" }
        }
      }
    }
  });
}

tzSelect.addEventListener("change", e => {
  renderTimeline(e.target.value);
});

loadTimezones();
tzSelect.value = 6;
renderTimeline(6);
renderVolumeChart();
setInterval(updateClock, 1000);