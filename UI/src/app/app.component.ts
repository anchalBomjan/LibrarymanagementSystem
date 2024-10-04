import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { ApiService } from './shared/services/api.service';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,SharedModule,AuthModule,UsersModule,BooksModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'UI';
 

  ngOnInit():void{

    let status = this.apiService.isLoggedIn() ? 'loggedIn' : 'loggedOff';
    this.apiService.userStatus.next(status); // Ensure that the 'userStatus' subject is updated correctly
  }
  constructor(private apiService: ApiService) { 

  }
 
}
