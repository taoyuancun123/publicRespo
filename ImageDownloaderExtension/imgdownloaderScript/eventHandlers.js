const eventHandlers={
    onclickCommon(e) {
        //console.log(e);
        if ((e.target.nodeName == "IMG" && e.target.className === "tyc-image-preview")) {
            let imgContainer = e.path.find(

                (ele) => {
                    try {
                        //console.log(ele);
                        return ele.className.includes("tyc-img-item-container");
                    }
                    catch {

                    }

                }
            )
            let path = imgContainer.getElementsByTagName("img")[0].src;

            try {
                let container = document.querySelector(".show-big-image");
                if (container.getElementsByTagName("img")[0].src === path) {
                    container.remove();
                    return;
                } else {
                    container.remove();
                }
            }
            catch {

            }
            document.body.insertAdjacentHTML("beforeend", showBigImage);

            let showItem = `<img src="${path}"/>`

            document.querySelector(".show-big-image").insertAdjacentHTML("beforeend", showItem);

            let tempImg = document.querySelector(".show-big-image img");

            let dWidth = (window.innerWidth - tempImg.width) / 2;
            let dHeight = (window.innerHeight - tempImg.height) / 2;

            document.querySelector(".show-big-image").style.left = dWidth + "px";
            document.querySelector(".show-big-image").style.top = dHeight + "px";
        } else if (e.target.parentElement.className === "show-big-image") {
            try {
                document.querySelector(".show-big-image").remove();
            }
            catch
            {

            }

        } else if (e.target.classList[1] == "bi-download" || e.path.find(isDownload) != undefined) {
            let imgContainer = e.path.find(

                (ele) => {
                    try {
                        //console.log(ele);
                        return ele.className.includes("tyc-img-item-container");
                    }
                    catch {

                    }

                }
            )
            let path = imgContainer.getElementsByTagName("img")[0].src;
            let filename;
            if (path.indexOf("/") > 0)//如果包含有"/"号 从最后一个"/"号+1的位置开始截取字符串
            {
                filename = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
            }
            else {
                filename = path;
            }
            //console.log("download start" + path + " " + filename);
            GM_download(path, "pic");
        } else if (e.target.classList[1] == "bi-check" || e.path.find(isSelect) != undefined) {
            let checkSvg = e.path.find((ele) => ele.classList[1] === "bi-check");
            let currentImgIndex = parseInt(checkSvg.dataset.value);

            let container = e.path.find((ele) => ele.className === `tyc-img-item-container-${currentImgIndex}`);

            if (imgSelected.includes(currentImgIndex)) {
                imgSelected.splice(imgSelected.indexOf(currentImgIndex), 1);
                checkSvg.style.color = "black";
                container.style.border = "1px solid #99d";
            } else {
                imgSelected.push(currentImgIndex);
                checkSvg.style.color = "white";
                container.style.border = "1px solid white";
            }

            zipImgSelected=imgSelected;

            document.querySelector(".num-tip").innerText = `${langSet.fetchDoneTip1Type2}${imgSelected.length}/${imgUrls.length}${langSet.fetchDoneTip2}`;
            imgWaitDownload=transIndexToLink(filteredImgUrls,imgSelected);
            zipImgWaitDownload=transIndexToLink(zipFilteredImgUrls,zipImgSelected);
            zipImgWaitDownload=cutoffNotBase64Img(zipImgWaitDownload);
        }
    },
    onclickClose(e){
        document.querySelector(".tyc-image-container").remove();
    },
    onclickDownload(e){
        if (imgWaitDownload.length >= 1) {
            console.log(imgWaitDownload);
            imgWaitDownload.forEach(async (img, index) => {
                //let filename = `pic-${index}.jpg`;
                //filename=filename.replace(/\\/g, '/').replace(/\/{2,}/g, '/');
                await GM_download(img, `pic-${index}`);
            });
        } else {
            alert(`${langSet.selectAlert}`);
        }
    },
    onclickZipDownload(e){
        if (zipImgWaitDownload.length >= 1) {
            //console.log(zipImgWaitDownload);
            zipImgWaitDownload.forEach(async (img, index) => {
                let fileExt = img.substring(img.indexOf("image/") + 6, img.indexOf(";"))
                fileExt=fileExt.includes("svg")?"svg":fileExt;
                let filename = `pic${index}.${fileExt}`;
                zipSubFoler.file(filename, img.split(",")[1], { base64: true });
            });

            zipFolder.generateAsync({ type: "blob" })
                .then(function (content) {
                    // see FileSaver.js
                    saveAs(content, "pics.zip");
                    zipFolder.remove("pics");
                    zipSubFoler = zipFolder.folder('pics');
                });

        } else {
            alert(`${langSet.selectAlert}`);
        }

    },
    
}