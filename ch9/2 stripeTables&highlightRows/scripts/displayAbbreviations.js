/*
    # dl: description list
    代码如下
    ```
    <dl>
        <dt>title</dt>
        <dd>definition</dd>
    </dl>
    ```
 */
function displayAbbreviations() {
    if (!document.createElement || !document.createTextNode
    || !document.getElementsByTagName) return false;
    // 获取所有缩写，创建一个数组准备存放对应解释
    let abbreviations = document.getElementsByTagName("abbr");
    let descriptions = {};
    for (let i = 0; i < abbreviations.length; i++) {
        let key = abbreviations[i].lastChild.nodeValue;
        descriptions[key] = abbreviations[i].getAttribute("title");
    }
    let dList = document.createElement("dl");
    for (let key in descriptions) {
        let dTitle = document.createElement("dt");
        let dTitleTxt = document.createTextNode(key);
        dTitle.appendChild(dTitleTxt);
        let dDesc = document.createElement("dd");
        let dDescTxt = document.createTextNode(descriptions[key]);
        dDesc.appendChild(dDescTxt);
        dList.appendChild(dTitle);
        dList.appendChild(dDesc);
    }
    let header = document.createElement("h2");
    let headerTxt = document.createTextNode("Abbreviations");
    header.appendChild(headerTxt);
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(header);
    body.appendChild(dList);
}


addLoadEvent(displayAbbreviations);