const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi
function getBlogiausiMokiniai() {
    for (let j = 0; j < data.length; j++) {
        const balai = data[j].marks;
        const length = balai.length;
        let min = balai[0]
        for (let i = 0; i < length; i++) {
            if (balai[i] < min) {
                min = balai[i];
            }
        }
        // console.log('min: ', min);
        data[j].minBalas = min;
        // console.log(data[0]);
    }

    let allMinBalas = data[0].minBalas;
    for (let i = 0; i < data.length; i++) {
        if (data[i].minBalas < allMinBalas) {
            allMinBalas = data[i].minBalas;
        }
    }

    console.log(`\nIsspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi`);
    for (let i = 0; i < data.length; i++) {
        if (data[i].minBalas === allMinBalas) {
            console.log(`Vardas: ${data[i].name};   Balas: ${data[i].minBalas}`);
        }
    }
    // console.log(data);
}




// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi
function getGeriausiMokiniai() {
    for (let j = 0; j < data.length; j++) {
        const balai = data[j].marks;
        const length = balai.length;
        let max = balai[0]
        for (let i = 0; i < length; i++) {
            if (balai[i] > max) {
                max = balai[i];
            }
        }
        // console.log('max: ', max);
        data[j].maxBalas = max;
        // console.log(data[0]);
    }

    let allmaxBalas = data[0].maxBalas;
    for (let i = 0; i < data.length; i++) {
        if (data[i].maxBalas > allmaxBalas) {
            allmaxBalas = data[i].maxBalas;
        }
    }

    console.log(`\nIsspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi`);
    for (let i = 0; i < data.length; i++) {
        if (data[i].maxBalas === allmaxBalas) {
            console.log(`Vardas: ${data[i].name};   Balas: ${data[i].maxBalas}`);
        }
    }
    // console.log(data);
}


// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki
function getMinMokiniuVidurkiai() {
    for (let j = 0; j < data.length; j++) {
        const balai = data[j].marks;
        const length = balai.length;
        // let max = balai[0]
        let vidurkis = 0;
        for (let i = 0; i < length; i++) {
            vidurkis += balai[i];
        }
        vidurkis = vidurkis / length;
        // console.log('max: ', max);
        data[j].vidurkis = vidurkis;
        // console.log(data[j].vidurkis);
    }

    let allMinVidurkis = data[0].vidurkis;
    for (let i = 0; i < data.length; i++) {
        if (data[i].vidurkis < allMinVidurkis) {
            allMinVidurkis = data[i].vidurkis;
        }
    }

    console.log(`\nIsspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki`);
    for (let i = 0; i < data.length; i++) {
        if (data[i].vidurkis === allMinVidurkis) {
            console.log(`Vardas: ${data[i].name};   Vidurkis: ${data[i].vidurkis}`);
        }
    }    
}


// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki
function getMaxMokiniuVidurkiai() {
    for (let j = 0; j < data.length; j++) {
        const balai = data[j].marks;
        const length = balai.length;
        // let max = balai[0]
        let vidurkis = 0;
        for (let i = 0; i < length; i++) {
            vidurkis += balai[i];
        }
        vidurkis = vidurkis / length;
        // console.log('max: ', max);
        data[j].vidurkis = vidurkis;
        // console.log(data[j].vidurkis);
    }

    let allMaxVidurkis = data[0].vidurkis;
    for (let i = 0; i < data.length; i++) {
        if (data[i].vidurkis > allMaxVidurkis) {
            allMaxVidurkis = data[i].vidurkis;
        }
    }

    console.log(`\nIsspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki`);
    for (let i = 0; i < data.length; i++) {
        if (data[i].vidurkis === allMaxVidurkis) {
            console.log(`Vardas: ${data[i].name};   Vidurkis: ${data[i].vidurkis}`);
        }
    }    
}

// Isspausdinti mokinio varda, jei jis turi pazymi 8
function getMokinysPagalBala(balas) {
    console.log(`\nIsspausdinti mokinio varda, jei jis turi pazymi 8`);
    for (let j = 0; j < data.length; j++) {
        const balai = data[j].marks;
        const length = balai.length;
        // let max = balai[0]
        // let vidurkis = 0;
        for (let i = 0; i < length; i++) {
            if (balai[i] === balas) {
                console.log(`Vardas: ${data[j].name}`);
            }
        }
    } 
}

// Isspausdinti mokinio varda, jei jis neturi pazymio 7
function getMokinysPagalNeturimaBala(balas) {
    console.log(`\nIsspausdinti mokinio varda, jei jis neturi pazymio 7`);
    for (let j = 0; j < data.length; j++) {
        const balai = data[j].marks;
        const length = balai.length;
        // let max = balai[0]
        // let vidurkis = 0;
        let turiBala = false;
        for (let i = 0; i < length; i++) {
            if (balai[i] === balas) {
                turiBala = true;
                // console.log(`Vardas: ${data[j].name}`);
            }
        }

        if (!turiBala) {
            console.log(`Vardas: ${data[j].name}`);
        }
    } 
}

getBlogiausiMokiniai();
getGeriausiMokiniai();
getMinMokiniuVidurkiai();
getMaxMokiniuVidurkiai();
getMokinysPagalBala(8);
getMokinysPagalNeturimaBala(7);

console.log(`------------------- VISI DUOMENYS -------------------`);
console.log(data);