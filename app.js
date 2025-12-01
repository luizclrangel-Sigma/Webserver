// ============================
// CONFIGURAÇÃO DO FIREBASE
// ============================
const firebaseConfig = {
    apiKey: "AIzaSyCkmdH2Q2cMYOcqEV5W5MLyyiHGNqS3jA8"
    authDomain: "webserver-v2-default-rtdb.firebaseio.com",
    databaseURL: "https://webserver-v2-default-rtdb.firebaseio.com/",
    projectId: "webserver-v2",
    storageBucket: "webserver-v2.firebasestorage.app",
    messagingSenderId: "613609966530",
    appId: "1:613609966530:android:25f2877ef23c14b423245b"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Caminho no Firebase
const ioPath = "ESP/IOs";

// ============================
// FUNÇÃO PARA ATUALIZAR INTERFACE
// ============================
function updateButton(btn, state) {
    if (state === 1) {
        btn.textContent = "Ligado";
        btn.classList.add("io-on");
        btn.classList.remove("io-off");
    } else {
        btn.textContent = "Desligado";
        btn.classList.add("io-off");
        btn.classList.remove("io-on");
    }
}

// ============================
// REFERÊNCIAS DOS BOTÕES
// ============================
const btn1 = document.getElementById("btn_io1");
const btn2 = document.getElementById("btn_io2");
const btn3 = document.getElementById("btn_io3");
const btn4 = document.getElementById("btn_io4");

// ============================
// ESCUTA DO FIREBASE (ATUALIZA AUTOMÁTICO)
// ============================
db.ref(ioPath).on("value", (snapshot) => {
    const v = snapshot.val();
    if (!v) return;

    updateButton(btn1, v.IO1);
    updateButton(btn2, v.IO2);
    updateButton(btn3, v.IO3);
    updateButton(btn4, v.IO4);
});

// ============================
// BOTÕES → ALTERAÇÃO NO FIREBASE
// ============================
btn1.onclick = () => db.ref(ioPath + "/IO1").set(Date.now());  
btn2.onclick = () => db.ref(ioPath + "/IO2").set(Date.now());  
btn3.onclick = () => db.ref(ioPath + "/IO3").set(Date.now());  
btn4.onclick = () => db.ref(ioPath + "/IO4").set(Date.now());  
