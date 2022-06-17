// When the button is clicked, inject setPageBackgroundColor into current page
/* changeColor.addEventListener("click", async () => {
  var event = new CustomEvent("testevent", {"detail":{"hazcheeseburger":true}})
  document.dispatchEvent(event)
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  } */
  changeColor.addEventListener("click", async () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        console.log(response.farewell);
      });
    });
  })
  document.addEventListener("testevent",e=>{console.log(e)})