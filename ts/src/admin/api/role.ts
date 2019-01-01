import { newCrudRouter } from "../../crud/crud";
import { Role, fields } from "../model/role";

const roleRouter = newCrudRouter(Role,fields)
export default roleRouter