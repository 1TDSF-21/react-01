import React, {useState} from 'react'
import fotoUsuario from '../img/user.png'
import fotoUsuario1 from '../img/user1.png'
import fotoUsuario2 from '../img/user2.png'
import fotoUsuario3 from '../img/user3.png'

import './Carteirinha.css'


export default function Carteirinha(props){
    const [usuario, setUsuario] = useState({ 'nome': '', 'rm': '', 'curso':'','turma':''})

    const preencheCampos = (e) => {

      //Realizando o destruction
      const { name, value } = e.target

      //Tenho duas propriedades do evento desestruturado que posso
      //utilizar.
      if (name == 'nome') {
          setUsuario({ 'nome': value, 'rm': usuario.rm, 'curso': usuario.curso, 'turma': usuario.turma})
      } else if (name == 'rm') {
          setUsuario({ 'nome': usuario.nome, 'rm': value, 'curso': usuario.curso, 'turma': usuario.turma})
      } else if (name == 'curso'){
         setUsuario({ 'nome': usuario.nome, 'rm': usuario.rm, 'curso': value, 'turma': usuario.turma})
      } else if (name == 'turma'){
         setUsuario({ 'nome': usuario.nome, 'rm': usuario.rm, 'curso': usuario.curso, 'turma': value})
      }
    }

   return(
      <> 
        <div className="carteirinha">
           <div className='foto'>
              <img src={fotoUsuario1} alt=""/>
           </div>
            <p>Nome: <b>{props.setNomes[0]}</b></p>
            <p>RM: <b>{props.setRM[0]}</b></p>
            <p>Curso: <b>{props.setCurso[0]}</b></p>
            <p>Turma: <b>{props.setTurma[0]}</b></p>
        </div>
        <div className="carteirinha">
            <img src={fotoUsuario2}/>
            <p>Nome: <b>{props.setNomes[1]}</b></p>
            <p>RM: <b>{props.setRM[1]}</b></p>
            <p>Curso: <b>{props.setCurso[1]}</b></p>
            <p>Turma: <b>{props.setTurma[1]}</b></p>
        </div>
        <div className="carteirinha">
        <img src={fotoUsuario3} alt=""/>
        <p>Nome: <b>{props.setNomes[2]}</b></p>
            <p>RM: <b>{props.setRM[2]}</b></p>
            <p>Curso: <b>{props.setCurso[2]}</b></p>
            <p>Turma: <b>{props.setTurma[2]}</b></p>
        </div>   
        <div className="formulario">
            Nome: <input name="nome" type="text" onChange={preencheCampos} /><br/>
            RM: <input name="rm" type="text" onChange={preencheCampos} /><br />
            Curso: <input name="curso" type="text" onChange={preencheCampos} /><br />
            Turma: <input name="turma" type="text" onChange={preencheCampos} /><br />
        </div>

        
        <div className="carteirinha">
            <img src={fotoUsuario}/>
            <p>Nome: <b>{usuario.nome}</b></p>
            <p>RM: <b>{usuario.rm}</b></p>
            <p>Curso: <b>{usuario.curso}</b></p>
            <p>Turma: <b>{usuario.turma}</b></p>
        </div>
       
      </>
)}
