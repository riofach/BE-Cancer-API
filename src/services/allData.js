const { Firestore } = require('@google-cloud/firestore');

async function getAllData() {
    // const db = new Firestore(); //default databaseId

    const db = new Firestore({ databaseId: 'db-cancer' }); // jika databaseId tidak default
    const predictCollection = db.collection('predictions');

    const allData = await predictCollection.get();
    return allData;
}

module.exports = getAllData;