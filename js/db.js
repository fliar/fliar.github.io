
var config = {
	apiKey: "AIzaSyB7ULoLOxokXLG5zRUKbvfQsI0J7NsLb6A",
	authDomain: "fliargh.firebaseapp.com",
	databaseURL: "https://fliargh.firebaseio.com",
	storageBucket: "fliargh.appspot.com",
};
firebase.initializeApp(config);
/*
firebase.auth().signInAnonymously().catch(function(error) {
	var errCode = error.code;
	var errMsg = error.message;
	alert("sign in failed, code: " + errCode + ",msg: " +errMsg);
});
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		//alert("user signed in");
	} else {
		//alert("user signed out");
	}
});
*/
var dbRef = firebase.database().ref('info/count');
dbRef.on('value', function(snapshot) {
	updateCount(snapshot.val());
});

dbRef.transaction(function(val) {
	if (val == null) {
		return val;
	}
	++val;
	return val;
});
function updateCount(val) {
	var obj = document.getElementById("postamble_org");
	if (obj == null) {
		return
	}
	obj.innerHTML = "visit count:" + val;
}

function postambleHook() {
	updateCount(0);
}
