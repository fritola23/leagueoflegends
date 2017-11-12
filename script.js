$("#pesquisar").click(function(){

    var usuario = $("#usuario").val();
    console.log(usuario);

if(usuario != ''){
//ajax para pegar o nome do usuario e o id
    $.ajax({
        url: "https://br1.api.riotgames.com/lol/summoner/v3/summoners/by-name/"+usuario+"?api_key=RGAPI-fe983d15-3151-465d-9703-88b5f5853ffc",
        method: 'GET'
    }).done(function(data){
        $('#user').html(data.name);
        console.log(data);
        var id = (data.id);
        console.log(id);

//pegar total de maestria com o id
        $.ajax({
            url: "https://br1.api.riotgames.com/lol/champion-mastery/v3/scores/by-summoner/"+id+"?api_key=RGAPI-fe983d15-3151-465d-9703-88b5f5853ffc",
            method: 'GET'
        }).done(function(resposta){
            console.log(resposta);
            $('#mast').html(resposta);
            
        });

        $.ajax({
            url:"https://br1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/"+id+"?api_key=RGAPI-fe983d15-3151-465d-9703-88b5f5853ffc",
            method: 'GET'
        }).done(function(maestria){
            console.log(maestria);
            //var maior = (maestria.championPoints);
            console.log(maestria[0]);
                
        
            $('#melhor').html(maestria[0].championPoints);
            
        });


        
    });

  
}else{
    alert('usuario nao encontrado')
}
});

