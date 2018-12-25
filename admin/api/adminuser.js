const { AdminUser, fields } = require('../model/adminuser');
const newCrudRouter = require('../../crud/crud');
const client = require('../../utils/redis');

const router = newCrudRouter(AdminUser, fields);

router.post('/login', async (req, res, next) => {
    try {
        let user = await AdminUser.findOne({name:req.body.name, password:req.body.password});
        
    } catch (err) {
        res.sendStatus(404);
    }
});

router.post('/logout', async (req, res, next) => {
    
});

module.exports = router;