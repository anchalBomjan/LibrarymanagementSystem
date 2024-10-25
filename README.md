I have built a Angular 17 Library Management System Website.
This website has UI as well as backend and database was made during this video.

 Inital Setup
 Authorization Module
 Student Panel
 Admin Panel
In this Website, I have created 
 Authentication System : User would be able to login and create account.
 JWT Authentication : User's data will be stored in tokens in browser.
 Role based Authorization : Some features are only accessible to admin, some can be access by user and admin.
 Manage Books and Categories : Admin and inser/delete books/categories in the Library.
 Blocking / Disabling : Admin can block/unblock or disable/enable any User.
 Fine Calculation : Users can also see their fine, if they doesn't submit book withing specified time.


#Some command 
ng g m material 
ng g m shared
ng g c shared/components/PageHeader  --no-standalone
ng g c shared/components/PageFootter --no-standalone
ng g c  shared/components/PageSideNav --no-standalone
 ng g c  shared/components/PageNotFound --no-standalone
ng g m auth
ng g c auth/Register --no-standalone
ng g c auth/Login --no-standalone
ng g service shared/services/api
password:mdfa pzwk kqfp yarg
npm install @auth0/angular-jwt
ng g c books/ViewBooks --no-standalone --skip-import
ng g c users/UserOrder --no-standalone --skip-import
ng g m books
ng g m users
ng g c books/bookStore --no-standalone 
ng g c books/Maintenance --no-standalone
ng g c books/ReturnBook --no-standalone
ng g c books/ViewBook --no-standalone

ng g c users/AllOrders --no-standalone
ng g c users/ApprovalRequests --no-standalone
ng g c users/Profile --no-standalone
ng g c user/ViewUsers --no-standalone
ng g c shared/components/PageTable --no-standalone
