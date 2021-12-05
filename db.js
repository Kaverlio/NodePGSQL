const Pool = require('pg').Pool;

const pool = new Pool({
    user: "padouydcdbafhb",
    password: '3624567ffb2a72b8c15c7265341807664d55961aa3fe29960c7b648cc0714658',
    host: "ec2-107-23-41-227.compute-1.amazonaws.com",
    port: 5432,
    database: "d6klp7dukq74v2",
    ssl:{
        rejectUnauthorized: false,
    }
});

module.exports = pool;