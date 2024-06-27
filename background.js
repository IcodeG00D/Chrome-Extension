chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'startListening') {
      startListening();
    }
  });
  
  function startListening() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab.url.startsWith('chrome://')) {
        console.warn('Cannot run voice recognition on chrome:// URLs');
        return;
      }
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: initiateVoiceRecognition
      });
    });
  }
  
  function initiateVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
  
    recognition.start();
  
    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript.toLowerCase();
      console.log('Speech received: ' + speechResult);
  
      if (speechResult === 'change next' || speechResult === 'next tab') {
        chrome.runtime.sendMessage({ command: 'changeTab', direction: 'next' });
      } else if (speechResult === 'change back' || speechResult === 'previous tab') {
        chrome.runtime.sendMessage({ command: 'changeTab', direction: 'previous' });
      }
    };
  
    recognition.onspeechend = () => {
      recognition.stop();
    };
  
    recognition.onerror = (event) => {
      console.error('Error occurred in recognition: ' + event.error);
    };
  }
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'changeTab') {
      changeTab(message.direction);
    }
  });
  
  function changeTab(direction) {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (activeTabs) => {
        const currentIndex = activeTabs[0].index;
        let newIndex;
  
        if (direction === 'next') {
          newIndex = (currentIndex + 1) % tabs.length;
        } else if (direction === 'previous') {
          newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        }
  
        chrome.tabs.update(tabs[newIndex].id, { active: true });
      });
    });
  }
  