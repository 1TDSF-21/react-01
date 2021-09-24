import React from 'react'

export default function FormTarefa() {
    return (
        <div>
            <form method="post">
                <fieldset>
                    <legend>CRIAR TAREFA</legend>
                    <div>
                        <input type="text" name="titulo" value="" placeholder="Título" />
                    </div>
                    <div>
                        <input type="text" name="setor" value="" placeholder="Setor" />
                    </div>
                    <div>
                        <input type="text" name="descricao" value="" placeholder="Descricao" />
                    </div>
                </fieldset>
                <div>
                    <button type="submit">ADD-POST/IT</button>
                </div>

            </form>
        </div>
    )
}
