import { Router } from '@angular/router';
import { Tag } from './../interfaces/tag';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  data: Tag[] = [];

  headers: string[] = [];

  user: string = "";

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    let checkUser = sessionStorage.getItem('username');
    if (checkUser) {
      this.user = checkUser;
    }
    else {
      this.user = 'אדמין';
    }
    this.setHeaders();
    this.setData();
    // this.dataService.getData().subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
  }

  attributeToTarget(rowId: number) {
    let tag: Tag | undefined = this.data.find(x => x.Id === rowId);
    if (tag === undefined) {
      return;
    }
    tag.IsAttributed = true;
    tag.Approvant = this.user;
    tag.Remarks = 'שויך למטרה ' + tag.TargetId;
  }

  logout() {
    this.router.navigate(['/login']);
  }

  setData() {
    this.data = [
      {
        Id: 1,
        Activity: 'תקיפה',
        Base: 'חצרים',
        AirplaneName: 'רעם',
        AirplaneType: 'F-15I',
        Destination: 'סוריה',
        IsAttributed: false,
        Approvant: '',
        Remarks: 'נדרש לשייך',
        TargetId: ''
      },
      {
        Id: 2,
        Activity: 'צילום',
        Base: 'רמת דוד',
        AirplaneName: 'ברק',
        AirplaneType: 'F-16C',
        Destination: 'לבנון',
        IsAttributed: false,
        Approvant: '',
        Remarks: 'נדרש לשייך',
        TargetId: ''
      },
      {
        Id: 3,
        Activity: 'תדלוק',
        Base: 'תל נוף',
        AirplaneName: 'בז',
        AirplaneType: 'F-15B',
        Destination: 'ירדן',
        IsAttributed: false,
        Approvant: '',
        Remarks: 'נדרש לשייך',
        TargetId: ''
      },
      {
        Id: 4,
        Activity: 'תקיפה',
        Base: 'נבטים',
        AirplaneName: 'אדיר',
        AirplaneType: 'F-35I',
        Destination: 'סוריה',
        IsAttributed: false,
        Approvant: '',
        Remarks: 'נדרש לשייך',
        TargetId: ''
      },
      {
        Id: 5,
        Activity: 'איסוף מודיעין',
        Base: 'חצור',
        AirplaneName: 'נץ',
        AirplaneType: 'F-16B',
        Destination: 'לבנון',
        IsAttributed: false,
        Approvant: '',
        Remarks: 'נדרש לשייך',
        TargetId: ''
      },
    ];
  }
  setHeaders() {
    this.headers = [
      '#',
      'פעילות',
      'בסיס',
      'שם מטוס',
      'סוג מטוס',
      'יעד',
      'משויך',
      'מאשר',
      'הערות',
      'שיוך למטרה'
    ];
  }

}
