# Pareto Resources

A TypeScript library providing resource abstractions for file system operations, command execution, and I/O in the Pareto ecosystem. Pareto Resources defines interfaces and implementations for interacting with the operating system in a functional, type-safe manner.

## Overview

Pareto Resources serves as the I/O layer for the Pareto ecosystem. The library follows Pareto's functional programming principles with explicit error handling, immutable data structures, and composable operations.

### Commands

- **[copy](#copy)**: Copy files or directories
- **[execute_any_command_executable](#execute_any_command_executable)**: Execute commands with structured output (providing this API allows the caller to specify which command to run, for example: 'ls', 'git', 'chmod', 'rm')
- **[execute_command_executable](#execute_command_executable)**: Execute commands with success/failure handling (providing this API restricts the caller from choosing the tool to run (for example 'ls', 'chmod'), which improves safety; the environment decides which commands to provide)
- **[execute_smelly_command_executable](#execute_smelly_command_executable)**: Execute commands (similar to execute command executable. This one can be used when stdout needs to be available, even when an error occurred.)
- **[log](#log-and-log_error)**: Write messages to stdout using pareto-fountain-pen Paragraphs
- **[log_error](#log-and-log_error)**: Write messages to stderr using pareto-fountain-pen Paragraphs
- **[make_directory](#make_directory)**: Create directories
- **[remove](#remove)**: Delete files or directories
- **[write_directory_content](#directory-content-operations)**: Write structured directory trees
- **[write_file](#write_file)**: Write data to files
- **[write_to_stderr](#write_to_stdout-and-write_to_stderr)**: Low-level stderr writing
- **[write_to_stdout](#write_to_stdout-and-write_to_stderr)**: Low-level stdout writing

### Queries

- **[execute_any_query_executable](#execute_any_command_executable)**: Execute a query. (The caller can specify the program to execute (for example 'ls', ))
- **[execute_query_executable](#execute_command_executable)**: Execute commands as queries (variant)
- **[get_instream_data](#get_instream_data)**: Read from standard input
- **[read_directory](#read_directory)**: List directory contents
- **[read_directory_content](#read_directory_content)**: Recursively read directory with file contents
- **[read_directory_structure](#read_directory_content)**: Recursively read directory structure
- **[read_file](#read_file)**: Read file contents
- **[stat](#stat)**: Get file/directory information

## Installation

```bash
npm install pareto-resources
```

## Core Concepts

### Resource Interfaces

Pareto Resources uses a clear separation between **commands** (operations with side effects) and **queries** (read operations):

- **Commands**: Execute operations that change state (write files, create directories, etc.)
- **Queries**: Retrieve information without side effects (read files, list directories, etc.)

### Path Types

Two primary path types provide flexibility:

- **Context Path**: Represents a directory (absolute or relative)
- **Node Path**: Represents a specific file or directory (context + node name)

## Commands

### File System Commands

#### `write_file`

Write data to a file:

```typescript
import * as resources from "pareto-resources/dist/interface/resources"

// In your command procedure
$c['write file'].execute(
    {
        'path': {
            'context': {
                'start': ['absolute', null],
                'subpath': ['src', 'output']
            },
            'node': 'result.txt'
        },
        'data': textData  // List_of_Characters
    },
    ($) => ['write file', $]  // Error handler
)
```

#### `make_directory`

Create a directory (including parent directories):

```typescript
$c['make directory'].execute(
    {
        'start': ['absolute', null],
        'subpath': ['path', 'to', 'directory']
    },
    ($) => ['make directory', $]
)
```

#### `remove`

Delete a file or directory:

```typescript
$c.remove.execute(
    {
        'path': contextPath,
        'error if not exists': false  // Don't error if already gone
    },
    ($) => ['remove', $]
)
```

#### `copy`

Copy files or directories:

```typescript
$c.copy.execute(
    {
        'source': sourcePath,
        'destination': destPath
    },
    ($) => ['copy', $]
)
```

### Command Execution

#### `execute_command_executable`

Execute a command with success/failure handling:

```typescript
$c['execute command executable'].execute(
    {
        'command': 'tsc',
        'arguments': ['--build'],
        'cwd': projectPath,
        'environment': environmentVars
    },
    ($) => ['build failed', $]
)
```

#### `execute_any_command_executable`

Execute a command and receive structured output:

```typescript
const result = $q['execute any command executable'](
    {
        'command': 'git',
        'arguments': ['status'],
        'cwd': repoPath
    },
    ($) => ['git error', $]
)
// Access result.stdout, result.stderr, result.exit_code
```

### Logging Commands

#### `log` and `log_error`

Write messages to stdout/stderr:

```typescript
$c.log.execute({
    'data': messageText
})

$c['log error'].execute({
    'data': errorText
})
```

#### `write_to_stdout` and `write_to_stderr`

Low-level stream writing:

```typescript
$c['write to stdout'].execute({
    'data': outputData
})
```

## Queries

### File System Queries

#### `read_file`

Read a file's contents:

```typescript
const fileData = $q['read file'](
    {
        'context': {
            'start': ['relative', { 'up steps': 0 }],
            'subpath': ['src']
        },
        'node': 'config.json'
    },
    ($) => ['read failed', $]
)
// Returns: List_of_Characters
```

#### `read_directory`

List directory contents:

```typescript
const entries = $q['read directory'](
    {
        'prepend results with path': false,
        'path': directoryPath
    },
    ($) => ['read directory failed', $]
)
// Returns dictionary of entries with their types (file/directory)
```

#### `read_directory_content`

Recursively read directory with file contents:

```typescript
const tree = q_read_directory_content({
    'read directory': $q['read directory'],
    'read file': $q['read file']
})(
    {
        'path': rootPath
    },
    ($) => ['read failed', $]
)
// Returns complete directory tree with file contents
```

#### `stat`

Get file/directory information:

```typescript
const info = $q.stat(
    nodePath,
    ($) => ['stat failed', $]
)
// Returns: { type: 'file' | 'directory', ... }
```

### Input Stream Query

#### `get_instream_data`

Read from standard input:

```typescript
const input = $q['get instream data'](
    {},
    null
)
// Returns: List_of_Characters from stdin
```

## Path Transformers

### Path Construction

```typescript
import * as t_path from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/unrestricted_path"

// Extend context path with subdirectory
const newPath = t_path.extend_context_path(
    contextPath,
    { 'addition': 'subdir' }
)

// Extend to a node path
const nodePath = t_path.extend_node_path(
    contextPath,
    { 'addition': 'file.txt' }
)

// Create node path from context
const created = t_path.create_node_path(
    contextPath,
    { node: 'config.json' }
)
```

### Path to Text

```typescript
import * as t_path_to_text from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/text"

// Convert to string representation
const pathString = t_path_to_text.Node_Path(nodePath)
// Returns: List_of_Characters like "/path/to/file.txt"

const dirString = t_path_to_text.Context_Path(contextPath)
// Returns: List_of_Characters like "/path/to/directory"
```

### Path Patterns

```typescript
// Absolute path
const absolutePath = {
    'start': ['absolute', null] as const,
    'subpath': ['home', 'user', 'project']
}

// Relative path (current directory)
const relativePath = {
    'start': ['relative', { 'up steps': 0 }] as const,
    'subpath': ['src', 'lib']
}

// Relative path (parent directory)
const parentPath = {
    'start': ['relative', { 'up steps': 1 }] as const,
    'subpath': ['config']
}
```

## Error Handling with Fountain Pen

Pareto Resources provides transformers to format errors for display:

```typescript
import * as t_read_file_error from "pareto-resources/dist/implementation/manual/transformers/read_file/fountain_pen"

// Format read file errors
const errorMessage = t_read_file_error.Error(error)
// Returns Phrase for display:
// "permission denied", "file does not exist", etc.
```

```typescript
import * as t_cmd_error from "pareto-resources/dist/implementation/manual/transformers/execute_command_executable/fountain_pen"

// Format command execution errors
const errorDisplay = t_cmd_error.Error(error)
// Returns formatted output with exit codes and stderr
```

## Common Integration Patterns

### File-to-File Transformation

Read a file, transform it, write the result:

```typescript
export const file_transformer: signatures.commands.transform_file = 
    p_.command(($d, $s, $q, $c) => [
        p_.query(
            $q['read file'](
                inputPath,
                ($) => ['reading file', $]
            ),
            ($, abort) => ({
                'path': outputPath,
                'data': transform(
                    $,
                    ($) => abort(['processing', $])
                )
            }),
            ($v) => [
                $c['write file'].execute(
                    {
                        'path': $v.path,
                        'data': $v.data
                    },
                    ($) => ['writing file', $]
                )
            ]
        )
    ])
```

### Stream-to-Stream Processing

Process stdin to stdout:

```typescript
export const stream_processor: signatures.commands.stream_in_to_stream_out =
    p_.command(($d, $s, $q, $c) => [
        p_.query(
            $q['get instream data']({}, null),
            ($) => $,
            ($) => [
                $c['write to stdout'].execute({
                    'data': process($)
                })
            ]
        )
    ])
```

### Directory Structure Generation

Write a complete directory tree:

```typescript
import * as t_fp_to_loc from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"

$c['write directory content'].execute(
    {
        'path': outputDir,
        'directory': {
            'src': ['directory', {
                'index.ts': ['file', indexContent],
                'lib': ['directory', {
                    'main.ts': ['file', mainContent]
                }]
            }],
            'package.json': ['file', packageJsonContent]
        }
    },
    ($) => ['write directory', $]
)
```

### Build Tool Integration

Execute build commands with error handling:

```typescript
$c['execute command executable'].execute(
    {
        'command': 'npm',
        'arguments': ['run', 'build'],
        'cwd': projectRoot,
        'environment': {
            'NODE_ENV': 'production'
        }
    },
    ($) => p_.decide.state($, ($) => {
        switch ($[0]) {
            case 'failed to spawn':
                return ['build', ['spawn failed', $]]
            case 'non zero exit code':
                return ['build', ['exit code', $]]
            default: return p_.exhaustive($[0])
        }
    })
)
```

## Type Safety Features

### Explicit Error Types

All operations have typed error cases:

```typescript
// read_file.Error
type ReadFileError = 
    | ['permission denied', null]
    | ['file does not exist', null]
    | ['node is not a file', null]
    | ['file too large', null]
    | ['device not ready', null]

// make_directory.Error
type MakeDirectoryError =
    | ['permission denied', null]
    | ['already exists', null]
    // ... etc
```

### Path Type Safety

Path types prevent mixing absolute and relative paths incorrectly:

```typescript
type Context_Path = {
    'start': Start
    'subpath': List<string>
}

type Start = 
    | ['absolute', null]
    | ['relative', { 'up steps': number }]
```

## Command Line Integration

Use with `pareto-host-nodejs` for CLI applications:

```typescript
import * as ph from 'pareto-host-nodejs'

ph.run_main_command(
    ($r) => {
        return myCommand(
            {
                'write file': $r.commands['write file'],
                'log': $r.commands.log,
                'log error': $r.commands['log error']
            },
            {
                'read file': $r.queries['read file']
            }
        )
    }
)
```

The host adapter provides actual implementations of all resource interfaces, connecting your functional code to Node.js APIs.

## Usage in Pareto Canon

Pareto Resources is used throughout the Pareto ecosystem:

- **pareto-liana**: Schema compilation with file I/O
- **astn/astn-core**: Reading and writing ASTN files
- **pareto-development-tools**: Build tools and file processing
- **pareto**: Code generation to disk
- **pareto-json**: JSON file operations
- **liana-targets**: Code generation output

## Design Principles

1. **Explicit Error Handling**: All I/O operations return typed errors
2. **Immutable Data**: All data structures are immutable
3. **Functional Composition**: Operations compose through command procedures
4. **Cross-Platform**: Path handling works across operating systems
5. **Type Safety**: Full TypeScript typing prevents runtime errors
6. **Separation of Concerns**: Interface definition separate from implementation

## Advanced Features

### Directory Content Operations

```typescript
// Write structured directory content
export const $$: signatures.commands.write_directory_content = 
    p_.command(($d, $s, $q, $c) => [
        p_.dictionary(
            $p.directory,
            ($, id) => [
                _pt.decide.state($, ($) => {
                    const path = t_path_to_path.extend_node_path(
                        $p.path, 
                        { 'addition': id }
                    )
                    switch ($[0]) {
                        case 'file': return _pt.ss($, ($) => 
                            $c['write file'].execute({ ... })
                        )
                        case 'directory': return _pt.ss($, ($) =>
                            // Recursive directory handling
                            ...
                        )
                    }
                })
            ]
        )
    ])
```

### Context Path Refiners

Convert strings to paths with validation:

```typescript
import * as r_path from "pareto-resources/dist/implementation/manual/refiners/path_unrestricted/text"

const path = r_path.from_text(
    "/path/to/directory",
    ($) => abort(['invalid path', $]),
    {}
)
```

### Command Composition

Chain multiple commands safely:

```typescript
pt.command_procedure(($d, $s, $q, $c) => [
    $c['make directory'].execute(
        outputDir,
        ($) => ['mkdir', $]
    ),
    $c.copy.execute(
        { 'source': sourceDir, 'destination': outputDir },
        ($) => ['copy', $]
    ),
    $c['write file'].execute(
        { 'path': configPath, 'data': configData },
        ($) => ['write config', $]
    )
])
```

## API Reference

### Commands

```typescript
namespace commands {
    copy: Command<Error, Parameters>
    execute_any_command_executable: Command<Error, Parameters>
    execute_command_executable: Command<Error, Parameters>
    execute_smelly_command_executable: Command<Error, Parameters>
    log: Command<null, Parameters>
    log_error: Command<null, Parameters>
    make_directory: Command<Error, Parameters>
    remove: Command<Error, Parameters>
    write_directory_content: Command<Error, Parameters>
    write_file: Command<Error, Parameters>
    write_to_stderr: Command<null, Parameters>
    write_to_stdout: Command<null, Parameters>
}
```

### Queries

```typescript
namespace queries {
    execute_any_query_executable: Query<Result, Error, Parameters>
    execute_query_executable: Query<Result, Error, Parameters>
    get_instream_data: Query<Result, null, Parameters>
    read_directory: Query<Result, Error, Parameters>
    read_directory_content: Query<Result, Error, Parameters>
    read_directory_structure: Query<Result, Error, Parameters>
    read_file: Query<Result, Error, Parameters>
    stat: Query<Result, Error, Parameters>
}
```

## Contributing

Pareto Resources is part of the Pareto eco system. When contributing:

1. Maintain functional programming principles
2. Ensure comprehensive error handling
3. Keep platform-specific code in implementations
4. Add transformers for error formatting
5. Update documentation for new operations

## License

Apache-2.0

## Dependencies

- **liana-core**: Core Liana functionality
- **pareto-fountain-pen**: Error message formatting

## Related Packages

- **pareto-host-nodejs**: Node.js implementation of resource interfaces
- **pareto-core**: Core functional programming utilities
- **pareto-fountain-pen**: Text generation and formatting
- **pareto-liana**: Schema-based code generation

## Links

- [Pareto](https://github.com/corno/pareto)
- [Issues](https://github.com/corno/pareto-resources/issues)
