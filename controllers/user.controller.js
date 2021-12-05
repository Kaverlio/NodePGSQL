class UserController{
    async createUser(req, res){
        const {name, surname} = req.body;
        const newPerson = await db.query(`INSERT INTO person (name, surname) values (${name}, ${surname}) RETURNING *`);
        res.json(newPerson.rows[0]);
        
    }
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM person');
        res.json(users.rows);
    }
    async getOneUser(req, res){
        
    }
    async updateUser(req, res){
        
    }
    async deleteUser(req, res){
        
    }
}

module.exports = new UserController()