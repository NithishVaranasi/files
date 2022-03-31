<html>
    <body bgcolor="black">
        <font color="blue">
        <h1>JS POPUP</h1>
        </font>
        <button onclick="myfunction()">plz try it!</button>
        <p id="demo"></p>
        <script>
            function myfunction()
            {

                var txt;
                if(confirm("plz click ok"))
                {
                    txt=" u clicked me!";
                    var txt=txt.fontcolor("green");
                    }
              else
              {
                  txt="u clicked cancel!";
                  var txt=txt.fontcolor("red");
              }
              document.getElementById("demo").innerHtml=txt;
            }
        </script>
    </body>
</html>
