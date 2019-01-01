import { newCrudRouter } from "../../crud/crud";
import { Menu, fields } from "../model/menu";

const menuRouter = newCrudRouter(Menu,fields)
export default menuRouter