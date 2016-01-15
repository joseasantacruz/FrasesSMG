angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

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

.controller('FrasesCtrl', function($scope) {
	
  $scope.frases = ['Lo que caracteriza a Dios: no exigir sino el puro amor; el que no necesita nada, nada pide sino ser amado.',
		 '¿Tienes miedo a Dios? ¡Échate en sus brazos!',
		 'Hay que amar a Dios con preferencia a todo lo demás, o sea que, en comparación con él, todo sea contado como nada.', 
		 'Nada más sabio, más seguro, más provechoso que lanzarse a ciegas en las aparentes contradicciones, en las tinieblas divinas.', 
		 'Dejemos a Dios lo que es, sin querer echarlo y tomar su lugar; sigamos siendo lo que somos.', 
		 'Con Dios, mientras menos claro se ve, más seguro se anda.', 
		 'Hay un brazo firme y poderoso, lleno de amor hacia ti, que se te ofrece; déjate llevar por ese brazo y descansa en él.', 
		 '¡Cuántos se hacen un Dios de fantasía, dejando de lado al verdadero Dios de su voluntad!', 
		 'Dios no cesa de hablarnos en el fondo del alma, para adueñarse de ella, iluminarla, fecundarla, haciéndola vivir con vida divina.', 
		 '¡Dios está tan cerca de ti! Dios está en ti, ahí lo tienes, en lo hondo más íntimo de tu corazón, tan deseoso de escucharte, de darse a ti, de sostenerte, de divinizarte.', 
		 'Aquí estoy, Dios mío, aquí estoy.', 
		 'Ese Dios grande, ese Dios bueno me está mirando.', 
		 'Dios quiere ser llamado Dios de nuestro corazón y no de nuestro espíritu.', 
		 'Creer en el amor que Dios nos tiene, es el resumen de la fe.', 
		 'Es un Dios fundido en amor. Nos solicita, nos requiere, se inmola aun viendo que no nos rendimos a su corazón.', 
		 'Dios se ha hecho el amo de nuestros corazones; para que gocemos de su felicidad, nos persigue incesantemente con sus inspiraciones.', 
		 'Eres tú entero lo que el Señor pide y no lo tuyo sin ti mismo.', 
		 '¿Qué necesitamos para oír a Dios que nos habla, para dejarnos poseer por Dios? Hay que hacer silencio, hacer callar el ruido.', 
		 'Rindámonos a Dios sin tardanza, sin reserva, sin retorno.', 
		 'El amor: resorte que lanza al hombre!', 
		 'El Espíritu Santo ilumina las inteligencias, fortalece las voluntades, penetra los corazones con santa alegría y lo vuelve todo fácil y agradable.', 
		 'Corazón de Jesús: ya no quiero rehusaros nada. Cortad, quemad, tomad. Me basta con vuestro amor.', 
		 'Nuestro Señor se ha sumergido en nuestra nada para sacarnos de nuestros abismos y elevarnos hasta el Padre.', 
		 'No vivir sino con él, como si estuviéramos solos, él y yo, en la tierra.', 
		 'Hay corazones a quienes les resulta imposible no apasionarse. Hay que volverlos hacia el Divino Corazón; ahí encontrarán plena satisfacción.', 
		 '¿Dónde se aprende esta ley interior del amor? En la oración, en la meditación. Ahí, el alma adquiere la costumbre de unirse a Dios. Silenciosa y recogida a sus pies, queda iluminada, dispuesta a todo.', 
		 '¡Que nuestra vida sea una oración continua!', 
		 'Ahí, en la ley interior, hay que buscar éxito; ningún camino es más apropiado, más rápido, más seguro para tener éxito.', 
		 'Jesús conoce los deseos de su Padre: dirá, en cada momento ECCE VENIO.', 
		 'Pide nuestro Señor: “Que sean uno en nosotros”. Que seamos no sólo el modelo, sino el lazo de su unión.', 
		 'Padre, Hijo y Espíritu Santo, ¡qué modelo de comunidad!', 
		 'Hágase la voluntad de Dios en mí como en el cielo.', 
		 'Cuando veo que Dios quiere una cosa, lo hago enseguida.', 
		 'Mi alimento, decía el Señor, es cumplir la voluntad de mi Padre.', 
		 'Que cada uno de nuestros actos sea una oración vital que atraiga y aumente en nosotros la vida del Espíritu Santo.', 
		 'Es necesario que el hombre se aplique a conocer y a meditar la voluntad de su creador, para someterse a ella sin reserva.', 
		 'F.V.D. Fiat Voluntas Dei. ¡Hágase la voluntad de Dios!', 
		 'Aquí estoy sin tardanza, sin reserva, sin retorno, por amor a la voluntad de Dios.', 
		 'Mientras más nos sometemos a las órdenes de Dios, más nos acercamos a su santidad.', 
		 '¿Es tan difícil amar a Dios? Cumplamos la ley por amor.', 
		 'Ocurra lo que ocurra, hay que decir: “Sea bendito el nombre del Señor.” Si no es por amor, al menos por paciencia.', 
		 'Mientras más nos sometemos a las órdenes de Dios, más nos acercamos a su santidad.', 
		 'Contar con la providencia: nunca nos fallará si le somos fieles.', 
		 'Lo que Él quiera, como lo quiera y ¡fuerza!', 
		 'De cuántos obstáculos triunfaríamos, si supiéramos callarnos y esperar el momento de la providencia.', 
		 '¿Cómo se construye la casa de Dios? Con actos de fe, de esperanza y de caridad. Nadie es admitido en el cielo sin haber edificado una tal casa.', 
		 '¡Qué maravilla creer lo que no comprendemos!', 
		 'Imita a María al pie de la cruz. Sufría, pero quería su dolor. Quería la muerte de su hijo porque Dios la quería.', 
		 'Hay que presentarse a Dios con el sentimiento0 de nuestra nada: es la disposición más conforme a la verdad.', 
		 'Nunca hay que esperar tanto como cuando todo está perdido. Entonces hay que redoblar de ardor para cumplir con la voluntad de Dios.', 
		 'Que esas tinieblas y ese humo sean disipados por la fe: nada perderemos, al contrario, se adquiere la verdadera ciencia, la verdadera riqueza.', 
		 'Hay que abandonarse a Dios; si el acto de abandono es completo, Dios no puede resistir.', 
		 'Hagamos lo que depende de nosotros y Dios hará el resto.', 
		 'Nunca haremos bastante por Dios: hay que vivir en Dios y no vivir sino para Dios.', 
		 'Si fuéramos humildes como la Santísima Virgen, seríamos impecables como ella.', 
		 'El verdadero carácter de la caridad: severo consigo mismo y cordial con los demás.', 
		 'El amor va más allá de lo que se manda.', 
		 'Dios todo, yo nada; Dios en su lugar, yo en el mío. Hasta la razón misma dicta esta verdad fundamental.', 
		 'La humildad de la Santísima Virgen es tanto mayor cuanto más heroica es su magnanimidad, la cual crece en proporción a su humildad.', 
		 'El hombre tiene que sacrificarlo todo a la gloria de Dios y a su mayor gloria. Por eso, Cristo abrazó la cruz toda su vida.', 
		 'La voluntad de Dios es siempre buena, siempre perfecta en sí misma y, para el hombre, siempre deseable.', 
		 'Todo adelanto espiritual descansa sobre la unión de nuestra voluntad con la voluntad divina.', 
		 'La voluntad de Dios es siempre buena, siempre perfecta en sí misma y, para el hombre, siempre deseable.', 
		 'Hay que obedecer la autoridad legítima por Dios, cualquiera que sea, en sí, quien mande.', 
		 'Tengamos convicciones profundas y preparémonos a actuar en circunstancias difíciles.', 
		 '¿Qué soy yo por yo mismo? Nada, absolutamente nada.', 
		 'Dios odia el orgullo del hombre.', 
		 'Tendríamos que abrazar la humildad con el mismo entusiasmo que lleva al soldado en pos de su bandera.', 
		 'Olvídate, y pensarán en ti. Y Dios te amará. Quien pierde su alma la encuentra.', 
		 'Hay que temer el éxito y los aplausos tanto o más que la humillación. Temblemos ante el éxito.', 
		 'Jesucristo, como hombre, reconoce su nada. Así lo afirma. Y lo hace por convicción, de todo corazón.', 
		 'Hay que servirse de los talentos que Dios nos ha confiado.', 
		 'Hay que terminar con las críticas, las murmuraciones en las palabras y en los juicios hacia la autoridad.', 
		 'El amor de Dios para sus elegidos se mide por los sufrimientos que Dios depara en esta vida.', 
		 'Hay que obedecer la autoridad legítima por Dios, cualquiera que sea, en sí, quien mande.', 
		 'Un desorden: olvidar el fin y poner los medios en lugar del fin.', 
		 'El Maestro interior se esconde, por decirlo así, bajo la corteza de cada criatura; por ahí nos invita a elevarnos al creador.', 
		 'Hay que dedicarse a la acción presente como si de ella dependiera la salvación.', 
		 '¡Adelante siempre! Y actuar dentro de los límites de su trabajo.', 
		 'Contra algunas tentaciones es necesaria la huida positiva. ', 
		 'Decimos: en el nombre del Padre etc… y luego actuamos como verdaderos charlatanes, títeres de Satanás.', 
		 'Lo que importa, sobre todo, es el espíritu de obediencia a Dios, a los superiores, el Ecce venio de la obediencia humilde y generosa.', 
		 'Son grandes cosas las pequeñas.', 
		 'Nunca se habla tanto como cuando uno no tiene nada que decir.', 
		 '¡Qué vergüenza! Son muy raros los cristianos que comprenden la importancia de las acciones santas y llenan su vida con ellas.', 
		 'Hay que ser cristianos no sólo en la intimidad, sino también externamente.', 
		 'No hay nada tan desconocido como el reino de Dios en los asuntos del mundo.', 
		 'Busquemos en la oración la fuente de la felicidad; después, en la acción, ocupémonos, ante todo, de agradar a Dios; por el cumplimiento de todas sus voluntades.', 
		 'Hagamos, en todo, lo que Dios quiere y como lo quiere, sin andar a la aventura, ni arbitrariamente.', 
		 'Seamos fieles a nuestro lema: “La voluntad de Dios en todo”. No nos dejemos detener por impresiones contrarias.', 
		 'Paciencia si tenemos impresiones contrarias al espíritu de la humildad.', 
		 'Hay que justificar la intención, si fuera imposible justificar la acción; ejercer la caridad sin faltar al deber.', 
		 'Hay que abandonarse a Dios, y si el acto de abandono es completo, Dios no puede contra él.', 
		 'Dios será tu fuerza, no te asuste tu debilidad ni tus pecados. Entrégate a El totalmente, con fe y amor, y descansa en El.', 
		 'La dicha está en la disposición; es la buena orientación. Lo primero que hay que buscar es el Reino de Dios; lo demás es poco y nos lo darán por añadidura.', 
		 'Existen corazones que no pueden dejar de apasionarse. Hay que volverlos hacia el divino corazón: encontrarán ahí con que satisfacerse.', 
		 'La felicidad del hombre está en su corazón, en ninguna otra parte. Está en la disposición y no en la posición.', 
		 'Desgraciadamente reina entre los hombres una enfermedad universal: la preocupación de lo que no nos corresponde.', 
		 'Con frecuencia, el silencio es una corrección suficiente.', 
		 'Contra un torrente de injurias, no hay arma mejor que el silencio.', 
		 'Aunque tuviera un pie en el infierno, esperaría en ti, Dios mío.', 
		 'Debemos que ser, más que hombres que rezan, la oración continua.', 
		 'Busquemos en la oración la fuente de nuestra felicidad.', 
		 'Vivir en paz, nunca hay razón de turbarse: ¿acaso no tenemos siempre a Dios como pastor?'
		 ];
	
	$scope.getRandomIndex = function(length){
    return Math.floor(Math.random() * length);
	}
	$scope.visualizarFrase = function(){
		document.getElementById("frase1").style.visibility = "visible";
		document.getElementById("frase11").style.visibility = "visible";
		document.getElementById("frase1").innerText=$scope.frases[$scope.getRandomIndex($scope.frases.length)];
		$scope.$broadcast('scroll.refreshComplete'); 
		$scope.$apply();
	}
	$scope.menuFrases = function(){
		document.getElementById("menu1").style.backgroundColor = "silver";
		document.getElementById("menu2").style.backgroundColor = "white";
		document.getElementById("menu3").style.backgroundColor = "white";
		document.getElementById("menu4").style.backgroundColor = "white";
		$scope.$broadcast('scroll.refreshComplete'); 
		$scope.$apply();
	}
	$scope.menuSMG = function(){
		document.getElementById("menu1").style.backgroundColor = "white";
		document.getElementById("menu2").style.backgroundColor = "silver";
		document.getElementById("menu3").style.backgroundColor = "white";
		document.getElementById("menu4").style.backgroundColor = "white";
		$scope.$broadcast('scroll.refreshComplete'); 
		$scope.$apply();
	}
	$scope.menuFVD = function(){
		document.getElementById("menu1").style.backgroundColor = "white";
		document.getElementById("menu2").style.backgroundColor = "white";
		document.getElementById("menu3").style.backgroundColor = "silver";
		document.getElementById("menu4").style.backgroundColor = "white";
		$scope.$broadcast('scroll.refreshComplete'); 
		$scope.$apply();
	}
	$scope.menuDesa = function(){
		document.getElementById("menu1").style.backgroundColor = "white";
		document.getElementById("menu2").style.backgroundColor = "white";
		document.getElementById("menu3").style.backgroundColor = "white";
		document.getElementById("menu4").style.backgroundColor = "silver";
		$scope.$broadcast('scroll.refreshComplete'); 
		$scope.$apply();
	}
	$scope.doRefresh = function(){
		document.getElementById("frase1").style.visibility = "hidden";
		$scope.$broadcast('scroll.refreshComplete');
		$scope.$apply();
	}
	
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
