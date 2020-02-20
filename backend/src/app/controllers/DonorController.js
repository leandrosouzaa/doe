import User from '../models/Donor';
import * as Yup from 'yup';

class UserController {

    // Método para cadastro de novo doador

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            blood: Yup.string.required(),
        });

        // Verificando se os dados enviados são válidos.

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({error:"Validação de Dados Falhou."})
        }
    }
}