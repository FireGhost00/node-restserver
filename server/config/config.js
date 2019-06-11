//===============================
//puerto
//===============================
process.env.PORT = process.env.PORT || 3000;

//===================================
//Entorno 
//==================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=================================
// Vencimiento del token
//=================================

process.env.CADUCIDAD_TOKEN = '48h';



//=================================
// SEED de autentificacion
//=================================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'


//=================================
// Base de datos
//=================================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;

}
process.env.URLDB = urlDB;


//=================================
// Googhle Client ID
//=================================

process.env.CLIENT_ID = process.env.CLIENT_ID || '843799353709-55id9n6pvgr2g8v0h7s8gg2a7hgqcapm.apps.googleusercontent.com';