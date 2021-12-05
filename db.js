const Pool = require('pg').Pool;

const pool = new Pool({
    user: "fhstasprlmrmhx",
    password: '61d84aa413d1fca531c5e963b2ab596cb44661c6dc810102a8436c5567e8ee0c',
    host: "ec2-52-72-155-37.compute-1.amazonaws.com",
    port: 5432,
    database: "d8gsrlu8d2euco"
});

module.exports = pool;