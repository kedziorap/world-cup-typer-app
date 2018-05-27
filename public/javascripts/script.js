$(function(){
    function enableEdit(input1, input2, btn, text){
        input1.attr('disabled', false);
        input2.attr('disabled', false);
        btn.attr('disabled', false);  
    }
    var buttons = $('button[data-id]');
    buttons.on('click', function(event){
        event.preventDefault();
        var counter = $('#counter').html();
        var limit = Number(counter.substr(counter.indexOf('/')+1));
        var booked = Number(counter.substring(0,counter.indexOf('/')));
        console.log(counter);
        var homeInput = $('#home'+this.id);
        var awayInput = $('#away'+this.id);
        var home = homeInput.val();
        var away = awayInput.val();
        var iconPlace = $('#icon'+this.id);
        var iconVal = iconPlace.html().trim();
        console.log(iconVal);
        var btn =$(this);
        if ((Number(home) && Number(away)) || (home==='0' && away==='0') || (home==='0' && Number(away)) || (Number(home) && away==='0') ) {
            homeInput.attr('disabled', true);
            awayInput.attr('disabled', true);
            iconPlace.html('<i class="fas fa-spinner spin"></i>');
            btn.attr('disabled', true);
            $.ajax({
                method: 'POST',
                url: 'ajax/send/'+this.id,
                data: {
                    home: home,
                    away: away
                }
            }).done(function(msg){
                enableEdit(homeInput, awayInput, btn)
                if (msg === 'ok') {
                    if (booked < limit && iconVal!=='<i class="fas fa-check-circle text-success"></i>') {
                        booked++;
                        $('#counter').html(booked+'/'+limit)
                    }
                    iconPlace.html('<i class="fas fa-check-circle text-success"></i>');
                } else {
                    iconPlace.html('<i class="fas fa-exclamation-circle text-warning"></i>');
                }
            }).fail(function(){
                enableEdit(homeInput, awayInput, btn);
                iconPlace.html('<i class="fas fa-exclamation-circle text-warning"></i>');
            })
        } 
    });
});