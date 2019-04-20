import { Component, OnInit } from "@angular/core";
import { PmService } from "../pm.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-new-public-document",
  templateUrl: "./new-public-document.component.html",
  styleUrls: ["./new-public-document.component.css"]
})
export class NewPublicDocumentComponent implements OnInit {
  constructor(
    private pmService: PmService,
    private router: Router,
    ) {}
  documents= []

  ngOnInit() {
    this.getPublicDocument()
  }

  createDocument() {
    console.log("create document");
    this.router.navigate(["main/pm/manage-projects"]);
  }
  getPublicDocument() {
    this.pmService.getPublicDocumentsAPI().subscribe(
      res => {
        console.log("res", res);
        if(res['code'] === 1) {
          this.documents =  res['data']
        }
      },
      err => {
        console.log("err", err);
      }
    );
  }
}
