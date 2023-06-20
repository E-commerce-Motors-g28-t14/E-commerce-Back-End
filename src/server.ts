import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

AppDataSource.initialize()
  .then(async () => {
    console.log("Database Connected");

    const port = process.env.PORT || 3002;
    const url = process.env.URL_LOCAL || process.env.DEPLOY_URL;
    app.listen(port, () => {
      console.log(`App is running on ${url}${port}`);
    });
  })
  .catch((err) => console.error(err));
