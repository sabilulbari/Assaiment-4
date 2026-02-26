let interviewArray = [];
let rejectedArray = [];
let currentStatus = "all";

function getId(id) {
  const idName = document.getElementById(id);
  return idName;
}

const allButton = document.getElementById("all");
const interviewButton = document.getElementById("interview");
const rejectedButton = document.getElementById("rejected");
const noJob = document.getElementById("no-jobs");
const interviewSection = document.getElementById("interview-section");
const rejectSection = document.getElementById("reject-section");
const rejectedBtn = document.getElementsByClassName("reject-btn");
const leftJob = getId("left-job");
const leftJobCount = getId("left-job-count");
const deleteBtn = document.querySelectorAll(".delete-btn");

function btnToggle(id) {
  allButton.style.backgroundColor = "white";
  allButton.style.color = "black";

  interviewButton.style.backgroundColor = "white";
  interviewButton.style.color = "black";

  rejectedButton.style.backgroundColor = "white";
  rejectedButton.style.color = "black";

  const clickButton = document.getElementById(id);
  clickButton.style.backgroundColor = "#3B82F6";
  clickButton.style.color = "white";

  currentStatus = id;

  if (id == "interview") {
    allCards.classList.add("hidden");
    rejectSection.classList.add("hidden");
    // noJob.classList.remove("hidden");
    interviewSection.classList.remove("hidden");
    leftJob.classList.remove("hidden");
    leftJobCount.innerText = interviewArray.length;
  } else if (id == "rejected") {
    allCards.classList.add("hidden");
    interviewSection.classList.add("hidden");
    // noJob.classList.remove("hidden");
    rejectSection.classList.remove("hidden");
    leftJob.classList.remove("hidden");
    leftJobCount.innerText = rejectedArray.length;
  } else if (id == "all") {
    allCards.classList.remove("hidden");
    // noJob.classList.add("hidden");
    interviewSection.classList.add("hidden");
    rejectSection.classList.add("hidden");
    leftJob.classList.add("hidden");
  }
}

const allCards = getId("all-cards");
const allCount = getId("all-count");
const interviewCount = getId("interview-count");
const rejectedCount = getId("rejected-count");
const rightJobCount = getId("right-job-count");

// interview and rejected tab length

// calculating of count
function calculateOfCount() {
  allCount.innerText = allCards.children.length;
  rightJobCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewArray.length;
  rejectedCount.innerText = rejectedArray.length;
}

calculateOfCount();

// event listener for Event Delegation
document.getElementById("main-section").addEventListener("click", function (event) {
  const parentOfCard = event.target.parentNode.parentNode;
  const allCardSection = event.target.parentNode.parentNode.parentNode;
  const jobName = parentOfCard.querySelector(".job-names").innerText;
  const positionName = parentOfCard.querySelector(".position-name").innerText;
  const salaryLocaition = parentOfCard.querySelector(".salary-locaition").innerText;
  const status = parentOfCard.querySelector(".status").innerText;
  const notes = parentOfCard.querySelector(".notes").innerText;

  // for interview button
  if (event.target.classList.contains("interview-btn")) {
    const cardInfo = {
      jobName,
      positionName,
      salaryLocaition,
      status,
      notes,
    };

    // status button style change to click
    parentOfCard.querySelector(".status").innerText = "INTERVIEW";
    parentOfCard.querySelector(".status").style.border = "thin solid #22C55EB3";
    parentOfCard.querySelector(".status").style.backgroundColor = "#ffffff";
    parentOfCard.querySelector(".status").style.color = "#22C55ECC";

    // array push to click
    const isExits = interviewArray.find((item) => item.jobName == cardInfo.jobName);

    if (!isExits) {
      interviewArray.push(cardInfo);
    }
    rejectedArray = rejectedArray.filter((items) => items.jobName != cardInfo.jobName);
    
    renderInterview();
    renderReject();
    calculateOfCount();
  }
  // for reject button
  else if (event.target.classList.contains("reject-btn")) {
    const cardInfo = {
      jobName,
      positionName,
      salaryLocaition,
      status,
      notes,
    };

    // status button style change to click
    parentOfCard.querySelector(".status").innerText = "REJECTED";
    parentOfCard.querySelector(".status").style.border = "thin solid #EF4444B3";
    parentOfCard.querySelector(".status").style.backgroundColor = "#ffffff";
    parentOfCard.querySelector(".status").style.color = "#EF4444CC";

    const isExits = rejectedArray.find((item) => item.jobName == cardInfo.jobName);

    if (!isExits) {
      rejectedArray.push(cardInfo);
    }

    interviewArray = interviewArray.filter((items) => items.jobName != cardInfo.jobName);
    renderInterview();
    renderReject();
    calculateOfCount();
  }


  if (event.target.classList.contains("delete-btn")) {
    const deletedJobName = parentOfCard.querySelector(".job-names").innerText;

    interviewArray = interviewArray.filter((item) => item.jobName !== deletedJobName);
    rejectedArray = rejectedArray.filter((item) => item.jobName !== deletedJobName);

    allCardSection.removeChild(parentOfCard);

    renderInterview();
    renderReject();
    calculateOfCount();
  }
});

//filter with interview render
function renderInterview() {
  interviewSection.innerHTML = "";

  for (let inter of interviewArray) {
    let div = document.createElement("div");
    div.className = 'all-card pt-10 space-y-10';
    div.innerHTML = `
    <div class=" flex justify-between bg-white rounded-xl p-6">
          <!-- left side -->
          <div class="card-1">
            <h2 class="job-names font-bold text-[24px]">${inter.jobName}</h2>
            <p class="position-name font-semibold text-[#64748B]/80">${inter.positionName}</p>
            <p class="salary-locaition text-[#64748B]/80 py-5">${inter.salaryLocaition}</p>

            <button class="status rounded-md font-bold bg-white py-2 px-4 border-1 text-green-500/80 border-green-500/70 mr-4">INTERVIEW</button>
            <p class="notes py-7">${inter.notes}</p>


            <button class="interview-btn rounded-md cursor-pointer font-bold bg-white py-2 px-4 border-1 text-green-500/80 border-green-500/70 hover:bg-green-400/20 hover:text-green-700 mr-4 sm:mt-0 mt-4">
              INTERVIEW
            </button>

            <!-- Rejected Button -->
            <button class="reject-btn rounded-md cursor-pointer font-bold bg-white py-2 px-4 border-1 text-red-500/80 border-red-500/70 hover:bg-red-400/20 hover:text-red-700 disabled">
              REJECTED
            </button>
          </div>
          <!-- right delete -->
          
        </div>`;
    interviewSection.appendChild(div);
  }
}
//filter with reject render
function renderReject() {
  rejectSection.innerHTML = "";

  for (let reject of rejectedArray) {
    let div = document.createElement("div");
    div.className = 'all-card pt-10 space-y-10';
    div.innerHTML = `
    <div class=" flex justify-between bg-white rounded-xl p-6">
          <!-- left side -->
          <div class="card-1">
            <h2 class="job-names font-bold text-[24px]">${reject.jobName}</h2>
            <p class="position-name font-semibold text-[#64748B]/80">${reject.positionName}</p>
            <p class="salary-locaition text-[#64748B]/80 py-5">${reject.salaryLocaition}</p>

            <button class="status rounded-md font-bold bg-white py-2 px-4 border-1 text-red-500/80 border-red-500/70 mr-4">REJECTED</button>
            <p class="notes py-7">${reject.notes}</p>

              
            <button class="interview-btn rounded-md cursor-pointer font-bold bg-white py-2 px-4 border-1 text-green-500/80 border-green-500/70 hover:bg-green-400/20 hover:text-green-700 mr-4 sm:mt-0 mt-4">
              INTERVIEW
            </button>

            <!-- Rejected Button -->
            <button class="reject-btn rounded-md cursor-pointer font-bold bg-white py-2 px-4 border-1 text-red-500/80 border-red-500/70 hover:bg-red-400/20 hover:text-red-700">
              REJECTED
            </button>
          </div>
          <!-- right delete -->
          
        </div>`;
    rejectSection.appendChild(div);
  }
}
