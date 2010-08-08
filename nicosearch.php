<?php 
	$q=$_GET["query"];
	$searchurl="http://zio3.net/nicoRss/Search.ashx?p=".$q;
	$file = file_get_contents( $searchurl );
	echo $file;
?>