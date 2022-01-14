
        var apiKey = "?api_key=RGAPI-95712264-cff2-467a-9e09-ffed6dfa177c"

        $(document).ready(function(){
          $("button").click(function(){
            $.getJSON("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Ryõmen%20Sukuna"+apiKey,function(result){
                  console.log(result)
                  console.log(result.id)
                  var id = result.id
                $("#pseudo4").html("<b>" + result.name);
                $("#niveau4").html(result.summonerLevel);
    
                $.getJSON("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/"+ id + apiKey,
                function(resultRank){
                    console.log(resultRank[0].tier)
                    console.log(resultRank[2].tier)
                    console.log(resultRank[2].tier)
                    
                    switch (resultRank[0].tier){
                        case "IRON":
                            $("#solo4").html("<img class='' data-caption='Tu pues la merde quoi' width='250' src='images/Emblem_Iron.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "BRONZE":
                            $("#solo4").html("<img class='' data-caption='Toujours nul du coup' width='250' src='images/Emblem_Bronze.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "SILVER":
                            $("#solo4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Silver.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "GOLD":
                            $("#solo4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Gold.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "PLATINUM":
                            $("#solo4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Platinum.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "DIAMOND":
                            $("#solo4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Diamond.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "MASTER":
                            $("#solo4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Master.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "GRANDMASTER":
                            $("#solo4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Grandmaster.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                        case "CHALLENGER":
                            $("#solo4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Challenger.png'>" + "<br> " + resultRank[0].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[0].wins + " / L" + resultRank[0].losses + "<br> Winrate: " + Math.round(resultRank[0].wins*100/(resultRank[0].wins+resultRank[0].losses)) + "%");
                            break;
                    }

                   switch (resultRank[2].tier){
                        case "BRONZE":
                            $("#flex4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Bronze.png'>" + "<br> " + resultRank[2].rank + " - " + resultRank[2].leaguePoints + "LP" + "<br>" + "W" + resultRank[2].wins + " / L" + resultRank[2].losses + "<br> Winrate: " + Math.round(resultRank[2].wins*100/(resultRank[2].wins+resultRank[2].losses)) + "%");
                            break;
                        case "SILVER":
                            $("#flex4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Silver.png'>" + "<br> " + resultRank[2].rank + " - " + resultRank[2].leaguePoints + "LP" + "<br>" + "W" + resultRank[2].wins + " / L" + resultRank[2].losses + "<br> Winrate: " + Math.round(resultRank[2].wins*100/(resultRank[2].wins+resultRank[2].losses)) + "%");
                            break;
                        case "GOLD":
                            $("#flex4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Gold.png'>" + "<br> " + resultRank[2].rank + " - " + resultRank[2].leaguePoints + "LP" + "<br>" + "W" + resultRank[2].wins + " / L" + resultRank[2].losses + "<br> Winrate: " + Math.round(resultRank[2].wins*100/(resultRank[2].wins+resultRank[2].losses)) + "%");
                            break;
                        case "PLATINUM":
                            $("#flex4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Platinum.png'>" + "<br> " + resultRank[2].rank + " - " + resultRank[0].leaguePoints + "LP" + "<br>" + "W" + resultRank[2].wins + " / L" + resultRank[2].losses + "<br> Winrate: " + Math.round(resultRank[2].wins*100/(resultRank[2].wins+resultRank[2].losses)) + "%");
                            break;
                        case "DIAMOND":
                            $("#flex4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Diamond.png'>" + "<br> " + resultRank[2].rank + " - " + resultRank[2].leaguePoints + "LP" + "<br>" + "W" + resultRank[2].wins + " / L" + resultRank[2].losses + "<br> Winrate: " + Math.round(resultRank[2].wins*100/(resultRank[2].wins+resultRank[2].losses)) + "%");
                            break;
                            case "MASTER":
                            $("#flex4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Master.png'>" + "<br> " + resultRank[2].rank + " - " + resultRank[2].leaguePoints + "LP" + "<br>" + "W" + resultRank[2].wins + " / L" + resultRank[2].losses + "<br> Winrate: " + Math.round(resultRank[2].wins*100/(resultRank[2].wins+resultRank[2].losses)) + "%");
                            break;
                            case "GRANDMASTER":
                            $("#flex4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Grandmaster.png'>" + "<br> " + resultRank[2].rank + " - " + resultRank[2].leaguePoints + "LP" + "<br>" + "W" + resultRank[2].wins + " / L" + resultRank[2].losses + "<br> Winrate: " + Math.round(resultRank[2].wins*100/(resultRank[2].wins+resultRank[2].losses)) + "%");
                            break;
                            case "CHALLENGER":
                            $("#flex4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Challenger.png'>" + "<br> " + resultRank[2].rank + " - " + resultRank[2].leaguePoints + "LP" + "<br>" + "W" + resultRank[2].wins + " / L" + resultRank[2].losses + "<br> Winrate: " + Math.round(resultRank[2].wins*100/(resultRank[2].wins+resultRank[2].losses)) + "%");
                            break;
                            case "IRON":
                            $("#flex4").html("<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Iron.png'>" + "<br> " + resultRank[2].rank + " - " + resultRank[2].leaguePoints + "LP" + "<br>" + "W" + resultRank[2].wins + " / L" + resultRank[2].losses + "<br> Winrate: " + Math.round(resultRank[2].wins*100/(resultRank[2].wins+resultRank[2].losses)) + "%");
                            break;
                    }
                }
                )
              
            });
          });
        });