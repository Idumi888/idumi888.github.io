var apiKey = "?api_key=RGAPI-143ac882-ce18-416d-b2dd-bc5936255a53";

$(document).ready(function () {

    $.getJSON(
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/B2%20Byss" +
        apiKey,
      function (result) {
        console.log(result);
        console.log(result.id);
        var id = result.id;
        $("#pseudo5").html("<b>" + result.name);
        $("#niveau5").html(result.summonerLevel);

        $.getJSON(
          "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
            id +
            apiKey,
          function (resultRank) {
            console.log(resultRank[1].tier);
            console.log(resultRank[0].tier);
            var ranks = 0;
            resultRank.forEach(queueType => {
              ranks++;
              
            });

            
            console.log(ranks)

            for (let i = 0; i < ranks; i++) {
              switch (resultRank[i].queueType) {


                case "RANKED_FLEX_SR":
                  //Flex
                  switch (resultRank[i].tier) {
                    case "BRONZE":
                      $("#flex5").html(
                        "<img class='' data-caption='' width='100' src='images/Emblem_Bronze.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "SILVER":
                      $("#flex5").html(
                        "<img class='' data-caption='' width='100' src='images/Emblem_Silver.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "GOLD":
                      $("#flex5").html(
                        "<img class='' data-caption='' width='100' src='images/Emblem_Gold.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "PLATINUM":
                      $("#flex5").html(
                        "<img class='' data-caption='' width='100' src='images/Emblem_Platinum.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "DIAMOND":
                      $("#flex5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Diamond.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "MASTER":
                      $("#flex5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Master.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "GRANDMASTER":
                      $("#flex5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Grandmaster.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "CHALLENGER":
                      $("#flex5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Challenger.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "IRON":
                      $("#flex5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Iron.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                  }
                
                case "RANKED_SOLO_5x5":
                  //Solo
                  switch (resultRank[i].tier) {
                    case "IRON":
                      $("#solo5").html(
                        "<img class='' data-caption='Tu pues la merde quoi' width='250' src='images/Emblem_Iron.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "BRONZE":
                      $("#solo5").html(
                        "<img class='' data-caption='Toujours nul du coup' width='250' src='images/Emblem_Bronze.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "SILVER":
                      $("#solo5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Silver.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "GOLD":
                      $("#solo5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Gold.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "PLATINUM":
                      $("#solo5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Platinum.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "DIAMOND":
                      $("#solo5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Diamond.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "MASTER":
                      $("#solo5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Master.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "GRANDMASTER":
                      $("#solo5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Grandmaster.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                    case "CHALLENGER":
                      $("#solo5").html(
                        "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Challenger.png'>" +
                          "<br> " +
                          resultRank[i].rank +
                          " - " +
                          resultRank[i].leaguePoints +
                          "LP" +
                          "<br>" +
                          "W" +
                          resultRank[i].wins +
                          " / L" +
                          resultRank[i].losses +
                          "<br> Winrate: " +
                          Math.round(
                            (resultRank[i].wins * 100) /
                              (resultRank[i].wins + resultRank[i].losses)
                          ) +
                          "%"
                      );
                      break;
                  }

                
              }
            }
          }
        );
      }
    );

});
