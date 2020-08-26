        var img = document.getElementsByTagName("img")[0];
        var fact = document.getElementsByTagName("p")[0];
        var button=document.querySelector("button")


         var i = 0;

//images of cat
        function catImage() {

            let xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.thecatapi.com/v1/images/search", true)

            xhr.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        let data = this.response;
                        data = JSON.parse(data);
                        img.src = data[0].url;
                        catFacts();
                    }
                }

            }
            xhr.send(null);
        }

        button.addEventListener("click",catImage)

//facts of cat
        function catFacts() {
            fetch("https://cat-fact.herokuapp.com/facts ")
                .then(response => response.json())
                .then(data => {
                    setTimeout(function() {
                        fact.innerHTML = data.all[i]["text"]
                    }, 2000);
                });
            i++;

        }
