using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationService.Exceptions
{
    public class TripNotCreatedException : ApplicationException
    {
        public TripNotCreatedException() { }
        public TripNotCreatedException(string message) : base(message) { }
    }
}
