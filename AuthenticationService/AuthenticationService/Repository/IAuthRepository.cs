using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthenticationService.Models;

namespace AuthenticationService.Repository
{
    public interface IAuthRepository
    {
        bool RegisterUser(User user);
        User LoginUser(string userId, string password);
        User FindUserById(string userId);
        Vehicle FindVehicleById(string vehId);

        bool BookTrip(Travel travel);
        bool CancelTrip(string tripId);
        Travel TrackTrip(int tripId);

        Vehicle RegisterVehicle(Vehicle vehicle);
        bool ConfirmRide(Travel travel);

        List<Travel> ViewSummary();      
        List<Vehicle> ViewVehicleList();

    }
}
