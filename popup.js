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
  //2024/12/16 这行代码以上的所有代码终将被注释干掉