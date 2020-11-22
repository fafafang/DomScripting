/*
    modern browser: XMLHttpRequest
    old browser(old IE): ActiveObjectX
 */
function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined") {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {}
    }
    return new XMLHttpRequest();
}