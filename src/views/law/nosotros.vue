<template>
  <div class="cookies">
    <h2>Acerca de nosotros</h2>
    <h3>¿Quien es el propetario de la pagina?</h3>
    <p>
      Formato FMS fue creado por Nigatsu, un desarrollador web y gran admirador
      de las batallas de freestyle. En caso de conocer mas sobre mi, puedes
      visitar mi canal de youtube
      <a href="https://www.youtube.com/c/Nigatsu?sub_confirmation=1">aqui</a>
    </p>
    <h3>¿Como puedo aportar a la pagina?</h3>
    <p>
      Puedes ayudarme mucho reportando cualquier tipo de fallo que hayas
      encontrado. Para esto puedes escribir un comentario en cualquier video
      relacionado con esta pagina que tenga en mi canal de
      <a href="https://www.youtube.com/c/Nigatsu?sub_confirmation=1">youtube</a
      >. Tambien se aceptan sugerancias para mejorar la pagina.
    </p>
    <h3>¿Cual es el objetivo de la pagina?</h3>
    <p>
      El objetivo principal es servir como una herramienta que los usuarios
      puedan usar para votar las batallas en formato fms de la manera mas comoda
      posible centrandose principalmente en la batalla adicional nuestro
      apartado de informacion pretende mantener a los usuarios actualizados de
      todas las novedades sobre la Freestyle Master Series, siendo un sitio
      donde puedan ver todas las jornadas desde la primera hasta la mas reciente
    </p>
    <h3>¿De donde se origina el contenido?</h3>
    <p>
      El contenido de la pagina es actualizado por una sola persona, usando la
      informacion oficial de Urban Rooster como base. Aun asi, se pueden
      encontrar casos especificos donde la informacion oficial y la informacion
      de nuestra pagina sea diferente. Esto normalmente ocurre cuando los datos
      oficiales son ambiguos o muestran incroguencias.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cookies {
  margin: 0 auto;
  padding: 20px 0;
  max-width: 1000px;
  width: 90%;
  h2,
  h3 {
    color: var(--high-contrast-color);
  }
  p,
  li,
  a {
    text-decoration: none;
    text-align: justify;
    font-size: 18px;
    color: var(--low-contrast-color);
  }
  h2 {
    text-align: center;
    font-size: 32px;
    margin: 20px 0;
  }
  h3 {
    font-size: 26px;
    margin: 10px 0;
  }
  p {
    text-indent: 30px;
    margin: 20px 0;
  }
  li {
    padding-left: 10px;
    margin: 20px 0px;
    margin-left: 15px;
  }
  a {
    &:hover {
      color: var(--main-color) !important;
    }
  }
}
</style>
