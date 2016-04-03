/**
 * Created by Pavel Kulkov on 03.04.2016.
 */
function vote(number) {
    var xhr = new XMLHttpRequest();
    var params = "number="+encodeURIComponent(number);

    xhr.open('GET', 'vote?'+params, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            // обработать ошибку
            alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
            return;
        }

        // обработать результат
        var votes = xhr.responseText.split(",");
        var allVotes = parseInt(votes[0])+ parseInt(votes[1]);
        var tmp = 90/allVotes;
        document.getElementById("progressBar1").style.width =tmp*votes[0]+"%";
        document.getElementById("progressBar2").style.width = tmp*votes[1]+"%";
        document.getElementById("percents1").innerHTML = Math.round(parseInt(votes[0])*100/allVotes)+"%";
        document.getElementById("percents2").innerHTML = Math.round(parseInt(votes[1])*100/allVotes)+"%";
        document.getElementById("scoreZen").innerHTML = votes[0];
        document.getElementById("scoreCsk").innerHTML = votes[1];
    }

    xhr.send(null);

}