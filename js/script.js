var request = new XMLHttpRequest ()
request.onreadystatechange = function () {
	if ( this.readyState === 4) {
    	if ( this.status === 200)
		var newArray = JSON.parse ( this.responseText  )
		newArray.forEach ( function (value) {
			var div4ik = document.body.appendChild  (document.createElement ("div"))	
			var pic = div4ik.appendChild  (document.createElement ("img"))
			pic.className = value.classN
			pic.src = value.ref
			pic.title = value.title
			var pe = div4ik.appendChild (document.createElement("p"))
			pe.innerText = value.title
		})
	}
}
request.open ("GET","message.json")
request.send ()