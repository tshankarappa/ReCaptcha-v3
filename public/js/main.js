var siteKey = '6Le89_wUAAAAAK8XR5n3UJgtxIGUjH1gaqHQAqKw';

function onClick(e) {
    e.preventDefault();
    grecaptcha.ready(function () {
        let start_time=  Date.now();

        log(start_time, 'Calling Recaptcha Endpoint');
        grecaptcha.execute(siteKey , { action: 'submit' }).then(function (token) {
            
            // Add your logic to submit to your backend server here.
            log(start_time, `Token Received <pre>${token}</pre>`);
            log(start_time, 'verifying token') 
           
            var data = `response=${token}`;
            var xhr = new XMLHttpRequest();
            
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                    log(start_time, `verified token <pre>${this.responseText}</pre><br><hr>`) 
                }
            });
        
            xhr.open("POST", "/verify");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(data);
        });
    });
}

function log(start_time, message) {
    document.getElementById("log").innerHTML += `<br> ${(Date.now()-start_time)}ms ${message}`;
}