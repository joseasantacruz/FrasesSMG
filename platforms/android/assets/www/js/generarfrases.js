angular.module('starter.generarfrases', [])
.generarfrases('AppCtrl', function($scope) {
		var frases = new armarvector ("Bienvenido a Gamarod Javascript", "¿Sabías que..? Este es un mensaje Aleatorio",
				 "Frases Aleatorias 1.0 por Gabriel Rodríguez", "Boca Juniors es lo más GRANDE de Argentina",
					 "Rafael Calzada mi ciudad natal ...", "Maradona es el mejor jugador del mundo...");
					

	$scope.Aleatorio = function() {
		hoy= new Date();
				maximo=6; //Cantidad de Frases
				segundos=hoy.getSeconds();
				if (segundos==0) {segundos=1}
					 while (segundos>maximo) {segundos=segundos-maximo}
				document.write ('<table border=1 bgcolor=yellow cellpadding=1 cellspacing=1><tr><td bgcolor=cyan align=center>');
				document.write ('<font size=+1 color=blue>');
				document.write (frases[segundos]);
				document.write ('</font>');
				document.write ('</table>');
	  };
	$scope.armarvector = function(v1, v2,v3,v4,v5,v6) {
		this[1]=v1;
		 this[2]=v2;
		 this[3]=v3;
		 this[4]=v4;
		 this[5]=v5;
		 this[6]=v6;
	 };
		
}		

<ion-list class = "list-assertive">
        <ion-item  menu-close href="#/app/freses">
          <p   style="color: black  ; vertical-align: middle; font-size: 125%; background-color: transparent;" > Frases</p>
        </ion-item>
        <ion-item menu-close href="#/app/sanmiguel" >
          <p style="color: black  ;  vertical-align: middle; font-size: 125%; background-color: transparent;" >Vida de San Miguel</p>
        </ion-item>
		<ion-item menu-close href="#/app/fvd">
          <p style="color: black  ; vertical-align: middle; font-size: 125%; background-color: transparent;">Acerca del Grupo FVD</p>
        </ion-item>
		<ion-item menu-close href="#/app/desa">
          <p style="color: black  ;vertical-align: middle; font-size: 125%; background-color: transparent;">Desarrollo</p>
        </ion-item>
        
      </ion-list>
		