
let contextMenus = {};

contextMenus.createCounterString = chrome.contextMenus.create({

    "title" : "Generate CounterString",
    "contexts" : ["editable"]

}, () => { chrome.runtime.lastError && console.error( chrome.runtime.lastError.message ) });



const contextMenuHandler = ( info, tab ) =>
{
    if( info.menuItemId === contextMenus.createCounterString )
    {
        chrome.tabs.executeScript({

            file : 'js/counterString.js'

        })
    };
};

chrome.contextMenus.onClicked.addListener( contextMenuHandler );