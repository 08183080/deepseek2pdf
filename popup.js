document.getElementById('printPage').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: printPage
      });
    });
  });
  
  function printPage() {
    window.print();
  }