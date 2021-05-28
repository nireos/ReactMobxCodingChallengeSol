// export const updateCurrentUser = async (currentUserID, name, age) => {
//   try {
//     const userSettings = await UserSchema.findOneAndUpdate(
//       { _id: currentUserID },
//       { $set: { name: name, age: age } },
//       { upsert: true }
//     );
//     return userSettings;
//   } catch (err) {
//     return err;
//   }
// };

// // Please comment out all your code when you are finished.
