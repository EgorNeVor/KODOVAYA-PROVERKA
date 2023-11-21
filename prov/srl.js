
    function prov(el){
        var inp = document.getElementById('inp');
        var vinp = document.getElementById('inp').value;
        var div3 = document.getElementById('div3');
        console.log(vinp);
        if(vinp != '911'){
            $('#div3').show();
        }
        if(vinp == '911'){
            window.location.href='popr.html';
        }
        return false;
    }