import { newCrudRouter } from "../../crud/crud";
import { AdminUser, fields } from "../model/adminuser";

const adminuserRouter = newCrudRouter(AdminUser,fields)
export default adminuserRouter