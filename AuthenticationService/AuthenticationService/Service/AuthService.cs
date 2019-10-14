using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthenticationService.Exceptions;
using AuthenticationService.Models;
using AuthenticationService.Repository;

namespace AuthenticationService.Service
{
    public class AuthService : IAuthService
    {
        private readonly IAuthRepository repository;
        
        public AuthService(IAuthRepository _repository)
        {
            this.repository = _repository;
        }

        public bool BookTrip(Travel travel)
        {
            var isResult = this.repository.BookTrip(travel);

            if (isResult)
                return true;
            else
                throw new VehicleNotCreatedException("Trip with this id " + travel.TravelId + " already exists");
        }

        public bool CancelTrip(string tripId)
        {

            var isResult = this.repository.CancelTrip(tripId);

            if (isResult)
                return true;
            else
                return false;
        }

        public bool ConfirmRide(Travel travel)
        {
            var isResult = this.repository.ConfirmRide(travel);

            if (isResult)
                return true;
            else
                return false;
        }

        public bool IsUserExists(string UserId)
        {
            var user = this.repository.FindUserById(UserId);
            if (user != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool IsVehicleExists(string vehicleId)
        {
            var vehicle = this.repository.FindVehicleById(vehicleId);
            if (vehicle != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public User LoginUser(string UserId, string Password)
        {
            var user = this.repository.LoginUser(UserId, Password);
            if (user != null)
            {
                return user;
            }
            else
            {
                //User with this id {userId} and password {password} does not exist
                throw new UserNotFoundException("User with this id "+UserId+ " and password "+ Password+" does not exist");
            }
        }

                       
        public bool RegisterUser(User user)
        {
            var isResult = this.repository.RegisterUser(user);

            if (isResult)
                return isResult;
            else
                throw new UserNotCreatedException("User with this id "+user.UserId+" already exists");
        }

        public Vehicle RegisterVehicle(Vehicle vehicle)
        {
            var isResult = this.repository.RegisterVehicle(vehicle);

            if (isResult!=null)
                return vehicle;
            else
                throw new VehicleNotCreatedException("Vehicle with this id " + vehicle.Number + " already exists");
        }

        public Travel TrackTrip(int tripId)
        {
            var travel = this.repository.TrackTrip(tripId);
            if (travel != null)
            {
                return travel;
            }
            else
            {
                //User with this id {userId} and password {password} does not exist
                throw new TripNotFoundException("Trip with this id " + tripId + " does not exist");
            }
        }

        public List<Travel> ViewSummary()
        {
            return this.repository.ViewSummary();
        }

        public List<Vehicle> ViewVehicleList()
        {
            return this.repository.ViewVehicleList();
        }
    }
}
