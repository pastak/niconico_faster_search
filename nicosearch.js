function result(){
	var r=document.getElementById("result");
	r.innerHTML="";
	document.getElementById("q").focus();
	var q=document.getElementById("q").value;
	document.getElementById("resultword").textContent=("「"+q+"」での検索結果");
	
	var url=("nicosearch.php?query="+q);
	var xhr=new XMLHttpRequest();
	xhr.open("GET",url,true);
	xhr.overrideMimeType('text/xml');
	xhr.send(null);
	xhr.onreadystatechange=function(){
		if (xhr.readyState == 4) {
			var resultxml = xhr.responseXML;
			if (resultxml) {
				var items = resultxml.getElementsByTagName("item");
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					var title = item.getElementsByTagName("title")[0].textContent;
					var link = item.getElementsByTagName("link")[0].textContent;
					
					var id = link.replace("http:\/\/www.nicovideo.jp\/watch\/sm", "");
					
					if (id.match(/^[0-9]/)) {
						var movielink=$(document.createElement("a")).attr("href",link).addClass("movielink");
						var movieinfo=$(document.createElement("div")).append(
								movielink.append(
									$(document.createElement("img")).attr(
										"src", ("http://tn-skr2.smilevideo.jp/smile?i=" + id)
									).addClass("thumbnail"))
							).addClass("movieinfo");
						movielink.append(document.createElement("br"));
						
						movielink.append(
							$(document.createElement("span")).text(title).addClass("movietitle")
						)
						//movieinfo.append(document.createElement("br"));
						//movieinfo.append(document.createElement("br"));
						movieinfo.append(
							$(document.createElement("a")).attr("href",link).attr("target","_blank").text("■").css({
								textDecoration:"none"
							})
						);
						
						$("#result").append(movieinfo);
					}
				}
			}
		}
	}
}