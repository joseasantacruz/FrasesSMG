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
			$scope.img1=' <div class="row">	  <div class="col"><center><img src="img\\smg2.jpg" width="100%" height="100%"></center>  </div>	</div>';
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
	}
	$scope.bot2='ion-chevron-down';
	$scope.img2='';
	$scope.texto2='';
	$scope.smg2 = function(){
		if ($scope.bot2=='ion-chevron-down'){
			$scope.bot2='ion-chevron-up';
			$scope.img2=' <div class="row"><div class="col"><center><img src="img\\smg3.jpg" width="100%" height="100%"></center> </div> <div class="col"> <center><img src="img\\smg5.jpg" width="100%" height="100%"></center> </div>	</div>	';
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
	}
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
	}
});
