const proCompanies = require("../equitableCheck.json");

chrome.action.onClicked.addListener(async (tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var currentUrl = tabs[0].url;
    console.log("Current URL: " + currentUrl);

    for (currentUrl in proCompanies){
      console.log("found")
    }
  });
}
// chrome.commands.onCommand.addListener((command) => {
//   console.log(`Command: ${command}`);
// });
