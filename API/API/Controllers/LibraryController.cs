
using API.Data;
using API.Entities;
using API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryController : ControllerBase
    {
        public ApplicationDbContext Context { get; }
        public EmailService EmailService { get; }

        public LibraryController(ApplicationDbContext context,EmailService emailService )
        {
            Context = context;
            EmailService = emailService;

        }

        [HttpPost("Register")]
        public ActionResult Register(User user)
        {
            user.AccountStatus = AccountStatus.UNAPROOVED;
            user.UserType = UserType.STUDENT;
            user.CreatedOn = DateTime.Now;

            Context.Users.Add(user);
            Context.SaveChanges();
            const string subject = "Account Created";
            var body = $"""
                <html>
                    <body>
                        <h1>Hello, {user.FirstName} {user.LastName}</h1>
                        <h2>
                            Your account has been created and we have sent approval request to admin. 
                            Once the request is approved by admin you will receive email, and you will be
                            able to login in to your account.
                        </h2>
                        <h3>Thanks</h3>
                    </body>
                </html>
            """;

            EmailService.SendEmail(user.Email, subject, body);


            return Ok(@"Thank you for registering. 
                        Your account has been sent for aprooval. 
                        Once it is aprooved, you will get an email.");
        }

        //[HttpGet("Login")]
        //public ActionResult Login(string email, string password)
        //{
        //    if (Context.Users.Any(u => u.Email.Equals(email) && u.Password.Equals(password)))
        //    {
        //        var user = Context.Users.Single(user => user.Email.Equals(email) && user.Password.Equals(password));

        //        if (user.AccountStatus == AccountStatus.UNAPROOVED)
        //        {
        //            return Ok("unapproved");
        //        }

        //        if (user.AccountStatus == AccountStatus.BLOCKED)
        //        {
        //            return Ok("blocked");
        //        }

        //    }
        //    return Ok("not found");
        //}
    }
}
