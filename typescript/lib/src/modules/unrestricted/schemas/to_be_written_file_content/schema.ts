import * as p_ from 'pareto-core/interface/schema'

import type * as s_write_file from "../../../helpers/schemas/write_directory_content/schema.js"

export type File_Content = {
    'lines': p_.List<string>
    'parameters': s_write_file.File_Write_Parameters
}