<?php
	$q=$_GET["id"];
	$url="http://ext.nicovideo.jp/api/getthumbinfo/".$q;
	echo file_get_contents($url);
?>