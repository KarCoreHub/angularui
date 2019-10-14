using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace AuthenticationService.Models
{
    [Table("Travel")]
    public class Travel
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [JsonProperty(PropertyName = "travelid")]
        public int TravelId { get; set; }
        [JsonProperty(PropertyName = "cusid")]
        public string CustomerId { get; set; }
        [JsonProperty(PropertyName = "fromloc")]
        public string FromLocation { get; set; }
        [JsonProperty(PropertyName = "toloc")]
        public string ToLocation { get; set; }
        [JsonProperty(PropertyName = "contactno")]
        public string Contact { get; set; }
        [JsonProperty(PropertyName = "tdate")]
        public DateTime TravelDate { get; set; }
        [JsonProperty(PropertyName = "addeddate")]
        public DateTime AddedDate { get; set; }
        [JsonProperty(PropertyName = "vehicleid")]
        public string VehicleId { get; set; }
        // Cancel, Confirm  and OnTravel
        [JsonProperty(PropertyName = "status")]
        public string Status { get; set; }
        [JsonProperty(PropertyName = "active")]
        public bool Active { get; set; }
    }
}
