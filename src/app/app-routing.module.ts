import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "game",
    pathMatch: "full",
  },
  {
    path: "game-board",
    loadChildren: () =>
      import("./pages/game-board/game-board.module").then(
        (m) => m.GameBoardPageModule
      ),
  },
  {
    path: "game",
    loadChildren: () =>
      import("./pages/game/game.module").then((m) => m.GamePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
