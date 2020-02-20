import * as Yup from 'yup';
import Donor from '../models/Donor';

class DonorController {

    async index(req, res) {
        
        const donors = await Donor.findAll();

        return res.json(donors);
    }

    // Método para cadastro de novo doador
    async store(req, res) {

        // Criação do esquema de validação
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            blood: Yup.string().required(),
        });

        // Verificando se os dados enviados são válidos.
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({error:"Validação de Dados Falhou."})
        }

        // Cadastrando novo doador
        const {id, name, blood} = await Donor.create(req.body);

        //Retornando confirmação

        return res.json({
            id,
            name,
            blood
        });
    }
}

export default new DonorController();