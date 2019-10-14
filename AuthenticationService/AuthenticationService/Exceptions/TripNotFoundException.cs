using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationService.Exceptions
{
    public class TripNotFoundException : ApplicationException
    {
        public TripNotFoundException() { }
        public TripNotFoundException(string message) : base(message) { }
    }
}
