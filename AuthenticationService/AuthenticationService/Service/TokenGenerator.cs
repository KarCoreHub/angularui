using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AuthenticationService.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace AuthenticationService.Service
{
    public class TokenGenerator : ITokenGenerator
    {        

        public string GetJWTToken(string userId, string userType)
        {
            //setting the claims for the user credential name
            var claims = new[]
           {
                new Claim(JwtRegisteredClaimNames.UniqueName, userId),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())

            };

            Tenants tenants = new Tenants();

            Tenant selTen = tenants[0];
            
            //Defining security key and encoding the claim 
            //var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(selTen.key));
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(selTen.key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            //defining the JWT token essential information and setting its expiration time
            var token = new JwtSecurityToken(
                issuer: selTen.Iss,
                audience: selTen.Aud,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(20),
                signingCredentials: creds
            );


            //defing the response of the token 
            var response = new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)                 
            };

            

            //convert into the json by serialing the response object
            return JsonConvert.SerializeObject(response);
        }
    }
}
