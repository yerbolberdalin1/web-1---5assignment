const userProfile = {
  name: "BERDALIN YERBOL",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["Football", "Reading"]
};

const profileForm = document.querySelector("#profile-form");
const usernameInput = document.querySelector("#username");
const birthYearInput = document.querySelector("#birth-year");
const profileOutput = document.querySelector("#profile-output");
const hobbyInput = document.querySelector("#hobby-input");
const hobbyList = document.querySelector("#hobby-list");
const addButton = document.querySelector("#add-item");
const removeButton = document.querySelector("#remove-item");

usernameInput.value = userProfile.name;
birthYearInput.value = userProfile.birthYear;
birthYearInput.max = new Date().getFullYear();

function displayProfile() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - userProfile.birthYear;
  const months = age * 12;

  document.querySelector("#profile-name").textContent = userProfile.name;
  document.querySelector("#profile-year").textContent = userProfile.birthYear;
  document.querySelector("#profile-developer").textContent = userProfile.isDeveloper;
  document.querySelector("#profile-age").textContent = age;
  document.querySelector("#profile-months").textContent = months;

  console.log("Age:", age);
  console.log("Months:", months);
}

function addHobby(hobby) {
  const item = document.createElement("li");
  item.textContent = hobby;
  hobbyList.appendChild(item);
}

displayProfile();
userProfile.hobbies.forEach(addHobby);

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  userProfile.name = usernameInput.value;
  userProfile.birthYear = birthYearInput.valueAsNumber;
  displayProfile();
  profileOutput.style.color = "green";
});

addButton.addEventListener("click", function () {
  const hobby = hobbyInput.value.trim();
  if (hobby === "") {
    return;
  }

  addHobby(hobby);
  userProfile.hobbies.push(hobby);
  hobbyInput.value = "";
});

removeButton.addEventListener("click", function () {
  const lastItem = hobbyList.lastElementChild;
  if (lastItem) {
    lastItem.remove();
    userProfile.hobbies.pop();
  }
});
