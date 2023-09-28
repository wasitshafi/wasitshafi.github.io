# Coding Standard and Conventions

- Use barrel method to export & path aliases to make the importing precise

# Style Guide

- All custom classes & id should prefix application constant, which should not be used hardcoded(`$style-prefix` for scss, `STYLE_PREFIX` for ts/html files )
- Use only snake_case instead of camelCase naming convention
- Strictly use @forward/@use instead of @import
- Strictly use below mentioned prefixes
  1. **$fs** -> font size variables/maps
  2. **$fn** -> functions
  3. **$mx** -> mixins
  4. **$clr** -> color variables/maps
  5. **$var** -> general variables/maps eg: function parameters, local variables
