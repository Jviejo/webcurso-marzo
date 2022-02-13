const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');

const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./fb.json');
const fs = require("fs")
initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function writeQuizz() {
  for (i of ['html', 'css', 'bs5', 'js', 'sql', 'java']) {
    const docRef = db.collection('quizzes').doc(i);
    await docRef.set({
      data: fs.readFileSync(`./public/${i}.txt`, 'utf-8'),
      format: 'aiken'
    })
  }
}

async function writeAlumnos() {
  for (i of ['jviejo@gmail.com', 'kfscursodata@gmail.com']) {
    const docRef = db.collection('alumnos').doc(i);
    await docRef.set({
      mail: i
    })
    const docRef2 = db.collection(`alumnos/${i}/quizzes/html/instancia2`).doc('resultados')
    docRef2.set({
      "respuestas": [true, true],
      "total": 10,
      "correctas": 10,
      "falladas": 2,
      "norespondidas": 1
    })
  }
}


async function writeStatic() {
  for (i of ['calendario.html', 's1.html', 's2.html', 'instalacion.html']) {
    const docRef = db.collection('statics').doc(i);
    await docRef.set({
      data: fs.readFileSync(`./public/html/${i}`, 'utf-8'),
      format: 'text/html'
    })
  }
}
//writeQuizz().then(console.log)

//writeAlumnos().then(console.log)

writeStatic().then(console.log)