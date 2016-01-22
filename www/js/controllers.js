angular.module('starter.controllers', [])

.controller('MenuController', function($scope, $state) {

  $scope.getClass = function(nombre) {
    // Si esta en este estado.
    if ($state.current.name.indexOf(nombre) !== -1) return 'menu-selected';
    else return '';
  };
})
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

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

.controller('FrasesCtrl', function($scope, FrasesService) {

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

  $scope.doRefresh = function(){
    document.getElementById("frase1").style.visibility = "hidden";
    $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply();
  };

})

.controller('smgCtrl', function($scope, $sce) {


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
      $scope.texto1='<p  class="fvd">Nació el 15 de abril de 1797 en la aldea de Ibarre, diócesis de Bayona (Francia), de padres campesinos, humildes pero de gran fe cristiana. De niño manifestó un temperamento rudo. Recto, sobrio, trabajador, y responsable, forjará un carácter excepcional. Su exigencia fue primero y ante todo con él mismo. Así logró limar los excesos violentos de su vitalidad de muchachote y de hombre. Se conquistó a sí mismo para la santidad. La torrentera de su vida, que parece siempre en movimiento, se sosiega en remansos de paz. Sabe hablar alto, con autoridad, pero llega a llorarlágrimas de mística emoción. Desde niño sintió el llamado al sacerdocio, pero como su familia carecía de recursos para costearle los estudios, debió trabajar como criado hasta los 15 años. Entretanto obtuvo el ansiado favor de hacer su primera comunión.</p> <p class="fvd" > Paso luego a la casa parroquial de Saint Palais y de allí al palacio episcopal de Bayona en calidad de alumno y mucamo a la vez, lo que no le impidió colocarse a la cabeza de su clase. Terminados sus estudios secundarios, entró en el seminario de Dax donde sobresalió en ciencia y piedad al extremo de ser llamado "otro San Luis Gonzaga" por sus maestros y discípulos.Nació el 15 de abril de 1797 en la aldea de Ibarre, diócesis de Bayona (Francia), de padres campesinos, humildes pero de gran fe cristiana. De niño manifestó un temperamento rudo. Recto, sobrio, trabajador, y responsable, forjará un carácter excepcional. Su exigencia fue primero y ante todo con él mismo. Así logró limar los excesos violentos de su vitalidad de muchachote y de hombre. Se conquistó a sí mismo para la santidad. La torrentera de su vida, que parece siempre en movimiento, se sosiega en remansos de paz. Sabe hablar alto, con autoridad, pero llega a llorarlágrimas de mística emoción. Desde niño sintió el llamado al sacerdocio, pero como su familia carecía de recursos para costearle los estudios, debió trabajar como criado hasta los 15 años. Entretanto obtuvo el ansiado favor de hacer su primera comunión.</p> <p class="fvd" >El 20 de diciembre de 1823, Miguel Garicoits fue ordenado sacerdote y enviado al pueblo de Cambó, como auxiliar delpárroco muy enfermo y mayor de edad,  hasta el 7 de noviembre de 1825. En esta fecha lo destinan al Seminario Mayor de Betharram que será el lugar de sus ya múltiples actividades. En 1831, es nombrado superior del Seminario de Betharram. Con su celo apostólico renovó admirablemente la vida espiritual de la feligresía y promovió la comunión frecuente y el culto al Sagrado Corazón de Jesús, hacia quien va desarrollando una profunda devoción. Tres años después, el Obispo de Bayona lo nombró profesor de filosofía y administrador del Seminario Mayor de la diócesis, establecido en Betharram, junto a un renombrado santuario de la Virgen y al pie de una colina que ostenta un monumental calvario. Miguel desempeñó sus funciones con tanto acierto que posteriormente fue nombrado Director del Seminario. </p>';

      scope.$broadcast('scroll.refreshComplete');
      $scope.$apply();
    }
    if ($scope.bot1=='ion-chevron-up'){
      $scope.bot1='ion-chevron-down';
      $scope.img1='';
      $scope.texto1='';
      scope.$broadcast('scroll.refreshComplete');
      $scope.$apply();

    }
  };

  $scope.bot2='ion-chevron-down';
  $scope.img2='';
  $scope.texto2='';
  $scope.smg2 = function(){
    if ($scope.bot2=='ion-chevron-down'){
      $scope.bot2='ion-chevron-up';
      $scope.img2=' <div class="row"><div class="col"><center><img src="img\\smg3.jpg" width="100%" height="100%"></center> </div> <div class="col"> <center><img src="img\\smg5.jpg" width="100%" height="100%"></center> </div>  </div>  ';
      $scope.texto2='<p class="fvd">Ya en Cambó y, más tarde, en otras parroquias y grupos, ha establecido una Cofradía al Sagrado Corazón.  Al trasladarse a Bayona al Seminario de Betharram, el P. Garicoits permaneció como capellán del santuario, lugar de peregrinación muy concurrido. Fue entonces cuando la Virgen le inspiró la fundación de un Instituto religioso de Sacerdotes, basados en la modestia, el desprendimiento y la obediencia para dedicarse a las misiones y a la enseñanza. Con la ayuda del Jesuita P. Leblanc, Miguel Garicoïts sigue el impulso divino: Fundar una Congregación bajo la advocación del Sagrado Corazón de Jesús. Fue aprobado y confirmado en sus proyectos por el Obispo de Bayona y en octubre de 1835 echó las bases de su obra con otros cinco sacerdotes (P. Fondeville – P. Guimon – P. Perguilhen – P. Larrouy – P. Chirou) que lo eligieron como superior.</p> <p class="fvd"> En 1841, la obra recibió su nombre definitivo, "Instituto de los Sacerdotes del Sagrado Corazón de Jesús de Betharram", cuyos primeros misioneros recorrieron con santo celo las poblaciones de Gascuña, Vasconia y el Bearn. No le será fácil, será una cruz muy pesada que acompañará al fundador hasta su tumba. Acuño la divisa F.V.D.,” Fiat Voluntas Dei”, ”Hágase la Voluntad de Dios”, que será oficial desde 1852. </p> <p class="fvd">El P. Garicoits, contando ya con un personal selecto, abrió en Betharram, Mauleón, Ortez y Oloron varios colegios de enseñanza primaria y luego secundario que figuraron entre los mejores de la región. Consolidada por el fervor y la abnegación de sus primeros miembros, la Congregación pudo extenderse fuera de su diócesis de origen, Bayona, (de donde proviene el nombre de Bayoneses).</P>';
      scope.$broadcast('scroll.refreshComplete');
      $scope.$apply();
    }
    if ($scope.bot2=='ion-chevron-up'){
      $scope.bot2='ion-chevron-down';
      $scope.img2='';
      $scope.texto2='';
      scope.$broadcast('scroll.refreshComplete');
      $scope.$apply();

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
      scope.$broadcast('scroll.refreshComplete');
      $scope.$apply();
    }
    if ($scope.bot3=='ion-chevron-up'){
      $scope.bot3='ion-chevron-down';
      $scope.img3='';
      $scope.texto3='';
      scope.$broadcast('scroll.refreshComplete');
      $scope.$apply();

    }
  };
});
