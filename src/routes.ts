import { UserController } from "./controller/UserController"
import { LivrosMayController } from "./controller/LivrosMayController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/Livros",
    controller: LivrosMayController,
    action: "all"
}, {
    method: "get",
    route: "/Livros/:id",
    controller: LivrosMayController,
    action: "one"
}, {
    method: "post",
    route: "/Livros",
    controller: LivrosMayController,
    action: "save"
}, {
    method: "delete",
    route: "/Livros/:id",
    controller: LivrosMayController,
    action: "remove"
}
]

