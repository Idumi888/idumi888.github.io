var apiKey = "?api_key=RGAPI-c685d105-fb9c-4a50-9c67-72c35854b5eb";

$(document).ready(function () {
  $.getJSON(
    "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RakanLaBanane" +
      apiKey,
    function (result) {
      console.log(result);
      var id = result.id;
      console.log(id);
      $("#pseudo2").html("<b>" + result.name);
      $("#niveau2").html(result.summonerLevel);

      $.getJSON(
        "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
          id +
          apiKey,
        function (resultRank) {
          console.log(resultRank[1]);
          console.log(resultRank[0].tier);
          var ranks = 0;
          resultRank.forEach((queueType) => {
            ranks++;
          });

          console.log(ranks);

          for (let i = 0; i < ranks; i++) {
            switch (resultRank[i].queueType) {
              case "RANKED_SOLO_5x5":
                //Solo
                switch (resultRank[i].tier) {
                  case "IRON":
                    $("#solo2").html(
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
                    $("#solo2").html(
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
                    $("#solo2").html(
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
                    $("#solo2").html(
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
                    $("#solo2").html(
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
                    $("#solo2").html(
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
                    $("#solo2").html(
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
                    $("#solo2").html(
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
                    $("#solo2").html(
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
                break;

              case "RANKED_FLEX_SR":
                //Flex
                switch (resultRank[i].tier) {
                  case "BRONZE":
                    $("#flex2").html(
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
                    $("#flex2").html(
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
                    $("#flex2").html(
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
                    $("#flex2").html(
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
                    $("#flex2").html(
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
                    $("#flex2").html(
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
                    $("#flex2").html(
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
                    $("#flex2").html(
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
                    $("#flex2").html(
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
                break;
            }
          }
        }
      );
    }
  );
});
