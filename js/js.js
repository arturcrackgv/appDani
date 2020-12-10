/*CONTENEDOR*/
var container = document.getElementById("container");
var navbarDropdownElements = document.getElementById("navbarDropdownElements");

var navbarDropdown = document.getElementById("navbarDropdown");


for (i = 1; i <= 8; i++) {
    var dropdownItem = document.getElementById("act" + i);
    if (dropdownItem.addEventListener("click", function() {
            navbarDropdownElements.style.display = 'none';
        })) {

    } else {
        if (navbarDropdown.addEventListener("mouseover", function() {
                navbarDropdownElements.style.display = 'block';
            } && navbarDropdown.addEventListener("mouseover", function() {
                navbarDropdownElements.style.display = 'block';
            })));
    }


}



/**************************************************************/

/*AL CARGAR*/
window.onload = function() {
    container.innerHTML = ' <div id="video-carousel-example" class="carousel slide carousel-fade" data-ride="carousel">      <div class="carousel-inner" role="listbox">        <div class="carousel-item active">          <video class="video-fluid" autoplay loop muted>            <source src="img/video.mp4" type="video/mp4" />          </video>        </div>        </div>    </div>';

};

/*INDEX*/
var index = document.getElementById("index");

index.onclick = function() {
    container.innerHTML = ' <div id="video-carousel-example" class="carousel slide carousel-fade" data-ride="carousel">      <div class="carousel-inner" role="listbox">        <div class="carousel-item active">          <video class="video-fluid" autoplay loop muted>            <source src="img/video.mp4" type="video/mp4" />          </video>        </div>        </div>    </div>';
}


/*NOSOTROS*/
var nst = document.getElementById("nst");

nst.onclick = function() {
    container.innerHTML = '<h1>NOSOTROS</h1><br><p>Somos un grupo de alumnos de la Universidad de Valencia unidos por un proyecto común. Play Stars Phisyc surge como propuesta innovadora, buscando la iniciativa de poder recrear un juego mundialmente conocido,en la vida real. En un principio, el único fin de la idea era una propuesta para un trabajo universitario, pero la idea nos pareció tan buena que decidimos llevarla a la práctica y emprender en este nuevo proyecto.</p><br><h3>¿Cómo se nos ocurrió?</h3><br><p>En los colegios, muchos niños y niñas, juegan al popular videojuego simulandolo en la vida real sin reglas y de manera recreativa y autotélica.</p><p>Por otro lado, este juego es practicado por adultos, incluyendo campeonatos online mundiales a nivel internacional y despertando un gran afán entre sus practicantes. Por ello, y basándonos en el auge del Cosplay y la práctica del Paintball en nuestra sociedad actual, que mejor que ofrecer una actividad física para aquellas personas que quieran practicarlo.</p><br><h3>¿Cuál es nuestro objetivo?</h3><br><p>Finalmente, como estudiantes de Ciencias de la Actividad Física y el Deporte, y siendo bajo nuestro punto de vista el factor más importante, hoy en día los niños están cada vez más focalizados en las nuevas tecnologías. Por otro lado, esta adicción a las nuevas tecnologías, contribuye a la reducción de la práctica deportiva, situando a España en el segundo país de la Unión Europea con las mayores tasas de obesidad y sobrepeso infantil. Por todo ello, consideramos que nuestra propuesta, podría ser un estímulo de interés para que lleven a cabo actividades físicas.</p>';
}


/*ACTIVIDADES*/
var act1 = document.getElementById("act1");

act1.onclick = function() {
    container.innerHTML = '<h1>PLAY BALL</h1><br><p>Las partidas duran de 2 a 3 min. Se jugarán varias consecutivas.</p><p>El objetivo principal es meter gol en la portería rival. Se gana con dos goles o el equipo que haya metido 1 gol antes de acabar el tiempo. </p><p>En caso de empate, se juega una prórroga de un minuto y quien marque gol gana.</p><p>El balón se llevará en las manos y se podrá pasar o tirar a portería a partir de determinada zona y sin poder entrar al área rival.</p><p>Mientras se lleva el balón no se podrá atacar, y si te matan con balón dejarás el balón en el suelo. </p><p>Si te matan tienes que volver a tu portería y contar 5 segundos.</p><p>Las habilidades de bases o construcciones, no se podrán colocar dentro del área, ni la propia, ni la rival.</p><p>Cada tipo de brawler será elegido antes de la partida, con su habilidad correspondiente y no se podrá cambiar hasta finalizar la partida. Por ello asegúrate de crear una buena combinación antes de empezar la partida.</p>';
}

var act2 = document.getElementById("act2");

act2.onclick = function() {
    container.innerHTML = '<h1>ATRAPA GEMAS</h1><br><p>En este modo de juego se jugará en un campo que tenga distintos obstáculos de cobertura. Se irán liberando gemas en el centro del campo cada 10 segundos.</p><p>Las partidas podrán ser de 3 contra 3, hasta 5 contra 5, adaptando las medidas del campo al número de jugadores.</p><p>Cada jugador tendrá una bolsa en la que meter las gemas, y en el caso de morir las dejará en el suelo en el lugar que le hayan matado. </p><p>Si te matan volverás a tu base y tardarás de 3 a 5 segundos en volver.</p><p>Una vez sumen 10 gemas un equipo, se contarán 20 segundos en los cuales si conservan las gemas, y el equipo rival no mata a ningún portador de gemas, y/o igualan el número de gemas (se podría empatar 10-10, y se continuarán liberando gemas hasta desempatar y conservar ese desempate 20 segundos), se ganaría la partida.</p>';
}

var act3 = document.getElementById("act3");

act3.onclick = function() {
    container.innerHTML = '<h1>ZONA CALIENTE</h1><br><p>Se delimitan 1 o 2 zonas calientes, bien pintando un círculo en el suelo o delimitando una zona con chinos o conos de un determinado color.</p><p>El objetivo es llegar a conservar una zona o 2 durante determinado tiempo.</p><p style="margin-bottom:25px;">Puntuación:</p><p>Cada segundo conservada la zona será un punto, hasta llegar a un total de 100 puntos (determinar una vez probado).</p><p>Para conservar la zona, basta con que haya un único miembro de un equipo, sin que haya ningún miembro del otro equipo.</p><p>En el caso de haber miembros de los dos equipos en una misma zona, se parará el tiempo y esta estará en disputa. Si hay dos zonas y hay miembros de un equipo en una, y del otro equipo en la otra, también se parará el tiempo hasta que solo haya miembros de un mismo equipo en una o ambas zonas.</p><p>Si hay una zona, cada segundo conservada equivaldrá a 2 puntos, Si hay dos zonas, si conservas una y la otra está vacía será un punto, y si conservas las dos a la vez, equivaldrá 2 puntos.</p><p>Si es una zona la puntuación máxima serán 80-100 puntos, si hay 2 zonas, serán 60-80 puntos. Se podrán hacer las partidas con un tiempo total (5-10 min) o sin límite de tiempo.</p><p>Habrá un cronómetro por cada equipo y se irá arrancando y parando según las dos medidas anteriormente descritas. El primer equipo en alcanzar la puntuación máxima ganará la partida.</p>';
}

var act4 = document.getElementById("act4");

act4.onclick = function() {
    container.innerHTML = '<h1>ATRACO</h1><br><p>El objetivo de este juego es destruir la base enemiga. Cada base puede recibir un total de 10-15 ataques enemigos. Habrá un contador de golpes restantes en cada base.</p><p>Se montará una base como puede ser una pica o un saco de plástico, o algo que sea ligeramente alto (1,5 metros de alto) y que no duela al golpearle, y no se caiga al suelo, o se desplace.</p><p>Cada brawler podrá atacar con su ataque básico o su habilidad, es decir, un brawler Peso Pesado de guantes de boxeo, si le da un puñetazo, se descontará un ataque restante a la base enemiga. Un lanzador, tendrá una distancia mínima desde la cual podrá lanzar su ataque, teniendo en cuenta, que si se queda sin munición tendrá que ir a por más. Cada ataque impactado contra la base enemiga, descontará un ataque de los 15 que puede recibir.</p><p>Si te matan tendrás que irte a tu base y tardarás 3-5 segundos en reaparecer.</p><p> Hay que buscar superioridades, ya que la partida puede ser algo larga o muy corta si dan los 15 ataques rápidos al haber matado a la mayoría del equipo rival y no haber nadie que defienda.</p><p>Una vez se han dado los 15 ataques, se gana la partida.</p><p></p>';
}

var act5 = document.getElementById("act5");

act5.onclick = function() {
    container.innerHTML = '<h1>ATRAPA LA BANDERA</h1><br><p style="margin-bottom:30px"></p><p>El objetivo de este juego es atrapar la bandera situada en la base del equipo rival y llevarla a nuestra base, teniendo que estar nuestra bandera también en la base al mismo tiempo.</p><p>Si te matan, tienes que volver a tu base y tardarás 3-5 segundos en revivir.</p><p>Si te matan con la bandera dejarás la bandera dónde te hayan matado.</p><p>Puedes coger tu propia bandera para devolverla a tu base una vez hayas matado al portador enemigo.</p><p>Se puede dar la situación en la que las dos banderas hayan sido robadas simultáneamente, por lo que no se ganará hasta que la bandera rival y la propia estén en tu base.</p>';
}

var act6 = document.getElementById("act6");

act6.onclick = function() {
    container.innerHTML = '<h1>SUPERVIVENCIA</h1><br><p>Jugarán según las medidas del mapa hasta un máximo de 15-20 jugadores.</p><p>En este caso el objetivo del juego es ser el único (individuo, dúo o trío) en sobrevivir.</p><p>Los mapas serán más grandes y tendrán más obstáculos para protegerse.</p><p style="margin-bottom:25px;">Habrán 2 variantes:</p><p><b>CLÁSICA:</b> Excepto habilidades, cada brawler solo podrá usar sus armas, podrá recoger su munición en caso de ser lanzada, pudiendo haber puestos de munición repartidos por el mapa para los lanzadores.</p><p><b>APOCALIPSIS:</b> en este modo, para recompensar a los jugadores que maten, se les permitirá utilizar las armas de los brawler que hayan matado (sin poder usar sus habilidades, solo las habilidades propias).</p><p style="margin-bottom:20px;">Habrá una tormenta que irá reduciendo el mapa cada cierto tiempo (las partidas durarán un máximo de 10 min), reduciéndose el mapa cada 30 segundos.</p>';
}
var act7 = document.getElementById("act7");

act7.onclick = function() {
    container.innerHTML = '<h1>ESCOLTA AL ROBOT</h1><br><p>En este caso el robot será un carro llevado por el árbitro u otra persona.</p><p>Habrá un árbitro externo que cronometrará el tiempo de escolta hasta la otra base, teniendo un máximo de 5-10 minutos dependiendo de las medidas del campo y el número de jugadores.</p><p>Este modo será de 4 contra 4 a 6 contra 6.</p><p>Habré un equipo defensor y un equipo atacante que escoltará el robot hasta la base enemiga.</p><p>El robot avanzará siempre que tenga un aliado o más cerca suyo (a un margen de dos metros), si no, se parará.</p><p>Se escoltará desde la propia base hasta la base enemiga.</p><p>Si te matan, el tiempo de reaparición de los atacantes será de 6-10 segundos. Mientras que el tiempo de reaparición de los defensores será de 3-5 segundos. Reapareciendo cada brawler en su base.</p><p>Los objetos y las habilidades de los brawlers de apoyo u otros brawlers, podrán desviar ligeramente el robot (línea paralizante, zona paralizadora, bases o construcciones). Habiendo un tiempo de enfriamiento de 5-10 segundos.</p>';
}

var act8 = document.getElementById("act8");

act8.onclick = function() {
    container.innerHTML = '<h1>MODALIDAD DE VERANO</h1><br><p>Se podría implementar una modalidad de verano incluyendo globos de agua, pistolas de agua, cañones de agua, piscinas hinchables…, así, combatiremos el calor mientras se hace una actividad física y te diviertes a la vez.</p>';
}




/*PRECIOS*/
var pre = document.getElementById("pre");

pre.onclick = function() {
    container.innerHTML = '<h1>PRECIOS</h1><br><p>El coste de cada usuario por partida será de 15 euros cada hora (en las partidas de 10 personas). Se podrán realizar hasta 3 partidas simultáneas indoor.</p><p>En los alrededores se podrán hacer de 2 a 5 campos para este mismo uso, ya que hay terreno suficiente para poderlo efectuar. Además ofreceremos bonos de descuento por grupos. Si cada hora normalmente tiene un coste de 15 euros, los viernes y fines de semana se descontarán 5 euros la hora por cada grupo de 5 personas (juntas en un mismo grupo), que quieran jugar. </p><p>Todos los días de la semana, a partir de las 2 horas de partida, se realizará un descuento, que consistirá en que cada hora les saldrá a mitad de precio (una vez sobrepasen estas 2h). </p><p>Para la gente que llega en las últimas horas de apertura, les ofrecemos un bono de actividad + comida/cena para cuando terminen de jugar. De esta manera ofrecemos comodidad a los clientes y sacamos beneficio.</p>';
}


/*CONTACTO*/
var con = document.getElementById("con");

con.onclick = function() {
    container.innerHTML = '<div ><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.6851660165516!2d8.545553315860667!3d47.78755258345304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQ3JzE1LjIiTiA4wrAzMic1MS45IkU!5e0!3m2!1ses!2ses!4v1607272784999!5m2!1ses!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>';
}


/*INICIAR SESION*/
var ini = document.getElementById("ini");

ini.onclick = function() {
    container.innerHTML = '<form class="form-signin">    <div class="text-center mb-4">        <img style="border-radius: 12px" class="mb-4" src="img/logo.png" alt="" width="72" height="72">        <h1 class="h3 mb-3 font-weight-normal">Play Stars Physic Market</h1>        <p><a href="https://caniuse.com/#feat=css-placeholder-shown"></a></p>    </div>   <div class="form-label-group">        <input type="email" id="inputEmail" class="form-control" placeholder="Correo electrónico" required autofocus>        <label for="inputEmail"></label>    </div>   <div class="form-label-group">        <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required>        <label for="inputPassword"></label>    </div>    <div class="checkbox mb-3">        <label>        <input type="checkbox" value="remember-me"> Recordar usuario  </label>   </div>    <button class="btn btn-lg btn-primary btn-block" type="submit">Iniciar sesión</button>    <p class="mt-5 mb-3 text-muted text-center">&copy;' + new Date().getFullYear() + '-' + (new Date().getFullYear() + 1) + '</p></form>';
}