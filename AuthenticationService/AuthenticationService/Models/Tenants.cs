using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationService.Models
{
    public class Tenants : List<Tenant>
    {
        public Tenants()
        {
            Add(new Tenant { key = "secret_userapi_jwt", Aud = "categoryapi", Iss = "AuthenticationService" });
            //Add(new Tenant { key = "secret_userapi_jwt", Aud = "userapi", Iss = "AuthenticationService" });
            //Add(new Tenant { key = "secret_noteapi_jwt", Aud = "notesapi", Iss = "AuthenticationService" });
            //Add(new Tenant { key = "secret_remainderapi_jwt", Aud = "reminderapi", Iss = "AuthenticationService" });
        }
    }
}
