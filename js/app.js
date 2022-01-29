$(document).ready(function() {
    var $from = $('#from-random').bind('webkitAnimationEnd', function(){
    $(this).css('webkitAnimationName','');
    });
    var $to = $('#to-random').bind('webkitAnimationEnd', function(){
    $(this).css('webkitAnimationName','');
    });
    var len=0;
    $("#btn-random-submit").click((event)=>{
        var re = new RegExp("^([0-9]|[1-9][0-9]*)$");
        var k = 1;
        if(!re.test($("#from-random").val())){
            $from.css('webkitAnimationName','erorrRandom');
            k = 0;
        }
        if(!re.test($("#to-random").val())){
            $to.css('webkitAnimationName','erorrRandom');
            k = 0;
        }
        if(k){
            var min = Number($("#from-random").val());
            var max = Number($("#to-random").val());
            if(max < min) {
                $to.css('webkitAnimationName','erorrRandom');
                $from.css('webkitAnimationName','erorrRandom');
                return;
            }
            const IntervalRandom = setInterval(()=>{
                k = Math.floor(Math.random() * ( max - min + 1)) + min;
                $('.result-random-now').children('h2').html(k);
            }, 100);
            setTimeout(()=>{
                clearInterval(IntervalRandom);
                var news = document.createElement('div'),
                child1=document.createElement('label'),
                child2=document.createElement('a');
                news.setAttribute('class', len + "rạnd");
                news.setAttribute('style', 'display:block');
                child1.innerHTML = k;
                child2.innerHTML = '<i class="fas fa-times"></i>';
                child2.setAttribute('id', len + "rạnd");
                child2.setAttribute('onClick','removerandom(this.id)');
                news.appendChild(child1);
                news.appendChild(child2);
                len++;
                $('.result-random-list').append(news);    
            },3000);

            
        } 
    })
        
})
function removerandom(x){
    $('div').remove('.'+x);
}
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("clockNam").innerHTML = date.toLocaleTimeString();
}