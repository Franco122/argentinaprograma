document.getElementById("empezar").addEventListener("click", function() {
    const nombreInput = document.getElementById("nombre");
    const jugadorNombre = nombreInput.value.trim();
    
    if (jugadorNombre !== "") {
      document.getElementById("player-name").style.display = "none";
      document.getElementById("opciones").style.display = "block";
      
      // Inicializo marcadores
      let jugadorPuntos = 0;
      let pcPuntos = 0;
      let intentos = 0;
      
      function actualizarMarcadores() {
        document.getElementById("jugador").textContent = `Jugador: ${jugadorPuntos}`;
        document.getElementById("computadora").textContent = `PC: ${pcPuntos}`;
      }
      
      document.querySelectorAll(".opcion").forEach(opcion => {
        opcion.addEventListener("click", function() {
          const opciones = ["piedra", "papel", "tijera"];
          const jugadorSeleccion = this.id;
          const pcSeleccion = opciones[Math.floor(Math.random() * 3)];
          
          function determinarGanador(jugador, pc) {
            if (jugador === pc) return "empate";
            if (
              (jugador === "piedra" && pc === "tijera") ||
              (jugador === "papel" && pc === "piedra") ||
              (jugador === "tijera" && pc === "papel")
            ) {
              jugadorPuntos++;
              return "jugador";
            }
            pcPuntos++;
            return "pc";
          }
          
          const ganador = determinarGanador(jugadorSeleccion, pcSeleccion);
          actualizarMarcadores();
          
          intentos++;
          if (jugadorPuntos === 3 || pcPuntos === 3) {
            let mensaje = "";
            if (jugadorPuntos === 3) {
              mensaje = "¡Has ganado el juego!";
            } else {
              mensaje = "La PC ha ganado el juego.";
            }
            
            mensaje += "\n¿Quieres intentarlo de nuevo?";
            if (confirm(mensaje)) {
              jugadorPuntos = 0;
              pcPuntos = 0;
              intentos = 0;
              actualizarMarcadores();
              document.getElementById("player-name").style.display = "block";
              document.getElementById("opciones").style.display = "none";
            }
          } else if (intentos >= 5) {
            // Reiniciar el juego después de 5 intentos
            intentos = 0;
            actualizarMarcadores();
          }
        });
      });
    } else {
      alert("ingresa tu nombre (no puede ser vacio).");
    }
  });