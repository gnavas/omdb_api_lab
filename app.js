$( document ).ready( function(){
	
	$("form").submit(function(e){
		var mov = $("#movie").val();
		$("li").remove();
		$("#movie").val("");		
		$.getJSON("http://www.omdbapi.com/?s="+mov,function(data){
			if (data.Response==="False") {
				alert("Movie not Found!!!");
			} else{
				console.log(data.Search[0].Title);
				$.getJSON("http://www.omdbapi.com/?t="+data.Search[0].Title, function(pic){
					$("#pics").attr("src",pic.Poster);
				});

				data.Search.forEach(function(film){
					$("ol").append("<li><a href='#'>"+film.Title+"</a></li>");

				//console.log(Object.keys(data.Search));
				//$.getJSON("http://www.omdbapi.com/?s=");
			});

			}		});
	});      //end form event listener

	$("ol").delegate("li","click", function(e){
		$.getJSON("http://www.omdbapi.com/?t="+$(this).text(),function(data){
			var poster = data.Poster;
			$("#pics").attr("src",poster);
		});   
	});

});