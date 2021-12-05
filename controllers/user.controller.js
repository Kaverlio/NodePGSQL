class UserController {
    async createUser(req, res) {
        try {
            const {name, surname} = req.body;
            const newPerson = await db.query(`INSERT INTO person (name, surname) values (${name}, ${surname}) RETURNING *`);
            res.json(newPerson.rows[0]);
    
        } catch(err){
            console.log(err);
        }        
    }
    async getUsers(req, res) {
        try{
            const users = await db.query('SELECT * FROM person');
            res.json(users.rows);
        } catch(err){
            console.log(err);
        }
    }
    async getOneUser(req, res) {

    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}

module.exports = new UserController()