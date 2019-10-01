import { Component } from "@angular/core";

@Component({
  selector: "app-topo",
  templateUrl: "./topo.component.html",
  // template: `
  //   <p>
  //     template inline
  //   </p>
  // `
  //template => usado para colocar tag inline,
  //lembrando que usando "" nao pode pular linhas, apenas usando ``
  styleUrls: ["./topo.component.css"]
  // styles: [".exemplo{color: red}"] //css inline
})
export class TopoComponent {
  public titulo: string = "Aprendendo Inglês";
}
