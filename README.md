# publicRespo
public respository

<a href="https://www.youtube.com/channel/UC8c0w79AjpfzL7gLrDLOahg" target="_blank">Follow me in youtube</a>-Real Chinese scenery and people
<h3>How to use</h3>
<h5>Basic usage</h5>
There are three ways to open the script page,

1. Shortcut keys, alt+w, it is best to use this method to open websites such as Yaoqi, Tencent Comics, B station, etc.

2. right click - tampermonkey option - image downloader - open script

3. Expand the display area in the upper right corner of the page, click the oil monkey icon - click "picture downloader - open picture"


<h5>New Feature</h5>
fiex the bug that can not fetch the url in the srcset,such like tumblr/instagram.

<h5>Extended Features</h5>
<h6>Modify shortcut keys</h6>
Now you can customize the shortcut keys, the default is still alt+w, you can also modify the shortcut keys you need. In very few websites, setting shortcut keys will be invalid (such as instagram). At this time, go to other websites to modify, and after refreshing, it can take effect on that website.

<h6>Modify download file name</h6>
The script will automatically generate a download file name with a domain name + timestamp, you can also manually modify it to the file name you need.

<h6>zip download</h6>
Using zip download, you can compress and pack all pictures into a zip file for download, so when you download multiple pictures, you only need to download a zip package, and you do not need to open a download link for each picture.
Now a zip download option has been added, which is disabled by default. If you do not use zip download, you do not need to open this option.
Turning on the zip option will require a cross-domain request. Most images cannot be packaged into a zip package without cross-domain. It is recommended to allow all domain names to cross domains after each update of the script, and the script is open source.
<h6>Auto-enlarge image</h6>
When there are multiple specifications of pictures in the website, the large picture/original picture is automatically obtained. When obtaining, the original picture displayed on the website will be retained, and the corresponding large picture will also be automatically obtained.
<b>Manual configuration</b>
Write a txt file, then write the rules in the following format, and then use "Import Custom Rules" to import
[
            {originReg:/(?<=(.+sinaimg\.(?:cn|com)\/))([\w\.]+)(?=(\/.+))/i,replacement:" large",tip:"for Sina Weibo"},
]
The outside is an array, the inside is an object, originReg corresponds to a parameter of the replace function, replacement corresponds to the second parameter of the replace function, and tip is a prompt description
<b>List of websites that support automatic large images by default</b>
I wrote it in the script, the default list of websites that support automatic large pictures, you are also welcome to leave a message in the feedback area to add more automatic large picture websites
weibo.com, Taobao websites (taobao.com, tmall.com, aliexpress.com, 1688.com), jd.com, bilibili.com, wallhaven.cc

<h6>Export image address</h6>
It is best to remove the zip download option when exporting the image url, otherwise the exported address has been converted to base64 format, so the file will be very large.


<h3>Additional Notes</h3>
First, it is currently only suitable for the combination of chrome+tampermonkey, the chromium kernel used by the edge browser, I have tried several websites, and most of them should be fine. There is a good chance that other combinations are problematic. Because the adaptation is too troublesome, there is no plan to make other combinations of adaptations for the time being.
Second, the script can run on all websites, but each website has different strategies and the results of running are also different. Therefore, <b>for feedback, you need to bring a specific website, preferably a specific webpage</b>
Three, comics download, I have tried B station and Tencent comics, and they are demonic.

<h3>Version History</h3>
1.29--The script basically has various functions
1.62--Added and improved the zip download function, you can pack the pictures into a zip package to download all the pictures at one time, instead of downloading them one by one.
1.65--Added download functions such as Yaoqi, Tencent Comics, Bilibili Comics, etc.
1.96--Add automatic large image support, and support importing custom automatic large image rule configuration
