
### Assignment Step Description

In this case I implemented JWT (JSON Web Token) . JSON Web Token (JWT) is an open standard (RFC 7519) that 
defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

Also visual unit test code is implemented with api .

API Project:   AuthenticationService\AuthenticationService\OTMSService.csproj
Test project : AuthenticationService\AuthenticationService.Tests\OTMSService.Test.csproj    
UI Angular:   UI
Also the angular code is implemented in UI

### Steps to be followed:

    Step 1: Download the zip files of Web api code and Angular UI code.
    Step 2: Configure and install the angualar dependency using NPM install and make sure everything is fine
    Step 3: Build the api code. You need to change the sql server and DB in appsettings.json file

            "ConnectionStrings": {
        "AuthConnection": "Data Source=AzureTD\\SQLEXPRESS;Initial Catalog=OTM_JWT;Integrated Security=True;" } 

        Change the server name itself and also Db will be created automatically

    Step 4: Run the api code and first login using admin/admin(username/password) and create many users like employee and customers
    
	
#### Following are the implementation done for the project

1. UserInterface   - Implemented using the angular with type script
2. Middleware      - Web api using c# and test project is done  
3. Data            - Sql server tables are created using Data persistance 
4. 12 factors app  - Implemented implemented JWT (JSON Web Token), Test Project ,Coding Standard, Error handling and etc


#### Following are the functionalities implementation done for the project 

1.  Admin -> Manage the appication by creating the users like customer,employee
2.  Customer -> Book,Track and Cancel the trip
3.  Employee -> Register the vehicle , Confirm the travel by assign the vehicle , View the summary of travel done

