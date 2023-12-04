const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Cloud Function to fetch paginated rewards
exports.fetchRewards = functions.https.onRequest(async (req, res) => {
  try {
    const pageSize = 10; // Number of items per page
    const { startAfter } = req.query;

    let query = admin
      .firestore()
      .collection("mxs_rewards")
      .orderBy("created_at")
      .limit(pageSize);

    if (startAfter) {
      const startAfterDoc = await admin
        .firestore()
        .collection("mxs_rewards")
        .doc(startAfter)
        .get();
      query = query.startAfter(startAfterDoc);
    }

    const querySnapshot = await query.get();

    const rewardsArray = querySnapshot.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }));

    res.json(rewardsArray);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while fetching rewards." });
  }
});
