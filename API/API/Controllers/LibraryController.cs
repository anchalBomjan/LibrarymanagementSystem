
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryController : ControllerBase
    {
        public ApplicationDbContext Context { get; }

        public LibraryController(ApplicationDbContext context)
        {
            Context = context;

        }

        [HttpPost("Register")]
        public ActionResult Register(User user)
        {
            user.AccountStatus = AccountStatus.UNAPROOVED;
            user.UserType = UserType.STUDENT;
            user.CreatedOn = DateTime.Now;

            Context.Users.Add(user);
            Context.SaveChanges();

          
            

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
