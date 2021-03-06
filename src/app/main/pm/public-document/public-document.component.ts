import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addDays, distanceInWords } from 'date-fns';
import { PmService } from '../pm.service';
import { AuthService } from 'src/app/login/auth.service';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-public-document',
  templateUrl: './public-document.component.html',
  styleUrls: ['./public-document.component.css']
})
export class PublicDocumentComponent implements OnInit {
  uploading = false;
  fileList: UploadFile[] = [];
  paramId;
  selectedDocument = null;
  reviewerList = [];
  qamList = [];
  qaoList = [];
  document = {
    data: {},
    permission: {},
    reviewer: {},
    reviewers: [],
    role: '',
    idProject: ''
  };
  me;
  projectRole = null;
  isEdit = false;

  comment = '';
  fileupload;
  reviewer;
  reviewers = [];
  selectedReviewer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pmService: PmService,
    private authService: AuthService,
    private notification: NotificationService
  ) {}

  current = 2;

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.paramId = param['id'];
      if (this.paramId) {
        this.getListDocuments();
        this.getAuth();
      } else {
        this.router.navigate(['main/pm/manage-projects']);
      }
    });
  }

  handleFileDownload(file, id) {
    console.log(file, id);
    window.location.href = `https://docs.google.com/gview?url=http://cqms.tech/bkcqms/public/api/view/${id}/${file}&embedded=true`;
  }

  handleStep(step) {
    switch (step) {
      case '1':
        return 0;
      case '2':
        return 1;
      case '3':
        return 1;
      case '4':
        return 2;
      case '5':
        return 3;
      default:
        return 4;
    }
  }

  getAuth() {
    this.authService.getMe().subscribe(
      res => {
        this.me = res;
      },
      err => console.log('err', err)
    );
  }
  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };
  handleUpload(): void {
    this.uploading = true;
    this.pmService.postFile(this.fileList[0]).subscribe(
      res => {
        if (res['code'] == 1) {
          this.fileupload = res['data'];
          this.uploading = false;
        }
      },
      err => {
        this.uploading = false;
      }
    );
  }

  activeCol(id, role) {
    this.pmService.getDetailDocument(id, role).subscribe(
      res => {
        if (res['code'] === 1) {
          this.document.data = res['data'];
          this.document.reviewer = res['reviewer'];
          this.document.permission = res['permission'];
          this.document.reviewers = res['reviewers'];
          this.document.role = role;
          this.document.idProject = this.paramId;
          this.selectedReviewer = this.document.reviewer['id'];
        }
      },
      err => {
        console.log('err', err);
      }
    );
  }

  approve(role) {
    this.uploading = true;
    const file = this.fileList[0] || { file: this.document.data['file'] };
    console.log(file);

    this.pmService.postFile(file).subscribe(
      res => {
        if (res['code'] == 1) {
          this.fileupload = res['data'];
          this.uploading = false;

          const data = {
            name: this.document.data['name'],
            description: this.document.data['description'],
            type: this.document.data['type'],
            reviewer: this.document.reviewer['id'],
            fileupload: this.fileupload,
            id: this.document.data['id'],
            comment: this.comment,
            action: 1,
            role
          };
          this.pmService.approveAPI(data).subscribe(
            res => {
              this.notification.show('success', 'Success', 'Success !!!');
              this.comment = '';
              location.reload();
            },
            err => {
              console.log('err', err);
            }
          );
        }
      },
      err => {
        console.log('err', err);
        this.uploading = false;
      }
    );
  }

  discard(role) {
    this.uploading = true;
    const file = this.fileList[0] || { file: this.document.data['file'] };
    this.pmService.postFile(file).subscribe(
      res => {
        if (res['code'] == 1) {
          this.fileupload = res['data'];
          this.uploading = false;
          const data = {
            name: this.document.data['name'],
            description: this.document.data['description'],
            type: this.document.data['type'],
            reviewer: this.document.reviewer['id'],
            fileupload: this.fileupload,
            id: this.document.data['id'],
            comment: this.comment,
            action: 0,
            role
          };
          this.pmService.approveAPI(data).subscribe(
            res => {
              console.log('success', res);
              this.notification.show('success', 'Success', 'Success !!!');
              this.comment = '';
              location.reload();
            },
            err => {
              console.log('err', err);
            }
          );
        }
      },
      err => {
        console.log('err', err);
        this.uploading = false;
      }
    );
  }

  createDocument() {
    this.router.navigate([`main/pm/manage-projects/view/${this.paramId}/add`]);
  }

  getListDocuments() {
    this.pmService.getAllDocuments(this.paramId).subscribe(
      res => {
        if (res['code'] === 1) {
          this.qamList = res['qam'];
          this.reviewerList = res['reviewer'];
          this.qaoList = res['uploader'];
          this.projectRole = res['projectrole'];
          console.log(res);
        }
      },
      err => {
        console.log('err', err);
      }
    );
  }

  editDocument() {
    console.log('edit document');
  }

  sendComment(role) {
    const data = {
      name: this.document.data['name'],
      description: this.document.data['description'],
      type: this.document.data['type'],
      reviewer: this.document.reviewer['id'],
      fileupload: this.fileupload,
      id: this.document.data['id'],
      comment: this.comment,
      action: 1,
      role
    };
    this.pmService.sendCommentAPI(data).subscribe(
      res => {
        this.notification.show('success', 'Success', 'Success !!!');
        this.comment = '';
        location.reload();
      },
      err => {
        console.log('err', err);
      }
    );
    // this.router.navigate([`main/pm/manage-projects/view/${this.paramId}`]);
  }
}
