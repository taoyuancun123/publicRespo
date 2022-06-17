const getOriginImage={
    originImgUrls:[],
    getElesImage(){
        let imgEles = document.getElementsByTagName("img");
        for (let i = 0; i < imgEles.length; i++) {
            let url=imgEles[i].src||imgEles[i].srcset;            
            this.originImgUrls.push(url);
        }
    },
    getRegImage(){
        let bodyStr = document.body.innerHTML;
        let imgRegs = bodyStr.match(/(?<=background-image:\s*url\()(\S+)(?=\))/g);
        for (let i = 0; i < imgRegs.length; i++) {
            let url=imgRegs[i].replace(/&quot;/g, "");
            this.originImgUrls.push(url);
        }
    },
    getCanvasImage(){
        let canvasEles=document.getElementsByTagName("canvas");
        let fetchTip='';

        if(!HTMLCanvasElement.prototype.toBlob){
            let iframeCanvas=`<iframe style="display:none;" id="tyc-insert-iframe"></iframe>`;
            if(document.getElementById("tyc-insert-iframe")==null){
                document.body.insertAdjacentHTML("afterbegin",iframeCanvas);
                document.getElementById("tyc-insert-iframe").contentDocument.body.insertAdjacentHTML("afterbegin",`<canvas id="tyc-insert-canvas"></canvas>`);
                document.body.getElementsByTagName('canvas')[0].__proto__.toBlob=document.getElementById("tyc-insert-iframe").contentDocument.getElementById("tyc-insert-canvas").__proto__.toBlob;
            }
        }

        if (window.location.href.includes("hathitrust.org")) {
            let imgs = document.querySelectorAll(".image img");
            if (imgs.length > 0) {
                let canvas = document.createElement("canvas");
                this.getOrginImgUrls= [];
                for (let pi = 0; pi < imgs.length; pi++) {
                    canvas.width = imgs[pi].width;
                    canvas.height = imgs[pi].height;     
                    canvas.getContext("2d").drawImage(imgs[pi], 0, 0);     
                    this.getOrginImgUrls.push(canvas.toDataURL("image/png"));
                }               
            } 
        }

        let oldLength=this.originImgUrls.length;
        if(canvasEles.length>0){ 
            fetchTip=langSet.fetchTip;
            var completeFlag=0;                
            for(let j=0;j<canvasEles.length;j++){                    
                canvasEles[j].toBlob(blobCallback);    
                function blobCallback(blob){
                    let oFileReader = new FileReader();
                    oFileReader.onloadend = function (e) {
                        let base64 = e.target.result;                                 
                        if (base64.includes("data:image")) {
                            if (!getOriginImage.originImgUrls.includes(base64)) {                                
                                //imgUrls.push(base64);                                
                                getOriginImage.originImgUrls[oldLength+j]=base64;
                            }
                            completeFlag++;
                            document.body.dispatchEvent(new Event("getCanvasImgOnce"));                                                                 
                            if(completeFlag===canvasEles.length){
                                document.body.dispatchEvent(new Event("getCanvasImgDone"));
                            }
                        }
                    };                    
                    oFileReader.readAsDataURL(blob);
                }
            }
        }
    },
    getOrginImgUrls(){
        return Array.from(new Set(this.originImgUrls));
    }
}