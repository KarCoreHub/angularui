using AuthenticationService.Exceptions;
using AuthenticationService.Models;
using AuthenticationService.Service;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace AuthenticationService.Controllers
{
    [Route("auth")]
    public class AuthController : Controller
    {
        private readonly IAuthService _service;       

        public AuthController(IAuthService service)
        {
            this._service = service;
            //Add the user admin for the first time only            
        }
        

        //this method will be called by the client app with the user object for getting the JWT token
        [HttpPost]
        [Route("register")] //auth/register
        public IActionResult Register([FromBody]User user)
        {
            try
            {
                if (_service.IsUserExists(user.UserId) == true)
                {
                    return StatusCode(409, "A user already exists with this id");
                }
                else
                {
                    user.AddedDate = DateTime.Now;
                    _service.RegisterUser(user);
                    return Created("Created", true);                   
                }
            }
            catch (UserNotCreatedException eobj)
            {
                return Conflict();
            }
        }

        [HttpPost]
        [Route("registervehicle")] //auth/register
        public IActionResult RegisterVehicle([FromBody]Vehicle vehicle)
        {
            try
            {
                if (_service.IsVehicleExists(vehicle.Number) == true)
                {
                    return StatusCode(409, "Vehicle already exists with this number");
                }
                else
                {
                    _service.RegisterVehicle(vehicle);
                    return Created("Created", true);
                    //return StatusCode(201, "You are successfully registered!");
                }
            }
            catch (UserNotCreatedException eobj)
            {
                return Conflict();
            }
        }

        [HttpPost]
        [Route("BookTrip")] //auth/register
        public IActionResult BookTrip([FromBody]Travel travel)
        {
            try
            {               
                _service.BookTrip(travel);
                return Created("Created", true);                
            }
            catch (Exception eobj)
            {
                return StatusCode(500, eobj.Message);
            }
        }

        [HttpPost]
        [Route("CancelTrip")] //auth/register
        public IActionResult CancelTrip([FromBody]string tripId)
        {
            try
            {
                _service.CancelTrip(tripId);
                return Created("Created", true);
            }
            catch (Exception eobj)
            {
                return StatusCode(500, eobj.Message);
            }
        }

        [HttpPost]
        [Route("TrackTrip")] //auth/register
        public Travel TrackTrip([FromBody]int tripId)
        {
            Travel travel = new Travel();
            try
            {
                travel=_service.TrackTrip(tripId);               
            }
            catch (Exception eobj)
            {
                return null;
            }

            return travel;
        }

        [HttpPost]
        [Route("ConfirmRide")] //auth/register
        public IActionResult ConfirmRide([FromBody]Travel travel)
        {
            try
            {
                Travel trav = _service.ViewSummary().Find(t => t.TravelId == travel.TravelId);
                trav.VehicleId = travel.VehicleId;
                _service.ConfirmRide(trav);
                return Created("Created", true);
            }
            catch (Exception eobj)
            {
                return StatusCode(500, eobj.Message);
            }
        }

        [HttpGet]
        [Route("ViewSummary")] //auth/register
        public List<Travel> ViewSummary()
        {
            List<Travel> tObj = new List<Travel>();
            try
            {
                tObj = _service.ViewSummary();                
            }
            catch (Exception eobj)
            {
                throw eobj;
            }
            return tObj;
        }       

        [HttpGet]
        [Route("ViewVehicle")] //auth/register
        public List<Vehicle> ViewVehicle()
        {
            List<Vehicle> tObj = new List<Vehicle>();
            try
            {
                tObj = _service.ViewVehicleList();
            }
            catch (Exception eobj)
            {
                throw eobj;
            }
            return tObj;
        }

        //this method will be called by the client app with the user object for getting the JWT token
        [HttpPost]      
        [Route("login")]
        public IActionResult Login([FromBody]User user,string apiType= "categoryapi")
        {
            try
            {
                string userId = user.UserId;
                string password = user.Password;
                user.AddedDate = DateTime.Now;
                ITokenGenerator _tokengenerator = new TokenGenerator();
                User _user = _service.LoginUser(userId, password);

                //calling the function for the JWT token for respecting user
                string value = _tokengenerator.GetJWTToken(user.UserId,_user.Type);              
                //returning the token to the consumer app
                return Ok(value);
            }
            catch (UserNotFoundException)
            {
                return NotFound();
            }
            catch(Exception eobj)
            {
                return StatusCode(500, eobj.Message);
            }
        }

        [HttpPost]
        [Route("GetUserType")]
        public IActionResult GetUserType([FromBody]User user)
        {
            try
            {
                string userId = user.UserId;
                string password = user.Password;
                user.AddedDate = DateTime.Now;
             
                User _user = _service.LoginUser(userId, password);

                var response = new
                {
                    token = new string(_user.Type)
                };

                //convert into the json by serialing the response object
                return Ok(JsonConvert.SerializeObject(response));
            }
            catch (UserNotFoundException)
            {
                return NotFound();
            }
            catch (Exception eobj)
            {
                return StatusCode(500, eobj.Message);
            }
        }           

    }
}