using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CadeRasmussen_Assignment1.Models
{
/*Defining the model to use the data that is taken from the form on the grade caclulator
*/    public class gradeCalcModel
    {

        //Requiring all fields in the form to be filled out before submission
        [Required]
        public double assignment { get; set; }
        [Required]
        public double project { get; set; }
        [Required]
        public double quiz { get; set; }
        [Required]
        public double exam { get; set; }
        [Required]
        public double intex { get; set; }
    }
}
