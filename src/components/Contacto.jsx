import '../scss/Contacto.scss';

function Contacto() {
  return (
    <>
      <form className='form'>
        <label id='name'></label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Tu nombre'
          required
        />
        <label id='email'></label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Correo electrónico'
          required
        />
        <label id='topic'></label>
        <input
          type='text'
          id='topic'
          name='topic'
          placeholder='Asunto'
          required
        />
        <label id='message'></label>
        <input
          type='text'
          id='message'
          name='message'
          placeholder='Escribe aquí...'
        />
      </form>
    </>
  );
}

export default Contacto;
