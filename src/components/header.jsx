import ImagenEncabezado from '../img/Marvel_Logo.svg';

const Header = () => {
    const hendleClick = () =>{
        console.log('Se presiono el boton');
        localStorage.clear();
    }
    return (
        <div className="App ">
            <div className='div-centrar-encabezado'>
               <a href='/'> <img className='img-encabezado' src={ImagenEncabezado} alt='Marvel' onClick={hendleClick}></img></a>
                <h1 className='img-encabezado-texto'>Super<span className='img-encabezado-texto2'>Heroes</span></h1>
            </div>
        </div>
      );
}
 
export default Header;