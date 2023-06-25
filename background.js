const proCompanies = require("../equitableCheck.json");

chrome.action.onClicked.addListener(async (tab) => {
  // Get the current tab URL
  const url = window.location.href;

  // Compare the URL to the JSON object
  const found = false;
  for (const companyName of proCompanies) {
    if (url.indexOf(companyName) > -1) {
      found = true;
      break;
    }
  }

  // If the text is found in the JSON object, print a message
  if (found) {
    console.log("The text was found in the JSON object.");
  } else {
    console.log("The text was not found in the JSON object.");
  }
});
