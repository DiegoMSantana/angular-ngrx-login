import { createAction, props } from "@ngrx/store";
import { User } from "./login/model/user.model";


export const login = createAction("[Login Page] User Login", props<{user:User}>());

