import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RadioComponent } from "./radio/radio.component";

const routes: Routes = [
    { path: "", redirectTo: "/radio", pathMatch: "full" },
    { path: "radio", component: RadioComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }