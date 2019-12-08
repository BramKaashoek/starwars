import config from './config/config';
import getApp from './lib/app';

const runServer = async () => {
  const app = await getApp();

  try {
    app.listen(config.server.port);
    console.error(`server up at :${config.server.port}`);
  } catch (err) {
    console.error(err);
  }
};

runServer();
