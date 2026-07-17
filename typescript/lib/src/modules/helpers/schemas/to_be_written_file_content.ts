import * as p_ from 'pareto-core/interface/schema'

import type * as s_write_file from "./write_directory_content.js"

export type File_Content = {
    'lines': p_.List<string>
    'parameters': s_write_file.File_Write_Parameters
}