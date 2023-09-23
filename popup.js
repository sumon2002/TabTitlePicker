document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("getTabTitle");
  const titleElement = document.getElementById("title");

  button.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      const title = currentTab.title;
      titleElement.textContent = `Title of the current tab : ${title}`;
    });
  });
});
