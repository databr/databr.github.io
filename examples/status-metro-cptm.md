---
layout: page
title: Status das Linhas do Metrô e da CPTM
permalink: /examples/status-metro-cptm/
---

<h2>Status das Linhas do Metrô e da CPTM</h2>

<div id="lines" style="overflow: hidden; box-">
  Carregando...
</div>

<p>Use esses dados tambem, acesse: <a
href="http://console.databr.io/#!/Trens_e_Metro/get_states_sp_transports_trains_lines">console.databr.io</a>
para saber mais</p>


<script>
$(function() {
  $.get("http://api.databr.io/v1/states/sp/transports/trains/lines")
  .then(function(data){
    return data.lines
  })
  .then(function(lines) {
    var linesUL = $("<ul></ul>")
    linesUL.css({'list-style': 'none', padding: 0, margin: 0});
    var linesLIs = [];
    for(i = 0; i < lines.length; i++) {
      var line = lines[i];
      var lineLI = $("<li></li>").attr({id: line.id});
      var lineName = $("<h3 />").append(line.name);
      var statusMessage = $("<p />").append(line.status.message);
      lineLI.append(lineName);
      lineLI.append(statusMessage);
      lineLI.css({"border-radius": 3,"border": "5px solid " + line.color.hex, margin: 5, padding: 10, "max-width": "33%", float: "left"});
      linesLIs.push(lineLI);
    }
    linesUL.html(linesLIs);
    $("#lines").html(linesUL);
  });
});
</script>
