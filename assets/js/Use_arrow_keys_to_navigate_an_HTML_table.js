$(document).ready(function() {
    document.onkeydown = checkKey;
});

function checkKey(e) {
    var event = window.event ? window.event : e;
    if(event.keyCode == 40){ //down
        var idx = $("tr:focus").attr("tabindex");
        idx++;
        if(idx > 36){
            idx = 36;
            $("tr[tabindex="+idx+"]").blur();
        } else {
            $("tr[tabindex="+idx+"]").focus();
        }
    }
    if(event.keyCode == 38){ //up
        var idx = $("tr:focus").attr("tabindex");
        idx--;
        if(idx < 0){
            idx = 0;
            $("tr[tabindex="+idx+"]").blur();
        } else {
            $("tr[tabindex="+idx+"]").focus();
        }
    }
}
