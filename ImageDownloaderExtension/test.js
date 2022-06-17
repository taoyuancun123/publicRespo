/* document.addEventListener("testevent",e=>{console.log(e)})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting === "hello"){
        var event = new CustomEvent("testevent", {"detail":{"hazcheeseburger":true}})
        document.dispatchEvent(event)
        sendResponse({farewell: "goodbye"});
      }
        
    }
  ); */

  var storageCache={};
  chrome.storage.sync.get(null,(items)=>{
    storageCache=items;
  }
  )




  function GM_registerMenuCommand(title,callbackfunc){
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
/*           console.log(sender.tab ?
                      "from a content script:" + sender.tab.url :
                      "from the extension"); */
          if (request.greeting === "hello"){
            callbackfunc();
            sendResponse({farewell: "goodbye"});
          }
            
        }
    );

}

function GM_setValue(key,value){
    let obj={};
    obj[key]=value
    chrome.storage.sync.set(obj, function() {
        //再设置后，立马再获取一次，将获取到值，赋给storagecache，以便后续同步操作
        chrome.storage.sync.get(null,(items)=>{
            storageCache=items;
        })
        //console.log('Value is set to ' + value);
      });
}

function GM_getValue(key){
    console.log(storageCache[key])
    return storageCache[key];
}

function GM_deleteValue(key){
    chrome.storage.sync.remove([key],()=>{
        //再设置后，立马再获取一次，将获取到值，赋给storagecache，以便后续同步操作
        chrome.storage.sync.get(null,(items)=>{
            console.log(items);
            storageCache=items;
            console.log(storageCache);
        })
    })
}
        
function GM_xmlhttpRequest(details){
    let xhr=new XMLHttpRequest();

    xhr.open(details.method,details.url);
    xhr.responseType=details.responseType;
    xhr.onload=details.onload;
    xhr.send(null);
}


(function(){
    GM_registerMenuCommand("123",test1);
    let a=1;
    a++;
    GM_setValue("test",a);
    function test1(){

        console.log(GM_getValue("test"));
        GM_deleteValue('test');
        console.log(GM_getValue("test"));
    }   

})();