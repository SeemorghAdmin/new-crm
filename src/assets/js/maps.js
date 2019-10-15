var areasInfo = [<%
  for(int i = 0; i < countries.size(); i++)  {
      Country country =countries.get(i);
      WorldNren worldNren=WorldNrenDAO.findNrenByCountryId(country.getCountryId());
      String countryDescHTML="";
      if(worldNren!=null){
          if(worldNren.getImageURL()!=null)
              if(!worldNren.getImageURL().isEmpty())
               countryDescHTML+=String.format( "<img class='nrenMapImage' src='%s'/>"
              ,"../"+ worldNren.getImageURL());
           countryDescHTML+=  String.format(  "<p class='nrenMapName'>نام شبکه علمی : %s </p>",
          worldNren.getNernName());
          if(!worldNren.getSiteURL().isEmpty())
             countryDescHTML+= String.format(    "<p class='nrenMapUrl' >آدرس سایت:<a href='http://%s' target='_blank'>%s</a></p>",
                worldNren.getSiteURL(),worldNren.getSiteURL());
          String nrenDesc=worldNren.getDescription();
          if(!nrenDesc.isEmpty())
            countryDescHTML+=String.format("<p class='nrenMapDesc'>%s</p>",worldNren.getDescription()  );
      }else{
               countryDescHTML+=String.format( "<img class='nrenMapImage' src='%s'/>"
              ,"../images/nrens/no-nren.png");
      }
      %>
      {
          "id": "<%=country.getCountryId()%>",
          "description": "<%=countryDescHTML%>"
      }
      <%=i!= countries.size()-1?",\n":""%>
      <%}%>
  ]
  var map = AmCharts.makeChart("mapdiv", {
      "type": "map",
      "dataProvider": {
          "mapURL": "../map/worldLow-persian.svg",
          "getAreasFromMap": true,
          "areas": areasInfo
      },
      "smallMap": {},
      "areasSettings": {
          "autoZoom": true,
          "selectedColor": "#9abfe5"
      }
  });
