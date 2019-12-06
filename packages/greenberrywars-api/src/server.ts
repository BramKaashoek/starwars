import config from './config/config';
import app from './lib/app';

try {
  app.listen(config.server.port);
  console.error(`server up at :${config.server.port}`);
} catch (err) {
  console.error(err);
}
