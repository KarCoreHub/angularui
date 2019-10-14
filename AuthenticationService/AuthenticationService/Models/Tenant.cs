using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationService.Models
{    
    public class Tenant
    {
        public string Iss { get; set; }
        public string Aud { get; set; }
        public string key { get; set; }
    }
}
