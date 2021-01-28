using CadeRasmussen_Assignment1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace CadeRasmussen_Assignment1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("GradeCalc")]
        public IActionResult GradeCalc()
        {
            return View("gradeCalc");
        }
        [HttpPost("GradeCalc")]
        public IActionResult GradeCalc (gradeCalcModel model)
        {
            return View("gradeCalc");
        }
    }
}
