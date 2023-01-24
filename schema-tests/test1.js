const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
addFormats(ajv)

ajv.addFormat('test', (data) => {
  console.log(data)
  return data === 'hello'
})

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string',
      format: 'test',
    },
    bar: {
      type: 'string',
      format: 'email',
    },
  },
  required: ['foo'],
  additionalProperties: false,
}

const validate = ajv.compile(schema)

const data = {
  foo: 'hello',
  bar: 'abc@qq.com',
}

const valid = validate(data)
if (!valid) console.log(validate.errors)
