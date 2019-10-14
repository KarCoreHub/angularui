using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;


namespace AuthenticationService.Models
{
    [Table("Vehicle")]
    public class Vehicle
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        [JsonProperty(PropertyName = "number")]
        public string Number { get; set; }
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "model")]
        public string Model { get; set; }
        [JsonProperty(PropertyName = "city")]
        public string City { get; set; }
        [JsonProperty(PropertyName = "addeddate")]
        public DateTime AddedDate { get; set; }
        [JsonProperty(PropertyName = "empId")]
        public string EmpId { get; set; }
        [JsonProperty(PropertyName = "Regdate")]
        public DateTime RegDate { get; set; }
    }
}
