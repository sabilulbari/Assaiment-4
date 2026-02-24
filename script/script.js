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

  if (id == "interview") {
    allCards.classList.add("hidden");
    rejectSection.classList.add("hidden");
    // noJob.classList.remove("hidden");
    interviewSection.classList.remove("hidden");
  } else if (id == "rejected") {
    allCards.classList.add("hidden");
    interviewSection.classList.add("hidden");
    // noJob.classList.remove("hidden");
    rejectSection.classList.remove("hidden");
  } else if (id == "all") {
    allCards.classList.remove("hidden");
    // noJob.classList.add("hidden");
    interviewSection.classList.add("hidden");
    rejectSection.classList.add("hidden");
  }
}

const allCards = getId("all-cards");
const allCount = getId("all-count");
const interviewCount = getId("interview-count");
const rejectedCount = getId("rejected-count");
const rightJobCount = getId("right-job-count");

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


    
    calculateOfCount();
  }
});