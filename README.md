# Coding Standard and Conventions

- Use barrel method to export & path aliases to make the importing precise
- Prefix **i-** e.g: `i-user-profile.ts` to file name which includes interfaces/types/enums etc (Alternate: use `*.interface.ts` pattern for file name or use `*.d.ts` declaration file for interface).

# Style Guide

- All custom classes & id should prefix application constant, which should not be used hardcoded(`$var-style-prefix` for scss, `STYLE_PREFIX` for ts/html files )
- use keyboard shortcut snippet

  - ```json
    {
    	"key": "alt+x",
    	"command": "editor.action.insertSnippet",
    	"when": "editorTextFocus",
    	"args": {
    		"snippet": ".#{\\$var-style-prefix}$1"
    	}
    }
    ```

  - ```json
    {
    	"key": "alt+r",
    	"command": "editor.action.insertSnippet",
    	"when": "editorTextFocus",
    	"args": {
    		"snippet": "{{constants.STYLE_PREFIX}}$1"
    	}
    }
    ```

- Use only snake_case instead of camelCase naming convention
- Strictly use @forward/@use instead of @import
- Strictly use below mentioned prefixes
  1. **$fs** -> font size variables/maps
  2. **$fn** -> functions
  3. **$mx** -> mixins
  4. **$clr** -> color variables/maps
  5. **$var** -> general variables/maps eg: function parameters, local variables
