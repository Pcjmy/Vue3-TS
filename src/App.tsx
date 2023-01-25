/* eslint-disable */
import { defineComponent, ref, Ref } from 'vue'
import { createUseStyles } from 'vue-jss'
import MonacoEditor from './components/MonacoEditor'

export default defineComponent({
  setup() {
    function toJson(data: any) {
      return JSON.stringify(data, null, 2)
    }
    const schema = {
      type: 'string',
    }
    const useStyles = createUseStyles({
      editor: {
        minHeight: 400,
      }
    })
    const schemaRef: Ref<any> = ref(schema)
    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch(err) {}
      schemaRef.value = schema
    }

    const classesRef = useStyles()

    return () => {
      const classes = classesRef.value
      const code = toJson(schemaRef.value)
      return (
        <div>
          <MonacoEditor
            code={code}
            onChange={handleCodeChange}
            title="schema"
            class={classes.editor}
          />
        </div>
      )
    }
  },
})
