const connectToDatabase = async () => {
  const dummyDB = await new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve();
    }, 1000);
  });
  return dummyDB;
};

export default connectToDatabase;
