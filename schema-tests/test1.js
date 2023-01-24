const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
addFormats(ajv)

const schema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string',
      test: true,
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
  compile: (schema, parentSchema) => {
    console.log(schema, parentSchema)
    return () => true
  },
  metaSchema: {
    type: 'boolean',
  },
})

const validate = ajv.compile(schema)

const data = {
  foo: 'hello',
  bar: 'abc@qq.com',
}

const valid = validate(data)
if (!valid) console.log(validate.errors)
