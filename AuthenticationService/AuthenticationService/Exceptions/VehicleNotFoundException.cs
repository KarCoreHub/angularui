using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationService.Exceptions
{
    public class VehicleNotFoundException: ApplicationException
    {
        public VehicleNotFoundException() { }
        public VehicleNotFoundException(string message) : base(message) { }
    }
}
