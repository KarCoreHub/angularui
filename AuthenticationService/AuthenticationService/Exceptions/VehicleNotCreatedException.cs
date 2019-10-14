using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationService.Exceptions
{
    public class VehicleNotCreatedException : ApplicationException
    {
        public VehicleNotCreatedException() { }
        public VehicleNotCreatedException(string message) : base(message) { }
    }
}
