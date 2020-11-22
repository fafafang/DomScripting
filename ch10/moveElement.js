/*
    学习使用setTimeout展示动画
    setTimeout(action, interval): 定时器
    clearTimeout(actionId): 通过id取消执行
    可以先使用元素对象存储timeout变量，便于之后可以用clearTimeout取消执行
*/
function moveElement(elemId, finalX, finalY, interval) {
    // 对象探测
    if (!document.getElementById) return false;
    if (!document.getElementById(elemId)) return false;
    let elem = document.getElementById(elemId);
    // 避免前一个行动没执行完就
    // 注意存储timeout不能使用全局变量，使用未初始化的全局变量会报错
    if (elem.movement) clearTimeout(elem.movement);
    // 安全检查
    if (!elem.style.left) elem.style.left = "0px";
    if (!elem.style.top) elem.style.top = "0px";
    // 获取位置
    let posX = parseInt(elem.style.left);
    let posY = parseInt(elem.style.top);
    // 出口
    if (posX == finalX && posY == finalY) return true;
    // 每次移动当前距离的十分之一，需要向上取整，否则到不了终点
    let dist = 0;
    if (posX < finalX) {
        dist = Math.ceil((finalX - posX) / 10);
        posX += dist;
    }
    if (posX > finalX) {
        dist = Math.ceil((posX- finalX) / 10);
        posX -= dist;
    }
    if (posY < finalY) {
        dist = Math.ceil((finalY - posY) / 10);
        posY += dist;
    }
    if (posY > finalY) {
        dist = Math.ceil((posY - finalY) / 10);
        posY -= dist;
    }
    elem.style.left = posX + "px";
    elem.style.top = posY + "px";
    // elemId需要用引号包含起来
    let repeat = "moveElement('" + elemId + "'," + finalX +
        "," + finalY + "," + interval + ")";
    elem.movement = setTimeout(repeat, interval);
}
/*
    测试用，放置位置的话一开始应该用css设置，不然加载js前后会发生短暂的元素跳跃
 */
function positionMessage() {
    let elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
}
