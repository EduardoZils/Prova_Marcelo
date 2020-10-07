import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import writeJsonFile from 'write-json-file';



function Cadastro() {
    const [id, setID] = React.useState("");
    const [descricao, setDescricao] = React.useState("");
    const [marca, setMarca] = React.useState("");
    const [ano, setAno] = React.useState("");
    const [quilometragem, setQuilometragem] = React.useState("");

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    const Save = (event) => {
        //alert('Vai salvar');
        (async () => {
            await writeJsonFile('../data/data.json', { 'id': id, 'descricao': descricao, 'marca': marca, 'ano': ano, 'quilometragem': quilometragem });
        })();
        
        //alert('Salvou essa desgraçaaaaaaaa!');
        event.preventDefault();
        
    }

    return (
        <div class="container-page">
            <h1> Cadastro de Carros </h1>
            <div>
                <div>
                    <TextField id="id" label="Código" value={id} onChange={e => setID(e.target.value)} required fullWidth />
                </div>
                <div>
                    <TextField id="descricao" label="Descricao" value={descricao} onChange={e => setDescricao(e.target.value)} required fullWidth />
                </div>
                <div>
                    <TextField id="marca" label="Marca" value={marca} onChange={e => setMarca(e.target.value)} required fullWidth />
                </div>
                <div>
                    <TextField id="ano" label="Ano de Fabricação" value={ano} type='number' onChange={e => setAno(e.target.value)} required fullWidth />
                </div>
                <div>
                    <TextField id="quilometragem" label="Quilometragem" value={quilometragem} type='number' onChange={e => setQuilometragem(e.target.value)} required fullWidth />
                </div>
            </div>
            <div>
                <button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    onClick={Save}>
                    Cadastrar
                </button>
            </div>
        </div>
    );
}

export default Cadastro;