const { Menu } = require('./menu');

const testMenu = async () => {
    try {
        let menu = await Menu.findOne();
        return menu;
    } catch (e) {
        return Promise.reject(e);
    }
};

testMenu().then(res => console.log(JSON.stringify(res))).catch(err => console.log(err));
