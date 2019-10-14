using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthenticationService.Models;

namespace AuthenticationService.Repository
{
    public class AuthRepository : IAuthRepository
    {
        private readonly IAuthenticationContext _context;
        public AuthRepository(IAuthenticationContext context)
        {
            _context = context;
        }

        public bool BookTrip(Travel travel)
        {
            _context.Trips.Add(travel);
            _context.SaveChanges();
            return true;
        }

        public bool CancelTrip(string  tripId)
        {
            var _trip = _context.Trips.FirstOrDefault(u => u.TravelId.ToString() ==  tripId);
            _trip.Status = "Cancel";
            _context.SaveChanges();
            return true;
        }

        public bool ConfirmRide(Travel travel)
        {
            var _trip = _context.Trips.FirstOrDefault(u => u.TravelId == travel.TravelId);
            _trip.Status = "Confirm";
            _context.SaveChanges();
            return true;
        }

        public User FindUserById(string userId)
        {
            var _user = _context.Users.FirstOrDefault(u => u.UserId == userId);
            return _user;
        }

        public Vehicle FindVehicleById(string vehicleId)
        {
            var _vehicle= _context.Vehicles.FirstOrDefault(u => u.Number == vehicleId);
            return _vehicle;
        }

        public User LoginUser(string userId, string password)
        {
            var _user = _context.Users.FirstOrDefault(u => u.UserId == userId && u.Password == password);
            return _user;
        }

        public bool RegisterUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return true;
        }

        public Vehicle RegisterVehicle(Vehicle vehicle)
        {
            _context.Vehicles.Add(vehicle);
            _context.SaveChanges();
            return vehicle;
        }

        public Travel TrackTrip(int tripId)
        {
            var _trip = _context.Trips.FirstOrDefault(u => u.TravelId==tripId);
            return _trip;
        }

        public List<Travel> ViewSummary()
        {
            return _context.Trips.ToList<Travel>();
        }       

        public List<Vehicle> ViewVehicleList()
        {
            return _context.Vehicles.ToList<Vehicle>();
        }
    }
}
