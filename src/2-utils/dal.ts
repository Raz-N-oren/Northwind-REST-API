import mysql from "mysql";
import appConfig from "./app-config";

// Create a pool of connection to MySql:
const connection = mysql.createPool({
    host: appConfig.host,
    user: appConfig.user,
    password: appConfig.password,
    database: appConfig.database
});