import app from './app.js';
import 'dotenv/config';
import logger from './logs/logger.js';
import { sequelize } from './database/database.js';
// import  {Sequelize}  from './database/database.js';

async function main(){
    //iniciar sequelize
    await sequelize.sync({force: true});
    // try {
    //     await sequelize.authenticate();
    //     console.log('Connection has been established successfully.');
    //   } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    //   }

    const port = process.env.PORT;
    app.listen(port);
    // console.log(`listening on port ${port}`);
    logger.info(`listening on port ${port}`);
    // logger.error(`listening on port ${port}`);
    // logger.fatal(`listening on port ${port}`);
}
main(); 