// Manage rules based on window type
async function updateRulesetState(windowId) {
    const tabs = await chrome.tabs.query({ windowId: windowId });
    const isIncognito = tabs[0]?.incognito || false;
    
    // Updates extension icon state
    tabs.forEach(tab => {
      if (isIncognito) {
        chrome.action.enable(tab.id);
        chrome.action.setTitle({ 
          tabId: tab.id, 
          title: "Incognito English Search (Active)" 
        });
      } else {
        chrome.action.disable(tab.id);
        chrome.action.setTitle({ 
          tabId: tab.id, 
          title: "Incognito English Search (Disabled - Regular Mode)" 
        });
      }
    });
  
    // Enable/disable ruleset based on window type
    await chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: isIncognito ? ["ruleset"] : [],
      disableRulesetIds: isIncognito ? [] : ["ruleset"]
    });
  }
  
  // Listen for window creation
  chrome.windows.onCreated.addListener((window) => {
    updateRulesetState(window.id);
  });
  
  // Listen for tab updates
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    updateRulesetState(tab.windowId);
  });
  
  // Listen for tab activation
  chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    updateRulesetState(tab.windowId);
  });
  
  // Handle initial windows on startup
  chrome.windows.getAll(async (windows) => {
    windows.forEach(window => {
      updateRulesetState(window.id);
    });
  });