using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularCore.Controllers
{
    [Route("api/[controller]")]
    public class CardController : Controller
    {
        private List<Employee> employees = new List<Employee>()
            {
                new Employee() { name = "1", country = "1", email="1", jobTitle="1",  phone="1"},
                new Employee() { name = "2", country = "2", email = "2", jobTitle = "2", phone = "2" },
                new Employee() { name = "3", country = "3", email = "3", jobTitle = "3", phone = "3" }
            };

        [HttpPost("[action]")]
        public async Task<IActionResult> NewEmployee([FromBody]Employee postData)
        {
            var task = await Task.Run(() =>
            {
                employees.Add(new Employee
                {
                    email = postData.email,
                    country = postData.country,
                    jobTitle = postData.jobTitle,
                    name = postData.name,
                    phone = postData.phone
                });
                return employees;

            });
            employees = task;
            return Ok();
        }

        //https://localhost:44376/api/Card/Employees
        [HttpGet("[action]")]
        public JsonResult Employees()
        {
            return Json(employees);
        }
    }


    public class Employee
    {
        public string email { get; set; }
        public string country { get; set; }
        public string jobTitle { get; set; }
        public string name { get; set; }
        public string phone { get; set; }

    }

    public class EmployeeData
    {
        public string Email { get; set; }
        public string Country { get; set; }
        public string JobTitle { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }

    }
}


