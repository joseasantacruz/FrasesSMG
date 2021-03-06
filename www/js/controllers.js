angular.module('starter.controllers', [  ])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  /*/ Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });/*/

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MenuController', function($scope, $state) {

  $scope.getClass = function(nombre) {
    // Si esta en este estado.
    if ($state.current.name.indexOf(nombre) !== -1) return 'menu-selected';
    else return '';
  };
  
  
})

.controller('FrasesCtrl', function($scope, FrasesService,$cordovaScreenshot,$timeout,$ionicPopup,$ionicPopover, $window ) {
	$scope.width1=$window.innerWidth;
	$scope.height1=$window.innerHeight;
  $scope.frases = FrasesService.getFrases();

  function getRandomFrase() {
    return $scope.frases[getRandomIndex($scope.frases.length)];
  }

  function getRandomIndex(length){
    return Math.floor(Math.random() * length);
  }

  $scope.visualizarFrase = function(){
    $scope.frase = getRandomFrase();
  };
  
	
	
  $scope.screen = function(){ 
	$scope.popover.hide();
	document.getElementById("frase1").style.visibility = "hidden"; 
    $timeout(function(){ 
		$cordovaScreenshot.capture();
		$ionicPopup.alert({
			template: 'La imagen fue guardada en la galeria.',
			okType: 'button button-dark',
		});
		 
		$timeout(function(){
			document.getElementById("frase1").style.visibility = "visible"
		},100)
	
	},300); 
	

	
	     
  };
  var template = '<ion-popover-view><ion-content> <div class="list"> <a class="item item-icon-left menu-close"    ng-click="screen() "  > <i class="icon ion-archive"></i> <p class="menu-item-text">Guardar Frase</p> </a>  <a class="item item-icon-left menu-close"   ng-click="compartir() "  > <i class="icon ion-share"></i> <p class="menu-item-text">Compartir Frase</p> </a> </ion-content> </ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
   });

   $scope.openPopover = function($event) {
      $scope.popover.show($event);
   };
  
  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.demo = 'ios';
  $scope.setPlatform = function(p) {
    document.body.classList.remove('platform-ios');
    document.body.classList.remove('platform-android');
    document.body.classList.add('platform-' + p);
    $scope.demo = p;
  }
  
 $scope.compartir = function(){ 
  $scope.popover.hide();
	 $timeout(function(){$ionicPopup.alert({
     template: 'La imagen fue guardada en la galeria.',
	 okType: 'button button-dark',
   }) },500); 
		
  }; 
})

.controller('smgCtrl', function($scope,$sce, $http) {


  $scope.getHtml = function(html){
    return $sce.trustAsHtml(html);
  };
  $scope.bot1='ion-chevron-down';
  $scope.img1='';
  $scope.texto1='';
  $scope.smg1 = function(){
    if ($scope.bot1=='ion-chevron-down'){
      $scope.bot1='ion-chevron-up';
      $scope.img1=' <div class="row">    <div class="col"><center><img src="img\\smg2.jpg" width="100%" height="100%"></center>  </div>  </div>';
      $scope.texto1='<p  class="fvd">Nació el 15 de abril de 1797 en la aldea de Ibarre, diócesis de Bayona (Francia), de padres campesinos, humildes pero de gran fe cristiana. De niño manifestó un temperamento rudo. Recto, sobrio, trabajador, y responsable, forjará un carácter excepcional. Su exigencia fue primero y ante todo con él mismo. Así logró limar los excesos violentos de su vitalidad de muchachote y de hombre. Se conquistó a sí mismo para la santidad. La torrentera de su vida, que parece siempre en movimiento, se sosiega en remansos de paz. Sabe hablar alto, con autoridad, pero llega a llorar lágrimas de mística emoción. Desde niño sintió el llamado al sacerdocio, pero como su familia carecía de recursos para costearle los estudios, debió trabajar como criado hasta los 15 años. Entretanto obtuvo el ansiado favor de hacer su primera comunión.</p> <p class="fvd" > Paso luego a la casa parroquial de Saint Palais y de allí al palacio episcopal de Bayona en calidad de alumno y mucamo a la vez, lo que no le impidió colocarse a la cabeza de su clase. Terminados sus estudios secundarios, entró en el seminario de Dax donde sobresalió en ciencia y piedad al extremo de ser llamado "otro San Luis Gonzaga" por sus maestros y discípulos.</p> <p class="fvd" >El 20 de diciembre de 1823, Miguel Garicoits fue ordenado sacerdote y enviado al pueblo de Cambó, como auxiliar del párroco quien se encontraba muy enfermo y mayor de edad, hasta el 7 de noviembre de 1825. En esta fecha lo destinan al Seminario Mayor de Betharram que será el lugar de sus ya múltiples actividades. En 1831, es nombrado superior del Seminario de Betharram. Con su celo apostólico renovó admirablemente la vida espiritual de la feligresía y promovió la comunión frecuente y el culto al Sagrado Corazón de Jesús, hacia quien va desarrollando una profunda devoción. Tres años después, el Obispo de Bayona lo nombró profesor de filosofía y administrador del Seminario Mayor de la diócesis, establecido en Betharram, junto a un renombrado santuario de la Virgen y al pie de una colina que ostenta un monumental calvario. Miguel desempeñó sus funciones con tanto acierto que posteriormente fue nombrado Director del Seminario. </p>';
	  $apply();
    }
    if ($scope.bot1=='ion-chevron-up'){
      $scope.bot1='ion-chevron-down';
      $scope.img1='';
      $scope.texto1=''; 
	  $apply();
    }
  };

  $scope.bot2='ion-chevron-down';
  $scope.img2='';
  $scope.texto2='';
  $scope.smg2 = function(){
    if ($scope.bot2=='ion-chevron-down'){
      $scope.bot2='ion-chevron-up';
      $scope.img2=' <div class="row"><div class="col"><center><img src="img\\smg3.jpg" width="100%" height="100%"></center> </div> <div class="col"> <center><img src="img\\smg5.jpg" width="100%" height="100%"></center> </div>  </div>  ';
      $scope.texto2='<p class="fvd">Ya en Cambó y, más tarde, en otras parroquias y grupos, ha establecido una Cofradía al Sagrado Corazón. Al trasladarse a Bayona al Seminario de Betharram, el P. Garicoits permaneció como capellán del santuario, lugar de peregrinación muy concurrido. Fue entonces cuando la Virgen le inspiró la fundación de un Instituto religioso de Sacerdotes, basados en la modestia, el desprendimiento y la obediencia para dedicarse a las misiones y a la enseñanza. Con la ayuda del Jesuita P. Leblanc, Miguel Garicoits sigue el impulso divino: Fundar una Congregación bajo la advocación del Sagrado Corazón de Jesús. Fue aprobado y confirmado en sus proyectos por el Obispo de Bayona y en octubre de 1835 echó las bases de su obra con otros cinco sacerdotes (P. Fondeville – P. Guimon – P. Perguilhen – P. Larrouy – P. Chirou) que lo eligieron como superior.</p> <p class="fvd"> En 1841, la obra recibió su nombre definitivo, "Instituto de los Sacerdotes del Sagrado Corazón de Jesús de Betharram", cuyos primeros misioneros recorrieron con santo celo las poblaciones de Gascuña, Vasconia y el Bearn. No le será fácil, será una cruz muy pesada que acompañará al fundador hasta su tumba. Acuño la divisa F.V.D., "Fiat Voluntas Dei" que significa "Hágase la Voluntad de Dios", que será oficial desde 1852.</p> <p class="fvd">El P. Garicoits, contando ya con un personal selecto, abrió en Betharram, Mauleón, Ortez y Oloron varios colegios de enseñanza primaria y luego secundaria que figuraron entre los mejores de la región. Consolidada por el fervor y la abnegación de sus primeros miembros, la Congregación pudo extenderse fuera de su diócesis de origen, Bayona, (de donde proviene el nombre de Bayoneses).</P>';
      $apply();
    }
    if ($scope.bot2=='ion-chevron-up'){
      $scope.bot2='ion-chevron-down';
      $scope.img2='';
      $scope.texto2='';
      $apply();
    }
  };

  $scope.bot3='ion-chevron-down';
  $scope.img3='';
  $scope.texto3='';
  $scope.smg3 = function(){
    if ($scope.bot3=='ion-chevron-down'){
      $scope.bot3='ion-chevron-up';
      $scope.img3='<div class="row">  <div class="col"><center><img src="img\\logo1.jpg" width="100%" height="100%"> </center></div></div>';
      $scope.texto3='<p class="fvd">A mediados del siglo XIX fue ampliamente propiciada la inmigración europea a las márgenes del Río de la Plata. Allí se dirigieron millares de vascos y bearneses que tomaron su parte en el desarrollo y el progreso del país. Pero esa corriente migratoria amenazaba detenerse si no se atendía a las necesidades religiosas de la misma con misioneros de su raza, lengua y nación. Por tal razón y merced al entendimiento entre el gobierno de la ciudad de Buenos Aires y Monseñor Escalada Obispo de Bayona, el P. Garicoits recibió la propuesta de enviar a la Argentina un núcleo de sus religiosos. Aceptó en el acto y estuvo a punto de embarcarse el mismo, pero el Obispo se opuso y el P. Diego Barbé fue designado superior de la modesta misión Betharramita que, embarcada en Bayona el 30 de agosto, día de Santa Rosa, llegó a Buenos Aires el 4 de noviembre de 1856. </p> <p class="fvd">Entre sus miembros figuraba el ya mencionado P. Barbé, fundador del colegio San José de Buenos Aires, el P. Juan B. Harbustán fundador de la casa de Montevideo (1861), el P. Pedro Sardoy, superior de la Iglesia de San Juan (Alsina y Piedras - Buenos Aires), otros dos Padres, dos coadjutores y el estudiante Juan Magendie (1835-1925) destinado a dirigir durante unos 40 años la obra betharramita en América y abrir las casas de Rosario (1899 – Colegio del Sagrado Corazón), La Plata (1902 – Colegio San José) y Asunción del Paraguay (1904 – Colegio San José).</P>';
      $apply();
    }
    if ($scope.bot3=='ion-chevron-up'){
      $scope.bot3='ion-chevron-down';
      $scope.img3='';
      $scope.texto3='';
      $apply();
    }
  };
  
	$scope.bot11='ion-chevron-down';
	$scope.texto11='';
	$scope.fvd11 = function(){
		if ($scope.bot11=='ion-chevron-down'){
			$scope.bot11='ion-chevron-up';
			$scope.texto11='<p class="fvd" >El Grupo FVD nace en el año 2003 como una comunidad de jóvenes llamados a profundizar en el Carisma de San Miguel Garicoits, Fundador de la Sociedad de Sacerdotes del Sagrado Corazón de Jesús de Betharram.<br><br>El domingo 14 de Setiembre del año 2003, un grupo de 7 jóvenes laicos (Juan Sebastián Villarejo, Juan Manuel Talavera, Horacio Campos Angulo, Thomas Brown Mateo, Sergio Sánchez Boettner, César Enrique Prous y Alejandro Brown Mateo), motivados por la Sra. Elena Ibáñez de Careaga (Nita) y acompañados espiritualmente por el R. P. Emiliano Jara Medina, SCJ., luego de una jornada completa de convivencia en la casa de la Comunidad de Padres Betharramitas del Colegio San José (Asunción - Paraguay) instituyen oficialmente la fundación del Grupo FVD con 3 objetivos:</p ><br><p class="fvd">1. Conocer, Vivenciar y Difundir el Carisma Betharramita.<br><br>2. Colaborar con la Pastoral Betharramita.<br><br>3. Alentar las vocaciones a la Vida Religiosa o Sacerdotal, en especial para Betharram.</p> ';
			$apply();
		}
		if ($scope.bot11=='ion-chevron-up'){ 
			$scope.bot11='ion-chevron-down';
			$scope.texto11=''; 
			$apply();
		}
	};
	$scope.abrirPagina= function(url){
		return window.open(url, '_self' );
	};
	
	$http.get('/paginaSanMiguel').then(function(xmlString) {
		parser=new DOMParser(); 	
		var xml = parser.parseFromString(xmlString.data, 'text/xml');

		var entryData = xml.getElementsByTagName('entry'); 
		var posts  = [];
//console.log(entryData)
		for (var i = 0; i < entryData.length; i++) {
		  posts.push({
			id          : getFirstNode(entryData[i], 'id').innerHTML,
			title       : getFirstNode(entryData[i], 'title').innerHTML,
			content     : getFirstNode(entryData[i], 'content').outerHTML,
			image       : getImageLink(entryData[i], 'thumbnail', 'media'),
			link		: entryData[i].getElementsByTagName('link')[1].getAttribute("href")
		  });
		  
		}
		//console.log(posts) 
		function getFirstNode(parent, nodeName, nameSpace) {
		   if (!nameSpace)
			  return parent.getElementsByTagName(nodeName)[0];
		   return parent.getElementsByTagName(nodeName, nameSpace)[0];
		}

		function getImageLink(parent, nodeName, nameSpace) {
		   var node = getFirstNode(parent, nodeName, nameSpace);
		   if (node)
			  return node.getAttribute('url');
		   return null;
		}
		$scope.entries1=posts;
	});
	
	$scope.bot12='ion-chevron-down';
	$scope.entries=[];
	$scope.fvd12 = function(){
		if ($scope.bot12=='ion-chevron-down'){
			$scope.bot12='ion-chevron-up';
			$scope.entries=$scope.entries1; 
			$apply();
		}
		if ($scope.bot12=='ion-chevron-up'){ 
			$scope.bot12='ion-chevron-down';
			$scope.entries=[]; 
			$apply();
			
		}
	}

});

 