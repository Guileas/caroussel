	var images = ["download.jpg","fire.jpg", "leave.jpg", "rest.jpg"];
	var image = document.getElementById("pictures");
	var nbImage = 0;
	var i = 0;
	var j = 3;
	var time;
	image.src = images[nbImage];

	var btnStart = document.getElementById("start");
	btnStart.addEventListener("click", start);

	function start(){
		time = setInterval(suivant, 1000);
		console.log(start);
	}

	var btnStop = document.getElementById("stop");
	btnStop.addEventListener("click", stop);

	function stop(){
		clearInterval(time);
	}

	var btnSuivant = document.getElementById("suivant");
	btnSuivant.addEventListener("click", suivant);

	function suivant(){
		nbImage++;
		i++;
		if(i<4){

			image.src = images[nbImage];
			console.log("i = "+i);
		}else{
			i = 0;
			nbImage = 0;
			image.src = images[nbImage];
		}
	}

	var btnPrecedent = document.getElementById("precedent");
	btnPrecedent.addEventListener("click", precedent);

	function precedent(){
		nbImage --;
		i--;
		if(i>-1 ){
			image.src = images[nbImage];
			console.log("i2 = "+i);
		}else{
			i = 3
			nbImage = 3
			image.src = images[nbImage];
		}
	}
	
	//setTimeout, setInterval, clear Interval


	//Memory:
/*for(url or imgs){

	figure1 = document.body.appendChild(document.createElement("figure"));
	figure2 = document.body.appendChild(document.createElement("figure"));
	img1 = figure1.apprendChild(document.createElement("img"))
	img1 = figure2.apprendChild(document.createElement("img"))

	img1.src = url;
	img1.src = url;

	img1.classList.add("hide");
	img2.classList.add("hide");


	<figure>
		<img>
	</figure>

	<figure>
		<img>
	</figure>
}*/
	
