function otziv(){
    var jq=$('#txt').val();
    $("#jq").before('<p>'+jq+'</p><input type="button" value="Like" id="delete" onClick="del()" style="display: -webkit-box">');
}