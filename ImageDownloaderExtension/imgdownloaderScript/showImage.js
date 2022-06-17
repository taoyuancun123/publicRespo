const showImage={
    imgContainer:`
            <style>
                .tyc-image-container{
                    position:fixed;
                    top:0px;
                    left:10%;
                    width:80vw;
                    z-index:2147483645;
                    background-color: #dedede;
                    border: 1px solid #aaa;
                    overflow:scroll;height:100%;
                }

                .control-section{
                    width:80vw;
                    z-index:2147483646;
                    position:fixed;
                    top:0px;
                    left:10%;
                    display:block;
                    height:80px;line-height:40px;
                    background:#eee;border:1px solid #aaa;border-radius:2px;
                }
                .btn-download{
                    border:1px solid #aaa;border-radius:5px;
                    height:32px;line-height:32px;
                    margin:0px;padding:0 5px;
                }
                .btn-zipDownload{
                    border:1px solid #aaa;border-radius:5px;
                    height:32px;line-height:32px;
                    margin:0px;padding:0 5px;
                }
                .btn-close{
                    font-size:20px;position:absolute;
                    right:30px;top:4px;
                    height:32px;line-height:32px;
                    margin:0px;
                    border-radius:10px;border:1px solid #aaa;
                    width:30px;
                }

                .tyc-image-wrapper{
                    margin-top:82px;display:flex;justify-content:center;
                    align-items:center;flex-wrap:wrap;
                }

                .tyc-input-checkbox{
                    background-color: initial;
                    cursor: default;
                    appearance: auto;
                    box-sizing: border-box;
                    margin: 3px 3px 3px 4px;
                    padding: initial;
                    border: initial;
                }
            </style>
        <div class="tyc-image-container">
        <div class="control-section"> 
        <input class="select-all tyc-input-checkbox" type="checkbox" name="select-all" value="select-all">${langSet.selectAll}
        <button class="btn-download" >${langSet.downloadBtn}</button> 
        <button class="btn-zipDownload" >${langSet.zipDownloadBtn}</button> 
        <span style="margin-left:10px;" class="num-tip">${langSet.fetchDoneTip1}${imgUrls.length}${langSet.fetchDoneTip2}</span>
        <button class="btn-close" >X</button>

        <p style="line-height:12px;">
            <div style="float:left;display:block;">
            <input type="checkbox" class="width-check img-check tyc-input-checkbox" name="width-check" value="width-check">Width:
            <input type="text" class="width-value-min" size="1" style="height:15px;width:50px;"
                min="0" max="9999" value="0">-
                <input type="text" class="width-value-max" size="1" style="height:15px;width:50px;"
                min="0" max="9999" value="3000">
            </div>

            <div style="float:left;margin-left:30px;display:block;">
                <input type="checkbox" class="height-check img-check tyc-input-checkbox" name="height-check" value="height-check">Height:
                <input type="text" class="height-value-min" size="1" style="height:15px;width:50px;"
                    min="0" max="9999" value="0">-
                    <input type="text" class="height-value-max" size="1" style="height:15px;width:50px;"
                    min="0" max="9999" value="3000">
            </div>

            <div style="float:left;margin-left:30px;display:block;" class="tyc-cors">
                <span class="tyc-tip" style="display: none;
                position: absolute;
                bottom: 35px;
                left: 50px;
                white-space: nowrap;
                background: rgb(204, 204, 204);
                border: 1px solid rgb(150, 150, 150);
                border-radius: 3px;
                padding: 0px 5px;">勾选使用zip下载后，会请求跨域权限，否则zip下载基本下载不到图片。
                </span>        
                <input type="checkbox" class="cors-check img-check tyc-input-checkbox" name="cors-check" value="cors-check">
                <span>使用zip下载</span>     
            </div>
            <div style="float:left;margin-left:30px;display:block;">
                <span>更多设置 </span>
                <span style="top: 3px;position: relative;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span> 
            </div>
        </p>
        </div>
            <div class="tyc-image-wrapper" >
            </div>
        </div>
        `,
    showBigImage:`
        <div class="show-big-image" style="position:fixed;left:30%;top:30%;z-index:2147483647;">
        </div>
    `,
    
}