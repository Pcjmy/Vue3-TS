const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
addFormats(ajv)

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string',
      test: 'abcdef',
    },
    bar: {
      type: 'string',
      format: 'email',
    },
  },
  required: ['foo'],
  additionalProperties: false,
}

ajv.addKeyword({
  keyword: 'test',
  validate: (schema, data) => {
    if (schema === true) return true
    else return schema.length === 6
  },
})

const validate = ajv.compile(schema)

const data = {
  foo: 'hello',
  bar: 'abc@qq.com',
}

const valid = validate(data)
if (!valid) console.log(validate.errors)
