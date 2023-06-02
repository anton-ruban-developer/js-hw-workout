const plan = document.querySelector(".plan");
const planLists = document.querySelectorAll(".plan_list");
const spans = plan.querySelectorAll("span");
const items = plan.querySelectorAll("h5");
const img = plan.querySelector("img");

planLists.forEach((planList) => {
  planList.addEventListener("mouseenter", onMouseEnter);
  planList.addEventListener("mouseleave", onMouseLeave);
});

function onMouseEnter(event) {
  const currentPlanList = event.currentTarget;
  const currentSpans = currentPlanList.querySelectorAll("span");
  const currentItems = currentPlanList.querySelectorAll("h5");
  const currentImg = currentPlanList.querySelectorAll("img");

  currentPlanList.style.backgroundColor = "#064BB4";
  currentSpans.forEach((span) => {
    span.style.color = "white";
  });
  currentItems.forEach((h5) => {
    h5.style.color = "white";
  });
  currentImg.forEach((img) => {
    img.src = "img/Icon-green.png";
  });
}

function onMouseLeave(event) {
  const currentPlanList = event.currentTarget;
  const currentSpans = currentPlanList.querySelectorAll("span");
  const currentItems = currentPlanList.querySelectorAll("h5");
  const currentImg = currentPlanList.querySelectorAll("img");

  currentPlanList.style.backgroundColor = "";
  currentSpans.forEach((span) => {
    span.style.color = "";
  });
  currentItems.forEach((h5) => {
    h5.style.color = "";
  });
  currentImg.forEach((img) => {
    img.src = "img/Icon2.png";
  });
}