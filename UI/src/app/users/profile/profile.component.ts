import { Component } from '@angular/core';
import { UserType } from '../../models/models';
import { ApiService } from '../../shared/services/api.service';


export interface TableElement {
  name: string;
  value: string;
}

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  columns: string[] = ['name', 'value'];
  dataSource: TableElement[] = [];

  constructor(private apiService: ApiService) {
    let user = apiService.getUserInfo()!;
    this.dataSource = [
      { name: "Name", value: user.firstName + " " + user.lastName },
      { name: "Email", value: `${user.email}` },
      { name: "Mobile", value: `${user.mobileNumber}` },
      { name: "Account Status", value: `${user.accountStatus}` },
      { name: "Created On", value: `${user.createdOn}` },
      { name: "Type", value: `${UserType[user.userType]}` },
    ];
  }
}
