
      var level=6,
			colors ,
			targetcolor,
			squares = document.querySelectorAll(".square"),
			displaySquare = document.querySelectorAll(".ha"),
			colordisplay = document.querySelector("#colordisplay"),
			h1 =document.querySelector("h1"),
			message = document.getElementById("message"),
			resetButton = document.getElementById("reset"),
			modeButton = document.querySelectorAll(".mode");

			modeButton[1].classList.add("selected");
			colordisplay.textContent = targetcolor;

			init();

		function init(){
				update(level);
				setUpSequars();
				setUpMode();
	 			}

	 									//Function Area 
		
	 	// check if we choose the rigth color square								
		function setUpSequars(){
			for (var i = 0; i < squares.length; i++) { 
				squares[i].addEventListener("click",function(){
				var clickedcolor = this.style.backgroundColor;
					if(clickedcolor==targetcolor){
						message.textContent = "Correct";
						changecolor(targetcolor);
						h1.style.background = targetcolor;
						reset.textContent = "Play Again!";
					}
					else {
						this.style.background ="#232323";
						message.textContent = "Try Again";

					}
				});
			}
		}

		// Easy and hard mode 
		function setUpMode(){
			for (var i = 0; i < modeButton.length; i++) {
				modeButton[i].addEventListener("click",function(){
					modeButton[0].classList.remove("selected");
					modeButton[1].classList.remove("selected");
					this.classList.add("selected");
					this.textContent == "EASY" ? level = 3 : level = 6 ;
					console.log(level);
					update(level);
				});
			}
			resetButton.addEventListener("click",function(){
					// reset button 
					update(level);
					});
		}

		// all button have a target color
		function changecolor(color){
			for (var i = 0; i < level; i++) {
				squares[i].style.background=color;
			}
		}

		// select random index to be the target colo
		function randomcolor(){
			var rand = Math.floor(Math.random()*colors.length);
			return colors[rand]
		}

		// push the random color to new array
		function generateRandomColor(num){
			var arr=[];
			for (var i = 0; i < num; i++) {
				arr.push(generateItem());
			}

			return arr;
		}

		//create random color 0-255
		function generateItem(){
			var red = Math.floor(Math.random()*256);
			var g = Math.floor(Math.random()*256);
			var b = Math.floor(Math.random()*256);

			return "rgb(" + red + ", " + g + ", " + b +")";

		}

		// reset all element in the page
		function update(level){
			colors = generateRandomColor(level);
			targetcolor = randomcolor();	
			colordisplay.textContent = targetcolor;
			message.textContent = "";
			resetButton.textContent="NEW COLORS";
			h1.style.background = "steelblue";
			for (var i = 0; i < squares.length; i++) {
				if(colors[i]){
					squares[i].style.display = "block";
					squares[i].style.background = colors[i];
				}
				else{
					console.log("none");
					squares[i].style.display = "none";
				}
			}
			
		}
