export const environment = {
    production: true,
    url: "",
    firebaseConfig: {
      apiKey: "API_KEY",
      authDomain: "PROJECT_ID.firebaseapp.com",
      // The value of `databaseURL` depends on the location of the database
      databaseURL: "https://DATABASE_NAME.firebaseio.com",
      projectId: "PROJECT_ID",
      // The value of `storageBucket` depends on when you provisioned your default bucket (learn more)
      storageBucket: "PROJECT_ID.firebasestorage.app",
      messagingSenderId: "SENDER_ID",
      appId: "APP_ID",
      // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
      measurementId: "G-MEASUREMENT_ID",
    }
};
