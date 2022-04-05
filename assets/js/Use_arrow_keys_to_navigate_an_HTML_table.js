$(document).ready(function() {
    document.onkeydown = checkKey;
});

function checkKey(e) {
    var tr_len = $("#plots").find("tr").length;
    var event = window.event ? window.event : e;
    if(event.keyCode == 40){ //down
        var idx = $("tr:focus").attr("tabindex");
        idx++;
        if(idx > tr_len - 1){
            idx = tr_len - 1;
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
