var connection = window.indexedDB.open('tweb');
connection.onsuccess = (e) => {
	var database = e.target.result;  
	var transaction = database.transaction(['users']);
	var objectStore = transaction.objectStore('users');
	var getAll = objectStore.getAll(); 
	getAll.onsuccess = (e) => { 
		var data = JSON.stringify(e.target.result, null, 2);
		var blob = new Blob([data], {type: 'text/plain'});
		var url = window.URL.createObjectURL(blob);
		var a = document.createElement('a');
		document.body.appendChild(a);
		a.href = url;
		a.download = 'my-data.txt';
		a.click(); 
		window.URL.revokeObjectURL(url); 
	};
};