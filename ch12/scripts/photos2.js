/*
    格式化照片
 */
function formatPhotos() {
    if (!document.getElementsByTagName) return false;
    let article = document.getElementsByTagName("article")[0];
    if (article == null) return;
    let photos = article.getElementsByTagName("img");
    if (photos.length == 0) return;
    for (let i = 0; i < photos.length; i++) {
        let photo = photos[i];
        let photoFrame = document.createElement("div");
        photoFrame.className = "photoFrame";
        let description = document.createElement("p");
        let title = photo.getAttribute("title");
        if (!title) title = "";
        let descText = document.createTextNode(title);
        description.appendChild(descText);
        insertAfter(photoFrame, photo);
        photo.parentNode.removeChild(photo);
        photoFrame.appendChild(photo);
        photoFrame.appendChild(description);
    }
}
formatPhotos();