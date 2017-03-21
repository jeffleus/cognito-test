var AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});
var AWSCognito = require('amazon-cognito-identity-js');
var poolId = "us-west-2_HqCU8elu4";
var clientId = "bq4vqit9hrh97vrkurd2ns45p";

var authenticationData = {
        Username : 'jeffleus-cs1',
        Password : 'GoBruins2017',
    };
    var authenticationDetails = new AWS.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
    var poolData = { UserPoolId : poolId,
        ClientId : clientId
    };
    var userPool = new AWS.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
    var userData = {
        Username : 'jeffleus-cs1',
        Pool : userPool
    };
    var cognitoUser = new AWS.CognitoIdentityServiceProvider.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            //console.log('access token + ' + result.getAccessToken().getJwtToken());
            /*Use the idToken for Logins Map when Federating User Pools with Cognito Identity or when passing through an Authorization Header to an API Gateway Authorizer*/
            console.log('idToken + ' + result.idToken.jwtToken);
        },

        onFailure: function(err) {
			console.error(err);
            //alert(err);
        },

    });

//    cognitoUser.changePassword('GoBruins17', 'GoBruins2017', function(err, result) {
//        if (err) {
//            console.error(err);
//            return;
//        }
//        console.log('call result: ' + result);
//    });




//
//  RESET TEMP PASSWROD FOR ADMIN CREATED USER
//
//var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
//cognitoidentityserviceprovider.adminInitiateAuth({ AuthFlow: 'ADMIN_NO_SRP_AUTH', ClientId: clientId, UserPoolId: poolId, AuthParameters: { USERNAME: 'jeffleus-cs1', PASSWORD: 'GoBruins17' } }, InitAuthCallback);
//function InitAuthCallback(err, data) {
//  if (err) console.log(err, err.stack); // an error occurred
//  else {
//  	console.log(data);           // successful response
//	var params = {
//	  ChallengeName: data.ChallengeName, 
//	  ClientId: clientId,
//	  ChallengeResponses: {
//		USERNAME: 'jeffleus-cs1',
//		NEW_PASSWORD: 'GoBruins2017'
//	  },
//	  Session: data.Session
//	};
//
//	cognitoidentityserviceprovider.respondToAuthChallenge(params, function(err, data) {
//	  if (err) console.log(err, err.stack); // an error occurred
//	  else     console.log(data);           // successful response
//	});
//	  
//  }
//};

