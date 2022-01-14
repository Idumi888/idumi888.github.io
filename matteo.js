
        var apiKey = "?api_key=RGAPI-95712264-cff2-467a-9e09-ffed6dfa177c"

        $(document).ready(function(){
          $("button").click(function(){
            $.getJSON("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RakanLaBanane"+apiKey,function(result){
              
                  console.log(result)
                  var id = result.id
                  console.log(id)
                $("#pseudo2").html("<b>" + result.name);
                $("#niveau2").html(result.summonerLevel);
    
                $.getJSON("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/"+ id + apiKey,
                function(resultRank){
                    console.log(resultRank[1])
                    console.log(resultRank[0].tier)
                    if (resultRank.queueType = 'RANKED_SOLO_5x5'){}
                    switch (resultRank[1].tier){
                        case "IRON":
                            $("#solo2").html("<img class='' data-caption='Tu pues la merde quoi' width='250' src='images/Emblem_Iron.png'>" + "<br> " + resultRank[1].rank + " - " + resultRank[1].leaguePoints + "LP" + "<br>" + "W" + resultRank[1].wins + " / L" + resultRank[1].losses + "<br> Winrate: " + Math.round(resultRank[1].wins*100/(resultRank[1].wins+resultRank[1].losses)) + "%");
                            break;
                        case "BRONZE":
                            $("#solo2").html("<img class='' data-caption='Toujours nul du coup' width='250' src='images/Emblem_Bronze.png'>" + "<br> " + resultRank[1].rank + " - " + resultRank[1].leaguePoints + "LP" + "<br>" + "W" + resultRank[1].wins + " / L" + resultRank[1].losses + "<br> Winrate: " + Math.round(resultRank[1].wins*100/(resultRank[1].wins+resultRank[1].losses)) + "%");
                            break;
                        case "SILVER":
                            $("#solo2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Silver.png'>" + "<br> " + resultRank[1].rank + " - " + resultRank[1].leaguePoints + "LP" + "<br>" + "W" + resultRank[1].wins + " / L" + resultRank[1].losses + "<br> Winrate: " + Math.round(resultRank[1].wins*100/(resultRank[1].wins+resultRank[1].losses)) + "%");
                            break;
                        case "GOLD":
                            $("#solo2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Gold.png'>" + "<br> " + resultRank[1].rank + " - " + resultRank[1].leaguePoints + "LP" + "<br>" + "W" + resultRank[1].wins + " / L" + resultRank[1].losses + "<br> Winrate: " + Math.round(resultRank[1].wins*100/(resultRank[1].wins+resultRank[1].losses)) + "%");
                            break;
                        case "PLATINUM":
                            $("#solo2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Platinum.png'>" + "<br> " + resultRank[1].rank + " - " + resultRank[1].leaguePoints + "LP" + "<br>" + "W" + resultRank[1].wins + " / L" + resultRank[1].losses + "<br> Winrate: " + Math.round(resultRank[1].wins*100/(resultRank[1].wins+resultRank[1].losses)) + "%");
                            break;
                        case "DIAMOND":
                            $("#solo2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Diamond.png'>" + "<br> " + resultRank[1].rank + " - " + resultRank[1].leaguePoints + "LP" + "<br>" + "W" + resultRank[1].wins + " / L" + resultRank[1].losses + "<br> Winrate: " + Math.round(resultRank[1].wins*100/(resultRank[1].wins+resultRank[1].losses)) + "%");
                            break;
                        case "MASTER":
                            $("#solo2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Master.png'>" + "<br> " + resultRank[1].rank + " - " + resultRank[1].leaguePoints + "LP" + "<br>" + "W" + resultRank[1].wins + " / L" + resultRank[1].losses + "<br> Winrate: " + Math.round(resultRank[1].wins*100/(resultRank[1].wins+resultRank[1].losses)) + "%");
                            break;
                        case "GRANDMASTER":
                            $("#solo2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Grandmaster.png'>" + "<br> " + resultRank[1].rank + " - " + resultRank[1].leaguePoints + "LP" + "<br>" + "W" + resultRank[1].wins + " / L" + resultRank[1].losses + "<br> Winrate: " + Math.round(resultRank[1].wins*100/(resultRank[1].wins+resultRank[1].losses)) + "%");
                            break;
                        case "CHALLENGER":
                            $("#solo2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Challenger.png'>" + "<br> " + resultRank[1].rank + " - " + resultRank[1].leaguePoints + "LP" + "<br>" + "W" + resultRank[1].wins + " / L" + resultRank[1].losses + "<br> Winrate: " + Math.round(resultRank[1].wins*100/(resultRank[1].wins+resultRank[1].losses)) + "%");
                            break;
                    }
                    console.log('gugu' + resultRank[0].tier )
                    switch (resultRank[0].tier){
                        case "BRONZE":
                            $("#flex2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Bronze.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "SILVER":
                            $("#flex2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Silver.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "GOLD":
                            $("#flex2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Gold.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "PLATINUM":
                            $("#flex2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Platinum.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "DIAMOND":
                            $("#flex2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Diamond.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                            case "MASTER":
                            $("#flex2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Master.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                            case "GRANDMASTER":
                            $("#flex2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Grandmaster.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                            case "CHALLENGER":
                            $("#flex2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Challenger.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                            case "IRON":
                            $("#flex2").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Iron.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                    }
                }
                )
              
            });
          });
        });