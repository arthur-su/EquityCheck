import equitableCheck from "../equitableCheck.json";

chrome.action.onClicked.addListener(async (tab) => {
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    var url = tab.url;
  });
});
