document.getElementById('startButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({ command: 'startListening' });
  });
  