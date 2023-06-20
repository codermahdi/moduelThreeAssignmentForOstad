//1.Date Object:

// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

function getDayOfTheWeek(DateString) {
  let DateParts = DateString.split("-");
  let year = parseInt(DateParts[0]);
  let month = parseInt(DateParts[1]) - 1;
  let day = parseInt(DateParts[2]);
  let date = new Date(year, month, day);
  let DayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let DayOfWeekIndex = date.getDay();
  return DayOfWeek[DayOfWeekIndex];
}

// b. Implement the function to display the day of the week for the current date.
getDayOfTheWeek("2023-06-18");

// 2.Math Object:

// a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.

function squareRootOfSumOfSquares(numbers) {
  let squareRootOfSumSquares = 0;
  for (let i = 0; i < numbers.length; i++) {
    squareRootOfSumSquares += Math.pow(numbers[i], 2);
  }
  return Math.sqrt(squareRootOfSumSquares);
}

// b. Implement the function to display the square root of the sum of squares for an array of numbers.
const arrNumbers = [1, 2, 3, 4];
const result = squareRootOfSumOfSquares(arrNumbers);

// 3.Numbers:

// a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
function isPrimeNumber(number) {
  if (number < 2) {
    return false;
  }
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// b. Implement the function to check if a given positive integer is a prime number.
isPrimeNumber(1);

// 4.Window Object:

// a. Create a function that opens a new window with a specified URL and dimensions (width and height).
function openNewWindow(url, width, height) {
  window.open(url, "_blank", `width=${width},height=${height}`);
}

// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
// openNewWindow("https://www.example.com", 800, 600); - Need to uncomment

// 5.Navigator Object:

// a. Write a JavaScript function that detects the user's browser name and version using the navigator object.
function getBrowserInfo() {
  var userAgent = navigator.userAgent;
  var browserName, browserVersion;

  // Detect browser name
  if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Google Chrome";
  } else if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Mozilla Firefox";
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Apple Safari";
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    browserName = "Opera";
  } else if (userAgent.indexOf("Edge") > -1) {
    browserName = "Microsoft Edge";
  } else if (userAgent.indexOf("Trident") > -1) {
    browserName = "Internet Explorer";
  } else {
    browserName = "Unknown";
  }

  // Detect browser version
  var versionStart = userAgent.indexOf(browserName) + browserName.length + 1;
  var versionEnd = userAgent.indexOf(" ", versionStart);
  browserVersion = userAgent.substring(versionStart, versionEnd);

  return {
    name: browserName,
    version: browserVersion,
  };
}

// b. Implement the function to display the user's browser name and version.
var browserInfo = getBrowserInfo();
console.log("Browser Name:", browserInfo.name);
console.log("Browser Version:", browserInfo.version);

// 6.Geolocation:

// a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.
function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

// Example usage:
getUserLocation()
  .then((location) => {
    console.log("Latitude:", location.latitude);
    console.log("Longitude:", location.longitude);
  })
  .catch((error) => {
    console.error("Error getting user location:", error.message);
  });

// 7.JS Common Events:

// Implement a webpage with the following functionality:

// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.
// document.addEventListener("click", function (event) {
//   const x = event.clientX;
//   const y = event.clientY;
//   alert(`Clicked at coordinates (x: ${x}, y: ${y})`);
// });

// b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.
// document.addEventListener("keydown", function (event) {
//   const keyCode = event.keyCode || event.which;
//   alert(`Key code: ${keyCode}`);
// });

// c. When the user moves the mouse over an image, change the image source to another image of your choice.
const image = document.getElementById("myImage");

image.addEventListener("mouseover", function () {
  image.src = "/images/RabbilVaiya.jpg";
});

image.addEventListener("mouseout", function () {
  image.src = "/images/SumitVaiya.jpg";
});

// 8.HTML DOM Document:

// a. Create a webpage with a button and a paragraph element.
// ANS: This has been created on index.html
const customBtn = document.getElementById("customBtn");
const para = document.getElementById("para");

// b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked.
function paragraphTextChange() {
  para.innerHTML = "Button Clicked!";
}

// 9.JS DOM Working with Form Input:

// Implement a webpage with a form that has the following fields:
// This form has been createn on form.html page with all the functionalities

// a. Name (text input)

// b. Email (email input)

// c. Password (password input)

// d. Confirm Password (password input)

// e. Submit (button)

// Implement JavaScript validation for the form fields:

// j. Display appropriate error messages for invalid fields.

function validateForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm-password");

  var nameValue = nameInput.value.trim();
  var emailValue = emailInput.value.trim();
  var passwordValue = passwordInput.value;
  var confirmPasswordValue = confirmPasswordInput.value;

  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");
  var passwordError = document.getElementById("password-error");
  var confirmError = document.getElementById("confirm-error");

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";

  // Validate Name
  if (nameValue === "") {
    nameError.textContent = "Name is required.";
    return false;
  }

  if (!/^[a-zA-Z]+$/.test(nameValue)) {
    nameError.textContent = "Name should contain only letters.";
    return false;
  }

  // Validate Email
  if (emailValue === "") {
    emailError.textContent = "Email is required.";
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(emailValue)) {
    emailError.textContent = "Invalid email address.";
    return false;
  }

  // Validate Password
  if (passwordValue === "") {
    passwordError.textContent = "Password is required.";
    return false;
  }

  if (
    passwordValue.length < 8 ||
    !/[a-z]/.test(passwordValue) ||
    !/[A-Z]/.test(passwordValue) ||
    !/\d/.test(passwordValue)
  ) {
    passwordError.textContent =
      "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.";
    return false;
  }

  // Validate Confirm Password
  if (confirmPasswordValue === "") {
    confirmError.textContent = "Please confirm your password.";
    return false;
  }

  if (confirmPasswordValue !== passwordValue) {
    confirmError.textContent = "Passwords do not match.";
    return false;
  }

  // Form submission successful
  alert("Form submitted successfully!");
  return true;
}

// 10.DOM Manipulate CSS Class:

// a. Create a webpage with a button and a paragraph element.
// ANS: This has been created on index.html
// b. Implement a JavaScript function that adds a CSS class named "highlight" to the paragraph element when the button is clicked. The "highlight" class should change the background color of the paragraph to yellow.

function addHighlight() {
  const paragraph = document.getElementById("myParagraph");
  paragraph.classList.add("highlight");
}

// 11.Create Element & Append Element:

// a. Create a webpage with an empty unordered list (<ul>).
// ANS: This has been created on index.html

// b. Implement a JavaScript function that dynamically creates five list items (<li>) with sequential numbers (1 to 5) and appends them to the unordered list.
function createListItems() {
  const ul = document.getElementById("myList");

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  }
}

// Call the function to create the list items
createListItems();

// 12.DOM Change Attribute Value:

// a. Create a webpage with an image element (<img>) that has an initial source URL.
// ANS: This has been created on index.html

// b. Implement a JavaScript function that changes the source URL of the image element when a button is clicked. Use a different image URL of your choice.

function showOtherImag() {
  const otherImage = document.getElementById("showOtherImage");
  otherImage.src = "./images/SumitVaiya.jpg";
}
// 13.DOM Query Selector:

// a. Create a webpage with multiple paragraphs containing different classes and IDs.
// Ans: This has been created on index.html page

// b. Implement a JavaScript function that selects all paragraphs with a specific class and changes their text color to red.

function selectParagraphsByClass() {
  const myNodelist = document.querySelectorAll("p");
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.color = "red";
  }
}
selectParagraphsByClass();
// 14.AJAX Get Request:

// a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".

async function GetList() {
  let res = await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct");
  console.log(res);
  if (res.status === 200) {
    let list = res.data["data"];
    list.forEach((item) => {
      document.getElementById("itemList").innerHTML += `
      <tr>
        <td>${item.ProductName}</td>
        <td>${item.ProductCode}</td>
        <td>${item.UnitPrice}</td>
        <td>${item.Qty}</td>
        <td>${item.TotalPrice}</td>
        <td><button onclick=updateItem('${item._id}')>Update</button></td>
        <td><button onclick=deleteItem('${item._id}')>Delete</button></td>   
      </tr>
      `;
    });
  } else {
    console.log("error");
  }
}

// 15.AJAX Post Request:

// a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit".

async function createItem() {
  let name;
  let email;
  let CreateOBJ = {
    name: name,
    email: email,
  };
  let res = await axios.post(`https://api.example.com/submit`, CreateOBJ);
  if (res.status === 200) {
    alert("Created Successfully");
  } else {
    alert("Error");
  }
}
//   b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }.
var payload = {
  name: "John Doe",
  email: "johndoe@example.com",
};

var jsonPayload = JSON.stringify(payload);

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://api.example.com/submit", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log("Data submitted successfully.");
    } else {
      console.error("Failed to submit data.");
    }
  }
};
xhr.send(jsonPayload);
