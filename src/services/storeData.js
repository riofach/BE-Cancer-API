const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  // const db = new Firestore(); //default databaseId

  const db = new Firestore({ databaseId: 'db-cancer' }); // jika databaseId tidak default
  const predictCollection = db.collection('predictions');
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;