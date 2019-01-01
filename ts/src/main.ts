import express = require("express");
import menuRouter from "./admin/api/menu";
import roleRouter from "./admin/api/role";
import adminuserRouter from "./admin/api/adminuser";
import safetyRouter from "./admin/api/safety";

const app = express()

app.use(express.json());
app.get('/', (req, res) => {
    res.send('this is a test')
})

app.use('/menu', menuRouter)
app.use('/role', roleRouter)
app.use('/adminuser', adminuserRouter)
app.use('/safety', safetyRouter)

app.use((req, res) => {
    console.log(req.body)
})

const server = app.listen(8000, "localhost", () => {
    console.log("服务器已启动, 地址是：http://localhost:8000")
});