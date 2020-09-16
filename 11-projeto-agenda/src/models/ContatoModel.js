const mongoose = require('mongoose');
const { async } = require('regenerator-runtime');
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: false, default:'' },
  email: { type: String, required: false, default:'' },
  fone: { type: String, required: false, default:'' },
  createdIn: { type: Date, default:Date.now}
  
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato (body){
  this.body = body
  this.errors = []
  this.contato = null
}

Contato.buscaPorId = async function(id) {
  if(typeof id !== 'string' ) return
  const user = await ContatoModel.findById(id)
  return user
}

Contato.prototype.register = async function() {
  this.valida()

  if(this.errors.length > 0) return

  this.contato = await ContatoModel.create(this.body)
}

Contato.prototype.valida = function() {
  //validação
  this.cleanUP()

  //nome não pode ser em branco
  if(!this.body.name) this.errors.push('Nome é um campo obrigatório.')

  //email precisa ser valido
  if(this.body.email && !validator.isEmail(this.body.email) ) this.errors.push('E-mail inválido.')
  
  //é preciso ter um email ou contato
  if(!this.body.email && !this.body.fone) {
    this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou contato.')
  }
}

Contato.prototype.cleanUP = function()  {
  for( let key in this.body){
    if(typeof this.body[key] !== 'string') {
      this.body[key] = ''
    }
  }

  this.body = {
    name: this.body.name,
    lastname: this.body.lastname,
    email: this.body.email,
    fone: this.body.fone,
  }
}

Contato.prototype.edit = async function(id) {
  if(typeof id !== 'string') return
  this.valida()
  if(this.errors.length > 0) return
  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new:true })
}

Contato.buscaContatos = async function() {
  const contatos = await ContatoModel.find().sort({ createdIn: -1 })
  return contatos
}

Contato.delete = async function(id){
  const contato =  await ContatoModel.findByIdAndDelete(id)
  return contato
}

module.exports = Contato;
