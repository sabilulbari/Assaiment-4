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
