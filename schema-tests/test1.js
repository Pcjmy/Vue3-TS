const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
addFormats(ajv)

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
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
  foo: 1,
  bar: 'abc@qq.com',
}

const valid = validate(data)
if (!valid) console.log(validate.errors)
